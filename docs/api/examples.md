---
id: examples
title: Παραδείγματα API
sidebar_position: 7
---

# Παραδείγματα API

Η documentation βάση πρέπει να κρατά τα examples **versioned**.

## Προτεινόμενη μορφή

### Request

```http
POST /WebservicesAPI/Api/Documents/WRKCardSE
Authorization: Bearer <ACCESS_TOKEN>
Content-Type: application/json
```

### Body

```json
{
  "Cards": {
    "Card": []
  }
}
```

### Response

Το documentation πρέπει να διατηρεί το πραγματικό response example από την αντίστοιχη έκδοση του οδηγού.

:::warning
Δεν προστίθενται εδώ μη τεκμηριωμένα status codes ή νέα response schemas.
:::
