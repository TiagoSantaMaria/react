import React, { useState, useEffect, createContext } from 'react';
//CONTEXT CON FIREBASE

//FIREBASE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

// 1 - CREAR EL CONTEXTO
export const ItemsContext = createContext();

// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)
export const ItemsProvider = ({ children }) => {
    
// 3 - FIREBASE
    const [foodsMenu, setFoodsMenu] = useState([]);
    const getFoods = async() =>{
    const q = query(collection(db, 'food'));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) =>{
    docs.push({...doc.data()});
    })
    setFoodsMenu(docs);
    };
    
    useEffect(()=>{
        getFoods()
    },[])

    return (
    <ItemsContext.Provider value={[foodsMenu]}>
        {/* 5 - DENTRO DE ItemsContext.Provider PASAR CHILDREN */}
        {children}
    </ItemsContext.Provider>
    );
};