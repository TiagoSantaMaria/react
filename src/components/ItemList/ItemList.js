import React from 'react'
import CardFood from '../Item/Item'
import '../ItemList/ItemList.css'


const ItemList = ({foodsArray, onAdd}) => {
  return (
    <div className='acomodoGeneral'>
        {
        foodsArray.map((food)=>
        <div className='acomodoItemList'> 
            <CardFood
            name={food.nameFood}
            desc={food.descFood}
            stock={food.stockFood}
            value={food.valueFood}
            img={food.img}
            onAdd={onAdd}/>
        </div>
        )
        }
    </div>
    
    )
}

export default ItemList