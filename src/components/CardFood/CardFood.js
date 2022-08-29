import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCountInCard from '../ItemCount/ItemCountInCard';

const CardFood = ({name, img, desc, stock, onAdd}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height=""
          image={img}
          alt="hamburguesa"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}  
          </Typography>
          <ItemCountInCard
            stockFood={stock}
            onAdd={onAdd}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default CardFood