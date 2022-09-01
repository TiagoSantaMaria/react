import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import LoadingComp from '../LoadingComp/LoadingComp'
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = () => {
  //NOTIFICACION ADD CARRITO
  const onAdd = (quantify) =>{
    alert(`Se agregaron ${quantify}`);
  }

  //DECLARACION ARRAY FOOD
  const [foods, setFoods] = useState([]);
  //DECLARACION ESTADO DE ESPERA SERVIDOR
  const [isLoading, setIsLoading] = useState(true);

  //PETICION A API
  useEffect(() => {
    try{
      fetch('json/productos.json')
      .then((response) => response.json())
      .then((food) => setFoods(food));
      setTimeout(()=>{
        setIsLoading(false);
      },2000)
    }catch (error) {
      console.log("error")
    }
  },[])

  return (
    <div className='divPadre'>
      <div className='divHijo'>
        {
          isLoading ? <LoadingComp/> :<ItemList foodsArray={foods} onAdd={onAdd}/> 
        }
      </div>
    </div>
  )
}

export default ItemListContainer