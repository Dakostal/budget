import style from './styles.module.scss'
import { BudgetManagement } from './BudgetManagement'
import { useContext } from 'react'
import { BudgetContext } from './BudgetContext'

export const Main = () => {
    const { result, error, inputId, chooses, back, budgetData, setInputId } = useContext(BudgetContext)
    
    return (
        <div className={style.container}>
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
            {!result && (
                <div className={style.stateTable}>
                    <input type="text" value={inputId} onChange={(e) => setInputId(e.target.value)} />
                    <button onClick={chooses}>Выбрать</button>
                    <p>{error}</p>
                </div>
            )}

            {result && (
                <div>
                    <BudgetManagement onBack={back} />
                </div>
            )}
        </div>
    )
}
