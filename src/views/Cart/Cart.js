/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Cart.css'

//CONTEXT COUNTER
import { OrderFoodContext } from '../../components/Context/OrderFoodContext';

import Item from '../../components/Item/Item';
import ItemInCart from '../../components/ItemInCart/ItemInCart'
import PriceTotal from '../../components/PriceTotal/PriceTotal';


const Cart = () => {
  //CONTEXT ORDERFOOD
  const [orderFood, setOrderFood, priceTotal, setPriceTotal] = useContext(OrderFoodContext);

  return (
    <div className='divPadre'>
      <div className='divHijo'>
      {
        orderFood.map((food) =>
          <div key={food.idFood} className='divBebe'>
          {
            <ItemInCart
              food={food}
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
    </div>
  )
}

export default Cart