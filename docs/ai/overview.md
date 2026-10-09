---
id: overview
title: AI Q&A — Αρχιτεκτονική
sidebar_position: 1
---

# AI Q&A — Αρχιτεκτονική

Το επόμενο επίπεδο του project είναι να επιτρέπει φυσικές ερωτήσεις πάνω στη documentation.

## Παράδειγμα

```text
Χρήστης
  ↓
"Πόσα λεπτά έχω για να υποβάλω το χτύπημα;"
  ↓
Search / Retrieval
  ↓
Relevant documentation chunks
  ↓
LLM
  ↓
Απάντηση + πηγή + έκδοση
```

## Κανόνας ασφαλούς απάντησης

Το AI layer πρέπει:

1. να αναζητά πρώτα στα docs,
2. να απαντά μόνο από τα retrieved passages,
3. να αναφέρει έκδοση πηγής,
4. να λέει «δεν βρέθηκε» όταν δεν υπάρχει τεκμηρίωση,
5. να μην παρουσιάζει παλιά έκδοση ως τρέχον κανόνα.

## Docusaurus / Algolia

Το Docusaurus διαθέτει επίσημη ενσωμάτωση Algolia DocSearch και υποστηρίζει contextual search ανά έκδοση και γλώσσα. Η τρέχουσα τεκμηρίωση αναφέρει επίσης δυνατότητα Ask AI με δικό σου LLM provider. citeturn0search1

Αυτό σημαίνει ότι μπορεί να υλοποιηθεί AI Q&A χωρίς να ξαναχτιστεί το documentation frontend.
