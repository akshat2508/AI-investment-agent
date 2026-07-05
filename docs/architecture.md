# System Architecture

## Overview

The AI Investment Research Agent follows a modular client-server architecture designed around an AI workflow rather than a traditional request-response application.

The frontend provides an AI-native research workspace that visualizes the investigation process, while the backend orchestrates a structured research pipeline using LangGraph.

Instead of relying on a single LLM prompt, the system decomposes the investment analysis into multiple independent stages. Each stage performs a dedicated responsibility before passing structured data to the next stage, resulting in a transparent and explainable research process.

---

# High-Level Architecture

```
                        +---------------------------+
                        |      React Frontend       |
                        | AI Research Workspace UI  |
                        +------------+--------------+
                                     |
                          HTTP Request / Response
                                     |
                                     ▼
                        +---------------------------+
                        |     Express Backend       |
                        |    REST API Controller    |
                        +------------+--------------+
                                     |
                                     ▼
                        +---------------------------+
                        |     Research Service      |
                        +------------+--------------+
                                     |
                                     ▼
                        +---------------------------+
                        |      LangGraph Engine     |
                        +------------+--------------+
                                     |
        +--------------+-------------+-------------+--------------+
        |              |                           |              |
        ▼              ▼                           ▼              ▼
 Company Node    Market Node                 News Node     Gemini Node
        |              |                           |              |
        +--------------+-------------+-------------+--------------+
                                     |
                                     ▼
                          Structured Investment Report
                                     |
                                     ▼
                            React Dashboard Updates
```

---

# System Components

The application is divided into two major layers.

## Frontend

The frontend is responsible for presenting the AI investigation and updating the interface as the research progresses.

Main responsibilities include:

- User interaction
- Search interface
- Live execution visualization
- Investment report presentation
- Exporting reports
- Error handling

The frontend does not perform any business logic.

Its responsibility is to consume backend APIs and visualize the research process.

---

## Backend

The backend acts as the orchestration layer.

Responsibilities include:

- Receiving research requests
- Managing the LangGraph workflow
- Fetching external data
- Executing AI analysis
- Streaming execution updates
- Returning structured responses

Business logic is intentionally isolated from the frontend.

---

# LangGraph Workflow

The backend uses LangGraph to coordinate the complete investment research pipeline.

```
START

↓

Company Profile

↓

Financial Analysis

↓

Latest News

↓

Investment Analysis

↓

END
```

Each node performs a single responsibility.

---

## Company Node

Purpose

Retrieve the company's public profile.

Outputs include:

- Name
- Symbol
- Industry
- Sector
- Business Summary
- Employees
- Headquarters

---

## Market Node

Purpose

Collect financial metrics.

Outputs include:

- Market Cap
- Current Price
- EPS
- P/E Ratio
- 52 Week High
- 52 Week Low
- Exchange
- Currency

---

## News Node

Purpose

Collect recent news articles related to the company.

The collected articles become additional context for the AI recommendation.

---

## Analysis Node

Purpose

Generate the final investment report.

Gemini receives

- Company Profile
- Financial Metrics
- News

and produces

- Executive Summary
- Investment Thesis
- SWOT Analysis
- Key Risks
- Recommendation
- Confidence Score

---

# Request Lifecycle

The following diagram illustrates a complete research request.

```
User

↓

Search Company

↓

React

↓

POST /api/research

↓

Research Controller

↓

Research Service

↓

LangGraph

↓

Company Node

↓

Market Node

↓

News Node

↓

Gemini

↓

Investment Report

↓

Frontend Dashboard
```

---

# Real-Time Execution Pipeline

One of the primary goals of the project was making AI execution transparent.

Every LangGraph node emits execution events during runtime.

```
LangGraph Node

↓

Timeline Event

↓

EventEmitter

↓

SSE Endpoint

↓

React Hook

↓

Execution Timeline
```

This enables users to observe the progress of the AI investigation instead of waiting for a single response.

---

# Folder Organization

```
client/

components/
hooks/
pages/
services/
utils/

---------------------

server/

agents/
controllers/
events/
prompts/
routes/
services/
tools/
utils/
```

### Frontend

- **components/** – reusable UI components.
- **hooks/** – custom React hooks.
- **pages/** – application pages.
- **services/** – API communication.
- **utils/** – helper utilities.

### Backend

- **agents/** – LangGraph workflow definition.
- **controllers/** – HTTP request handling.
- **services/** – business logic.
- **tools/** – external API integrations.
- **events/** – Server-Sent Event management.
- **routes/** – API endpoints.
- **utils/** – shared helper functions.

---

# Design Principles

The architecture was guided by the following principles.

### Separation of Concerns

Each module performs a single responsibility.

---

### Explainability

The AI workflow is visible through live execution updates.

---

### Modularity

Every research stage is implemented as an independent LangGraph node.

---

### Extensibility

Additional research nodes (technical indicators, SEC filings, analyst ratings, etc.) can be introduced without changing the existing workflow.

---

### Scalability

The current sequential workflow provides a strong foundation for future enhancements such as:

- Parallel node execution
- Multi-agent collaboration
- Portfolio analysis
- Historical recommendation storage
- User authentication
- Retrieval-Augmented Generation (RAG)

---

# Architecture Summary

The system was intentionally designed as an AI workflow rather than a conventional CRUD application. By separating data collection, reasoning, and presentation into independent layers, the architecture remains modular, transparent, and extensible.

This approach makes it straightforward to introduce additional research stages or AI agents in future iterations while preserving the overall workflow and user experience.