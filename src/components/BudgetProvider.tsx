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
        const newTransactions = {
            id: Date.now().toString(),
            amount,
            date: new Date().toISOString(),
        }

        const target = budgetData.find((dept)=> dept.departmentId === departmentId)
        if(target) {
            target.spent += amount
            target.transactions.push(newTransactions)
        }
        console.log(budgetData);
        setBudgetData([...budgetData])
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

    const cancelTransaction = (departmentId: string, transactionId: string) => {
        setBudgetData((prevData)=> 
        prevData.map((dept) => {
            if (dept.departmentId !== departmentId) return dept;
            const transactionRemuve = dept.transactions.find((t)=> t.id === transactionId)
            if (!transactionRemuve) return dept

            return {
                ...dept,
                spent: dept.spent - transactionRemuve.amount,
                transactions: dept.transactions.filter((t) => t.id !== transactionId)
            }
        }))}

    const refund = (transactionId: string) => {
         if (!result) return
         cancelTransaction(result.departmentId, transactionId)
         setMessage('Транзакция отменина')
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
                spent,
                refund,
                message
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}

const arr = [
  {
    id: 1,
    array: [
      {
        id: 11,
      },
      {
        id: 12,
      },
    ],
  },
  {
    id: 2,
    array: [
      {
        id: 21,
      },
      {
        id: 22,
      },
    ],
  },
  {
    id: 3,
    array: [
      {
        id: 31,
      },
      {
        id: 32,
      },
    ],
  },
]

const newarr = arr.map(item => {
    if(item.id === 2) return ({
        ...item,
        array: item.array.filter((item)=> item.id !== 21)
    })
    return item
})

console.log(newarr);