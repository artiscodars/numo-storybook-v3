## Usage

- Lietotājam nepieciešams ievadīt/apstiprināt informāciju pirms turpināšanas.
- Piemēram, dzēšana ar obligātu komentāru.

### Iespējāmās sastāvdaļas:

- Ar virsrakstu.
- Bez ikonas (uz telefona nebūs jādomā, ko ar ikonu darīt). Atvērts jautājums par to, vai vajag, tāpat kā confirmation logiem.
- Iespēja ievietot ievades laukus un paskaidrojošus tekstus.
- Ar pelēku overlay, formu ļauj aizvērt spiežot uz overlay, ja forma nav mainīta.
- Ja forma ir mainīta un vēlas aizvērt logu, aizstāj saturu ar jautājumu, vai tiešām vēlas aizvērt.

### Papildu sastāvdaļas:

- **Dialogloga nosaukums**: Don’t settle for a generic headline like "Warning" or "Are you sure."
- **Ikonas**: Brīdinājums, krustiņš aizvēršanai u.tml.
- **Teksts**: Apraksts.
- **Pogas**: Apstiprināt/aizvērt.
- **Ķeksis**: Lai turpmāk šo nerada (ja bieži var novērot, tad lietotājam iespēja uz nākotni atslēgt).
- **Undo iespēja**?

Ja dialoglogā ir paredzēta datu ievade, tad nevajadzētu būt iespējai logu aizvērt ar `ESC` taustiņu.

### Reminder:

- Don’t blame the user. Example: “The password is incorrect” is better than “You entered incorrect information.”

### Novietojums:

- Dialoglogs varētu rādīties lapas centrā. Izmērs nav pa visu ekrānu, bet pielāgots saturam un datu apjomam.
- Maksimālais augstums un scroll - ja neielien ekrāna 90% augstumā.
- Ja iespējams, tad drag and drop šo dialoglogu.

## Papildu informācija:

- Dialogi būs: [PrimeNG Confirm Dialog](https://primeng.org/confirmdialog).
- Modalie būs: [PrimeNG Modal Dialog](https://primeng.org/dialog).

Nepieciešams vienots stils, neatkarīgi no veida. Kad logs ir vaļā, tad pelēks fonā, bet ne vienmēr to vajag.

Vai gribam aizvērt ar nospiešanu ārpus loga, lai to aizvērtu? Aizver, ja spiež uz pogas, krustiņa vai ārpus loga. Ja dati ir ievadīti, tad nevar nospiest uz pelēkās zonas.

- Agita Meinerte DLP pie ieraksta dzēšanas uzstādījumos confirmation paziņojumam ir trīs varianti (konkrēts ieraksta nosaukums, šo, rinda). Vajadzētu vienādot formulējumu.

---

[PrimeNG Confirm Dialog](https://primeng.org/confirmdialog)  
[PrimeNG Modal Dialog](https://primeng.org/dialog)
