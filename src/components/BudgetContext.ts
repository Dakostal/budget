import { createContext } from 'react'

export interface IBudgetItem {
    departmentId: string
    spent: number
    totalBudget: number
    transactions: {
        id: string
        amount: number
        date: string
    }[]
}

interface IBudgetContext {
    inputId: string
    error: string
    result: IBudgetItem | null
    budgetData: IBudgetItem[]
    back: () => void
    chooses: () => void
    spent: (amount: number) => void
    setInputId: (id: string) => void
    addTransaction: (departmentId: string, amount: number) => void
}

export const BudgetContext = createContext<IBudgetContext>({
    budgetData: [],
    inputId: '',
    error: '',
    result: null,
    back: () => {},
    chooses: () => {},
    setInputId: () => {},
    addTransaction: () => {},
    spent: () => {}
})


