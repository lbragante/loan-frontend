export interface Loan {
    name: string,
    value: Number,
    installments: Number
}

export interface SimulationLoan {
    name: string,
    installments: Number,
    valueInstallments: Number,
    total: Number
}
