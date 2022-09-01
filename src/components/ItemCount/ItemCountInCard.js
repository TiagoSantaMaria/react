import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import { ButtonGroup, Button  } from '@mui/material';
import './ItemCountInCard.css'


const ItemCountInCard = ({stockFood, onAdd}) => {
  const [counter, setCounter] = useState(0);

  const [stock, setStock] = useState(stockFood);

  const agregarCantidad = () => {
    if(counter>0){
      onAdd(counter);
      setCounter(0);
    }
    
  }

  const handlerCounterUp = () =>{
    if (stock > 0){
      setCounter(counter + 1);
      setStock(stock - 1);
    }
  }
  const handlerCounterDown = () =>{
    if (counter>0 && stock<=10){
      setCounter(counter - 1);
      setStock(stock + 1);
    }
  }
  return (
    <div>
      <div className='acomodoCard'> 
        <ButtonGroup size="small" aria-label="small button group" sx={{mt:1.5, bgcolor:'#e3f2fd'}}>
          <Button onClick={handlerCounterUp}>+</Button>
          <Button onClick={agregarCantidad}>
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