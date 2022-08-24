import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



let stockBurguer = 10;
const ItemCountInCard = () => {
  const [counter, setCounter] = useState(0);
  const handlerCounterUp = () =>{
    if (stockBurguer > 0){
      setCounter(counter + 1);
      stockBurguer = stockBurguer - 1;
      console.log(stockBurguer);
    }
  }
  const handlerCounterDown = () =>{
    if (counter>0 && stockBurguer<=10){
      setCounter(counter - 1);
      stockBurguer = stockBurguer + 1;
      console.log(stockBurguer);
    }
  }
  return (
    <div>
      <div>
        <button onClick={handlerCounterUp}>+</button>
          🛒{counter}
        <button onClick={handlerCounterDown}>-</button>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>
      
    </div>
  )
}

export default ItemCountInCard