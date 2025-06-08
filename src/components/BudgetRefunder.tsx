import { useContext, useState } from 'react'
import { BudgetContext } from './BudgetContext'

export const BudgetRefunder = () => {
    const { refund } = useContext(BudgetContext)
    const [transactionId, setTransactionId] = useState('')
   
    return (
        <div>
            <input type="text" value={transactionId} onChange={(e)=> setTransactionId(e.target.value)} />
            <button onClick={()=> refund(transactionId)}>Отменить транзакцию</button>
        </div>
    )
}
