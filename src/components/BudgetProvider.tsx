import { BudgetContext } from "./BudgetContext"


export const BudgetProvider = ({children}) => {

    

    return(
        <BudgetContext.Provider value={}>
            {children}
        </BudgetContext.Provider>
    )
}