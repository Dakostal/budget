import { useContext } from "react"
import { BudgetContext } from "./BudgetContext"
import style from './styles.module.scss'


export const BudgetTable = () => {
    const {budgetData} = useContext(BudgetContext)
    return (
        <div> 
            <table className={style.tableName}>
                <tr>
                    <th>ID:</th>
                    <th>Общий бюджет:</th>
                    <th>Потрачено:</th>
                </tr>
                {budgetData.map((obj) => ( 
                    <tr>
                        <td>{obj.departmentId}</td>
                        <td>{obj.totalBudget}</td>
                        <td>{obj.spent}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}