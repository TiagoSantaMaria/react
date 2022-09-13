import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import LoadingComp from '../LoadingComp/LoadingComp'
import '../ItemListContainer/ItemListContainer.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';




const ItemListContainer = ({orderFood}) => {
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
        {
          isLoading ? 
          <LoadingComp/>
          :
          <div className='divHijo'>
            <ItemList foodsArray={foods} onAdd={onAdd} orderFood={orderFood}/>
            <Link className='linksReact' to = {`/cart`}> <Button className='acomodoBoton' sx={{mt:1.5, bgcolor:'#64b5f6'}}>TERMINAR COMPRA</Button></Link>
          </div>
        }
      </div>
  )
}

export default ItemListContainer