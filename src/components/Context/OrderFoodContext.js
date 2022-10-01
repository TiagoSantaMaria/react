import React, { useState, createContext } from 'react';

export const OrderFoodContext = createContext();

export const OrderFoodProvider = ({ children }) => {
    const [orderFood, setOrderFood] = useState([]);
    const [priceTotal, setPriceTotal] = useState(0);

    return (
        <OrderFoodContext.Provider value={[orderFood, setOrderFood, priceTotal, setPriceTotal]}>
            {children}
        </OrderFoodContext.Provider>
    );
};