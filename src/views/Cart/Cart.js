/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Cart.css'

//CONTEXT COUNTER
import { OrderFoodContext } from '../../components/Context/OrderFoodContext';
import Item from '../../components/Item/Item';
import ItemInCart from '../../components/ItemInCart/ItemInCart'

const Cart = () => {
  //CONTEXT COUNTER
  const [orderFood, setOrderFood] = useContext(OrderFoodContext);

  return (
    <div className='divPadre'>
      <div className='divHijo'>
      {
      orderFood.map((food) =>
          <div key={food.idFood} className='divBebe'>
            {
            <ItemInCart
              food={food}
              name={food.nameFood}
              desc={food.descFood}
              stock={food.stockFood}
              value={food.valueFood}
              img={food.img}
              idFood={food.idFood}
            />
            }
          </div>
            )
        }
      </div>
    </div>
  )
}

export default Cart