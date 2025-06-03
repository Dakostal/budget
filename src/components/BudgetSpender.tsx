import { useContext, useState } from 'react'
import { BudgetContext } from './BudgetContext'

export const BudgetSpender = () => {
    const { amount, setAmount, budgetData, result, addTransaction } = useContext(BudgetContext)
    const [massage, setMassage] = useState('')
    
        const spent = () => {
        if(!result) return

        const departmen = budgetData.find((item)=> item.departmentId === result.departmentId)
        if(!departmen) return

        const remainingBudget = departmen.totalBudget - departmen.spent

        if(amount <= 0) {
            setMassage('Транзакция прошла успешно')
        } else if (amount > remainingBudget) {
            setMassage('Недостаточно средств')
        } else {
            addTransaction(result.departmentId, amount)
            setMassage('Транзакция прошла успешно')
        }

    }
    

    return (
        <div>
            <input type="number" value={amount} onChange={(e)=> setAmount(Number(e.target.value))}/>
            <button onClick={spent}>Добавить транзакцию</button>
            <p>{massage}</p>
        </div>
    )
}
