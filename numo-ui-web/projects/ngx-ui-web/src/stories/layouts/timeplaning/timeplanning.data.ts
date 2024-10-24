export const TableData = [
    {
        darbaLaiks: "8:00 - 17:00 (8h 15min)",
        partraukums: "Pusdienlaiks",
        darbaVieta: "Ofiss",
    },
    {
        darbaLaiks: "18:00 - 23:00 (4h 45min)",
        partraukums: "15min",
        darbaVieta: "Noliktava",
    },
];
export const TableData2 = [
    {
        amats: "Biroja administrators",
        kompetence: "Māk rakstīt | Sertificēts revidents",
        kompetencuSkaits: "2",
        darbniekuSkaits: "min: 1 / max: 1 / opt: 1",
    },
];
export const MenuItem = [
    { label: "Darba laiki" },
    { label: "Atpūtas laiki" },
    { label: "Izmantošanas skaits" },
    { label: "Secības šabloni" },
];

export const Products = [
    {
        id: 1,
        code: "f230fh0g3",
        name: "Darba dienas",
        slots: ["8:00 - 17:00 (8h 15min)", "18:00 - 23:00 (4h 45min)"],
        badgeName: "Parasts",
        badgeSeverity: "info",
        inventoryStatus: "Standarta",
        days: [1, 2, 3, 4, 5],
    },
    {
        id: 2,
        code: "f230fh0g3",
        name: "Citas foršas darba dienas",
        slots: ["8:00 - 17:00 (8h 15min)", "18:00 - 23:00 (4h 45min)"],
        badgeName: "Ideāls",
        badgeSeverity: "success",
        inventoryStatus: "Nestandarta",
        days: [1, 4, 5],
        dates: ["12.12.2024", "12.12.2024"],
    },
    {
        id: 3,
        code: "f230fh0g3",
        name: "Brīvdienas",
        slots: ["8:00 - 17:00 (8h 15min)", "18:00 - 23:00 (4h 45min)"],
        badgeName: "Nestandarta",
        badgeSeverity: "warning",
        inventoryStatus: "Standarta",
        days: [1, 5],
        dates: ["12.12.2024"],
    },
];
