The `ConfirmDialog` component provides a modal dialog for confirmation purposes. It integrates with the Confirmation API to offer a customizable dialog UI for user interactions.

## Usage


- [Microcopy for confirmation dialogues](https://uxdesign.cc/are-you-sure-you-want-to-do-this-microcopy-for-confirmation-dialogues-1d94a0f73ac6)

- Izmantosim Confirmation-dialog nevis confirmation-popup no PrimeNG.  
  **Pogu novietojums**: Kreisā pusē, "Jā" un tad "Nē" (iespēja definēt "custom" nosaukumus).

- Dzēšot izmantot vienu universālu dzēšanas apstiprinājuma jautājumu, kuram pogas ir "Dzēst" vai "Atcelt."

- Darbības pogai jāsaucas tā, kādu darbību tā veic (piemēram, Dzēst, Saglabāt, Arhivēt, Sūtīt).

- Noraidījuma poga: `Esc`, apstiprināt: `Enter`. `SPACE` nedara neko (PrimeNG noklusēti space apstiprina). `Enter` darbojas tikai tad, ja viena no pogām ir primāra, ja abas vienādas, tad nē. (Happy path poga ir fokusā).

- Pogām jābūt vienādi izceltām vai arī primārā poga ir citā krāsā.

- Aizvēršanas krustiņš.

- Ir title, piemēram "Dzēst ierakstu".

- Ir paskaidrojums (dzēšanas ziņā).

- Ar/bez ikonām - pagaidām ir ar, bet varam veikt lietotāju testus, varbūt, ka nevajag. Šis paliek atvērts.

- Pelēks fons, kamēr dialog logs ir atvērts.

- Spiežot uz pelēkā overlay, dialog confirmation logu aizveram.

## Lietojam gadījumos, kad:

- Lietotāju vajag informēt par kaut ko svarīgu.
- Lietotājam nepieciešams ievadīt/apstiprināt informāciju pirms turpināšanas.

## Iespējamās sastāvdaļas:

- **Dialogloga nosaukums**: Don’t settle for a generic headline like "Warning" or "Are you sure."
- **Ikonas** (brīdinājums, krustiņš aizvēršanai u.tml.)
- **Teksts**, apraksts
- **Pogas** (apstiprināt/aizvērt)
- **Ķeksis**, lai turpmāk šo nerada (ja bieži var novērot, tad lietotājam iespēja uz nākotni atslēgt)
- **Undo iespēja**?

- Ja dialoglogā ir paredzēta datu ievade, tad nevajadzētu būt iespējai logu aizvērt ar `ESC` taustiņu.

## Reminder:

- Don’t blame the user. Example: ”The password is incorrect” is better than ”You entered incorrect information”.

## Novietojums:

- Dialoglogs varētu rādīties lapas centrā.

## Papildu informācija:

- Dialogi būs: [PrimeNG Confirm Dialog](https://primeng.org/confirmdialog).
- Modalie būs: [PrimeNG Modal Dialog](https://primeng.org/dialog).

Nepieciešams vienots stils, neatkarīgi no veida. Kad logs ir vaļā, tad pelēks fonā, bet ne vienmēr to vajag.

## Interakcija ar puscaurspīdīgo fonu

Uz tā uzspiežot aizveras apstiprinājuma logs. Vienāds ar atcelt pogas funkciju.
