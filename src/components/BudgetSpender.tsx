import { useState } from 'react'

export const BudgetSpender = () => {
    const [transaction, setTransaction] = useState(0)

    const spent = () => {
        setTransaction(transaction + 1)
    }
    return (
        <div>
            <input type="number" />
            <button>Добавить транзакцию</button>
            <p>{transaction}</p>
        </div>
    )
}
