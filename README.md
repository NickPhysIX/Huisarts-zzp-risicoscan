# Waarneem-Risicoscan

Eigen werkversie — pre-opdrachtcheck schijnzelfstandigheid voor zzp-huisartsen, met aparte Wtza/LRZa- en geschillencommissie-compliancecheck met voorbeelden SKGE/DOKh, recente rechtspraakduiding, HAP-patroonherkenning en ingebouwde About/referenties-modal. Werkt als web-app op iOS en Android.

**Appversie:** v1.7  
**README/documentatie:** v1.7 — expliciete bronbalans en bronhiërarchie  
**Peildatum bronnen:** 8 juni 2026

## ⚠ Belangrijk

Deze tool is **niet verbonden aan de officiële LHV-Vergewistool** die door de LHV samen met WaarneemApp wordt ontwikkeld (verwacht Q3 2026). Deze tool is een eigen werkversie en biedt **geen juridisch advies, geen fiscaal advies, geen vrijwaring en geen garantie**. De Belastingdienst toetst altijd op feitelijke uitvoering. De Wtza/LRZa-/geschillencheck is een aparte compliancecheck naast de DBA-risicoscore.

## Wat het is

Een Progressive Web App (PWA) waarmee een zzp-waarnemend huisarts vooraf een opdracht kan toetsen op risico's rond schijnzelfstandigheid. Daarnaast bevat de intake drie aparte compliancevragen — LRZa, Wtza en geschilleninstantie/klachtenregeling — die niet meetellen voor de DBA-score, maar wel een eigen adviesblok in het rapport opleveren.

De DBA-scan bestaat uit 18-20 vragen (afhankelijk van type opdracht) en is nadrukkelijk niet alleen gebaseerd op Uber/Deliveroo/LHV. Het denkkader gebruikt, in hoofdlijnen:

- **Wet DBA / arbeidsrelaties** — huidige handhaving en beoordeling op feitelijke uitvoering.
- **Deliveroo-arrest (Hoge Raad, 2023)** — negen gezichtspunten voor de holistische kwalificatie van de arbeidsrelatie.
- **Uber-arrest (Hoge Raad, 2025)** — geen vaste rangorde tussen de gezichtspunten; extern ondernemerschap kan zwaar meewegen.
- **Zorgspecifieke DBA-/arbeidsrelatierechtspraak** — o.a. HAP/waarnemend huisarts 2023, waarnemend intensivist 2024, logopedist 2026 en Zorgmaatje/zorgbureau 2026. Deze rechtspraak wordt gebruikt om zorgspecifieke signalen zoals vaste dagdelen, rapportage/verantwoording, HIS/EPD-gebruik, praktijkmiddelen, professionele autonomie en organisatorische inbedding genuanceerder te wegen.
- **Ondersteunende zorgcontext en signaalcasussen** — POH-S/btw-vrijstellingsrechtspraak (btw, géén DBA) en de zzp-tandartscontrole 2026 als signaalcasus. Dient om het onderscheid zichtbaar te maken tussen juridische bron, zorgcontext en feitelijke Belastingdienstbeoordeling; niet bruikbaar als vrijbrief.
- **Expliciete bronbalans** — primaire rechtspraak, officiële uitvoerings- en beleidsbronnen, LHV/andere beroepsorganisaties en secundaire duiding worden zichtbaar van elkaar onderscheiden. Waar de Belastingdienst/ministeries en LHV of rechtspraak anders wegen, toont de tool die spanning in plaats van één lezing als waarheid te presenteren.
- **LHV-modelovereenkomsten en LHV-sectorinformatie** — modelovereenkomsten, casusposities, actielijnen, Vergewistool-duiding en actuele lijn rond zelfstandigenbeleid.
- **Zorgspecifieke compliance buiten de DBA-score** — Wtza/LRZa en Wkkgz-klachten-/geschillenregeling, inclusief SKGE en DOKh als huisarts-relevante voorbeelden.

De aparte compliancecheck verwijst naar:

- Wtza-meldplicht
- LRZa / Zorgaanbiedersportaal
- Wkkgz-klachtenroute en zelfstandige aansluiting bij een erkende geschilleninstantie/klachtenregeling, met SKGE en DOKh als huisarts-relevante voorbeelden

De tool genereert een rapport met:

- DBA-risicoprofiel (lager / verhoogd / hoog)
- Score op dynamische maxscore (afhankelijk van type opdracht en fase)
- Knock-out signalering bij rode antwoorden op kernvragen
- **Aparte Wtza/LRZa-/geschillencommissie-compliancecheck met voorbeelden SKGE/DOKh** — geen invloed op DBA-score, wel apart actieadvies
- **Bronbalans in het rapport** — afzonderlijke duiding van rechtspraak, Belastingdienst/ministeries en LHV, inclusief de strengere huisartsencasusposities en de afwijkende LHV-visie.
- **Jurisprudentie-duiding in het rapport** — samenloop van signalen i.p.v. losse rode-vlagmechaniek; rapportage/verantwoording is niet automatisch gezag en zorgzelfstandigheid moet blijken uit feiten zoals eigen verantwoordelijkheid, klachtenroute, patiëntcommunicatie, verzekeringen en risico.
- **HAP/ANW-patroonherkenning** — losse dienst, VIP-achtig patroon of structureel roosterblok
- **About/referenties-modal in de app** — compacte uitleg, disclaimers, bronbasis, jurisprudentie en compliancebronnen zonder de hoofdflow te belasten
- **Gepersonaliseerde bewijsmappen-checklist** — categorieën *archiveren / versterken / kritiek*
- Suggesties voor alternatieve werkvormen bij verhoogd/hoog risico
- Alle antwoorden per vraag, exporteerbaar als PDF via browser-print

## Bestandsstructuur

```
waarneem-risicoscan/
├── index.html              # Hoofdbestand: HTML, CSS, JS allemaal inline
├── manifest.webmanifest    # PWA manifest (naam, iconen, kleuren)
├── service-worker.js       # Offline-functionaliteit (cache-first)
├── icon-512.png            # 512×512 voor manifest
├── icon-192.png            # 192×192 voor manifest
├── apple-touch-icon.png    # 180×180 voor iOS homescreen
└── README.md               # Dit bestand
```

## Installeren als app

### iOS (iPhone / iPad)
1. Open de URL in **Safari** (niet in Chrome — iOS reserveert PWA-installatie voor Safari).
2. Tik op het **deel-icoon** (vierkant met pijl omhoog) onderaan het scherm.
3. Scroll naar **'Zet op beginscherm'** en tik erop.
4. Bevestig met 'Voeg toe' rechtsboven.

De app verschijnt op je homescreen als 'Risicoscan' met het stethoscoop-icoon. Bij openen draait hij fullscreen, zonder Safari-balken.

### Android (Chrome)
1. Open de URL in **Chrome**.
2. Tik op de drie-puntjes-menu rechtsboven.
3. Kies **'App installeren'** of **'Toevoegen aan startscherm'**.
4. Bevestig.

### Desktop (Chrome / Edge)
1. Klik op het installeer-icoon in de adresbalk (rechts), of via menu → 'App installeren'.
2. De tool opent als een eigen window, zonder browser-chrome.

## Offline gebruiken

Na de eerste keer openen werkt de tool **volledig offline**. De service worker cachet alle bestanden lokaal. Je kunt dus zonder internet:
- De scan invullen
- Het rapport bekijken
- Het rapport printen of opslaan als PDF

Geen ingevulde scan- of opdrachtgegevens worden ooit naar een server verstuurd. Alle data blijft in je browser-sessie.

## Technisch

- **Eén HTML-bestand** voor de hoofdcontent — alle CSS en JavaScript inline
- Geen build-stap, geen framework, geen externe dependencies
- Service worker met cache-first strategy
- Werkt in elke moderne browser (Safari, Chrome, Edge, Firefox)
- PDF-export via browser-printdialoog (Cmd/Ctrl+P → "Bewaar als PDF")
- About/referenties-modal met relevante README-elementen in de app zelf

## Deployment op GitHub Pages

1. Maak een nieuwe GitHub-repo, bv. `waarneem-risicoscan`.
2. Upload alle bestanden uit deze map naar de root van de repo.
3. Ga naar **Settings → Pages**.
4. Bij **Source**: kies **main / root** (of de branch waar de bestanden staan).
5. Klik **Save**. Na ~1 minuut is de tool beschikbaar op `https://<jouw-username>.github.io/waarneem-risicoscan/`.

**Belangrijk:** PWA's vereisen HTTPS. GitHub Pages levert HTTPS automatisch — geen extra configuratie nodig.


## Bronhiërarchie en bronbalans

Versie 1.7 gebruikt vier zichtbare bronlagen:

1. **Primaire rechtspraak** — volledige uitspraken van Hoge Raad, gerechtshoven en rechtbanken.
2. **Officiële uitvoering en beleid** — Belastingdienst, Rijksoverheid en formele modelovereenkomsten.
3. **Beroeps- en sectorinformatie** — onder meer LHV en KNMT; relevant voor de zorgcontext, maar niet juridisch bindend.
4. **Secundaire duiding en signaalcasussen** — vakmedia, blogs en niet-openbare praktijkcasussen; alleen ondersteunend gebruikt.

De tool maakt daarnaast expliciet dat de bronnen niet steeds dezelfde conclusie trekken. De Hoge Raad verlangt een holistische weging zonder vaste rangorde, terwijl de LHV meldt dat de Belastingdienst/ministeries vier van zes huisartsencasusposities hebben afgewezen. De LHV bestrijdt die strikte beoordeling. De scan kiest daarom niet één kamp, maar vertaalt de combinatie naar een risicoprofiel en concrete bewijs-/bijstuuracties.

## Bronnen en referenties

Deze tool is geen juridische bron en geen vervanging van professioneel advies. Onderstaande bronnen zijn opgenomen om de herkomst van het denkkader transparant te maken en om onderhoud van de tool makkelijker te maken. Bij wijzigingen in beleid, wetgeving of rechtspraak moeten de vraagteksten, toelichtingen en rapportduiding opnieuw worden gecontroleerd.

### Primaire bronnen — wetgeving, handhaving en officiële informatie

- Belastingdienst — Arbeidsrelaties en handhaving: https://www.belastingdienst.nl/wps/wcm/connect/nl/arbeidsrelaties/content/handhaving
- Belastingdienst — Arbeidsrelaties: zzp ja of nee: https://www.belastingdienst.nl/wps/wcm/connect/nl/arbeidsrelaties/arbeidsrelaties
- Belastingdienst — Handhavingsplan arbeidsrelaties: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/handhavingsplan-arbeidsrelaties
- Belastingdienst — Modelovereenkomsten: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/ondernemen/modelovereenkomsten-in-plaats-van-var/arbeidsrelaties
- Belastingdienst — Voorbeeldovereenkomst huisarts incidentele waarneming (geldig t/m 31-12-2029): https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/voorbeeldovereenkomst_huisarts_incidentele_waarneming_LHV
- Belastingdienst — Voorbeeldovereenkomst huisarts duurwaarneming (geldig t/m 31-12-2029): https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/voorbeeldovereenkomst_duurwaarneming_huisarts
- Rijksoverheid — Kabinetskoers zzp/VBAR, 6 maart 2026: https://www.rijksoverheid.nl/actueel/nieuws/2026/03/06/kabinet-kiest-voor-meer-rust-en-duidelijkheid-voor-zzpers-en-opdrachtgevers
- Belastingdienst — Algemene modelovereenkomst geen werkgeversgezag: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/voorbeeldovereenkomst_geen_werkgeversgezag
- Webmodule Beoordeling Arbeidsrelatie: https://beoordelingarbeidsrelatie.nl/
- Toetreding zorgaanbieders — Wtza: https://www.toetredingzorgaanbieders.nl/
- Toetreding zorgaanbieders — Wtza-meldplicht: https://www.toetredingzorgaanbieders.nl/melden
- LRZa / Zorgaanbiedersportaal: https://zoeken.zorgaanbiedersportaal.nl/
- Rijksoverheid — Wet kwaliteit, klachten en geschillen zorg (Wkkgz): https://www.rijksoverheid.nl/onderwerpen/kwaliteit-van-de-zorg/wet-kwaliteit-klachten-en-geschillen-zorg
- Rijksoverheid — Wat moet een zorgaanbieder regelen onder de Wkkgz?: https://www.rijksoverheid.nl/onderwerpen/kwaliteit-van-de-zorg/vraag-en-antwoord/voorschriften-zorgaanbieders-wet-kwaliteit-klachten-en-geschillen-zorg

### Huisartsenzorg en sectorinformatie

- LHV — Zzp-wetgeving in de huisartsenzorg: https://www.lhv.nl/thema/praktijkzaken/zzp-wetgeving-huisartsenzorg/
- LHV — Zelfstandigenbeleid / modelovereenkomsten / contractgenerator: https://www.lhv.nl/thema/praktijkzaken/zelfstandigenbeleid/
- LHV — LHV-vergewistool helpt bij afweging inzet zzp-huisartsen: https://www.lhv.nl/nieuws/lhv-vergewistool-helpt-bij-afweging-inzet-zzp-huisartsen/
- LHV — Definitieve oordeel zzp-casusposities door overheid: https://www.lhv.nl/nieuws/definitieve-oordeel-zzp-casusposities-door-overheid/
- LHV — Zzp-wetgeving: LHV zet in op vijf actielijnen: https://www.lhv.nl/nieuws/zzp-wetgeving-lhv-zet-in-op-vijf-actielijnen/
- LHV — Nieuwe koers kabinet zzp-wetgeving: focus op Zelfstandigenwet: https://www.lhv.nl/nieuws/nieuwe-koers-kabinet-zzp-wetgeving-focus-op-zelfstandigenwet/
- LHV — Zelfstandigenwet geeft meer ruimte, maar lobby blijft nodig: https://www.lhv.nl/actueel/de-dokter/de-dokter-mei-2026/zelfstandigenwet-geeft-meer-ruimte-maar-lobby-blijft-nodig/
- LHV — Veelgestelde vragen klachtenwet Wkkgz: https://www.lhv.nl/thema/praktijkzaken/klachtenwet-wkkgz/veelgestelde-vragen-klachtenwet-wkkgz/
- KNMT — Positief oordeel voor 3 zzp-casussen uit de mondzorg: https://knmt.nl/nieuws/positief-oordeel-voor-3-zzp-casussen-uit-de-mondzorg
- InEen — nieuws en standpunten huisartsenspoedposten: https://ineen.nl/nieuws/

### Klachten- en geschillenregeling huisartsenzorg

- SKGE — Zorgverleners: https://www.skge.nl/zorgverleners/
- SKGE — Dienstverlening: https://www.skge.nl/zorgverleners/dienstverlening/
- SKGE — Informatie Wkkgz: https://www.skge.nl/zorgverleners/informatie-wkkgz/
- SKGE — Waarnemend huisarts en Wkkgz: https://www.skge.nl/zorgverleners/ik-ben-waarnemend-huisarts-moet-ik-ook-voldoen-aan-de-verplichtingen-uit-de-wkkgz/
- DOKh — Klachten en geschillen voor zorgverleners: https://dokh.nl/klachten-geschillen/
- DOKh — Uitspraken geschilleninstantie: https://dokh.nl/klachten-geschillen/uitspraken/

### Jurisprudentie en zorgcontext die in het interpretatiekader van de tool wordt gebruikt

Deze uitspraken zijn opgenomen om zichtbaar te maken dat de tool niet alleen op Deliveroo/Uber of algemene LHV-informatie leunt. De rechtspraak wordt niet gebruikt als “vrijbrief”, maar als context voor de holistische weging: vaste dagen, één opdrachtgever, werken met HIS/EPD of werken binnen kwaliteitskaders zijn niet op zichzelf beslissend; de samenloop met gezag, HR-achtige aansturing, structurele inbedding, vervanging en zichtbaar ondernemerschap is bepalend.

#### Algemeen arbeidsrechtelijk kader

- Hoge Raad — Deliveroo, 24 maart 2023, ECLI:NL:HR:2023:443: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:HR:2023:443
- Hoge Raad — Uber, 21 februari 2025, ECLI:NL:HR:2025:319: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:HR:2025:319

#### Zorgspecifieke DBA-/arbeidsrelatierechtspraak

- Rechtbank Midden-Nederland — huisartsenpost / waarnemend huisarts, ECLI:NL:RBMNE:2023:6072: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBMNE:2023:6072  
  Positieve zorgspecifieke referentie: een waarneemovereenkomst met een huisartsenpost kwalificeerde niet als arbeidsovereenkomst. Relevant voor HAP/ANW-vragen over vrije dienstkeuze, ontbreken van centrale roosterdwang en professionele zelfstandigheid.

- Rechtbank Zeeland-West-Brabant — waarnemend intensivist / medisch specialist, ECLI:NL:RBZWB:2024:4597: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBZWB:2024:4597  
  Negatieve spiegelcasus: structurele waarneming, inbedding in rooster/vakgroep/protocollen en werken als vaste formatie kunnen ondanks professionele autonomie richting arbeidsovereenkomst wijzen.

- Rechtbank Zeeland-West-Brabant — logopedist, ECLI:NL:RBZWB:2026:1391: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBZWB:2026:1391  
  Positieve zorgspecifieke referentie: één opdrachtgever, werken op locatie en gebruik van praktijkfaciliteiten waren niet doorslaggevend zonder gezagsverhouding. Relevant voor de nuance dat HIS/EPD-gebruik, vaste dagdelen of zorgkaders niet automatisch rood zijn.

- Rechtbank Rotterdam — Zorgmaatje aan Huis / zorgbureau, ECLI:NL:RBROT:2026:5277: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBROT:2026:5277  
  Positieve zorgspecifieke referentie: tijdelijke opdrachten, zelf bepalen wanneer/hoe, verantwoording/rapportage niet automatisch gezag, vervanging, weigeringsvrijheid, geen interne organisatiepositie, ondernemersrisico en meerdere opdrachtgevers. Relevant voor C2/E2/E3 en voor de bewijsmappenlogica. **Procedurele context:** beschikking van 30 april 2026 (kantonrechter mr. F. Aukema-Hartog) op een gezamenlijk verzoek ex art. 96 Rv — opdrachtgever en zorgverleners verzochten samen de verklaring voor recht en waren het eens over de kwalificatie. Geen contentieus geschil en geen procedure tegen de Belastingdienst; gebruiken als bevestiging van de toetsingsassen, niet als gewonnen handhavingszaak.

#### Ondersteunende zorgcontext — btw-context, géén DBA-uitspraak

- Gerechtshof ’s-Hertogenbosch — POH-S / medische btw-vrijstelling, ECLI:NL:GHSHE:2025:3536: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:GHSHE:2025:3536  
  **Btw-zaak, geen DBA-uitspraak.** Opgenomen om het onderscheid expliciet te maken: btw-vrijstelling voor ondersteunende zorg zegt niets over de DBA-kwalificatie van een individuele zzp’er. Relevant voor het onderscheid tussen gezondheidskundige zorgverlening en louter terbeschikkingstelling van personeel. **Niet gebruiken** als bewijs dat individuele POH-inhuur automatisch zelfstandigheid oplevert.

### Secundaire duiding en achtergrond

Secundaire bronnen zijn bruikbaar voor interpretatie en onderhoud, maar zijn geen bron van recht. Gebruik ze altijd naast de primaire uitspraak of officiële publicatie.

- Raadgevers Kuijkhoven — Belastingdienst gaf geen oordeel over schijnzelfstandigheid zzp-huisarts: https://www.raadgevers.nl/blog/belastingdienst-gaf-geen-oordeel-over-schijnzelfstandigheid-zzp-huisarts/
- Raadgevers Kuijkhoven — Rechter bevestigt opnieuw: waarnemen is nog steeds mogelijk: https://www.raadgevers.nl/blog/rechter-bevestigt-opnieuw-waarnemen-is-nog-steeds-mogelijk/
- KVDL — Rechtbank: waarnemend medisch specialist is schijnzelfstandige: https://kvdl.com/artikelen/rechtbank-waarnemend-medisch-specialist-is-schijnzelfstandige
- KBS Advocaten — Overeenkomst van opdracht met waarnemend intensivist kwalificeert als arbeidsovereenkomst: https://www.kbsadvocaten.nl/overeenkomst-van-opdracht-met-waarnemend-intensivist-kwalificeert-als-arbeidsovereenkomst-deliveroo-gezichtspunten/
- Salaris Vanmorgen — Overeenkomst van opdracht voor logopedist, geen gezagsverhouding: https://www.salarisvanmorgen.nl/2026/03/20/overeenkomst-van-opdracht-voor-logopedist-geen-gezagsverhouding/
- ZZP-erindezorg — Rechter bevestigt 8 kenmerken bij voorkomen van schijnzelfstandigheid in de zorg: https://www.zzp-erindezorg.nl/blog/rechter-bevestigt-8-kenmerken-bij-voorkomen-van-schijnzelfstandigheid-in-de-zorg/
- FlexNieuws — Toegankelijke bespreking Zorgmaatje aan Huis (primaire uitspraak blijft leidend): https://www.flexnieuws.nl/2026/05/kan-ik-blijven-werken-met-zzpers-of-ben-ik-een-uitzendbureau-een-zorgbureau-vroeg-het-aan-de-rechter-dit-was-het-antwoord/
- ZZP-erindezorg — Belastingdienst: zzp-tandarts werkt níet schijnzelfstandig: https://www.zzp-erindezorg.nl/blog/belastingdienst-zzp-tandarts-werkt-niet-schijnzelfstandig/
- TaxLive — Medische vrijstelling toepasbaar bij overeenkomst voor inzet praktijkondersteuners somatiek: https://www.taxlive.nl/nl/documenten/vn-vandaag/medische-vrijstelling-toepasbaar-bij-overeenkomst-voor-inzet-praktijkondersteuners-somatiek/
- Taxence — Medische vrijstelling geldt voor inzet praktijkondersteuners: https://www.taxence.nl/omzetbelasting-btw/medische-vrijstelling-geldt-voor-inzet-praktijkondersteuners/
- NVvPO — Wanneer ben je echt zelfstandig?: https://nvvpo.nl/nieuws/wanneer-ben-je-echt-zelfstandig/

### Onderhoudsnotitie bij bronnen

Bij updates eerst controleren:

1. Officiële bronnen van Belastingdienst, Rijksoverheid, LHV en Toetreding Zorgaanbieders.
2. Volledige tekst van relevante uitspraken op Rechtspraak.nl.
3. Of secundaire duidingen nog overeenkomen met de actuele primaire bronnen.
4. Of nieuwe rechtspraak aanleiding geeft om scoreweging, knock-outvragen of rapporttaal aan te passen.
5. **Apart monitoren:** de VBAR (Wet verduidelijking beoordeling arbeidsrelaties) en de Nota van Wijziging van maart 2026. Als de VBAR (of opvolger zoals de Zelfstandigenwet) in werking treedt, schuiven de toetsingscriteria mogelijk significant — vraagteksten, weging en knock-outlogica moeten dan opnieuw tegen het licht.

## Versiebeheer

| Versie | Datum | Peildatum jurisprudentie | Wijzigingen |
|--------|-------|--------------------------|-------------|
| v1.7 | 8 juni 2026 | 8 juni 2026 | Bronbalans-release zonder wijziging van score, gewichten of knock-outs. In About-modal en rapport is een expliciete bronhiërarchie toegevoegd: primaire rechtspraak, officiële uitvoering/beleid, beroeps-/sectorinformatie en secundaire duiding. De strengere LHV-gerapporteerde beoordeling van vier van zes huisartsencasusposities staat nu naast de holistische Deliveroo/Uber-rechtspraak en het afwijkende LHV-standpunt. Belastingdienst-modelovereenkomsten (geldig t/m 31-12-2029), Rijksoverheid-koers maart 2026 en KNMT-mondzorgcasussen toegevoegd. De individuele tandartscasus blijft duidelijk gelabeld als niet-openbare secundaire signaalcasus. G2-toelichting gegrond op officiële Belastingdiensttekst. Service-worker cache gebumpt naar `wrs-v1.7`. |
| v1.6.2 | 7 juni 2026 | 2 juni 2026 | Polish-release zonder functionele wijziging. Fiscaal Kompas ZZP Zorg (2024) toegevoegd als sectorduidingskader in de About/referenties-modal, expliciet gelabeld als brancheorganisatiedocument en géén rechtspraak; framing benadrukt dat de Zorgmaatje-uitspraak (ECLI:NL:RBROT:2026:5277) feitelijk dezelfde elementen volgt. Onderhoudsnotitie uitgebreid zodat secundaire duidingen óók sectorkaders omvatten. Score, weging, knock-outs, vraagteksten en peildatum jurisprudentie ongewijzigd. Versie-strings en service-worker cache gebumpt naar v1.6.2. |
| v1.6.1 | 2 juni 2026 | 2 juni 2026 | Polish-release zonder functionele wijziging. Zorgmaatje-referentie (ECLI:NL:RBROT:2026:5277) voorzien van art. 96 Rv-nuance in modal en README (gezamenlijk verzoek, geen bestreden geschil tegen de Belastingdienst); ECLI geverifieerd op Rechtspraak.nl. `QUESTIONS`-array opnieuw uitgelijnd (één object per regel) voor leesbaarheid; score/weging/knock-outs identiek. Niet-meegeleverde `icon.svg` uit bestandslijst verwijderd. Versie-strings en service-worker cache gebumpt naar v1.6.1. |
| v1.6   | 2 juni 2026 | 2 juni 2026 | Zorgmaatje/zorgbureau 2026 toegevoegd als positieve zorgspecifieke rechtspraak; zzp-tandartscontrole 2026 toegevoegd als secundaire signaalcasus. C1/C2/C3/B1/B3/D1/D4/E2/E3/G2 aangescherpt: rapportage/verantwoording ≠ gezag, elektronisch dossiergebruik ≠ lokale aansturing, vervanging moet praktisch mogelijk zijn, geen beschikbaarheidsplicht, patiëntcommunicatie/Wkkgz/klachtenroute/verzekeringen/financieel risico explicieter als bewijsstukken. Rapport-interpretatiekader en About-modal bijgewerkt. Service-worker cache gebumpt naar `wrs-v1.6`. |
| v1.5   | 13 mei 2026 | 13 mei 2026 | A1 (vooraf afgesproken einddatum) niet langer als knock-out gemarkeerd; gewicht 3 blijft, maar geen automatische profiel-trigger meer — onderbouwd door Uber-nuance en logopedist 2026. POH-S referentie strenger gelabeld als btw-zaak/géén DBA-uitspraak, zowel in de app-modal als in de README. C3-helptekst expliciet gekoppeld aan de intake-vraag over eigen geschillenaansluiting, om dubbel lezen te voorkomen. VBAR (Wet verduidelijking beoordeling arbeidsrelaties) + Nota van Wijziging maart 2026 toegevoegd als apart monitorpunt in onderhoudsnotitie. Service-worker cache gebumpt naar `wrs-v1.5`. |
| v1.4   | 13 mei 2026 | 13 mei 2026 | About/referenties-modal toegevoegd in de app zelf, met compacte disclaimer, bronbasis, zorgspecifieke jurisprudentie, POH-S-nuance en compliancebronnen. Service-worker cacheversie bijgewerkt. |
| v1.3.4 | 13 mei 2026 | 13 mei 2026 | README-documentatie uitgebreid met zorgspecifieke rechtspraak/context: HAP-waarnemend huisarts 2023, intensivist 2024, logopedist 2026 en POH-S/btw-vrijstelling als ondersteunende context. Duidelijker onderscheid gemaakt tussen directe DBA-/arbeidsrelatierechtspraak en niet-DBA zorgcontext. Appcode ongewijzigd t.o.v. v1.3.3. |
| v1.3.3 | 13 mei 2026 | 13 mei 2026 | Mobiele rapportopmaak verbeterd: lange labels zoals LRZa / Zorgaanbiedersportaal en geschilleninstantie / klachtenregeling breken netter af binnen rapportkaders; slash-termen verduidelijkt naar spaties of “klachten- en geschillenroute”; service-worker cacheversie bijgewerkt. |
| v1.3.2 | 13 mei 2026 | 13 mei 2026 | README-scope aangescherpt: openingssamenvatting maakt expliciet dat de tool naast Uber/Deliveroo/LHV ook relevante zorgrechtspraak, LHV-sectorinformatie en zorgspecifieke compliancebronnen gebruikt. Appcode ongewijzigd t.o.v. v1.3. |
| v1.3.1 | 13 mei 2026 | 13 mei 2026 | README/documentatie bijgewerkt naar v1.3-status; uitgebreid referentieblok toegevoegd met primaire bronnen, LHV-sectorinformatie, Wkkgz/SKGE/DOKh en relevante jurisprudentie. Appcode ongewijzigd t.o.v. v1.3. |
| v1.3   | 13 mei 2026 | 13 mei 2026 | Recente rechtspraakduiding toegevoegd; vaste dagdelen, één opdrachtgever en HIS/EPD-gebruik genuanceerd; B1/B2/E1/E2/E3 aangescherpt; HAP/ANW-patroonkaart toegevoegd; service-worker cacheversie bijgewerkt. |
| v1.2.1 | 13 mei 2026 | 13 mei 2026 | SKGE en DOKh als huisarts-relevante voorbeelden toegevoegd bij de geschillen-/klachtenregeling, inclusief links in intake en rapport. Service-worker cacheversie bijgewerkt. |
| v1.2   | 13 mei 2026 | 13 mei 2026 | Aparte vraag over zelfstandige aansluiting bij een erkende geschilleninstantie/klachtenregeling toegevoegd naast LRZa en Wtza. Complianceblok, rapportkaart, bewijsmapregel, manifest en service-worker cacheversie bijgewerkt. C3 aangescherpt zodat de DBA-vraag vooral gaat over de opdrachtgerichte klachten-/geschillenroute. |
| v1.1   | 13 mei 2026 | 13 mei 2026 | Wtza/LRZa-check toegevoegd aan de intake als aparte compliance-as zonder invloed op de DBA-score. Rapport uitgebreid met apart Wtza/LRZa-adviesblok en bewijsmapregel. README, manifest en service-worker cacheversie bijgewerkt. |
| v1.0.1 | 5 mei 2026 | 5 mei 2026 | Volledige disclaimer in het rapport zelf (zichtbaar én printbaar). Concept-statusbanner ook printbaar bovenaan rapport. F1-toelichting neutraler geformuleerd. |
| v1.0   | 5 mei 2026 | 5 mei 2026 | Eerste release. 20 vragen, 7 blokken, dynamische score op type-opdracht en fase. Bewijsmappen-checklist als rapportonderdeel. PWA met offline-support en iOS-installatie. Concept-watermerk in beta-fase. |

## Bij wijziging in jurisprudentie of LHV-richtlijn

1. Versie ophogen in:
   - `STATE.version` en `STATE.peildatum` (in `<script>` blok in index.html)
   - `version-tag` element: `<span class="version-tag" id="version-display">vX.Y · peildatum DATUM</span>`
   - `CACHE_VERSION` in `service-worker.js` (zodat oude cache wordt geleegd)
2. Vragen in `QUESTIONS` array aanpassen waar nodig.
3. Hieronder changelog-regel toevoegen.
4. Commit + push naar GitHub.

**Let op:** als de service worker geüpdatet is, krijgen bestaande gebruikers de nieuwe versie pas na het sluiten en heropenen van de PWA (de oude SW blijft draaien tot de tab gesloten wordt).

## Bij beschikbaarheid officiële LHV-Vergewistool (Q3 2026)

Tool herpositioneren of intrekken, afhankelijk van overlap. Bij behoud:

- Disclaimer aanscherpen: prominente verwijzing naar de officiële LHV-Vergewistool.
- README aanpassen om duidelijk te maken dat deze tool een aanvullend hulpmiddel is.
- Eventueel feature-vergelijking opnemen.

## Eindverantwoordelijkheid

Niels Braakman — eigen werkversie, geen Anthropic/Claude-product, geen LHV-product.

## Changelog

### v1.7 — expliciete bronbalans en bronhiërarchie

- **Geen scorewijziging:** vragen, gewichten, profielgrenzen en knock-outlogica zijn identiek aan v1.6.2.
- **Bronhiërarchie in de app:** primaire rechtspraak → officiële uitvoering/beleid → beroeps-/sectorinformatie → secundaire duiding.
- **Waar bronnen uiteenlopen:** het rapport toont naast elkaar dat Deliveroo/Uber een holistische toets zonder vaste rangorde voorschrijven, dat de LHV meldt dat vier van zes huisartsencasusposities door Belastingdienst/ministeries zijn afgewezen, en dat de LHV die strikte beoordeling bestrijdt.
- **Officiële basis versterkt:** specifieke Belastingdienst-modelovereenkomsten voor incidentele en duurwaarneming (geldig t/m 31 december 2029), Rijksoverheid-koers van 6 maart 2026 en KNMT-publicatie over drie positief beoordeelde mondzorgcasussen toegevoegd.
- **Secundaire bronnen duidelijk begrensd:** FlexNieuws fungeert alleen als toegankelijke bespreking van Zorgmaatje; de individuele tandartscontrole blijft een niet-openbare signaalcasus; primaire uitspraak of officiële publicatie blijft leidend.
- **G2 geactualiseerd:** modelovereenkomst is een belangrijke basis maar geeft alleen zekerheid wanneer feitelijk volgens de afspraken wordt gewerkt.
- Versie-strings, manifestbeschrijving en service-worker cache bijgewerkt naar v1.7 / `wrs-v1.7`.

### v1.6.2 — Fiscaal Kompas ZZP Zorg (2024) als sectorduidingskader

Polish-release zonder functionele wijziging. De score, weging, knock-outs, vraagteksten en peildatum jurisprudentie zijn ongewijzigd t.o.v. v1.6.1.

- **Fiscaal Kompas ZZP Zorg (2024)** toegevoegd als laatste item in de bronnenlijst van de About/referenties-modal, expliciet gelabeld als *brancheorganisatiedocument, géén rechtspraak*. Het is opgesteld door werkgeversorganisaties in de zorg als handvat voor beoordeling van arbeidsrelaties; eerder vanuit fiscaal-juridische hoek bekritiseerd, maar de Zorgmaatje-uitspraak (ECLI:NL:RBROT:2026:5277) volgt feitelijk dezelfde elementen (tijdelijkheid, autonomie, vervanging, weigeringsvrijheid, geen interne inbedding, ondernemersrisico, meerdere opdrachtgevers, verantwoording ≠ gezag). Voor huisartsenwaarneming minder direct geschreven dan voor verpleging, maar bruikbaar als gestructureerde checklist naast LHV-publicaties.
- **Onderhoudsnotitie in About-modal** uitgebreid: "secundaire duidingen — zoals blogs over Belastingdienstcontroles" wordt "secundaire duidingen — zoals blogs over Belastingdienstcontroles of brancheorganisatiekaders zoals het Fiscaal Kompas ZZP Zorg". Beleidsregel ongewijzigd: primaire uitspraak of officiële bron blijft leidend.
- **Geen wijziging** in jurisprudentielijst, scoring, knock-outs, vraagteksten, rapport-interpretatiekader, intake-vragen, compliancesectie of VBAR-monitorpunt.
- Versie-strings op alle plekken in `index.html` bijgewerkt naar v1.6.2. Service-worker cache gebumpt naar `wrs-v1.6.2`. Peildatum jurisprudentie ongewijzigd (2 juni 2026); het Fiscaal Kompas is uit 2024 en geen nieuwe rechtsbron.

### v1.6.1 — polish: ECLI-nuance, codeleesbaarheid, bestandslijst

- **Zorgmaatje (ECLI:NL:RBROT:2026:5277)** voorzien van procedurele nuance in de About/referenties-modal én de README: de uitspraak is een gezamenlijk verzoek ex art. 96 Rv waarin partijen het eens waren, geen bestreden geschil tegen de Belastingdienst. Bedoeld om te voorkomen dat de referentie als "gewonnen handhavingszaak" wordt gelezen. ECLI geverifieerd op Rechtspraak.nl (beschikking 30 april 2026, kantonrechter mr. F. Aukema-Hartog, zaaknr. 11928258 VZ VERZ 25-6525).
- **Codeleesbaarheid:** de objecten in de `QUESTIONS`-array stonden deels aaneengeplakt op één regel; elk vraag-object staat nu op een eigen regel voor eenvoudiger toekomstig onderhoud. Geen functionele wijziging — score, weging en knock-outlogica zijn identiek aan v1.6.
- **Bestandslijst** in de README opgeschoond: de niet-meegeleverde `icon.svg` is uit de bestandsstructuur verwijderd.
- Versie-strings op alle plekken in `index.html` bijgewerkt naar v1.6.1. Service-worker cache gebumpt naar `wrs-v1.6.1`. Peildatum jurisprudentie ongewijzigd (2 juni 2026); geen nieuwe rechtspraak of weging.

### v1.6 — Zorgmaatje/tandarts-duiding, rapportage ≠ gezag, zorgzelfstandigheid concreter gemaakt

- **Zorgmaatje/zorgbureau 2026** toegevoegd als zorgspecifieke positieve rechtspraak. De tool verwerkt explicieter dat tijdelijke opdrachten, vrijheid in wanneer/hoe, verantwoording/rapportage zonder HR-gezag, vervanging, weigeringsvrijheid, geen interne organisatiepositie, ondernemersrisico en meerdere opdrachtgevers in samenhang relevant zijn.
- **Zzp-tandartscontrole 2026** toegevoegd als secundaire signaalcasus, niet als primaire rechtspraak: professionele autonomie, Wkkgz-verantwoordelijkheid, eigen klachtenregeling, eigen verzekeringen, patiëntcommunicatie en financieel risico zijn explicieter opgenomen in C1/C3/D4/G2.
- **C2/E2/E3** aangescherpt: rapporteren, verantwoording afleggen, HIS/EPD-gebruik en rapportage-apps zijn niet automatisch gezag wanneer zij functioneel voortkomen uit zorgkwaliteit, overdracht, dossiervoering, AVG of Wkkgz.
- **B1/B3/D1/D4/G2** aangescherpt met praktische vervangingsroute, geen beschikbaarheidsplicht tussen opdrachten, geen exclusieve binding, ondernemersrisico en het onderscheid tussen modelovereenkomst en feitelijke uitvoering.
- About/referenties-modal, rapport-interpretatiekader, README-bronnen en service-worker cache bijgewerkt naar v1.6.

### v1.5 — A1 herwogen, POH-S strenger gelabeld, C3 verduidelijkt, VBAR-monitorpunt

- **A1 (vooraf afgesproken einddatum/einde-bij-event)** niet langer als knock-out gemarkeerd. Gewicht 3 blijft behouden, maar A1-rood triggert niet meer automatisch een verhoogd of hoog profiel. Onderbouwing: na Uber 2025 en de logopedist-uitspraak van 2026 kan duurwaarneming met realistische horizon zelfstandig blijven, mits de overige indicatoren (vervanging, autonomie, geen formatie-inbedding, ondernemerschap) goed staan. De `why`-tekst bij A1 is aangepast om deze nuance expliciet te maken.
- **POH-S / btw-vrijstelling (ECLI:NL:GHSHE:2025:3536)** strenger gelabeld als btw-zaak en géén DBA-uitspraak — zowel in de About/referenties-modal als in de README. Het onderscheid btw-vrijstelling vs. DBA-kwalificatie is nu expliciet, om te voorkomen dat de uitspraak als zelfstandigheids-vrijbrief wordt gelezen.
- **C3-helptekst (klachten- en geschillenroute binnen de opdracht)** opent nu met een verwijzing naar de intake-vraag over de eigen zelfstandige aansluiting. Dat maakt direct duidelijk dat C3 specifiek gaat over de feitelijke en contractuele route binnen déze opdracht, niet over je eigen Wkkgz-status.
- **VBAR (Wet verduidelijking beoordeling arbeidsrelaties) + Nota van Wijziging maart 2026** toegevoegd als apart monitorpunt in de onderhoudsnotitie (zowel in de README als in de About-modal van de app). Bij inwerkingtreding moeten vraagteksten, weging en knock-outlogica opnieuw tegen het licht.
- Versie-strings op alle vijf plekken in `index.html` bijgewerkt naar v1.5 (CSS-header, header-badge, About-modal, footer, `STATE.version`).
- Service-worker cache gebumpt naar `wrs-v1.5`.

### v1.4 — About/referenties-modal

- About/referenties-modal toegevoegd aan de app, bereikbaar vanaf de intake en footer.
- Compacte app-uitleg toegevoegd met disclaimer, privacytekst en bronbasis.
- Jurisprudentieblok in de modal toegevoegd: Deliveroo, Uber, HAP-waarnemend huisarts 2023, waarnemend intensivist 2024, logopedist 2026 en POH-S/btw-vrijstelling als ondersteunende context.
- Compliancebronnen in de modal toegevoegd: LRZa, Wtza, Wkkgz, SKGE en DOKh.
- Modal mobielvriendelijk gemaakt met scrollbare inhoud en sluitknoppen.
- Service-worker cache gebumpt naar `wrs-v1.4`.

### v1.3.4 — README: zorgspecifieke rechtspraak/context

- README-referenties uitgebreid met een apart blok voor zorgspecifieke DBA-/arbeidsrelatierechtspraak.
- HAP-waarnemend huisarts 2023, waarnemend intensivist 2024 en logopedist 2026 explicieter gepositioneerd als directe zorgspecifieke rechtspraak voor de interpretatielaag.
- POH-S / medische btw-vrijstelling toegevoegd als ondersteunende zorgcontext, met expliciete waarschuwing dat dit geen directe DBA-uitspraak over een individuele zzp’er is.
- Secundaire duiding aangevuld met TaxLive, Taxence en NVvPO rond de POH-S-uitspraak.
- Geen wijziging in appcode of service-worker-cache; deze documentatie-update verandert de PWA-functionaliteit niet.

### v1.3.3 — mobiele rapportopmaak

- Lange rapportlabels krijgen spaties rond `/`, zodat mobiele browsers beter kunnen afbreken.
- `klachten-/geschillenroute` vervangen door `klachten- en geschillenroute` voor leesbaarheid.
- Rapportkaarten en checklistregels krijgen extra CSS voor nette woordafbreking binnen het kader.
- Service-worker cache gebumpt naar `wrs-v1.3.3`.

### v1.3.2 — README-scope verduidelijkt

- Openingssamenvatting onder “Wat het is” aangescherpt: de tool is niet meer alleen gebaseerd op Wet DBA, Deliveroo, Uber en LHV-modelovereenkomsten, maar ook op relevante zorgrechtspraak, LHV-sectorinformatie en zorgspecifieke compliancebronnen.
- Duidelijker onderscheid gemaakt tussen DBA-bronnen/interpretatiekader en aparte compliancebronnen zoals Wtza/LRZa en Wkkgz/SKGE/DOKh.
- Geen wijziging in appcode of service-worker-cache; deze documentatie-update verandert de PWA-functionaliteit niet.

### v1.3.1 — README en referenties

- README expliciet bijgewerkt naar documentatieversie v1.3.1, met appversie v1.3.
- Bronnen- en referentiesectie toegevoegd met primaire bronnen, LHV-sectorinformatie, Wtza/LRZa/Wkkgz, SKGE/DOKh en relevante jurisprudentie.
- Jurisprudentielijst aangevuld met directe Rechtspraak.nl-links naar Deliveroo, Uber, HAP-waarneming 2023, intensivist 2024 en logopedist 2026.
- Onderhoudsnotitie toegevoegd voor toekomstige updates.
- Geen wijziging in appcode of service-worker-cache; deze documentatie-update verandert de PWA-functionaliteit niet.

### v1.3 — recente rechtspraak en HAP-patroonduiding

- Interpretatiekader toegevoegd aan het rapport: Deliveroo, Uber, HAP 2023, intensivist 2024 en logopedist 2026.
- Vaste dagdelen, één opdrachtgever en gebruik van HIS/EPD/praktijkmiddelen worden duidelijker als contextsignalen behandeld, niet als automatische rode vlaggen.
- B1 vervanging aangescherpt: niet alleen clausule, maar ook praktische route/pool/netwerk.
- B2 roostering aangescherpt: vooraf afgesproken dagdelen zijn mogelijk; risico zit in roosterdwang, basisrooster en beschikbaarheidsplicht.
- E1/E2 uitgebreid met werker-inbedding: formatieplek, team-/vakgroeprol, HR-cyclus, verplichte overleggen en structurele neventaken.
- E3 aangescherpt: HIS/EPD, werkplek en procedures kunnen functioneel voortkomen uit patiëntveiligheid, dossiervoering, AVG en Wkkgz.
- HAP/ANW-rapportkaart toegevoegd: losse dienst, VIP-achtig patroon of structureel roosterblok.
- Knock-out- en rapporttekst genuanceerd naar samenloop van signalen in plaats van losse rode-vlagmechaniek.
- Service worker cache gebumpt naar `wrs-v1.3`.

### v1.2.1 — SKGE/DOKh voorbeelden

- SKGE en DOKh expliciet genoemd als gebruikelijke huisarts-relevante opties voor klachten-/geschillenregeling.
- Rapportlinks en bewijsmapadvies aangevuld met SKGE/DOKh.

### v1.2 — compliancecheck buiten DBA-score

- Aparte compliance-as toegevoegd voor Wtza/LRZa en geschillenregeling.
- C3 aangescherpt naar opdrachtgerichte klachten-/geschillenroute.
