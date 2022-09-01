import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'


const ItemList = ({foodsArray, onAdd}) => {
  return (
        
        foodsArray.map((food) =>
            <Item
            name={food.nameFood}
            desc={food.descFood}
            stock={food.stockFood}
            value={food.valueFood}
            img={food.img}
            onAdd={onAdd}
            />)
        
    )
}

export default ItemList