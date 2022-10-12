/* eslint-disable no-unused-vars */
import * as React from 'react';
//LIBRERIA MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea} from '@mui/material';

//HOOK REACT
import { useContext, useState, useEffect } from 'react';

//COMPONENTS
import ItemCountInCard from '../ItemCount/ItemCountInCard';

//CONTEXT
import { CounterContext } from '../Context/CounterContext';
import { ItemsContext } from '../Context/ItemsContext';

export default function ItemInCart({food, orderFood, setOrderFood, priceTotal, setPriceTotal}) {

  //CONTEXT COUNTER
  const [generalCounter, setGeneralCounter] = useContext(CounterContext);
  const [itemsFoods] = useContext(ItemsContext);

  let foodInCart = true;

  //LOGICA CONTADOR
  const [counter, setCounter] = useState(0);

  useEffect (()=>{
    localStorage.setItem('order',JSON.stringify(orderFood));
    localStorage.setItem('counter',JSON.stringify(generalCounter));
    localStorage.setItem('price',JSON.stringify(priceTotal));
  },[orderFood, generalCounter,priceTotal])


  // FUNCIONES DE MANEJO DE CANTIDADES
  let priceAcum = priceTotal;

  const agregarCantidad = () => {
    if(counter>0){
      setGeneralCounter(generalCounter+counter);
      priceAcum = priceAcum + food.quantityFood * food.valueFood;
      setPriceTotal(priceAcum);
      food.quantityFood = food.quantityFood + counter;
      let i=0
      orderFood.forEach(function(){
        if (orderFood[i].nameFood === food.nameFood){
          orderFood[i].quantityFood = food.quantityFood;
        }
        i++;
      });
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
    if (counter>0) {
      setCounter(counter - 1);
      food.stockFood = food.stockFood + 1;
    }
  }
  const handlerDeleteItem = () =>{
    if (food.quantityFood > 0){
      food.quantityFood = food.quantityFood - 1;
      food.stockFood = food.stockFood + 1;
      setGeneralCounter(generalCounter-1);
      priceAcum = priceAcum - food.quantityFood * food.valueFood;
      setPriceTotal(priceAcum);
      if (food.quantityFood === 0){
        setOrderFood(orderFood.filter(wantFood => wantFood.idFood !== food.idFood));
        // eslint-disable-next-line eqeqeq
        itemsFoods.forEach(foodM => foodM.nameFood == food.nameFood ? foodM.stockFood = foodM.stockFood+1 : console.log(""))
        localStorage.clear();
      }
    }
  }
    
  return (
    generalCounter === 0
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
          deleteItem={handlerDeleteItem}
          foodInCart={foodInCart}
          />
      </CardContent>
    </CardActionArea>
  </Card>    
  );
}