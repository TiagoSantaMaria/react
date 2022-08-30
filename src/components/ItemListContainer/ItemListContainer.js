import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  //NOTIFICACION ADD CARRITO
  const onAdd = (quantify) =>{
    alert(`Se agregaron ${quantify}`);
  }

  //DECLARACION ARRAY FOOD
  const [foods, setFoods] = useState([]);
  
  //PETICION A API
  useEffect(() => {
    try{
      fetch('json/productos.json')
      .then((response) => response.json())
      .then((food) => setFoods(food));
    }catch (error) {
      console.log("error")
    }
  },[])

  return (
    <div>
      <ItemList
        foodsArray={foods}
        onAdd={onAdd}
      />
    </div>
  )
}

export default ItemListContainer