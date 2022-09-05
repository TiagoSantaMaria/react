import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCountInCard from '../ItemCount/ItemCountInCard';
import { Link } from 'react-router-dom';


const ItemDetailConteiner = ({name, img, desc, stock, onAdd, value, idFood}) => {
  return (
    <div className='divideCard'>
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
            Stock:{stock}  
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Valor: ${value}
          </Typography>
        </CardContent>
        <CardContent sx={{height:38, bgcolor:'#f3e5f5'}}>
          <ItemCountInCard
            stockFood={stock}
            onAdd={onAdd}
          />  
        </CardContent>        
      </Card>
    </div>
  );
}
export default ItemDetailConteiner