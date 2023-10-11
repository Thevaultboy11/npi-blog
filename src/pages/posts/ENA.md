---
title: "Faze pisanja koda."
pubDate: "2020-01-28"
slug: "how-to-compare-dates-in-javascript"
description: "Razumijevanje problema i definiranje kako će se kod
  strukturirati. Ovo uključuje razmišljanje o algoritmima, odabiru
  programskih jezika i alatima te planiranju arhitekture aplikacije."
hero: "/images/javascript-logo-banner.jpg"
tags: ["javascript"]
layout: "../../layouts/BlogPostLayout.astro"
---

**FAZE PISANJA KODA**

Osnovne faze pisanja koda obično uključuju:

1.  **Planiranje:** Razumijevanje problema i definiranje kako će se kod
    strukturirati. Ovo uključuje razmišljanje o algoritmima, odabiru
    programskih jezika i alatima te planiranju arhitekture aplikacije.

2.  **Pisanje koda:** Implementacija planiranih rješenja putem
    programskog jezika. Ovdje se stvarno piše kod, prateći odabrane
    algoritme i strukturu.

3.  **Testiranje:** Provjera ispravnosti koda kroz testiranje i
    debagiranje. To uključuje pronalaženje i ispravljanje grešaka
    (bugova) te provođenje testova kako bi se osigurala funkcionalnost i
    kvaliteta koda.

4.  **Optimizacija:** Poboljšavanje performansi i efikasnosti koda ako
    je potrebno. To može uključivati smanjenje vremena izvođenja,
    optimizaciju resursa ili rješavanje problema vezanih uz
    skalabilnost.

5.  **Dokumentacija:** Dokumentiranje koda kako bi drugi programeri ili
    vi sami kasnije mogli razumjeti i koristiti kod. To uključuje
    komentiranje koda i stvaranje tehničke dokumentacije.

6.  **Isporuka i održavanje:** Postavljanje gotovog koda u produkcijsko
    okruženje i održavanje kako bi se osigurala stabilnost i
    funkcionalnost.

**ŠTA JE TRANSLATOR?**

U programiranju, pojam \"translator\" se često koristi za opisivanje
softverskog alata ili komponente koja se koristi za prevodjenje
(transformaciju) izvornog koda iz jednog programskog jezika u drugi.
Ovisno o kontekstu, \"translator\" može odnositi na različite vrste
alata i procesa, uključujući:

Kompajler: Kompajler je vrsta translatora koji prevodi izvorni kod
napisan u visokonivonskom programskom jeziku u niskonivonski mašinski
jezik ili neku međuformu. Kompajler analizira i optimizira izvorni kod,
a zatim stvara izvršnu datoteku koju računar može direktno izvršiti. Na
primjer, C i C++ programi se kompiliraju u izvršne datoteke koje se
izvršavaju na određenom računaru.

Interpreter: Interpreter je druga vrsta translatora koja izvršava
izvorni kod jednog jezika redom, bez stvaranja zasebne izvršne datoteke.
Programi napisani u jezicima kao što su Python, JavaScript i Ruby obično
se interpretiraju. Interpreter čita i izvršava kod liniju po liniju, a
rezultat se odmah prikazuje.

Prevođenje između jezika: Ovo može se odnositi na proces prevođenja koda
iz jednog programskog jezika u drugi. Na primjer, postoji softver koji
može prevesti SQL upite u upite za bazu podataka napisane u drugim
jezicima ili alate koji pretvaraju XML u JSON.

Automatsko prevođenje (prevođenje mašina): Takođe se koristi za
opisivanje procesa u kojem računar prevodi tekst iz jednog prirodnog
jezika u drugi. Ovo je posebno važno u kontekstu mašinskog prevođenja i
aplikacija za prevođenje teksta.

U zaključku, \"translator\" u programiranju se koristi za opisivanje
alata i procesa koji omogućavaju prevodjenje iz jednog jezika u drugi,
bilo da se radi o programskim jezicima, jezicima za upite u bazi
podataka, ili čak prevođenju između prirodnih jezika.

**ŠTA JE KOMPAJLER?**

Kompajler (compiler) je računalni program ili alat koji se koristi za
prevođenje izvornog koda napisanog u programskom jeziku u strojni jezik
ili drugi oblik niskog nivoa koji računalo može razumjeti i izvršavati.
Kompajler je ključan dio razvojnog procesa za većinu programskih jezika.

Evo kako kompajler radi:

1.  **Prikupljanje i analiza**: Prvo, kompajler prikuplja izvorni kod i
    analizira ga kako bi razumio strukturu i sintaksu jezika.

2.  **Sintaksna analiza**: Kompajler provjerava je li izvorni kod
    ispravno napisan prema pravilima jezika. Ako postoje sintaksne
    greške, kompajler će ih identificirati i obavijestiti programera.

3.  **Generiranje međukoda**: Kompajler može generirati međukod
    (intermediate code) ili apstraktno sintaksno stablo (abstract syntax
    tree) kao posredni korak prije nego što se prevede u strojni jezik.
    Ovo olakšava optimizaciju i podršku za različite ciljne platforme.

4.  **Optimizacija koda (po potrebi)**: Neki kompajleri provode
    optimizaciju kako bi poboljšali izvedbu koda, uklanjajući nepotrebne
    operacije ili reorganizirajući ga na učinkovitiji način.

5.  **Generiranje strojnog koda**: Konačno, kompajler generira strojni
    kod ili izvršni program koji može direktno izvršavati računalo ili
    ciljna platforma.

Kompajleri su ključni za programiranje jer omogućuju programerima da
pišu izvorni kod na visokom razini, koji je čitljiv i razumljiv ljudima,
a zatim ga prevedu u niski nivo strojnog jezika, koji računalo može
izvršiti. To čini programiranje mnogo lakšim i produktivnijim,
omogućavajući razvoj sofisticiranih aplikacija na različitim računalnim
platformama.

**ŠTA SU INTERPRETERI?**

Interpreteri su računarski programi ili komponente softverskog sistema
koji čitaju i izvršavaju kod napisan u programskom jeziku. Nasuprot
kompajlerima, koji prevode kod izvornog programa u niski nivo mašinskog
koda pre nego što ga izvrše, interpreteri izvršavaju kod direktno,
liniju po liniju, dok ga čitaju.

Evo nekoliko ključnih karakteristika interpretera:

1.  **Izvršavanje u realnom vremenu:** Interpreteri izvršavaju kod odmah
    dok ga čitaju, bez potrebe za prethodnom kompilacijom. Ovo omogućava
    brzo testiranje i razvoj, jer programer može odmah videti rezultate
    izvršenja.

2.  **Jednostavno za razumevanje grešaka:** Budući da interpreteri
    izvršavaju kod redom, često mogu tačno pokazati na tačku greške u
    kodu, što olakšava pronalaženje i ispravljanje problema.

3.  **Portabilnost:** Kod napisan u jeziku koji koristi interpreter može
    se izvoditi na različitim platformama, pod uslovom da postoji
    odgovarajući interpreter za tu platformu. Ovo olakšava prenosivost
    programa.

4.  **Veća memorijska potrošnja:** Interpreteri obično zahtevaju više
    memorije i CPU resursa tokom izvršavanja u odnosu na prevedeni
    program, jer interpretacija zahteva neprestano čitanje i analizu
    koda.

5.  **Primeri interpretera:** Python, Ruby i JavaScript su primeri
    programskih jezika koji se često koriste sa interpreterima.

Interpreteri su korisni za brzo prototipiranje, razvoj skriptova i
situacije gde je brza povratna informacija važna. Kompajleri, s druge
strane, koriste se za optimizaciju izvršavanja programa i za stvaranje
izvršnih datoteka koje se mogu izvoditi bez potrebe za izvornim kodom.

**KOJI JEZIK RAZUMIJE RAČUNAR?**

Mašinski jezik je osnovni niz binarnih instrukcija koje računar može
direktno razumjeti i izvršavati. To je niski nivo jezika koji je
neposredno povezan s hardverskom arhitekturom računara. Svaka
instrukcija u mašinskom jeziku predstavlja osnovnu operaciju koju
računar može da obavi, kao što su aritmetičke operacije (npr. sabiranje
i oduzimanje), upravljanje memorijom (čitanje i zapisivanje podataka u
memoriji), uslovna ispitivanja i slične osnovne radnje.

Mašinski jezik je specifičan za određenu arhitekturu računara, što znači
da različiti računari koriste različite mašinske jezike. Programiranje
na mašinskom jeziku zahtijeva duboko razumijevanje arhitekture računara
i često je vrlo složeno i nisko nivo programiranja.

Većina programera ne piše izravno u mašinskom jeziku, osim u specifičnim
situacijama gdje je potrebna apsolutna kontrola nad računarom. Umjesto
toga, koriste se viši programski jezici, kao što su C, C++, Java,
Python, itd. Ti jezici omogućavaju programerima da pišu kod na ljudski
čitljiviji način, a zatim se taj kod prevodi ili interpretira u
odgovarajući mašinski jezik pomoću kompajlera ili interpretera kako bi
ga računar mogao razumjeti i izvršiti.
