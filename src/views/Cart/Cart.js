/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Cart.css'

//CONTEXT COUNTER
import { OrderFoodContext } from '../../components/Context/OrderFoodContext';

const Cart = () => {
  //CONTEXT COUNTER
  const [orderFood, setOrderFood] = useContext(OrderFoodContext);

  return (
    <div>
        <div className='acomodoCart'>
            <p>Estas en el CARRITO - VER EN CONSOLA QUE SE GUARDARON LOS PRODUCTOS AGREGADOS AL CARRITO</p>
        </div>
        {
          console.log(orderFood)
        }
    </div>
  )
}

export default Cart