# Design Decisions & Trade-offs

## Overview

The primary objective of this project was not simply to generate an investment recommendation, but to build a transparent and explainable AI research workflow.

Every major architectural decision was evaluated against four design principles:

- **Modularity** – Each responsibility should exist independently.
- **Explainability** – Users should understand how the recommendation was produced.
- **Extensibility** – New research capabilities should integrate with minimal changes.
- **User Trust** – The investigation process should be as visible as the final recommendation.

The following sections explain the rationale behind the key engineering decisions.

---

# Why LangGraph?

Instead of sending all collected information to a single prompt, the application models the research process as a structured workflow using LangGraph.

## Decision

Each stage of the investigation is implemented as an independent node.

```
Company Profile
      │
      ▼
Financial Analysis
      │
      ▼
Latest News
      │
      ▼
AI Investment Analysis
```

## Benefits

- Clear separation of responsibilities.
- Easier debugging and testing.
- Independent node development.
- Future support for conditional routing.
- Natural progression towards multi-agent systems.

## Trade-off

The workflow currently executes sequentially.

Although this increases overall execution time, it provides deterministic execution and simplifies debugging during development.

---

# Why Google Gemini?

The AI model is responsible for transforming structured research into a professional investment report.

## Decision

Google Gemini was selected because it provides:

- Strong reasoning capabilities.
- Reliable structured JSON responses.
- Fast inference suitable for interactive applications.
- Consistent formatting for reports.

## Benefits

- Executive summaries remain structured.
- SWOT analysis is consistently formatted.
- Investment recommendations follow a predictable schema.

## Trade-off

The quality of the recommendation depends on the quality of the collected financial and news data.

The LLM does not replace accurate research—it synthesizes it.

---

# Why Yahoo Finance?

The project requires accurate financial fundamentals for publicly listed companies.

## Decision

Yahoo Finance was selected because it provides:

- Company profiles.
- Financial metrics.
- Market capitalization.
- EPS.
- Valuation ratios.
- Stock pricing information.

## Benefits

- Simple integration.
- Reliable public data.
- Sufficient coverage for an MVP.

## Trade-off

Institutional-grade market data providers offer richer datasets but require commercial licenses and additional integration complexity.

---

# Why Server-Sent Events (SSE)?

The AI workflow executes over several seconds while multiple research stages complete.

Instead of showing a generic loading spinner, the application streams execution updates to the frontend.

## Decision

Each LangGraph node emits lifecycle events:

- Running
- Completed
- Execution duration

These events are streamed using Server-Sent Events.

## Benefits

- Lightweight implementation.
- One-way communication perfectly matches the application's requirements.
- Improves perceived performance.
- Makes AI execution transparent.

## Trade-off

SSE supports only server-to-client communication.

This is acceptable because the client never needs to communicate continuously during workflow execution.

---

# Why a Modular Service Layer?

The backend separates orchestration from implementation.

```
Controller

↓

Research Service

↓

LangGraph

↓

Individual Services

↓

External APIs
```

Each service has a single responsibility.

For example:

- Company Service
- Market Service
- News Service
- Gemini Service

## Benefits

- Easier testing.
- Improved maintainability.
- Better code reuse.
- Simpler future integrations.

---

# Why an AI-Native User Experience?

Traditional financial dashboards focus on presenting data after analysis.

This project instead exposes the investigation process.

The interface was intentionally designed around the following sequence:

```
Question

↓

Investigation

↓

Evidence

↓

Reasoning

↓

Recommendation
```

rather than:

```
Charts

↓

Tables

↓

Recommendation
```

This approach improves user trust by making the AI's workflow visible.

---

# Why Real-Time Execution Visualization?

The recommendation alone does not communicate confidence.

Showing the investigation process helps users understand:

- what the AI is doing,
- what information has been collected,
- and when the recommendation becomes available.

This shifts the application from a traditional dashboard toward an AI workspace.

---

# Trade-offs

Several features were intentionally excluded to keep the project focused and achievable within the assignment timeline.

## Included

- LangGraph workflow orchestration
- Modular service architecture
- AI-generated investment reports
- Real-time execution timeline
- Exportable reports
- Modern AI workspace

## Deferred

- User authentication
- Persistent database
- Portfolio management
- Multi-agent collaboration
- Parallel workflow execution
- Historical report storage
- Technical indicator analysis
- Company comparison
- RAG over SEC filings and earnings reports

These capabilities can be added incrementally without requiring significant architectural changes.

---

# Future Architectural Direction

The current architecture provides a foundation for evolving the application into a more comprehensive investment research platform.

Potential enhancements include:

- Multi-agent research teams.
- Parallel LangGraph execution.
- Retrieval-Augmented Generation (RAG).
- Portfolio-level analysis.
- Historical recommendation tracking.
- Live market monitoring.
- User workspaces and saved investigations.

The existing modular design was intentionally chosen to support these future extensions while minimizing changes to the current workflow.

---

# Conclusion

Every architectural decision in this project was driven by a single principle:

> **Expose the AI's investigation, not just its conclusion.**

Rather than functioning as a simple wrapper around an LLM, the application decomposes research into transparent, explainable stages that users can observe in real time.

This design improves maintainability, encourages future extensibility, and most importantly, helps build user trust in the generated investment recommendations.