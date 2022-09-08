import React, {  } from 'react'
import IconButton from '@mui/material/IconButton';
import { ButtonGroup, Button  } from '@mui/material';
import './ItemCountInCard.css'


const ItemCountInCard = ({counter,agregarCantidad,handlerCounterUp,handlerCounterDown, stockFood, onAdd}) => {

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