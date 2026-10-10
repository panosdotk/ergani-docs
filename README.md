# ΕΡΓΑΝΗ Documentation — v0.4

Docusaurus knowledge base για ΕΡΓΑΝΗ II, ενημερωμένη με τους οδηγούς Φεβρουαρίου 2026.

## Πηγές

- `Ergani II_Short_Manual_13.02.2026.pdf` — Συνοπτικός Οδηγός, έκδοση 12.02.2026 (το εξώφυλλο αναφέρει τελευταία ενημέρωση 23/04/2025).
- `Ergani II_Extended_Manual_20.02.2026.pdf` — Οδηγός Εφαρμογής, έκδοση 20.02.2026.
- `Eniaios odigos orariou kartas ergasias 01 01 2024.pdf` — ιστορική τεχνική πηγή για Ψηφιακή Κάρτα / API.
- `Odigos Efarmogis ERGANI II nees diadikasies ekd_20 10 2022_1.pdf` — ιστορική πηγή για τις διαδικασίες του 2022.

## Περιεχόμενο v0.4

- Επισκόπηση νέων ροών Έναρξης / Μεταβολής / Λήξης Εργασίας.
- Μεταβατικές υποχρεώσεις που περιγράφονται στους οδηγούς 2026.
- Μηνιαία Εργασιακή Κατάσταση.
- Ενημερωμένες διευθύνσεις δοκιμαστικού και παραγωγικού API v2.
- Σύγκριση οδηγών 2022, 2024 και 2026.
- Αρχειακές μεταγραφές των νέων εγχειριδίων και snapshots εκδόσεων 2024/2022.

## Εκτέλεση τοπικά

```bash
npm install
npm run start
```

## Build

```bash
npm run build
npm run serve
```

## Cloudflare Workers (static assets)

Το `wrangler.jsonc` δηλώνει τον φάκελο `build` ως static assets. Το build command είναι `npm run build`. Στο Cloudflare, η εντολή deploy πρέπει να αντιστοιχεί στη ρύθμιση Workers/Assets που έχει επιλεγεί.

## Versioning

- Current / latest: 2026
- Historical: 2024
- Historical: 2022

Το `docs/` είναι η έκδοση 2026. Τα `versioned_docs/version-2024/` και `versioned_docs/version-2022/` διατηρούν παλαιότερες εκδόσεις.

## Σημαντικό — πνευματικά δικαιώματα

Οι οδηγοί του Υπουργείου περιλαμβάνουν περιορισμούς εμπορικής αντιγραφής/διανομής. Επιτρέπουν μη κερδοσκοπική, εκπαιδευτική ή ερευνητική χρήση με αναφορά πηγής και διατήρηση της δήλωσης δικαιωμάτων. Για εμπορική χρήση των PDF ή εκτεταμένων μεταγραφών απαιτείται επικοινωνία/άδεια από το Υπουργείο. Πριν κάνετε public το repository ή τα πλήρη κείμενα, ελέγξτε ότι η χρήση σας καλύπτεται.

## Επίσημα περιβάλλοντα

- Trial: https://trialv2eservices.yeka.gr/
- Trial REST API: https://trialv2eservices.yeka.gr/WebservicesAPI/Api/
- Trial REST API UI: https://trialv2eservices.yeka.gr/WebservicesAPIUI/
- Production: https://eservices.yeka.gr/
- Production REST API: https://eservices.yeka.gr/WebservicesAPI/Api/
- Production REST API UI: https://eservices.yeka.gr/WebservicesAPIUI/

Οι διευθύνσεις και τα τεχνικά payloads πρέπει να επιβεβαιώνονται έναντι των τρεχουσών επίσημων ανακοινώσεων και των συνοδευτικών JSON examples.
