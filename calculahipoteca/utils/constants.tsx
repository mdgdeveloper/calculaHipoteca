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
        logo: "https://www.caixabank.com/deployedfiles/particulares/Estaticos/imagenes/logo-caixabank.png"
    },
    {
        id: 2,
        name: "BBVA",
        logo: "https://www.bbva.com/wp-content/uploads/2018/07/BBVA_logo_2019.png"
    },
    {
        id: 3,
        name: "Santander",
        logo: "https://www.santander.com/content/images/brand/logo-santander.svg"
    },
    {
        id: 4,
        name: "ING",
        logo: "https://www.ing.es/content/dam/ing-es/images/ing-logo.png"
    },
    {
        id: 5,
        name: "Caixa Popular",
        logo: "https://www.caixapopular.es/wp-content/uploads/2019/03/logo-caixa-popular.png"

    }
];