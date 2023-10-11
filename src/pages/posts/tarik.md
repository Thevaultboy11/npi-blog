---
title: "For petlja u C++"
pubDate: "2020-01-28"
slug: "how-to-compare-dates-in-javascript"
description: "For petlja je jedna od najčešće korištenih petlji u C++. Sintaksa for
petlje je sljedeća"
hero: "/images/javascript-logo-banner.jpg"
tags: ["javascript"]
layout: "../../layouts/BlogPostLayout.astro"
---

## **For petlja**

For petlja je jedna od najčešće korištenih petlji u C++. Sintaksa for
petlje je sljedeća:

for (inicijalizacija; uvjet; inkrement) {

// tijelo petlje

}

- **Inicijalizacija** se izvršava samo jednom na početku petlje.

- **Uvjet** se provjerava prije svakog prolaska kroz petlju. Ako je

  > uvjet istinit, tijelo petlje se izvršava. Ako je uvjet lažan,
  > petlja se završava.

- **Inkrement** se izvršava na kraju svakog prolaska kroz petlju.

Primjer for petlje:

for (int i = 0; i \< 10; i++) {

cout \<\< i \<\< endl;

}

Ova for petlja će ispisati brojeve od 0 do 9.

## **While petlja**

While petlja je također često korištena u C++. Sintaksa while petlje je
sljedeća:

while (uvjet) {

// tijelo petlje

}

- **Uvjet** se provjerava prije svakog prolaska kroz petlju. Ako je
  > uvjet istinit, tijelo petlje se izvršava. Ako je uvjet lažan,
  > petlja se završava.

Primjer while petlje:

int i = 0;

while (i \< 10) {

cout \<\< i \<\< endl;

i++;

}

Ova while petlja će također ispisati brojeve od 0 do 9.

Obje ove petlje su vrlo korisne i često se koriste u programiranju.
Važno je razumjeti kako rade kako bi mogli efikasno riješiti probleme u
programiranju.

Jednodimenzionalni nizovi

jednodimenzionalni niz je struktura podataka koja sadrži niz elemenata
istog tipa. U c++, jednodimenzionalni niz se moze deklarirati na
sljedeci nacin:

tip imeniza\[velicina\];

primjer jednodimenzionalnog niza:

int brojevi\[5\] = {1, 2, 3, 4, 5};

ovaj niz sadrži pet elemenata tipa int. Pristupanje elementima niza se
vrsi preko indeksa. Indeksi u c++ počinju od 0, tako da prvi element
niza ima indeks 0, drugi element ima indeks 1, itd.

Dvodimenzionalni nizovi

dvodimenzionalni niz je niz nizova, odnosno tablica elemenata.
Deklaracija dvodimenzionalnog niza u c++ je sljedeca:

tip imeniza\[velicina1\]\[velicina2\];

primjer dvodimenzionalnog niza:

int matrica\[3\]\[3\] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

ova matrica sadrži devet elemenata raspoređenih u tri reda i tri kolone.
Pristupanje elementima dvodimenzionalnog niza se vrsi preko dva indeksa.
Prvi indeks označava red, a drugi indeks označava kolonu.

Nizovi su vrlo korisni za pohranu vece kolicine podataka istog tipa.
Važno je napomenuti da su veličine nizova fiksne i moraju biti poznate
pri kompilaciji programa.

**Sadaa možemo iskoristiti prethodno znanje iz petlji za:**

**Kretanje kroz jednodimenzionalne nizove**

kretanje kroz jednodimenzionalne nizove se najcesce vrsi pomoću for
petlje. Evo primjera:

int brojevi\[5\] = {1, 2, 3, 4, 5};

for (int i = 0; i \< 5; i++) {

cout \<\< brojevi\[i\] \<\< endl;

}

ova for petlja prolazi kroz svaki element niza brojevi i ispisuje ga.
Varijabla i je indeks trenutnog elementa niza.

Kretanje kroz dvodimenzionalne nizove

kretanje kroz dvodimenzionalne nizove se vrsi pomocu dvije ugniježđene
for petlje. Prva for petlja prolazi kroz redove, a druga for petlja
prolazi kroz kolone. Evo primjera:

int matrica\[3\]\[3\] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

for (int i = 0; i \< 3; i++) {

for (int j = 0; j \< 3; j++) {

cout \<\< matrica\[i\]\[j\] \<\< \" \";

}

cout \<\< endl;

}

ova dvostruka for petlja prolazi kroz svaki element matrice i ispisuje
ga. Varijable i i j su indeksi trenutnog elementa matrice.

Korištenje petlji za kretanje kroz nizove je vrlo korisno jer omogućava
efikasnu obradu velike količine podataka.
