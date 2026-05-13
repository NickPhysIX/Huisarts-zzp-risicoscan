# Waarneem-Risicoscan

Eigen werkversie — pre-opdrachtcheck schijnzelfstandigheid voor zzp-huisartsen, met aparte Wtza/LRZa- en geschillencommissie-compliancecheck met voorbeelden SKGE/DOKh, recente rechtspraakduiding en HAP-patroonherkenning. Werkt als web-app op iOS en Android.

**Appversie:** v1.3.3  
**README/documentatie:** v1.3.3 — mobiele rapportopmaak en tekstafbreking  
**Peildatum bronnen:** 13 mei 2026

## ⚠ Belangrijk

Deze tool is **niet verbonden aan de officiële LHV-Vergewistool** die door de LHV samen met WaarneemApp wordt ontwikkeld (verwacht Q3 2026). Deze tool is een eigen werkversie en biedt **geen juridisch advies, geen fiscaal advies, geen vrijwaring en geen garantie**. De Belastingdienst toetst altijd op feitelijke uitvoering. De Wtza/LRZa-/geschillencheck is een aparte compliancecheck naast de DBA-risicoscore.

## Wat het is

Een Progressive Web App (PWA) waarmee een zzp-waarnemend huisarts vooraf een opdracht kan toetsen op risico's rond schijnzelfstandigheid. Daarnaast bevat de intake drie aparte compliancevragen — LRZa, Wtza en geschilleninstantie/klachtenregeling — die niet meetellen voor de DBA-score, maar wel een eigen adviesblok in het rapport opleveren.

De DBA-scan bestaat uit 18-20 vragen (afhankelijk van type opdracht) en is nadrukkelijk niet alleen gebaseerd op Uber/Deliveroo/LHV. Het denkkader gebruikt, in hoofdlijnen:

- **Wet DBA / arbeidsrelaties** — huidige handhaving en beoordeling op feitelijke uitvoering.
- **Deliveroo-arrest (Hoge Raad, 2023)** — negen gezichtspunten voor de holistische kwalificatie van de arbeidsrelatie.
- **Uber-arrest (Hoge Raad, 2025)** — geen vaste rangorde tussen de gezichtspunten; extern ondernemerschap kan zwaar meewegen.
- **Relevante zorgrechtspraak** — o.a. HAP/waarnemend huisarts 2023, waarnemend intensivist 2024 en logopedist 2026. Deze rechtspraak wordt gebruikt om zorgspecifieke signalen zoals vaste dagdelen, HIS/EPD-gebruik, praktijkmiddelen, professionele autonomie en organisatorische inbedding genuanceerder te wegen.
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
- **Jurisprudentie-duiding in het rapport** — samenloop van signalen i.p.v. losse rode-vlagmechaniek
- **HAP/ANW-patroonherkenning** — losse dienst, VIP-achtig patroon of structureel roosterblok
- **Gepersonaliseerde bewijsmappen-checklist** — categorieën *archiveren / versterken / kritiek*
- Suggesties voor alternatieve werkvormen bij verhoogd/hoog risico
- Alle antwoorden per vraag, exporteerbaar als PDF via browser-print

## Bestandsstructuur

```
waarneem-risicoscan/
├── index.html              # Hoofdbestand: HTML, CSS, JS allemaal inline
├── manifest.webmanifest    # PWA manifest (naam, iconen, kleuren)
├── service-worker.js       # Offline-functionaliteit (cache-first)
├── icon.svg                # Bron-icoon (stilistische stethoscoop)
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

## Deployment op GitHub Pages

1. Maak een nieuwe GitHub-repo, bv. `waarneem-risicoscan`.
2. Upload alle bestanden uit deze map naar de root van de repo.
3. Ga naar **Settings → Pages**.
4. Bij **Source**: kies **main / root** (of de branch waar de bestanden staan).
5. Klik **Save**. Na ~1 minuut is de tool beschikbaar op `https://<jouw-username>.github.io/waarneem-risicoscan/`.

**Belangrijk:** PWA's vereisen HTTPS. GitHub Pages levert HTTPS automatisch — geen extra configuratie nodig.


## Bronnen en referenties

Deze tool is geen juridische bron en geen vervanging van professioneel advies. Onderstaande bronnen zijn opgenomen om de herkomst van het denkkader transparant te maken en om onderhoud van de tool makkelijker te maken. Bij wijzigingen in beleid, wetgeving of rechtspraak moeten de vraagteksten, toelichtingen en rapportduiding opnieuw worden gecontroleerd.

### Primaire bronnen — wetgeving, handhaving en officiële informatie

- Belastingdienst — Arbeidsrelaties en handhaving: https://www.belastingdienst.nl/wps/wcm/connect/nl/arbeidsrelaties/content/handhaving
- Belastingdienst — Arbeidsrelaties: zzp ja of nee: https://www.belastingdienst.nl/wps/wcm/connect/nl/arbeidsrelaties/arbeidsrelaties
- Belastingdienst — Handhavingsplan arbeidsrelaties: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/handhavingsplan-arbeidsrelaties
- Belastingdienst — Modelovereenkomsten: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/ondernemen/modelovereenkomsten-in-plaats-van-var/arbeidsrelaties
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
- InEen — nieuws en standpunten huisartsenspoedposten: https://ineen.nl/nieuws/

### Klachten- en geschillenregeling huisartsenzorg

- SKGE — Zorgverleners: https://www.skge.nl/zorgverleners/
- SKGE — Dienstverlening: https://www.skge.nl/zorgverleners/dienstverlening/
- SKGE — Informatie Wkkgz: https://www.skge.nl/zorgverleners/informatie-wkkgz/
- SKGE — Waarnemend huisarts en Wkkgz: https://www.skge.nl/zorgverleners/ik-ben-waarnemend-huisarts-moet-ik-ook-voldoen-aan-de-verplichtingen-uit-de-wkkgz/
- DOKh — Klachten en geschillen voor zorgverleners: https://dokh.nl/klachten-geschillen/
- DOKh — Uitspraken geschilleninstantie: https://dokh.nl/klachten-geschillen/uitspraken/

### Jurisprudentie die in het interpretatiekader van de tool wordt gebruikt

- Hoge Raad — Deliveroo, 24 maart 2023, ECLI:NL:HR:2023:443: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:HR:2023:443
- Hoge Raad — Uber, 21 februari 2025, ECLI:NL:HR:2025:319: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:HR:2025:319
- Rechtbank Midden-Nederland — huisartsenpost / waarnemend huisarts, 15 november 2023, ECLI:NL:RBMNE:2023:6072: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBMNE:2023:6072
- Rechtbank Zeeland-West-Brabant — waarnemend intensivist / medisch specialist, 4 juli 2024, ECLI:NL:RBZWB:2024:4597: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBZWB:2024:4597
- Rechtbank Zeeland-West-Brabant — logopedist, 13 februari 2026, gepubliceerd 20 maart 2026, ECLI:NL:RBZWB:2026:1391: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBZWB:2026:1391

### Secundaire duiding en achtergrond

Secundaire bronnen zijn bruikbaar voor interpretatie en onderhoud, maar zijn geen bron van recht. Gebruik ze altijd naast de primaire uitspraak of officiële publicatie.

- Raadgevers Kuijkhoven — Belastingdienst gaf geen oordeel over schijnzelfstandigheid zzp-huisarts: https://www.raadgevers.nl/blog/belastingdienst-gaf-geen-oordeel-over-schijnzelfstandigheid-zzp-huisarts/
- Raadgevers Kuijkhoven — Rechter bevestigt opnieuw: waarnemen is nog steeds mogelijk: https://www.raadgevers.nl/blog/rechter-bevestigt-opnieuw-waarnemen-is-nog-steeds-mogelijk/
- KVDL — Rechtbank: waarnemend medisch specialist is schijnzelfstandige: https://kvdl.com/artikelen/rechtbank-waarnemend-medisch-specialist-is-schijnzelfstandige
- KBS Advocaten — Overeenkomst van opdracht met waarnemend intensivist kwalificeert als arbeidsovereenkomst: https://www.kbsadvocaten.nl/overeenkomst-van-opdracht-met-waarnemend-intensivist-kwalificeert-als-arbeidsovereenkomst-deliveroo-gezichtspunten/
- Salaris Vanmorgen — Overeenkomst van opdracht voor logopedist, geen gezagsverhouding: https://www.salarisvanmorgen.nl/2026/03/20/overeenkomst-van-opdracht-voor-logopedist-geen-gezagsverhouding/

### Onderhoudsnotitie bij bronnen

Bij updates eerst controleren:

1. Officiële bronnen van Belastingdienst, Rijksoverheid, LHV en Toetreding Zorgaanbieders.
2. Volledige tekst van relevante uitspraken op Rechtspraak.nl.
3. Of secundaire duidingen nog overeenkomen met de actuele primaire bronnen.
4. Of nieuwe rechtspraak aanleiding geeft om scoreweging, knock-outvragen of rapporttaal aan te passen.

## Versiebeheer

| Versie | Datum | Peildatum jurisprudentie | Wijzigingen |
|--------|-------|--------------------------|-------------|
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
