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
    message: string
    back: () => void
    chooses: () => void
    spent: (amount: number) => void
    setInputId: (id: string) => void
    cancelTrans: (id: string) => void
}

export const BudgetContext = createContext<IBudgetContext>({
    budgetData: [],
    inputId: '',
    error: '',
    result: null,
    message: '',
    back: () => {},
    chooses: () => {},
    setInputId: () => {},
    spent: () => {},
    cancelTrans: () => {}
})
