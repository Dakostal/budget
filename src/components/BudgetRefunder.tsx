import { useContext } from 'react'
import { BudgetContext } from './BudgetContext'

export const BudgetRefunder = () => {
    const { message } = useContext(BudgetContext)
    return (
        <div>
            <input type="text" />
            <button>Отменить транзакцию</button>
            <p>{message}</p>
        </div>
    )
}
