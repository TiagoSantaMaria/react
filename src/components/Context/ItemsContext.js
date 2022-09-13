import React, { useState, useEffect, createContext } from 'react';

// 1 - CREAR EL CONTEXTO
export const ItemsContext = createContext();

// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)

export const ItemsProvider = ({ children }) => {
// 3 - DECLARACION ARRAY FOOD DND RECUPERAMOS COMIDAS DE API
const [foodsMenu, setFoodsMenu] = useState([]);
// 4 - PETICION A API
useEffect(() => {
    try{
    fetch('json/productos.json')
    .then((response) => response.json())
    .then((food) => setFoodsMenu(food));
    }catch (error) {
        console.log("error")
    }
    },[])

    return (
    <ItemsContext.Provider value={[foodsMenu]}>
        {/* 5 - DENTRO DE ItemsContext.Provider PASAR CHILDREN */}
        {children}
    </ItemsContext.Provider>
    );
};