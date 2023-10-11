**Operacije u C++**

**Aritmetičke operacije u C++**

Aritmetičke operacije su osnovne matematičke operacije koje omogućavaju manipulaciju brojevima u programskom jeziku C++. Ove operacije su ključne za izvođenje različitih matematičkih i numeričkih zadatka u vašim programima. Ovde ćemo istražiti osnovne aritmetičke operacije i pružiti primere njihove upotrebe. 

**Sabiranje (+)** 

Operacija sabiranja omogućava dodavanje dva broja zajedno. Evo kako to izgleda u C++:

int a = 5;

int b = 3;

int sum = a + b; // sum će biti 8

**Oduzimanje (-)**

Operacija oduzimanja omogućava oduzimanje jednog broja od drugog. Evo kako to izgleda u C++:

int a = 10;

int b = 4;

int difference = a - b; // difference će biti 6

**Množenje (\*)**

Operacija množenja omogućava množenje dva broja. Evo kako to izgleda u C++:

int a = 7;

int b = 2;

int product = a \* b; // product će biti 14

**Deljenje (/)**

Operacija deljenja omogućava deljenje jednog broja sa drugim. Evo kako to izgleda u C++:

int a = 20;

int b = 5;

int quotient = a / b; // quotient će biti 4

**Ostatak pri deljenju (%)**

Operacija "ostatak pri deljenju" omogućava pronalaženje ostatka pri deljenju jednog broja sa drugim. Evo kako to izgleda u C++:

int a = 17;

int b = 5;

int remainder = a % b; // remainder će biti 2

**Operatori inkrementacije i dekrementacije**

C++ takođe podržava inkrementaciju i dekrementaciju, što omogućava povećanje ili smanjenje vrednosti promenljive za 1.

int x = 5;

x++; // x će sada biti 6 (inkrementacija)

x--; // x će sada biti 5 (dekrementacija)

Aritmetičke operacije se često koriste u različitim situacijama, bilo da se radi o računanju rezultata, upravljanju brojevima ili postizanju određenih numeričkih ciljeva u vašem programiranju. Vredno je razumeti kako se ove operacije koriste i kako ih primeniti u praksi.

**Logičke Operacije i Uslovni Operatori u C++**

Logičke operacije i uslovni operatori su ključni elementi programiranja koji omogućavaju donošenje odluka i upravljanje tokom izvršavanja programa. U programskom jeziku C++, postoji nekoliko logičkih operacija i uslovnih operatora koji omogućavaju programerima da izraze i implementiraju složene logičke uslove. Evo pregleda ovih koncepta:

**Logički Operatori**

Logički operatori se koriste za povezivanje i analizu logičkih izraza. U C++-u, najčešće korišćeni logički operatori uključuju: 

AND (&&): Operator "i" vraća true samo ako su oba uslova tačna.

if (uslov1 && uslov2) {

`    `// Izvršava se ako su oba uslova tačna

}

OR (||): Operator "ili" vraća true ako je bilo koji od uslova tačan.

if (uslov1 || uslov2) {

`    `// Izvršava se ako je bilo koji od uslova tačan

}

NOT (!): Operator "ne" vraća obrnutu vrednost logičkog uslova.

if (!uslov1) {

`    `// Izvršava se ako je uslov1 netačan

}

Uslovni Operatori

Uslovni operatori omogućavaju izbor između različitih vrednosti ili naredbi na osnovu zadovoljenja određenog uslova. Najčešće korišćeni uslovni operator u C++-u je ternarni operator (uslovni operator):

Ternarni Operator (?:): Ovaj operator omogućava odabir između dve vrednosti na osnovu tačnosti određenog uslova.

int rezultat = (uslov) ? vrednost1 : vrednost2;

Na primer, ako je uslov tačan, rezultat će biti postavljen na vrednost1, inače će biti postavljen na vrednost2.

Upotreba logičkih operacija i uslovnih operatora

Logičke operacije i uslovni operatori su od suštinskog značaja za kontrolu toka programa. Koriste se za postavljanje uslova, donošenje odluka, upravljanje petljama i mnoge druge aspekte programiranja. Na primer:

int broj = 10;

if (broj > 5 && broj < 15) {

`    `// Izvršava se ako je broj između 5 i 15

}

bool isTacno = (broj > 20) ? true : false;

Logičke operacije i uslovni operatori omogućavaju programerima da napišu fleksibilne i moćne programe koji se prilagođavaju različitim situacijama i zahtevima. Ovi koncepti su ključni za efikasno upravljanje tokom izvršavanja programa u C++.

Operacije nad Nizovima i Stringovima u C++

Operacije nad nizovima i stringovima su neizostavan deo programiranja u C++. Nizovi i stringovi često čine osnovne strukture za čuvanje i manipulaciju podacima u mnogim aplikacijama. U nastavku, razmotrićemo osnovne operacije koje omogućavaju rad s nizovima i stringovima u C++.

Rad s Nizovima

Nizovi su kolekcije elemenata istog tipa podataka. Operacije nad nizovima uključuju pristupanje elementima, dodavanje i uklanjanje elemenata, pretragu i sortiranje. Evo nekoliko osnovnih operacija nad nizovima:

Pristupanje elementima niza:

Za pristupanje elementima niza, koristite indeksiranje. Na primer, da biste pristupili elementu niza na poziciji i, koristite niz[i].

Dodavanje elemenata nizu:

Da biste dodali element na kraj niza, koristite funkciju push\_back() (u slučaju vektora) ili pravilno upravljajte indeksima.

Uklanjanje elemenata iz niza:

Da biste uklonili element iz niza, možete koristiti funkcije kao što su pop\_back() (za vektore) ili ručno upravljati indeksima.

Pretraga u nizu:

Da biste pronašli određeni element u nizu, možete koristiti petlje i uslovne izraze.

Sortiranje niza:

C++ nudi funkciju std::sort() koja omogućava sortiranje niza.

Rad s Stringovima

Stringovi predstavljaju sekvence znakova i često se koriste za manipulaciju tekstualnim podacima. C++ nudi brojne operacije za rad s stringovima:

Spajanje stringova:

Da biste spojili dva stringa, možete koristiti operator + ili funkciju append().












Funkcija substr() omogućava vam da izvadite deo stringa.

Pronalaženje podstringa:

Možete koristiti funkciju find() da pronađete poziciju podstringa unutar glavnog stringa.

Zamena delova stringa:

Funkcija replace() omogućava zamenu dela stringa drugim stringom.

Konverzija između stringa i C-style nizova:

Možete koristiti funkcije c\_str() i data() za konverziju stringa u C-style niz i obrnuto.

Rad sa karakterima u stringu:

Pristupanje pojedinim karakterima u stringu vrši se pomoću indeksiranja.

Operacije nad nizovima i stringovima su ključne za rad s tekstom i kolekcijama podataka. Razumevanje ovih operacija omogućava vam da efikasno manipulišete podacima u C++ i izgradite različite vrste aplikacija koje se bave tekstom i kolekcijama podataka. 




