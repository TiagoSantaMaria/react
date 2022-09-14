import React, { useState, useContext } from 'react';
import ItemList from '../ItemList/ItemList';
import LoadingComp from '../LoadingComp/LoadingComp'
import '../ItemListContainer/ItemListContainer.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

//CONTEXT FOOD
import { ItemsContext } from '../Context/ItemsContext';

const ItemListContainer = () => {
  //Context
  const [foodsMenu] = useContext(ItemsContext);
  
  //Simulacion API - DECLARACION ESTADO DE ESPERA SERVIDOR
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(()=>{
    setIsLoading(false);
  },2000)

  //NOTIFICACION ADD CARRITO
  const onAdd = (quantify) =>{
    alert(`Se agregaron ${quantify}`);
  }

  return (
      <div className='divPadre'>
        {
          isLoading ? 
          <LoadingComp/>
          :
          <div className='divHijo'>
            <ItemList foodsArray={foodsMenu} onAdd={onAdd}/>
            <Link className='linksReact' to = {`/cart`}> <Button className='acomodoBoton' sx={{mt:1.5, bgcolor:'#64b5f6'}}>TERMINAR COMPRA</Button></Link>
          </div>
        }
      </div>
  )
}

export default ItemListContainer