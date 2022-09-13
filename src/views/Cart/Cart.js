import React from 'react'
import './Cart.css'

const Cart = ({orderFood}) => {
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