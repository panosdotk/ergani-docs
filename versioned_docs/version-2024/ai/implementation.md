---
id: implementation
title: AI Q&A — Πλάνο υλοποίησης
sidebar_position: 2
---

# AI Q&A — Πλάνο υλοποίησης

## Phase 1 — Search

- Public docs
- Sitemap
- Algolia index
- Contextual filtering by version

## Phase 2 — Retrieval

Αποθήκευση metadata:

```json
{
  "title": "Εκπρόθεσμη δήλωση Κάρτας",
  "version": "2024",
  "source": "guide-2024",
  "section": "FAQ",
  "url": "/docs/digital-card/late-submission"
}
```

## Phase 3 — AI

Το AI endpoint λαμβάνει:

```text
question
+
top relevant documents
+
source metadata
```

και επιστρέφει:

```json
{
  "answer": "...",
  "sources": [
    {
      "title": "...",
      "version": "2024",
      "url": "..."
    }
  ]
}
```

## Phase 4 — Guardrails

- No source → no definitive answer
- Always show source version
- Prefer newer source when the question is about current rules
- Never silently merge conflicting versions
