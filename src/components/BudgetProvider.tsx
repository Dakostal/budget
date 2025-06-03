import { useState } from 'react'
import { BudgetContext } from './BudgetContext'
import { budget } from './budget'

export const BudgetProvider = ({ children }) => {
    const [budgetData, setBudgetData] = useState(budget)
    const [inputId, setInputId] = useState('')
    const [result, setResult] = useState(null)
    const [error, setError] = useState('')
    const [amount, setAmount] = useState(0)
  

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
        setBudgetData((prevData)=> 
            prevData.map((dept)=> {
                if (dept.departmentId === departmentId) {
                    return {
                        ...dept,
                        spent: dept.spent + amount,
                        transactions: [
                            ...dept.transactions,
                        ]
                    }
                }
                return dept
            })
    )
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
                setInputId,
                setAmount,
                addTransaction,
                amount,
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
