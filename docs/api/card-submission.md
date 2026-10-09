---
id: card-submission
title: API — Υποβολή Κάρτας
sidebar_position: 4
---

# API — Υποβολή Κάρτας

Ο οδηγός δίνει παράδειγμα:

```text
Route: Documents/WRKCardSE
Method: POST
```

Η διαδικασία αφορά δήλωση προσέλευσης ή αποχώρησης εργαζομένου.

## Ενδεικτική δομή

```json
{
  "Cards": {
    "Card": [
      {
        "f_afm_ergodoti": "…",
        "f_aa": "0",
        "f_comments": "…",
        "Details": {
          "CardDetails": [
            {
              "f_afm": "…",
              "f_eponymo": "…",
              "f_onoma": "…",
              "f_type": "0",
              "f_reference_date": "YYYY-MM-DD",
              "f_date": "YYYY-MM-DDTHH:mm:ss",
              "f_aitiologia": null
            }
          ]
        }
      }
    ]
  }
}
```

:::note
Το παραπάνω είναι αναπαράσταση της δομής του παραδείγματος του οδηγού και όχι γενικευμένο schema. Τα πραγματικά υποχρεωτικά/προαιρετικά πεδία πρέπει να ελέγχονται ανά έκδοση.
:::
