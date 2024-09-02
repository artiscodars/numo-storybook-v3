
1. **Select**: Ja viens izvēlams ieraksts, tad nav ne radio, ne checkbox.
2. **Multi select**: Checkbox, ar iespēju spiest uz checkbox un/vai nosaukuma (label).
3. **Hierarhija**: Piemēram, str.v. koks vai darba laika grupas ar darba laikiem. DLP ir divi varianti - secības šabloni (dropdown) ar zaļu, bold. Vajadzībās - darba vietas ar knābīti, lai izvērstu. Izmantošanas skaits - Darba laika grupas ar darba laikiem ar checkbox.

### Drop-down - a Compact List of Choices

Drop-down pamatā ir ievadlauka atvasinājums.

[NNGroup: Drop-down Menus](https://www.nngroup.com/articles/drop-down-menus/)

### Izmantošana:

1. **Command menu**: Initiate an action based on the selected option.
2. **Navigation menu**: Take the user to a new location.
3. **Form filling**: Lets users select an option to enter into a form field.
4. **Attribute selection**: Lets users choose a value from a menu of possible values.

### Vajadzības/Prasības:

1. Tāpat kā ievadlaukam, arī drop-down ir label, iespējams, arī placeholder teksts, ikona, kas norāda uz izvēli (caret, lupa, kas cits).
2. Tāpat kā ievadlaukam, arī drop-down ir stāvokļi:
   - Enabled
   - Hover
   - Focused
   - Read only (white)
   - Error
   - Disabled
3. Ar drop-down var izvēlēties vienu vai vairākas vērtības (ar/bez checkbox, t.sk., spiežot uz nosaukuma), kamēr lietotājs izvēlas/noņem vairākas vērtības, drop-down saraksts paliek atvērts.

[NNGroup: Drop-down Menus](https://www.nngroup.com/articles/drop-down-menus/)

4. Drop-down izmanto pie noteikta vērtību skaita (pieņēmums, ka 2 vērtības neliek drop-down, bet izmanto radio pogas vai toggle - iespēju robežās, biežāk, ja atbild uz jautājumu - jā/nē).
5. Pie noteikta vērtību skaita nepieciešama vērtību meklēšana.
6. Tooltip (bet ar citu komponenti nekā šobrīd DLP).

### Par ko vēl jāpadomā:

1. Svarīgi izvērtēt, kā attēlot vairākas izvēlētās vērtības, piemēram, šobrīd DLP lietotājs redz vērtību, ja no drop-down ir izvēlēta viena vērtība, ja ir izvēlētas vairākas vērtības, lietotājs redz, cik vērtības ir izvēlētas, bet lai apskatītu tieši kādas vērtības, jāveic papildu klikšķis, jāatver filtrs.

2. Ja drop-down tiek izmantots filtrēšanai, jālemj par datu atlasi:
   - **Live**: Kur vērtības atjaunojas uzreiz pēc vērtības izvēles, → ja ir filtri, tad liekam live.
   - **Pa filtram**: Kur vērtības tiek atlasītas pēc to izvēles un pogas "Atlasīt" nospiešanas - šis pie lielākiem datiem, atskaitēm, tabulām.
   - **Batch**: Lietotājs izvēlas vērtības no vairākiem drop-down, pēc tam spiež pogu "Atlasīt visus" - šis pie lielākiem datiem, atskaitēm, tabulām.

3. Ja ir izvēlētas vairākas vērtības, jāparedz clear all darbība - ikona pie drop-down ar krustiņu (DLP) vai kādas citas idejas.
4. Drop-down vērtības var tikt kārtotas parastā vai hierarhiskā sarakstā, it īpaši, ja drop-down tiek pielietots filtrā, piemēram, str.v filtrs.
5. Ja drop-down ir hierarhisks, lietotājam jāspēj izšķirt dažādie līmeņi un nepārprotami jāsaprot, kuras vērtības var izvēlēties.
6. Ja nav ierakstu, ir tukšs drop-down - teksts: "Nav ierakstu."
7. Primāri drop down nosaukums, bet ja nav nosaukuma, tad var būt placeholder. Var būt tabulai sticky header.
8. Filtru drop-down teksts melnā krāsā, neliekam zilu (DLP tagad ir zils).
9. Drop-down izvēlētās vērtības pārlec uz saraksta augšu (descending pēc checked), pārējie ieraksti, piemēram, pēc alfabēta). Tas notiek nevis selektēšanas brīdī, bet pēc tam, kad darbs pabeigts. Nestrādā uz hierarhiskajiem drop down.

### Piemērs:

![Example Dropdown](https://cdn.dribbble.com/users/4686695/screenshots/19798304/media/f8d3635f0ebe1a22fd75653e5c7851ab.png?resize=1600x1200&vertical=center)

[Example Dropdown Image](https://cdn.dribbble.com/users/4686695/screenshots/19798304/media/f8d3635f0ebe1a22fd75653e5c7851ab.png?resize=1600x1200&vertical=center)

