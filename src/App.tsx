import './App.css'
import { BudgetProvider } from './components/BudgetProvider'
import { Main } from './components/Main'

function App() {
    return (
        <div>
            <BudgetProvider>
                <Main />
            </BudgetProvider>
        </div>
    )
}

export default App
