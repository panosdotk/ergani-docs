# ΕΡΓΑΝΗ Documentation — v0.2

Starter/knowledge-base project για online documentation πάνω στα δύο παρεχόμενα εγχειρίδια ΕΡΓΑΝΗ II.

## Περιεχόμενο

- ΕΡΓΑΝΗ II
- Ψηφιακή Οργάνωση Χρόνου
- Ωράριο / Άδειες / Υπερωρίες
- Τρέχουσα Κατάσταση
- Ψηφιακή Κάρτα
- Start / End
- Εκπρόθεσμες δηλώσεις
- Ευέλικτη προσέλευση
- Ημερολόγιο Πραγματικής Απασχόλησης
- CardScanner
- API / REST
- XML
- FAQ
- Reference / Glossary / Rules
- AI Q&A architecture

## Run locally

```bash
npm install
npm run start
```

## Build

```bash
npm run build
npm run serve
```

## Search

Το `docusaurus.config.js` έχει έτοιμο commented configuration για Algolia.

Η επίσημη Docusaurus documentation αναφέρει ότι το preset-classic υποστηρίζει Algolia DocSearch και contextual search ανά version/language.

Μετά το deployment:

1. κάνε public το site,
2. κάνε αίτηση για Algolia DocSearch ή χρησιμοποίησε δικό σου crawler,
3. συμπλήρωσε `appId`, `apiKey`, `indexName`,
4. ενεργοποίησε `contextualSearch`.

## Versioning

Το project είναι δομημένο ώστε να περάσει σε πραγματικό Docusaurus versioning όταν αποκτηθούν πλήρεις snapshots ανά έκδοση.

Παράδειγμα:

```bash
npm run docusaurus docs:version 2024
```

Η Docusaurus διατηρεί ξεχωριστό `versioned_docs/` snapshot και `versioned_sidebars/` για κάθε version.

## Source files

Τα αρχικά PDF παραμένουν στον φάκελο:

```text
sources/
```

## Production checklist

- [ ] Αλλαγή `url`
- [ ] Αλλαγή `organizationName`
- [ ] Αλλαγή GitHub URL
- [ ] Προσθήκη favicon
- [ ] Algolia search
- [ ] Custom domain
- [ ] HTTPS
- [ ] Analytics (αν απαιτείται)
- [ ] Πλήρης μεταφορά όλων των sections των PDF
- [ ] Νεότερες επίσημες εκδόσεις / ανακοινώσεις
- [ ] Review όλων των API examples
- [ ] AI retrieval + citations

## Σημαντικό

Το documentation δεν πρέπει να θεωρεί παλιό οδηγό ως σημερινό κανονιστικό κανόνα. Για κάθε σελίδα πρέπει να εμφανίζεται η έκδοση της πηγής.
