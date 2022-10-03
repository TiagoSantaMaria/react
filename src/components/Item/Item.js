/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'

//MATERIAL UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

//COMPONENT
import ItemCountInCard from '../ItemCount/ItemCountInCard';

//CSS
import '../Item/Item.css'

//ROUTER DOM
import { Link } from 'react-router-dom';

//CONTEXT 
import { CounterContext } from '../Context/CounterContext';
import { OrderFoodContext } from '../Context/OrderFoodContext';



const Item = ({name, img, desc, stock, value, idFood, foodsArray}) => {
  
  //CONTEXT COUNTER
  const [generalCounter, setGeneralCounter] = useContext(CounterContext);
  //CONTEXT ORDERFOOD AND PRICE
  const [orderFood, setOrderFood, priceTotal, setPriceTotal] = useContext(OrderFoodContext);


  //LOGICA CONTADOR
  const [counter, setCounter] = useState(0);
  const [stockFood, setStock] = useState(stock);
  const [isAddCart, setIsAddCart] = useState(false);

  return (
    <div className='divideCard'>
    {
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
        <CardContent sx={{height:65, bgcolor:'#f3e5f5'}}>
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
        <Link className='linkReactFoodMenu' sx={{}} to = {`/detail/${idFood}`}> <Button  sx={{mt:2, ml:5, bgcolor:'#84ffff'}}>Ver Detalle</Button></Link> 
        </CardContent>       
        
      </Card>
    }
    </div>
  );
}
export default Item