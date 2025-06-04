import { useContext } from 'react'
import { BudgetContext } from './BudgetContext'
import style from './styles.module.scss'

export const BudgetInput = () => {
    const { error, inputId, chooses, setInputId } = useContext(BudgetContext)

    return (
        <div className={style.stateTable}>
            <input type="text" value={inputId} onChange={(e) => setInputId(e.target.value)} />
            <button onClick={chooses}>Выбрать</button>
            <p>{error}</p>
        </div>
    )
}
