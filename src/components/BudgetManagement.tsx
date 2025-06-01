import { BudgetSpender } from './BudgetSpender'

export const BudgetManagement = ({ onBack }) => {
    return (
        <div>
            <BudgetSpender />
            <button onClick={onBack}>Главная</button>
        </div>
    )
}
