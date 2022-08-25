import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import { ButtonGroup, Button  } from '@mui/material';
import './ItemCountInCard.css'

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
      <div className='acomodoCard'> 
        <ButtonGroup size="small" aria-label="small button group" sx={{mt:1.5, bgcolor:'text.primary'}}>
          <Button onClick={handlerCounterUp}>+</Button>
          <Button>
            <IconButton color="primary" aria-label="add to shopping cart" sx={{fontSize:"small"}}>
            🛒{counter}
            </IconButton>
          </Button>
          <Button onClick={handlerCounterDown}>-</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default ItemCountInCard