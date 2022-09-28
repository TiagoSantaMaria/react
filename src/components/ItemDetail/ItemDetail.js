/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'

//MATERIAL UI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

//COMPONENT
import ItemCountInCard from '../../components/ItemCount/ItemCountInCard';

//ROUTER DOM
import { Link } from 'react-router-dom';

//CSS
import './ItemDetail.css'

//CONTEXT 
import { CounterContext } from '../Context/CounterContext';
import { OrderFoodContext } from '../Context/OrderFoodContext';


const ItemDetail = ({name, img, desc, stock, onAdd, value, idFood, completeDesc, foodsArray}) => {
  //CONTEXT 
  const [generalCounter, setGeneralCounter] = useContext(CounterContext);
  const [orderFood, setOrderFood] = useContext(OrderFoodContext);
  
  //LOGICA CONTADOR
  const [counter, setCounter] = useState(0);
  const [stockFood, setStock] = useState(stock);
  
  const agregarCantidad = () => {
    if(counter>0){
      setGeneralCounter(generalCounter+counter);
      onAdd(counter);
      const comidaencontrada = foodsArray.find(food => food.idFood === idFood);      
      if (comidaencontrada.quantityFood === 0){
        comidaencontrada.quantityFood = counter;
        orderFood.push(comidaencontrada);
      } else{
        comidaencontrada.quantityFood = comidaencontrada.quantityFood + counter;
      }
      comidaencontrada.stockFood = comidaencontrada.stockFood - counter;
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
    if ((counter>0 && stockFood<=10)){
      setCounter(counter - 1);
      setStock(stockFood + 1);
    }
  }
  
  return (
    <div>
    {
      <Card sx={{ maxWidth: 300, height: 620, bgcolor:'#f3e5f5' }}>
        <CardHeader sx={{ height: 35 }}
          title={name}
          subheader={desc}
        />
        <CardMedia
          component="img"
          height="230"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography variant="body2" color="#263238">
            {completeDesc}
          </Typography>
          <Typography variant="" color="#263238" sx={{marginTop:0.5, fontWeight:"bold"}}>
            Stock:{stockFood} - Valor: ${value}
          </Typography>
          <ItemCountInCard
            counter={counter}
            setCounter={setCounter}
            stockFood={stockFood}
            agregarCantidad={agregarCantidad}
            handlerCounterUp={handlerCounterUp}
            handlerCounterDown={handlerCounterDown}
            onAdd={onAdd}
          />
        </CardContent>.
        <Link className='linksReact' to = {`/cart`}> <Button className='acomodoBotonEnItemDetail' sx={{ml:3.5, bgcolor:'#64b5f6'}}>VER CARRITO</Button></Link>
        <Link className='linksReact' to = {`/foodmenu`}> <Button className='acomodoBotonEnItemDetail' sx={{ml:4.5, mt:1, bgcolor:'#64b5f6'}}>VOLVER A CARTA</Button></Link>
      </Card>
    }
    </div>
  );
}
export default ItemDetail