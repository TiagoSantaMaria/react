import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

export default function MultiActionAreaCard({food}) {
  return (
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
            Precio: {food.quantityFood * food.valueFood}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}