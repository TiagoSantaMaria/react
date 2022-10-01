/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Cart.css'

//CONTEXT COUNTER
import { OrderFoodContext } from '../../components/Context/OrderFoodContext';

//COMPONENT
import ItemInCart from '../../components/ItemInCart/ItemInCart'
import PriceTotal from '../../components/PriceTotal/PriceTotal';

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

  // const img = 'https://www.angelsbypilarnavarro.com/theme/Angelsby/css/web/carrito-vacio.png';

  return (
    <div className='divPadre'>
      {
        priceTotal !== 0 ?
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
        </div>
      :
        <div className='centrar'>
          <p>CARRO VACIO</p>
          <img src={picture} alt='NOTIFICACION CARRO VACIO'/>
          <Link className='linksReact' to = {`/foodmenu`}> <Button className='acomodoBotonEnItemDetail' sx={{ml:4.5, mt:1, bgcolor:'#64b5f6'}}>VOLVER A CARTA</Button></Link>
        </div>
        
      }
      
    </div>
  )
}

export default Cart