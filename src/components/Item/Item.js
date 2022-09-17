/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCountInCard from '../ItemCount/ItemCountInCard';
import '../Item/Item.css'
import { Link } from 'react-router-dom';

//CONTEXT COUNTER
import { CounterContext } from '../Context/CounterContext';
import { OrderFoodContext } from '../Context/OrderFoodContext';



const Item = ({name, img, desc, stock, onAdd, value, idFood, foodsArray}) => {
  
  //CONTEXT COUNTER
  const [generalCounter, setGeneralCounter] = useContext(CounterContext);
  const [orderFood, setOrderFood] = useContext(OrderFoodContext);


  //LOGICA CONTADOR
  const [counter, setCounter] = useState(0);
  const [stockFood, setStock] = useState(stock);
  const [isAddCart, setIsAddCart] = useState(false);
  const [food, setFood] = useState(); 


  const agregarCantidad = () => {
    if(counter>0){
      setGeneralCounter(generalCounter+counter);
      onAdd(counter);
      setFood(foodsArray.find(food => food.idFood === idFood));
      const comidaencontrada = foodsArray.find(food => food.idFood === idFood);
      if (comidaencontrada.quantityFood === 0){
        comidaencontrada.quantityFood = counter;

        orderFood.push(comidaencontrada);
      } else{
        comidaencontrada.quantityFood = comidaencontrada.quantityFood + counter;
      }
      comidaencontrada.stockFood = comidaencontrada.stockFood - comidaencontrada.quantityFood;
      setCounter(0);
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