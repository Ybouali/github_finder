import {  createContext, useReducer } from "react";
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
    const initState = null

    const [state, dispatch] = useReducer(alertReducer, initState)

    // Set an alert
    const setAlert = (meg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: {meg, type},
        })

        setTimeout(() => dispatch({type: 'RMOVE_ALERT'}), 3000)
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert,
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext