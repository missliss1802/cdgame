import React from 'react'
export const Context = React.createContext()

export const initialStateRes = []

export const resReducer = (state, action) => {
    switch (action.type) {
        case 'result':
            return {...action.result}
        default:
            return state;
    }
}