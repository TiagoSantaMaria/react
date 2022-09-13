import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'

const ItemList = ({foodsArray, onAdd, orderFood}) => {


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
              onAdd={onAdd}
              idFood={food.idFood}
              orderFood={orderFood}
              foodsArray={foodsArray}
            />
            }
          </div>
            )
    )
}

export default ItemList