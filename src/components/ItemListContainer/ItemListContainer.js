import React, { useState, useContext } from 'react';
//MATERIAL UI
import ItemList from '../ItemList/ItemList';
import LoadingComp from '../LoadingComp/LoadingComp'
import { Button } from '@mui/material';


//CSS
import '../ItemListContainer/ItemListContainer.css'

//ROUTER DOM
import { Link } from 'react-router-dom';
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
            <Link className='linksReact' to = {`/cart`}> <Button className='acomodoBoton' sx={{mt:1.5, bgcolor:'#64b5f6'}}>IR A CARRITO</Button></Link>
          </div>
        }
      </div>
  )
}
export default ItemListContainer