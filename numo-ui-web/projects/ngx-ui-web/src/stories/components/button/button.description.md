## Pogu tipi pēc darbības prioritātes:

**Primārās (Zaļās)** - svarīgākai darbībai, CTA ("primary call to action" - darbība, kuru vēlamies, lai lietotājs veic).  
**Normālās (Pelēkās/Baltās)** - sekundārajai darbībai, lietojamas darbībām, kas visbiežāk ir optional.  
**Redirekta pogas linku vietā** (Links (pie Button) - done).  

## Stāvokļi:

- Default
- Hover
- Pressed
- Focused
- Disabled (No šī vajadzētu izvairīties, labāk pogu nerādīt kamēr darbība nav atļauta)

## Novietojums:

**Pogu novietojums lapā** - No kreisās uz labo.  
**Pogu novietojums savā starpā** (Secība, kura ir labajā pusē, kura kreisajā) - piemēram, labajā pusē Apstiprināt, kreisajā Atcelt. → poga, kura apstiprina darbību, tā ir secīgi pirmā. Izņemot, ja ir workflow un vajadzīga secība.  
- Agita Meinerte DLP mainām auto plānošanas pogu secību, neliekam stūru maliņas, pēdējā solī pārsaucam "Palikt plāna sadaļā pogu" par "Aizvērt". [NUMO-1745 - [IDEN] Plānošanas loga izmaiņas Open](https://jira.visma.com/browse/NUMO-1745)
**Ikonas uz pogām** (pirms teksta). Kreisajā pusē pirms teksta.  

## Izmēri:

**Pogas** (minimālas, maksimālas, pielāgots tekstam?) - saistīts ar desktop dizainu. Telefonam citas prasības (35-40 p).  
**Teksta, kas ir uz pogas** - lai nav atšķirības izmēros (standarta augstums, platums, lai teksts izskatās normāli). - atkarīgs no dizaina sistēmas.  
**Ikonas** - atkarīgs no dizaina elementiem.  
**Atstarpju** (kas ir uz pogām jeb padding) - atkarīgs no dizaina.  

## Teksts uz pogām:

- Skaidrs, saprotams  
- Tekstu koncepts - piemēram, Turpināt/Nākamais/Tālāk. Labi/Saglabāt. Izveidot/Pievienot. Skatāmies piemērus, funkcionalitāti. Unknown User (anda.arina) paskatīsies uz nākamo reizi.  
  - Izpēte Numo - [link](https://docs.google.com/spreadsheets/d/1iZdEi1e_cuO8biNmfyGE8RbwllE96wKQaEMmKjTvBHk/edit?usp=sharing)  
  - Izpēte HoP - [link](https://docs.google.com/document/d/14NwRoQT188yO2Yb9VqvZeLrFxy5ODtnWPtw2plodOI4/edit?usp=sharing)  
- Norāda precīzu darbību, kas notiks.    


## Tooltip

Nav nepieciešami, ja pogai ir nosaukums un to var viegli interpretēt.

## Teksti pogām:

Lai nodrošinātu pieejamību - ARIA text.

- Pievienot - ierakstu, rindu, lietotāju.
- Izveidot - dokumentu, lietotāju.

Liekam labus jautājumus un pogu nosaukumos specifisku darbību:

**Labi** - parasti komplektā ar Atcelt  
**Atcelt** - parasti komplektā ar Labi vai Saglabāt  
**Saglabāt** - parasti komplektā ar Atcelt  
**Dzēst** - ja konkrēti par dzēšanu  
**Sūtīt** - ja konkrēti par sūtīšanu  
**Aizvērt** - ja varam, tad neizmantojam  
**Palikt** - ja varam, tad neizmantojam  
**Jā** - ja varam, tad neizmantojam  
**Nē** - ja varam, tad neizmantojam  
**Ok** - neizmantojam

[Izpēte Numo](https://docs.google.com/spreadsheets/d/1iZdEi1e_cuO8biNmfyGE8RbwllE96wKQaEMmKjTvBHk/edit?usp=sharing)  
[Izpēte HoP](https://docs.google.com/document/d/14NwRoQT188yO2Yb9VqvZeLrFxy5ODtnWPtw2plodOI4/edit?usp=sharing)

**Atgriezties** - ja varam, tad neizmantojam  
**Turpināt** - turpināt procesu  
**Nākamais/Iepriekšējais**  
