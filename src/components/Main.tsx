import style from './styles.module.scss'
import { BudgetManagement } from './BudgetManagement'
import { useContext } from 'react'
import { BudgetContext } from './BudgetContext'
import { BudgetTable } from './BudgetTable'
import { BudgetInput } from './BudgetInpit'

export const Main = () => {
    const { result, back } = useContext(BudgetContext)

    return (
        <div className={style.container}>
            <BudgetTable />
            {!result && <BudgetInput />}
            {result && (
                <div>
                    <BudgetManagement onBack={back} />
                </div>
            )}
        </div>
    )
}
