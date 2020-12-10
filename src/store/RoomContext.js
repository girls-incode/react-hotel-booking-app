import React, { createContext, useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'changeRoom':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
    return (
        <RoomContext.Provider value={useReducer(reducer, {})}>
            {children}
        </RoomContext.Provider>
    )
};