import axios from 'axios';
import React, {
    createContext, useContext, useEffect, useReducer,
} from 'react';

import { MyUser } from '../types/MyUser';

interface State {
    isAuth: boolean,
    user: MyUser,
    loading: boolean,
}

interface Action {
    type: string,
    payload: any,
}

const stateContext = createContext<State>({
    isAuth: false,
    user: null,
    loading: true,
});

const disptachContext = createContext(null);

const reducer = (state: State, { type, payload }: Action) => {
    switch (type) {
    case 'LOGIN':
        return {
            ...state,
            isAuth: true,
            user: payload,
        };
    case 'LOGOUT':
        return {
            ...state,
            isAuth: false,
            user: null,
        };
    case 'STOP_LOADING':
        return { ...state, loading: false };
    default:
        throw new Error(`${type} is an unknown action type`);
    }
};

const AuthProvider = ({ children }: { children: React.ReactChild }) => {
    const initialState: State = {
        isAuth: false,
        user: null,
        loading: true,
    };

    const [state, defaultDispatch] = useReducer(reducer, initialState);
    const dispatch = (type: string, payload?: any) => defaultDispatch({ type, payload });

    const meRequest = async () => {
        try {
            const res = await axios.get('auth/me');
            dispatch('LOGIN', res.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        meRequest();
        dispatch('STOP_LOADING');
    }, []);

    return (
        <disptachContext.Provider value={dispatch}>
            <stateContext.Provider value={state}>
                {children}
            </stateContext.Provider>
        </disptachContext.Provider>
    );
};

export const useAuthState = () => useContext(stateContext);
export const useAuthDispatch = () => useContext(disptachContext);
export default AuthProvider;
