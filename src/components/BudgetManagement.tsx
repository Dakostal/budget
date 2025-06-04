import { BudgetRefunder } from './BudgetRefunder'
import { BudgetSpender } from './BudgetSpender'

export const BudgetManagement = ({ onBack }) => {
    return (
        <div>
            <BudgetSpender />
            <BudgetRefunder />
            <button onClick={onBack}>Главная</button>
        </div>
    )
}
