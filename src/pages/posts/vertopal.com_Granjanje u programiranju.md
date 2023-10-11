---
title: "Grananje u C++"
pubDate: "2020-01-28"
slug: "how-to-compare-dates-in-javascript"
description: "Za rješavanje većine zadataka potrebne su složenije programske strukture
kod kojih redoslijed izvršavanja naredbi zavisi od vrijednostima
podataka koji se obrađuju.
"
hero: "/images/javascript-logo-banner.jpg"
tags: ["javascript"]
layout: "../../layouts/BlogPostLayout.astro"
---

# **Granjanje u programiranju**

Za rješavanje većine zadataka potrebne su složenije programske strukture
kod kojih redoslijed izvršavanja naredbi zavisi od vrijednostima
podataka koji se obrađuju.

Grananje je programska struktura koja omogućava različit tok programa,
zavisno od rezultata postavljenog uslova.

To je važna struktura bez koje bi mogućnost rešavanja zadataka pomoću
računara bila vrlo ograničena.

Dijelovi programa koji se uvjetno izvode, grupiraju se u skupine ili
blokove naredaba.

Svaki se blok naredbi u ovoj inačici pseudo jezika omeđuje parom
otvorena i zatvorena vitičasta zagrada ({ }).

Ako blok naredbi ima samo jednu naredbu zagrade se mogu izostaviti.
Blokovi naredbi se obično pišu uvučeno zbog preglednosti.

# **Vrste granjanja**

Vrste granjanja su sljedeće:

- **If-Else**

  - If-else izjava u programiranju je uvjetna izjava koja izvodi
    > različite skupove izjava ovisno o tome je li izraz istinit ili
    > lažan.

- **Switch-Case:**

  - Switch-case izjava omogućava programu da izvrši jedan blok koda
    > među mnogim alternativama.

- **Petlje:**

  - Petlje (for, while, do-while) su vrste grananja koje omogućuju
    > ponavljanje određenog bloka koda dok je određeni uvjet
    > istinit.

- **Skokovi:**

  - Skokovi (break, continue, goto) su vrste grananja koje omogućuju
    > preskakanje dijelova koda ili prijelaz na drugi dio koda.

Granjanje je ključni dio strukturiranog programiranja. Omogućava
programerima da pišu kod koji može donositi odluke i obavljati različite
zadatke na temelju tih odluka.

Bez grananja, programi bi bili znatno manje fleksibilni i moćni.

# **IF-ELSE**

If-else izjava u programiranju je uvjetna izjava koja izvodi različite
skupove izjava ovisno o tome je li izraz istinit ili lažan.

Sintaksa if-else izjave je sljedeća:

**_if (test expression) {_**

**_// run code if test expression is true_**

**_} else {_**

**_// run code if test expression is false_**

**_}_**

Ako je testni izraz procijenjen kao istinit, izvršavaju se izjave unutar
tijela if. Izjave unutar tijela else preskaču se.

Ako je testni izraz procijenjen kao lažan, izvršavaju se izjave unutar
tijela else, a izjave unutar tijela if preskaču se.

## **Zadatak**

Napišite program koji provjerava je li broj paran ili neparan.

**_#include \<stdio.h\>_**

**_int main() {_**

**_int num;_**

**_printf(\"Unesite broj: \");_**

**_scanf(\"%d\", &num);_**

**_if (num % 2 == 0) {_**

**_printf(\"%d je paran broj.\\n\", num);_**

**_} else {_**

**_printf(\"%d je neparan broj.\\n\", num);_**

**_}_**

**_return 0;_**

**_}_**

U ovom programu, korisnik unosi broj.

Ako je ostatak dijeljenja tog broja s 2 jednak 0, tada je broj paran.
Inače, broj je neparan.

Ova logika se implementira pomoću if-else izjave.

Ako je uvjet num % 2 == 0 istinit, izvodi se blok koda unutar if izjave.
Ako uvjet nije istinit, izvodi se blok koda unutar else izjave.

# **Switch-Case**

Switch-case izjava omogućava programu da izvrši jedan blok koda među
mnogim alternativama.

Sintaksa switch-case izjave je sljedeća:

**_switch (expression) {_**

**_case value1:_**

**_// statements_**

**_break;_**

**_case value2:_**

**_// statements_**

**_break;_**

**_. . ._**

**_default:_**

**_// default statements_**

**_}_**

Izraz se procjenjuje jednom i uspoređuje s vrijednostima svake oznake
slučaja.

Ako postoji podudaranje, izvršavaju se odgovarajuće izjave nakon
podudarne oznake.

Ako nema podudaranja, izvršavaju se zadane izjave.

## **Zadatak**

Napišite program koji ispisuje ime dana u tjednu na temelju broja koji
korisnik unese.

**_#include \<stdio.h\>_**

**_int main() {_**

**_int day;_**

**_printf(\"Unesite broj dana (1-7): \");_**

**_scanf(\"%d\", &day);_**

**_switch (day) {_**

**_case 1:_**

**_printf(\"Ponedjeljak\\n\");_**

**_break;_**

**_case 2:_**

**_printf(\"Utorak\\n\");_**

**_break;_**

**_case 3:_**

**_printf(\"Srijeda\\n\");_**

**_break;_**

**_case 4:_**

**_printf(\"Četvrtak\\n\");_**

**_break;_**

**_case 5:_**

**_printf(\"Petak\\n\");_**

**_break;_**

**_case 6:_**

**_printf(\"Subota\\n\");_**

**_break;_**

**_case 7:_**

**_printf(\"Nedjelja\\n\");_**

**_break;_**

**_default:_**

**_printf(\"Neispravan unos. Unesite broj između 1 i 7.\\n\");_**

**_}_**

**_return 0;_**

**_}_**

U ovom programu, korisnik unosi broj dana. Na temelju unesenog broja,
program ispisuje ime odgovarajućeg dana u tjednu. Ova logika se
implementira pomoću switch-case izjave. Ako postoji podudaranje s
vrijednostima oznake slučaja, izvodi se odgovarajući blok koda nakon
podudarne oznake. Ako nema podudaranja, izvodi se blok koda unutar
default izjave.
