/* eslint-disable no-unused-vars */
import * as React from 'react';
//LIBRERIA MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, CardActionArea} from '@mui/material';

//HOOK REACT
import { useContext, useState } from 'react';

//COMPONENTS
import ItemCountInCard from '../ItemCount/ItemCountInCard';

//CONTEXT
import { CounterContext } from '../Context/CounterContext';
import { OrderFoodContext } from '../Context/OrderFoodContext';



export default function ItemInCart({food}) {

  const [generalCounter, setGeneralCounter] = useContext(CounterContext);
  const [cartEmpty, setCartEmpty] = useState(false);

  //LOGICA CONTADOR
  const [counter, setCounter] = useState(0);
  const [orderFood, setOrderFood] = useContext(OrderFoodContext);

  // FUNCIONES DE MANEJO DE CANTIDADES
  const agregarCantidad = () => {
    if(counter>0){
      setGeneralCounter(generalCounter+counter);
      food.quantityFood = food.quantityFood + counter;
      setCounter(0);
    }
  }
  const handlerCounterUp = () =>{
    if (food.stockFood > 0){
      setCounter(counter + 1);
      food.stockFood = food.stockFood - 1; 
    }
  }
  const handlerCounterDown = () =>{
    if ((counter>0)) {
      setCounter(counter - 1);
      food.stockFood = food.stockFood + 1;
    }
  }
  const deleteItem = () =>{
    if(food.quantityFood > 0){
      food.quantityFood = food.quantityFood - 1;
      food.stockFood = food.stockFood + 1;
      console.log(food.stockFood);
      console.log(food.quantityFood);
      console.log("HOLA");
    }
  }

    // const newOrder = orderFood.filter(wantFood => wantFood.idFood !== food.idFood);
    // setOrderFood(orderFood.filter(wantFood => wantFood.idFood !== food.idFood));
    // console.log(orderFood);
    // console.log(newOrder);
    // console.log(newOrder.length);
    // if (newOrder.length === 2){
    //   console.log("HOLA");
    //   setCartEmpty(true);
    // }
    // console.log(orderFood.length);
    // console.log(cartEmpty);
  

  return (
    cartEmpty
    ?
      console.log("CARRO VACIO")
    :
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={food.img}
          alt="ComidaCart"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {food.nameFood}
        </Typography>
        <Typography variant="body2" color="">
          Cantidad Pedida: {food.quantityFood}
        </Typography>
        <Typography variant="body2" color="">
          Stock Disponible: {food.stockFood}
        </Typography>
        <Typography variant="body2" color="">
          Precio: {food.quantityFood * food.valueFood}
        </Typography>
        <ItemCountInCard
          counter={counter}
          setCounter={setCounter}
          agregarCantidad={agregarCantidad}
          handlerCounterUp={handlerCounterUp}
          handlerCounterDown={handlerCounterDown}
          deleteItem={deleteItem}
          />
      </CardContent>
    </CardActionArea>
  </Card>    
  );
}