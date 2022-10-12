/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react'

//MATERIAL UI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

//LIBRERIA TOASTIFY
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//COMPONENT
import ItemCountInCard from '../../components/ItemCount/ItemCountInCard';

//ROUTER DOM
import { Link } from 'react-router-dom';

//CSS
import './ItemDetail.css'

//CONTEXT 
import { CounterContext } from '../Context/CounterContext';
import { OrderFoodContext } from '../Context/OrderFoodContext';


const ItemDetail = ({name, img, desc, stock, value, idFood, completeDesc, foodsArray}) => {
  // TOASTIFY
  const messageAdd = () =>{
    toast.success(`Se agrego al carrito ${counter}`, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  //CONTEXT COUNTER
  const [generalCounter, setGeneralCounter] = useContext(CounterContext);

  //CONTEXT ORDERFOOD AND PRICE
  const [orderFood, setOrderFood, priceTotal, setPriceTotal] = useContext(OrderFoodContext);

  //LOGICA CONTADOR
  const [counter, setCounter] = useState(0);
  const [stockFood, setStock] = useState(stock);
  
  let priceAcum = 0;
  
  //LOCAL STORAGE
  useEffect (()=>{
    localStorage.setItem('order',JSON.stringify(orderFood));
    localStorage.setItem('counter',JSON.stringify(generalCounter));
    localStorage.setItem('price',JSON.stringify(priceTotal));
  },[orderFood, generalCounter,priceTotal])

  const agregarCantidad = () => {
    if(counter>0){
      setGeneralCounter(generalCounter+counter);
      const comidaencontrada = foodsArray.find(food => food.idFood === idFood);
      const comidaencontrada2 = orderFood.find(food => food.idFood === idFood);
      console.log(comidaencontrada);
      console.log(comidaencontrada2);
      if (comidaencontrada.quantityFood === 0 && comidaencontrada2 == undefined){
        comidaencontrada.quantityFood = counter;
        orderFood.push(comidaencontrada);
      } else{
        orderFood.forEach(food => {
          if (food.nameFood === comidaencontrada.nameFood){
            food.quantityFood = food.quantityFood+counter;
            food.stockFood = food.stockFood - counter;
          }
        });
      }
      priceAcum = priceAcum + comidaencontrada.quantityFood * comidaencontrada.valueFood;
      console.log(priceAcum);
      setPriceTotal(priceAcum);
      comidaencontrada.stockFood = stockFood;
      messageAdd();
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
          />
        </CardContent>.
        <Link className='linkReactFoodMenu' to = {`/cart`}> <Button className='acomodoBotonEnItemDetail' sx={{ml:3.5, bgcolor:'#84ffff'}}>VER CARRITO</Button></Link>
        <Link className='linkReactFoodMenu' to = {`/foodmenu`}> <Button className='acomodoBotonEnItemDetail' sx={{ml:4.5, mt:1, bgcolor:'#84ffff'}}>VOLVER A CARTA</Button></Link>
        <ToastContainer />
      </Card>
    }
    </div>
  );
}
export default ItemDetail