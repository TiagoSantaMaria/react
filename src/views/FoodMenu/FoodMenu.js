/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react'

//CSS
import './FoodMenu.css'

//COMPONENT
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { CounterContext } from '../../components/Context/CounterContext'
import { OrderFoodContext } from '../../components/Context/OrderFoodContext'



const FoodMenu = () => {
  // CONTEXT COUNTER
  const [generalCounter, setGeneralCounter] = useContext(CounterContext);
  const [orderFood, setOrderFood, priceTotal, setPriceTotal] = useContext(OrderFoodContext);

  useEffect(()=>{
    const counterPrueba = JSON.parse(localStorage.getItem(`counter`));
    if (counterPrueba > 0) {
      setGeneralCounter(counterPrueba);
      const orderFoodPrueba = JSON.parse(localStorage.getItem(`order`));
      const pricePrueba = JSON.parse(localStorage.getItem(`price`));
      setPriceTotal(pricePrueba);
      setOrderFood(orderFoodPrueba);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='fondoCarta'>
      <div className='acomodo'>
        <ItemListContainer/>
      </div>
    </div>
  )
}

export default FoodMenu