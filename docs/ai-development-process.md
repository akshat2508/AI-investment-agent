# AI-Assisted Development Process

## Overview

This project was intentionally developed using AI throughout the software engineering lifecycle, in accordance with the assignment guidelines.

Rather than using AI solely for code generation, it was integrated as an engineering partner to assist with research, architecture planning, design reviews, implementation discussions, debugging, and documentation.

The objective was to leverage AI to improve engineering decisions while maintaining full ownership of the system design and implementation.

The complete development conversation is included in:

```
llm-transcripts/
├── README.md
└── AI-Investment-Agent-Development.pdf
```

---

# Development Timeline

The project evolved through several distinct phases.

```
Research

↓

Architecture Planning

↓

Backend Development

↓

LangGraph Integration

↓

Frontend Development

↓

Real-Time Execution

↓

UI Redesign

↓

Documentation

↓

Final Submission
```

Each phase built upon the previous one through continuous iteration and refinement.

---

# Phase 1 — Research & Planning

The project began by understanding the assignment requirements and identifying an architecture capable of supporting an AI-native investment research workflow.

During this phase, AI was primarily used for:

- Exploring technology options.
- Evaluating workflow orchestration frameworks.
- Comparing frontend architectures.
- Discussing scalable backend designs.
- Defining the overall product vision.

The outcome of this phase was the decision to build the system around **LangGraph**, React, Express, and Google Gemini.

---

# Phase 2 — Backend Architecture

Once the architecture was finalized, development focused on building the research pipeline.

AI discussions during this phase included:

- LangGraph workflow design.
- Node responsibilities.
- Service-layer organization.
- Prompt engineering.
- Structured JSON generation.
- Error handling strategies.

The research workflow was divided into four independent stages:

```
Company Profile

↓

Financial Analysis

↓

Latest News

↓

Investment Analysis
```

This modular approach simplified debugging and future extensibility.

---

# Phase 3 — Frontend Development

After the backend was operational, attention shifted to the user interface.

The initial implementation focused on presenting research results through a clean dashboard.

During development, AI assisted with:

- Component organization.
- State management discussions.
- Dashboard layout.
- Timeline implementation.
- Report presentation.

The application gradually evolved from a traditional dashboard into an AI-native research workspace.

---

# Phase 4 — Real-Time Execution

One of the major enhancements introduced during development was the ability to visualize the AI investigation in real time.

This involved:

- Instrumenting LangGraph nodes.
- Emitting execution events.
- Streaming updates through Server-Sent Events.
- Rendering a live execution timeline.

Instead of waiting for a single response, users can observe each research stage as it completes.

This became one of the defining characteristics of the project.

---

# Phase 5 — Product & UX Review

Once the core functionality was complete, the focus shifted from implementation to user experience.

AI was used as a design reviewer to evaluate:

- Information hierarchy.
- AI-native interaction patterns.
- Trust and explainability.
- Progressive disclosure.
- Workflow visualization.
- Overall product experience.

These discussions resulted in several refinements that emphasized the AI investigation rather than simply presenting financial data.

---

# Phase 6 — Documentation & Final Polish

The final stage focused on preparing the project for submission.

Activities included:

- Improving project documentation.
- Refining architecture diagrams.
- Capturing screenshots.
- Organizing AI development transcripts.
- Reviewing engineering decisions.
- Preparing the final repository structure.

This phase ensured the submission accurately reflected both the implementation and the development process.

---

# Role of AI Throughout Development

AI was used across multiple engineering activities, including:

- Technology research.
- Architecture planning.
- Workflow design.
- Product reviews.
- Prompt engineering.
- Debugging.
- UI/UX discussions.
- Documentation refinement.

Implementation decisions, integration, testing, and final validation were performed manually throughout development.

---

# Key Takeaways

Using AI as an engineering partner significantly accelerated exploration and iteration while preserving developer ownership over the system.

Rather than replacing software engineering, AI served as a collaborative tool for:

- validating architectural ideas,
- evaluating trade-offs,
- refining implementation strategies,
- improving documentation,
- and challenging design decisions.

This approach resulted in a more structured, transparent, and thoughtfully designed application than would have been achieved through code generation alone.

---

# Conclusion

The AI Investment Research Agent was developed through an iterative engineering process where AI supported decision-making across every major stage of development.

The accompanying transcript documents this journey from initial planning through architecture discussions, implementation, debugging, UI redesign, and final project documentation.

Together, the source code, documentation, and transcript provide a complete record of how the application evolved into its final form.