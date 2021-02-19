import React, {createContext, useReducer} from "react";
import Reducer from './reducers'


const initialState = {
    user: [],
    type:'',
    error: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext([initialState, function(){}]);
export default Store;