/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

//ROUTER DOM
import { useParams } from 'react-router-dom'

//FIRESTORE
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';

//MATERIAL UI
import LoadingComp from '../../components/LoadingComp/LoadingComp';

//COMPONENTE
import ItemList from '../../components/ItemList/ItemList';

//ESTILO
import './FoodCategory.css'

const FoodCategory = () => {
  const {category} = useParams();

  const [foodsCat, setFoodsCat] = useState([]);

  const getFoods = async() =>{
    const q = query(collection(db, 'food'), where('category', '==', category));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) =>{
      docs.push({...doc.data()});
    })
    setFoodsCat(docs);
    };

    useEffect(()=>{
        getFoods()
    },[])

    //Simulacion API - DECLARACION ESTADO DE ESPERA SERVIDOR
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(()=>{
      setIsLoading(false);
    },2000)

  return (
    <div className='divPadre'>
      {
        isLoading ?
          <LoadingComp/>
        :
          <div className='divHijo'>
            <ItemList foodsArray={foodsCat}/>
          </div>
      }
    </div>
  )
}

export default FoodCategory