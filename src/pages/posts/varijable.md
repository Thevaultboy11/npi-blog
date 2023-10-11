---
title: "Varijable u C++"
pubDate: "2020-01-28"
slug: "how-to-compare-dates-in-javascript"
description: "Razumijevanje i učinkovito upravljanje varijablama ključno je za svaki programski jezik, uključujući i C++. Kroz detaljniju analizu, možemo dodatno produbiti naša znanja o varijablama u C++."
hero: "/images/javascript-logo-banner.jpg"
tags: ["javascript"]
layout: "../../layouts/BlogPostLayout.astro"
---

Razumijevanje i učinkovito upravljanje varijablama ključno je za svaki programski jezik, uključujući i C++. Kroz detaljniju analizu, možemo dodatno produbiti naša znanja o varijablama u C++.

**1. Deklaracija i inicijalizacija varijabli**

Deklaracija varijable označava njezin tip podatka i omogućava kompilatoru da rezervira odgovarajuću memoriju za tu varijablu. Inicijalizacija varijable podrazumijeva dodjeljivanje početne vrijednosti. Inicijalizirane varijable su ujedno i deklarirane, ali možemo ih i inicijalizirati naknadno. Na primjer:

int broj; // Deklaracija varijable tipa int broj = 42; // Inicijalizacija varijable na vrijednost 42

Ovdje smo deklarirali varijablu **broj** tipa **int** i inicijalizirali je s vrijednošću 42. Možemo isto postići u jednom koraku:

int drugi_broj = 10; // Deklaracija i inicijalizacija u istoj liniji

**2. Vrste varijabli**

C++ nudi mnoge vrste varijabli koje omogućavaju programerima da pohrane različite vrste podataka. Osim osnovnih tipova poput **int**, **double**, **char** i **bool**, C++ podržava složenije tipove podataka kao što su nizovi, stringovi, objekti i strukture. Ovo omogućava programerima da modeliraju različite vrste informacija i podataka. Na primjer, za pohranu niza znakova (string), možemo koristiti **std::string**:

std::string ime = "John"; // Pohrana niza znakova u varijablu

**3. Pravila imenovanja varijabli**

Imenovanje varijabli igra važnu ulogu u čitljivosti koda i njegovoj održivosti. Pravila imenovanja varijabli u C++ uključuju:

- Ime varijable mora početi slovom ili donjom crtom.
- Ime varijable može sadržavati slova, brojeve i donje crte.
- Imena varijabli su osjetljiva na velika i mala slova.
- Ključne riječi jezika C++ ne mogu se koristiti kao imena varijabli.

Dobar pristup je koristiti opisna i razumljiva imena kako bismo olakšali razumijevanje koda:

int godina; // Ispravno ime varijable double kamatnaStopa; // Korištenje CamelCase notacije za bolju čitljivost char prviZnak; bool jeIspravno;

**4. Opseg varijabli**

Opseg varijabli odnosi se na mjesto u programu gdje je varijabla vidljiva i može se koristiti. U C++, varijable imaju različite opsege ovisno o tome gdje su deklarirane. Globalne varijable su one koje su deklarirane izvan svih funkcija i vidljive su u cijelom programu. Lokalne varijable su deklarirane unutar funkcija i vidljive su samo unutar te funkcije.

int globalnaVarijabla = 10; // Globalna varijabla int main() { int lokalnaVarijabla = 5; // Lokalna varijabla // Ovdje možemo pristupiti i globalnoj i lokalnoj varijabli return 0; } // Ovdje ne možemo pristupiti lokalnoj varijabli, samo globalnoj

Kroz razumijevanje opsega varijabli, programeri mogu kontrolirati pristup i trajanje varijabli, čime se osigurava ispravno funkcioniranje programa.
