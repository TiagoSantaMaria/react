import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCountInCard from '../../components/ItemCount/ItemCountInCard';


const ItemDetailConteiner = ({name, img, desc, stock, onAdd, value, idFood, completeDesc}) => {
  //LOGICA CONTADOR
  const [counter, setCounter] = useState(0);
  const [stockFood, setStock] = useState(stock);
  const [isAddCart, setIsAddCart] = useState(false);
  
  const agregarCantidad = () => {
    if(counter>0){
      onAdd(counter);
      setCounter(0);
      setIsAddCart(true);
      console.log(idFood)
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
    <div>
    {
    isAddCart ?
      <Card sx={{ maxWidth: 240, height: 550, bgcolor:'#f3e5f5' }}>
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
          {/* //ACA PONER BOTON DE IR AL CARRITO */}
        </CardContent>.
      </Card>
    :
      <Card sx={{ maxWidth: 240, height: 550, bgcolor:'#f3e5f5' }}>
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
      </Card>
    }
    </div>
  );
}
export default ItemDetailConteiner