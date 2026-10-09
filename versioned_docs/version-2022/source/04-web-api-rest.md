---
id: source-20.10.2022-4
title: Web API (REST)
sidebar_position: 4
---

# Web API (REST)

> **Πηγή:** Επίσημος οδηγός ΕΡΓΑΝΗ, έκδοση 20.10.2022.
>
> Αρχειακή μεταγραφή του αντίστοιχου τμήματος του παρεχόμενου PDF.

## Κείμενο πηγής

4. Χρήση Υπηρεσιών Διαλειτουργικότητας - Web API (REST)
Εργάνη Trial endpoint: https://trialeservices.yeka.gr/WebServicesApi/api/
   4.1. Ergani Web API για εργοδότες – Τεκμηρίωση
      4.1.1. Authentication
Route: Authentication, Method: Post
Πριν από κάθε κλήση στο ΑPI απαιτείται να γίνει μια κλήση ώστε να παραχθεί
ένα JSON Web Token (JWT). Το JWT που θα παραχθεί χρησιμοποιείται σε κάθε
επόμενη κλήση στο Header
Authorization: Bearer «Access Token» .
Παράδειγμα Request του Authentication.
Header
Content-Type: application/json
Body
\{
  "Username": "myusername",
  "Password": "mypassword",
  "Usertype": "02"
\}
Οι τιμές της παραμέτρου Usertype είναι οι εξής:
01 - Εξωτερικός
02 - Σύνδεση με κωδικούς "ΕΡΓΑΝΗ",
03 - Σύνδεση με κωδικούς για Οικοδομοτεχνικά Έργα από ΕΦΚΑ
Παράδειγμα Response του Authentication.
Body
\{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW
1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjo
iMDIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW
50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IlBhcmFydGhtYSIsImh0dHA6Ly9zY
2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvc
HJpbWFyeXNpZCI6IjQ5NjgwIiwiZXhwIjoxNjUxNTcxMDE3fQ.pt0UEpYD98uLPkvl
ZkgUbVBxemhCzG4pQRxxthWE4EQ",
  "accessTokenExpired": 10800,
  "refreshToken": "pnFB5Vdno3pd/YgkzBjDdn+Vxe29b5I+eTLSWD8cbWk=",
  "refreshTokenExpired": "2022-05-10T09:43:37.5388855+03:00"
\}

accessToken : Χρησιμοποιείται στο Header όπως αναφέρθηκε παραπάνω για την
επόμενες κλήσης
accessTokenExpired : Λήξη του access token σε δευτερόλεπτα. Στην περίπτωση λήξης
επιστρέφεται στο Header η τιμή api-token-expired: true
refreshToken : Χρησιμοποιείται για ανανέωση του access token( περιγράφεται
παρακάτω)
refreshTokenExpired : Λήξη του refresh token
      4.1.2. RefreshAuthentication
Route: Authentication/Refresh, Method: Post
Το RefreshAuthentication είναι υπεύθυνο για την ανανέωση του access token
στην περίπτωση που δεν έχει επέλθει ακόμα λήξη του refresh token.
Παράδειγμα Request του RefreshAuthentication.
Header
Content-Type: application/json
Body
\{
   "AccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZ
W1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1l
IjoiMDIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZ
W50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IlBhcmFydGhtYSIsImh0dHA6Ly9z
Y2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMv
cHJpbWFyeXNpZCI6IjQ5NjgwIiwiZXhwIjoxNjUwNTM4NjUwfQ.xH8Q7CEDyMNw
yDjElXPaP-xf3IF9uRzX4ZNqoy_Zzdk",
   "RefreshToken": "43TD1+HMkakFt+uKDQoN+mKxttgHvSxN9S8AI+5e4kE="
\}
Παράδειγμα Response του RefreshAuthentication. (όπως του Authentication)
Body
\{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW
1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjo
iMDIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW
50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IlBhcmFydGhtYSIsImh0dHA6Ly9zY
2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvc
HJpbWFyeXNpZCI6IjQ5NjgwIiwiZXhwIjoxNjUxNjIxMDY0fQ.2p5MIVSYj_Ky0OC4
8f1MP-sPUo_SCwO3GGJH6hFtH3U",
  "accessTokenExpired": 10800,
  "refreshToken": "1IgdTXb1Z9YFiFP6udMzsSK3hgZe4MvYCG254RDK3aw=",
  "refreshTokenExpired": "2022-05-10T23:37:44.6725426+03:00"
\}

4.1.3. Logout
Route: Authentication/Logout, Method: Post
To Logout είναι υπεύθυνο για την διαγραφή του refresh token.
Παράδειγμα Request του Logout.
Header
Content-Type: application/json
Body
"43TD1+HMkakFt+uKDQoN+mKxttgHvSxN9S8AI+5e4kE="
Παράδειγμα Response του Logout
Http Status Code: 200 OK
      4.1.4. Submissions
Route: Lookup/Submissions, Method: Get
To Submissions είναι υπεύθυνο για την ανάκτηση όλων των ενεργών υποβολών.
Δεν απαιτεί καμία παράμετρο στο Request.
Παράδειγμα Response του Submissions.
Body
[
  \{
     "id": 82,
     "code": "WRKCardSE",
     "description": "Δήλωση έναρξης/λήξης εργασίας εργαζομένων"
  \},
  \{
     "id": 79,
     "code": "WKChgWK",
     "description": "Δήλωση Μεταβολής Στοιχείων Εργασιακής Σχέσης - Οργάνωση
Χρόνου Εργασίας"
  \},
  \{
     "id": 8,
     "code": "E3",
     "description": "Ε3 ΕΝΙΑΙΟ ΕΝΤΥΠΟ ΑΝΑΓΓΕΛΙΑΣ ΠΡΟΣΛΗΨΗΣ"
  \},
  \{
     "id": 81,
     "code": "WTODaily",
     "description": "Οργάνωση Χρόνου Εργασίας - Μεταβαλλόμενο/Τροποποιούμενο
ανά Ημέρα"
  \},
  \{
     "id": 80,

"code": "WTOWeek",
        "description": "Οργάνωση Χρόνου Εργασίας - Σταθερό Εβδομαδιαίο"
    \}
]
      4.1.5. Documents
Route: Documents/(κωδικός ενεργής υποβολής), Method: Get
To Documents είναι υπεύθυνο για την ανάκτηση του σχήματος σε JSON format
μιας ενεργής υποβολής.
Παράδειγμα Request του Documents.
Κωδικός ενεργής υποβολής. Επιστρέφεται από το Lookup/Submissions API και
αναφέρεται στο πεδίο code
Παράδειγμα Response του Documents για «WRKCardSE».
Body
\{
  "Cards": \{
    "Card": [
      \{
         "f_afm_ergodoti": "f_afm_ergodoti",
         "f_aa": "f_aa",
         "f_comments": "f_comments",
         "Details": \{
            "CardDetails": [
              \{
                 "f_afm": "f_afm",
                 "f_eponymo": "f_eponymo",
                 "f_onoma": "f_onoma",
                 "f_type": "0",
                 "f_reference_date": "2022-05-13",
                 "f_date": "2022-05-13T09:21:37.4578278+03:00",
                 "f_aitiologia": "f_aitiologia"
              \},
              \{
                 "f_afm": "f_afm",
                 "f_eponymo": "f_eponymo",
                 "f_onoma": "f_onoma",
                 "f_type": "0",
                 "f_reference_date": "2022-05-13",
                 "f_date": "2022-05-13T09:21:37.4578278+03:00",
                 "f_aitiologia": "f_aitiologia"
              \}
            ]

\}
          \},
          \{
               "f_afm_ergodoti": "f_afm_ergodoti",
               "f_aa": "f_aa",
               "f_comments": "f_comments",
               "Details": \{
                  "CardDetails": [
                    \{
                       "f_afm": "f_afm",
                       "f_eponymo": "f_eponymo",
                       "f_onoma": "f_onoma",
                       "f_type": "0",
                       "f_reference_date": "2022-05-13",
                       "f_date": "2022-05-13T09:21:37.4578278+03:00",
                       "f_aitiologia": "f_aitiologia"
                    \},
                    \{
                       "f_afm": "f_afm",
                       "f_eponymo": "f_eponymo",
                       "f_onoma": "f_onoma",
                       "f_type": "0",
                       "f_reference_date": "2022-05-13",
                       "f_date": "2022-05-13T09:21:37.4578278+03:00",
                       "f_aitiologia": "f_aitiologia"
                    \}
                  ]
               \}
          \}
      ]
  \}
\}
Το αντίστοιχο JSON για κάθε ενεργή υποβολή επιστρέφεται από το API
Documents/(κωδικός ενεργής υποβολής) με μέθοδο Get.
      4.1.6. Documents (Νέα δήλωση)
Route: Documents/(κωδικός ενεργής υποβολής), Method: Post
To Documents είναι υπεύθυνο για την καταχώρηση μιας νέας υποβολής.
Παράδειγμα Request του Documents.
Κωδικός ενεργής υποβολής. Επιστρέφεται από το Lookup/Submissions API και
αναφέρεται στο πεδίο code
Body

\{
  "Cards": \{
    "Card": [
      \{
         "f_afm_ergodoti": "012345678",
         "f_aa": "0",
         "f_comments": "test from REST API",
         "Details": \{
            "CardDetails": [
              \{
                 "f_afm": "012345678","f_eponymo": "ΚΑΠΟΙΟΣ","f_onoma": "ΛΑΜ
ΠΡΟΣ","f_type": "0","f_reference_date": "2022-05-04","f_date": "2022-05-
04T01:10:00.7099109+03:00","f_aitiologia": null
              \}
            ]
         \}
      \}
    ]
  \}
\}
Παράδειγμα Response του Documents.
Στην περίπτωση επιτυχημένης κλήσης, το ΑPI επιστρέφει Http Status Code 200 OK και
τα στοιχεία της υποβολής.
Body
[
  \{
    "id": "92",
    "protocol": "ΕΥΣ92",
    "submitDate": "04/05/2022 01:13"
  \}
]
id : Κλειδί αποθήκευσης της υποβολής
protocol : Αριθμός πρωτοκόλλου
submitDate : Ημερομηνία Υποβολής
Στην περίπτωση αποτυχημένης κλήσης, το ΑPI επιστρέφει Http Status Code 400 Bad
Request
με το αντίστοιχο μήνυμα λάθους.
Body
\{
  "message": "Για το Παράρτημα: 0\\nΤο ΑΦΜ δεν αντιστοιχεί στον συνδεδεμένο εργοδ
ότη."

\}
      4.1.7. Documents (Διαδικασία διάθεσης υποβληθείσας δήλωσηςποβολής)
Route: Documents/(κωδικός ενεργής υποβολής) ?protocol=(αριθμός
πρωτοκόλλου)&submittedDate=(Ημ/νία Υποβολής yyyymmdd),
Method: Get
To Documents είναι υπεύθυνο για την ανάκτηση του εντύπου PDF μιας υποβληθείσας
υποβολής.
Το έντυπο επιστρέφεται σε μορφή Base64.
Παράδειγμα Request του Documents.
Κωδικός ενεργής υποβολής. Επιστρέφεται από το Lookup/Submissions API και
αναφέρεται στο πεδίο code
Αριθμός Πρωτοκόλλου. O αριθμός πρωτοκόλλου που επιστρέφεται κατά την
επιτυχημένη υποβολή μιας νέας υποβολής
Ημ/νία Υποβολής. Η ημ/νία υποβολής που επιστρέφεται κατά την επιτυχημένη υποβολή
μιας νέας υποβολής. Η μορφή της ημερομηνίας είναι yyyymmdd
       4.1.8. ServicesList
Route: WebServices/ServicesList, Method: Get
To ServicesList επιστρέφει όλα τα διαθέσιμα services των εργοδοτών, με τις
παραμέτρους τους.
Δεν απαιτείται καμία παράμετρος στο Request.
Παράδειγμα Request του ServicesList.
Body
[
  \{
    "name": "EX_BASE_01",
    "description": "ΣΤΟΙΧΕΙΑ ΕΡΓΟΔΟΤΗ",
    "parameters": []
  \},
  \{
    "name": "EX_BASE_02",
    "description": "ΣΤΟΙΧΕΙΑ ΠΑΡΑΡΤΗΜΑΤΩΝ",
    "parameters": []
  \}
]
name :To όνομα του Service.
Description : Προαιρετική περιγραφή του Service

Στην περίπτωση που υπάρχουν παράμετροι σε κάποιο service επιστρέφονται σαν Array
στο πεδίο parameters.
[
    \{
        "name": "EX_BASE_03",
        "description": "ΣΤΟΙΧΕΙΑ TOY SERVICE EX_BASE_03",
        "parameters": [
          \{
            "name": "Param1",
            "description": "Περιγραφή παραμέτρου 1",
            "isRequired": true,
            "type": "Int",
            "maxLength": 0
          \},
          \{
            "name": "Param2",
            "description": "Περιγραφή παραμέτρου 2",
            "isRequired": false,
            "type": "Int",
            "maxLength": 0
          \}
        ]
    \}
]
name : Όνομα παραμέτρου
description : Προαιρετική περιγραφή παραμέτρου
isRequired : True αν η παράμετρος είναι υποχρεωτική
type : Τύπος παραμέτρου.
Οι τιμές είναι
    •       Text = 1,
    •       Date = 2,
    •       Int = 3,
    •       Decimal = 4,
    •       ListString = 5,
    •       ListInt = 6,
    •       ListStringDate = 7,
    •       XML = 8
    •       MIME = 9
maxLength : Μέγιστο μήκος τιμής παραμέτρου αν ο τύπος είναι Text
            4.1.9. ExecuteService
Route: WebServices/ExecuteService, Method: Post
To ExecuteService API είναι υπεύθυνο για την εκτέλεση ενός service.

Παράδειγμα Request του ExecuteServices.
Header
Content-Type: application/json
Body
\{
  "ServiceCode": "SERVICE1",
  "Parameters":[
    \{
       "ParameterName":"Afm",
       "ParameterValue":"000000000"
    \}
  ]
\}
Απαιτείται το όνομα του Service και η συμπλήρωση των υποχρεωτικών παραμέτρων,
ενώ στην περίπτωση που δεν υπάρχουν παράμετροι το πεδίο Parameters συμπληρώνεται
με άδειο Array [].
Παράδειγμα Response του ExecuteServices.
Στην περίπτωση της επιτυχημένης κλήσης το ΑPI επιστρέφει Http Status Code 200 OK
και τα αντίστοιχα δεδομένα του service.
Body
\{
  "EX_BASE_01":\{
    "Ergodotis":\{
      "Afm":"012345678",
      "Eponimia":"ΑΝΩΝΥΜΗ ΒΙΟΜΗΧΑΝΙΚΗ Κ ΕΜΠΟΡΙΚΗ ΕΤΑΙΡΕΙΑ",
      "DiakritikosTitlos":"ΕΤΑΙΡΕΙΑ AE",
      "Ame":"0987654321"
    \}
  \}
\}
Στην περίπτωση αποτυχημένης κλήσης, το ΑPI επιστρέφει Http Status Code 400 Bad
Request
με το αντίστοιχο μήνυμα λάθους.
Body
\{
  "message": "Service Code is not authenticated to specific User"
\}

4.2. Παραδείγματα
       4.2.1. Υποβολή δήλωσης Κάρτας Εργασίας
Route: Documents/ WRKCardSE, Method: Post
Υποβάλλει δήλωση προσέλευσης ή αποχώρησης εργαζόμενου στην εργασία του
Παράδειγμα Request του Documents.
Body
\{
  "Cards": \{
    "Card": [
      \{
         "f_afm_ergodoti": "094187530",
         "f_aa": "0",
         "f_comments": "test from REST API",
         "Details": \{
            "CardDetails": [
              \{
                 "f_afm": "028233026","f_eponymo": "ΚΑΠΟΙΟΣ","f_onoma": "ΛΑΜ
ΠΡΟΣ","f_type": "0","f_reference_date": "2022-05-04","f_date": "2022-05-
04T01:10:00.7099109+03:00","f_aitiologia": null
              \}
            ]
         \}
      \}
    ]
  \}
\}
Το Array Card αναφέρετε σε λίστα εργοδοτών και περιλαμβάνει τα εξής στοιχεία.
f_afm_ergodoti : Α.Φ.Μ Εργοδότη (Για επαλήθευση)
f_aa :Α/Α Παραρτήματος
f_comments : Σχόλια
Το Array CardDetails αναφέρετε σε λίστα εργαζομένω και περιλαμβάνει τα εξής
στοιχεία.
f_afm : Α.Φ.Μ εργαζόμενου
f_eponymo: Επώνυμο εργαζόμενου
f_onoma : Όνομα εργαζόμενου
f_type : 0 Προσέλευση, 1 Αποχώρηση
f_reference_date : Ημερομηνία αναφοράς
f_date : Ημερομηνία Κίνησης

f_aitiologia : Κωδικός αιτιολογίας που συμπληρώνεται στην περίπτωση εκπρόθεσμης
υποβολής
Παράδειγμα Response του Documents.
Στην περίπτωση της επιτυχημένης κλήσης το ΑPI επιστρέφει Http Status Code 200 OK
και τα στοιχεία της υποβολής.
Body
[
  \{
    "id": "92",
    "protocol": "ΕΥΣ92",
    "submitDate": "04/05/2022 01:13"
  \}
]
id : Κλειδί αποθήκευσης της υποβολής
protocol : Αριθμός πρωτοκόλλου
submitDate : Ημερομηνία Υποβολής
Στην περίπτωση της μη επιτυχημένης κλήσης το ΑPI επιστρέφει Http Status Code 400
Bad Request
με το αντίστοιχο μήνυμα λάθους.
Body
\{
  "message": "Για το Παράρτημα: 0\\nΤο ΑΦΜ δεν αντιστοιχεί στον συνδεδεμένο εργοδ
ότη."
\}
