import React from 'react'
//CSS
import './FoodMenu.css'
//COMPONENT
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

const FoodMenu = ({orderFood}) => {
  return (
    <div>
      <div className='acomodo'>
        <ItemListContainer orderFood={orderFood}/>
      </div>
    </div>
  )
}

export default FoodMenu