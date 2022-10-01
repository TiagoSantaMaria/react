import React, { useState, createContext } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [generalCounter, setGeneralCounter] = useState(0);

    return (
        <CounterContext.Provider value={[generalCounter, setGeneralCounter]}>
            {children}
        </CounterContext.Provider>
    );
};