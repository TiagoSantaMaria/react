import React from 'react'
//COMPONENT
import Item from '../Item/Item'
//CSS
import '../ItemList/ItemList.css'

const ItemList = ({foodsArray}) => {
  return (
        foodsArray.map((food) =>
          <div key={food.idFood}>
            {
            <Item
              name={food.nameFood}
              desc={food.descFood}
              stock={food.stockFood}
              value={food.valueFood}
              img={food.img}
              idFood={food.idFood}
              foodsArray={foodsArray}
            />
            }
          </div>
            )
    )
}

export default ItemList