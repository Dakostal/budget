import style from './styles.module.scss'
import budget from '../assets/budget.json'
import { useState } from 'react'

export const Main = () => {
    const [inputId, setInputId] = useState('')
    const [result, setResult] = useState('')

    const chooses = () => {
        const found = budget.find(budg => budg.departmentId.toString() === inputId)
        if (found) {
            setResult('управления бюджетом')
        } else {
            setResult('ID не верный')
        }
    }

    return(
        <div className={style.container}>
            <table className={style.tableName}>
                <tr>
                    <th>ID:</th>
                    <th>Общий бюджет:</th>
                    <th>Потрачено:</th>

                </tr>
                {budget.map((obj) => (
                    <tr>
                        <td>{obj.departmentId}</td>
                        <td>{obj.totalBudget}</td>
                        <td>{obj.spent}</td>
                    </tr>
                ))}

            </table>
            <div className={style.stateTable}>
                <input 
                type="text" 
                id={inputId}
                onChange={(e) => setInputId(e.target.value)}
                />
                <button onClick={chooses}>Выбрать</button>
                <p>{result}</p>
            </div>
        </div>
    )
}