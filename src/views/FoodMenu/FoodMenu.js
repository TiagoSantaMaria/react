import React from 'react'
//CSS
import './FoodMenu.css'
//COMPONENT
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

const FoodMenu = () => {
  return (
    <div>
      <div className='acomodo'>
        <ItemListContainer/>
      </div>
    </div>
  )
}

export default FoodMenu