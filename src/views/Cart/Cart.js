/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Cart.css'

//CONTEXT COUNTER
import { OrderFoodContext } from '../../components/Context/OrderFoodContext';
import Item from '../../components/Item/Item';
import ItemInCart from '../../components/ItemInCart/ItemInCart'
import PriceTotal from '../../components/PriceTotal/PriceTotal';

const Cart = () => {
  //CONTEXT Food
  const [orderFood, setOrderFood, precio] = useContext(OrderFoodContext);

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

      <PriceTotal/>
      
      </div>
    </div>
  )
}

export default Cart