/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './Cart.css'

//CONTEXT ORDERFOOD
import { OrderFoodContext } from '../../components/Context/OrderFoodContext';

//COMPONENT
import ItemInCart from '../../components/ItemInCart/ItemInCart'
import PriceTotal from '../../components/PriceTotal/PriceTotal';
import FormFinishFood from '../../components/FormFinishFood/FormFinishFood';

//ROUTER DOM
import { Link } from 'react-router-dom';

//MATERIAL
import { Button } from '@mui/material';

//CSS
import './Cart.css'

import picture from "../../assets/images/carrito-vacio.png"


const Cart = () => {
  //CONTEXT ORDERFOOD
  const [orderFood, setOrderFood, priceTotal, setPriceTotal] = useContext(OrderFoodContext);

  const [terminarCompra,setTerminarCompra] = useState(false);
  const finishFood = () =>{
    setTerminarCompra(true);
    console.log(terminarCompra);
  }


  return (
    <div className='divPadre'>
      {
        orderFood.length !== 0 ?
        <div className='divHijo'>
        {
          orderFood.map((food) =>
            <div key={food.idFood} className='divBebe'>
            {
              <ItemInCart
                food={food}
                orderFood={orderFood}
                setOrderFood={setOrderFood}
                priceTotal={priceTotal}
                setPriceTotal={setPriceTotal}
              />
            }
          </div>
          )
        }
          <PriceTotal
            orderFood={orderFood}
            priceTotal={priceTotal}
            setPriceTotal={setPriceTotal}
          />
          <Button onClick={finishFood} className='acomodoBotonEnItemDetail' sx={{ml:4.5, bgcolor:'#00796b', color:'white'}}>TERMINAR COMPRA</Button>
          {terminarCompra ? <FormFinishFood orderFood={orderFood}/>:console.log("hola")}
        </div>
      :
        <div className='centrar'>
          <p>CARRO VACIO</p>
          <img src={picture} alt='NOTIFICACION CARRO VACIO'/>
          <Link className='linkReactFoodMenu' to = {`/foodmenu`}> <Button className='acomodoBotonEnItemDetail' sx={{ml:4.5, mt:1, bgcolor:'#00796b', color:'white'}}>VOLVER A CARTA</Button></Link>
        </div>
      }
    </div>
  )
}

export default Cart