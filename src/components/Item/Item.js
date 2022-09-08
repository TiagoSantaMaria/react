import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCountInCard from '../ItemCount/ItemCountInCard';
import '../Item/Item.css'
import { Link } from 'react-router-dom';


const Item = ({name, img, desc, stock, onAdd, value, idFood}) => {
  //LOGICA CONTADOR
  const [counter, setCounter] = useState(0);
  const [stockFood, setStock] = useState(stock);
  const [isAddCart, setIsAddCart] = useState(false);
  
  const agregarCantidad = () => {
    if(counter>0){
      onAdd(counter);
      setCounter(0);
      setIsAddCart(true);
    }
  }
  const handlerCounterUp = () =>{
    if (stockFood > 0){
      setCounter(counter + 1);
      setStock(stockFood - 1);
    }
  }
  const handlerCounterDown = () =>{
    if (counter>0 && stockFood<=10){
      setCounter(counter - 1);
      setStock(stockFood + 1);
    }
  }


  return (
    <div className='divideCard'>
    {
      isAddCart ?
      <Card sx={{ width:220 }}>
        <Link to={`/detail/${idFood}`}>
          <CardActionArea>
            <CardMedia
            component="img"
            height="220"
            image={img}
            alt="hamburguesa"
            />
          </CardActionArea>      
        </Link>
        <CardContent sx={{height:70, bgcolor:'#f3e5f5'}}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock:{stockFood}  
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Valor: ${value}
          </Typography>
        </CardContent>
        <CardContent sx={{height:38, bgcolor:'#f3e5f5'}}>
          {/* //ACA PONER BOTON DE IR AL CARRITO */}
        </CardContent>        
      </Card>
    :
      <Card sx={{ width:220 }}>
        <Link to={`/detail/${idFood}`}>
          <CardActionArea>
            <CardMedia
            component="img"
            height="220"
            image={img}
            alt="hamburguesa"
            />
          </CardActionArea>      
        </Link>
        <CardContent sx={{height:70, bgcolor:'#f3e5f5'}}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock:{stockFood}  
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Valor: ${value}
          </Typography>
        </CardContent>
        <CardContent sx={{height:38, bgcolor:'#f3e5f5'}}>
          <ItemCountInCard
            counter={counter}
            setCounter={setCounter}
            stockFood={stockFood}
            agregarCantidad={agregarCantidad}
            handlerCounterUp={handlerCounterUp}
            handlerCounterDown={handlerCounterDown}
            onAdd={onAdd}
          />  
        </CardContent>        
      </Card>
    }
    </div>
  );
}
export default Item