import React, { useState, createContext } from 'react';

export const OrderFoodContext = createContext();

export const OrderFoodProvider = ({ children }) => {
    const [orderFood, setOrderFood] = useState([]);

    return (
        <OrderFoodContext.Provider value={[orderFood, setOrderFood]}>
            {children}
        </OrderFoodContext.Provider>
    );
};