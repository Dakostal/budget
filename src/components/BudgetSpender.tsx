import { useContext, useState } from 'react'
import { BudgetContext } from './BudgetContext'
import { BudgetRefunder } from './BudgetRefunder'

export const BudgetSpender = () => {
    const { message, spent } = useContext(BudgetContext)
    const [amount, setAmount] = useState(0)

    return (
        <div>
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
            <button disabled={amount <= 0} onClick={() => spent(amount)}>
                Добавить транзакцию
            </button>
            <BudgetRefunder />
            <p>{message}</p>
        </div>
    )
}
