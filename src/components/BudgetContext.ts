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
    amount: number
    back: () => void
    chooses: () => void
    setInputId: (id: string) => void
    setAmount: (id: number) => void
    addTransaction: (departmentId: string, amount: number) => void
}

export const BudgetContext = createContext<IBudgetContext>({
    budgetData: [],
    inputId: '',
    error: '',
    result: null,
    amount: 0,
    back: () => {},
    chooses: () => {},
    setInputId: () => {},
    setAmount: () => {},
    addTransaction: () => {}
})
