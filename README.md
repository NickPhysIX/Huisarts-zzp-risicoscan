# Waarneem-Risicoscan

Eigen werkversie — pre-opdrachtcheck schijnzelfstandigheid voor zzp-huisartsen. Werkt als web-app op iOS en Android.

## ⚠ Belangrijk

Deze tool is **niet verbonden aan de officiële LHV-Vergewistool** die door de LHV samen met WaarneemApp wordt ontwikkeld (verwacht Q3 2026). Deze tool is een eigen werkversie en biedt **geen juridisch advies, geen fiscaal advies, geen vrijwaring en geen garantie**. De Belastingdienst toetst altijd op feitelijke uitvoering.

## Wat het is

Een Progressive Web App (PWA) waarmee een zzp-waarnemend huisarts vooraf een opdracht kan toetsen op risico's rond schijnzelfstandigheid. De scan bestaat uit 18-20 vragen (afhankelijk van type opdracht) op basis van:

- Wet DBA (huidige wetgeving)
- Deliveroo-arrest (Hoge Raad, 2023)
- Uber-arrest (2025)
- LHV-modelovereenkomsten

De tool genereert een rapport met:

- Risicoprofiel (lager / verhoogd / hoog)
- Score op dynamische maxscore (afhankelijk van type opdracht en fase)
- Knock-out signalering bij rode antwoorden op kernvragen
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

## Versiebeheer

| Versie | Datum | Peildatum jurisprudentie | Wijzigingen |
|--------|-------|--------------------------|-------------|
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
