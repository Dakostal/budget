import { useState } from 'react'
import { BudgetContext, type IBudgetItem } from './BudgetContext'
import { budget } from './budget'

export const BudgetProvider = ({ children }) => {
    const [budgetData, setBudgetData] = useState<IBudgetItem[]>(budget)
    const [inputId, setInputId] = useState('')
    const [result, setResult] = useState<IBudgetItem | null>(null)
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

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

    const addTransaction = (departmentId: string, amount: number) => {
        setBudgetData((prevData) =>
            prevData.map((dept) => {
                if (dept.departmentId === departmentId) {
                    return {
                        ...dept,
                        spent: dept.spent + amount,
                        transactions: [...dept.transactions]
                    }
                }
                return dept
            })
        )
    }

    const spent = (amount: number) => {
        if (!result) return

        const departmen = budgetData.find((item) => item.departmentId === result.departmentId)
        if (!departmen) return

        const remainingBudget = departmen.totalBudget - departmen.spent

        if (amount > remainingBudget) return setMessage('Транзакция не прошла')
        addTransaction(result.departmentId, amount)
        setMessage('Транзакция прошла успешно')
    }

    const cancelTrans = () => {}

    return (
        <BudgetContext.Provider
            value={{
                budgetData,
                chooses,
                back,
                result,
                error,
                inputId,
                setInputId,
                spent,
                cancelTrans,
                message
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
