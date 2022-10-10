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

  return (
      <div className='divPadre'>
        {
          isLoading ? 
          <LoadingComp/>
          :
          <div>
            <div className='divHijo'>
              <ItemList foodsArray={foodsMenu}/>
            </div>
            <div className='centrarDiv'>
              <Link className='linkReactFoodMenu' to = {`/cart`}> <Button className='acomodoBoton' sx={{bgcolor:'#64b5f6', color:'black'}}>IR A CARRITO</Button></Link>
            </div>
          </div>
          
        }
      </div>
  )
}
export default ItemListContainer