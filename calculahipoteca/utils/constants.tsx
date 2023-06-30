interface IInterestRateType {
    id: number;
    name: string;
    description: string;
}


interface IBank {
    id: number;
    name: string;
    logo: string;
}


export const interestRateTypes: IInterestRateType[] = [
    {
        id: 1,
        name: "Fija",
        description: "La tasa de interés se mantiene constante durante toda la vida del préstamo."
    },
    {
        id: 2,
        name: "Variable",
        description: "La tasa de interés se ajusta periódicamente según un índice de referencia."
    },
    {
        id: 3,
        name: "Mixta",
        description: "La tasa de interés se mantiene fija durante un periodo de tiempo y luego se ajusta periódicamente según un índice de referencia."
    },
    {
        id: 4,
        name: "Fija con carencia",
        description: "La tasa de interés se mantiene constante durante toda la vida del préstamo, pero el pago mensual es menor durante un periodo de tiempo."
    },
    {
        id: 5,
        name: "Variable con carencia",
        description: "La tasa de interés se ajusta periódicamente según un índice de referencia, pero el pago mensual es menor durante un periodo de tiempo."
    }
];



// Pending to add the real logos of the banks
export const banks: IBank[] = [
    {
        id: 1,
        name: "CaixaBank",
        logo: "/img/logos/caixabank.jpg"
    },
    {
        id: 2,
        name: "BBVA",
        logo: "/img/logos/bbva.webp"
    },
    {
        id: 3,
        name: "Santander",
        logo: "/img/logos/santander.jpg"
    },
    {
        id: 4,
        name: "ING",
        logo: "/img/logos/ing2.png"
    },
    {
        id: 5,
        name: "Caixa Popular",
        logo: "/img/logos/caixapopular.jpg"

    }
];