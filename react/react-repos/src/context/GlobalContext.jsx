import {
    createContext,
    useReducer,
} from 'react'
import {
    reducer,
} from '@/reducer/repoReducer'


export const GlobalContext = createContext();

const initialState = {
    repos: [],
    loading: false,
    error: null,
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {repos, loading, error} = state;
    return (
        // state 应用状态
        <GlobalContext.Provider  value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}