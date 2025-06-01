import { createContext } from 'react'
interface IBudget {
    inputId: string
    error: string
    result: any
}

interface IBudgetContext extends IBudget {
    budgetData: IBudget[]
    back: () => void
    chooses: () => void
    setInputId: (id: string) => void
}

export const BudgetContext = createContext<IBudgetContext>({
    budgetData: [],
    inputId: '',
    error: '',
    result: null,
    back: () => {},
    chooses: () => {},
    setInputId: () => {}
})
