import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'


const ItemList = ({foodsArray, onAdd}) => {
  return (
    <div className='acomodoGeneral'>
        <div className='acomodoItemList'> 
        {
        foodsArray.map((food) =>
            <Item
            name={food.nameFood}
            desc={food.descFood}
            stock={food.stockFood}
            value={food.valueFood}
            img={food.img}
            onAdd={onAdd}
            />)
        }
        </div>
    </div>
    )
}

export default ItemList