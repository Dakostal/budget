import { useState } from 'react'
import { BudgetContext } from './BudgetContext'
import { budget } from './budget'

interface IBudget {
    inputId: string
    error: string
    result: any
    departmentId: string
    totalBudget: number
}
interface IBudgetItem {
    departmentId: string
    spent: number
}
export const BudgetProvider = ({ children }) => {
    const [budgetData, setBudgetData] = useState<IBudgetItem[]>(budget)
    const [inputId, setInputId] = useState('')
    const [result, setResult] = useState<IBudgetItem | null>(null)
    const [error, setError] = useState('')

    const chooses = () => {
        const found = budgetData.find((budg) => budg.departmentId.toString() === inputId)
        if (found) {
            setResult(found)
            setError('')
        } else {
            setResult(null)
            setError('ID не верный')
        }
    }

    const back = () => {
        setResult(null)
        setInputId('')
        setError('')
    }
    return (
        <BudgetContext.Provider
            value={{
                budgetData,
                chooses,
                back,
                result,
                error,
                inputId,
                setInputId
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
