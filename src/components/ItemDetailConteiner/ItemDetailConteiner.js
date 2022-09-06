// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import ItemCountInCard from '../ItemCount/ItemCountInCard';
// import { Link } from 'react-router-dom';
// import './ItemDetailConteiner.css'

// const ItemDetailConteiner = ({name, img, desc, stock, onAdd, value, idFood}) => {
//   return (
//     <div className='centrar'>
//       <Card sx={{ width:220 }}>
//         <Link to={`/detail/${idFood}`}>
//           <CardActionArea>
//             <CardMedia
//             component="img"
//             height="220"
//             image={img}
//             alt="hamburguesa"
//             />
//           </CardActionArea>      
//         </Link>
//         <CardContent sx={{height:70, bgcolor:'#f3e5f5'}}>
//           <Typography gutterBottom variant="h5" component="div">
//             {name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {desc}  
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Stock:{stock}  
//           </Typography>
//           <Typography gutterBottom variant="h6" component="div">
//             Valor: ${value}
//           </Typography>
//         </CardContent>
//         <CardContent sx={{height:38, bgcolor:'#f3e5f5'}}>
//           <ItemCountInCard
//             stockFood={stock}
//             onAdd={onAdd}
//           />  
//         </CardContent>        
//       </Card>
//     </div>
//   );
// }
// export default ItemDetailConteiner

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCountInCard from '../../components/ItemCount/ItemCountInCard';



export default function ItemDetailConteiner({name, img, desc, stock, onAdd, value, idFood, completeDesc}) {
  return (
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
          Stock:{stock} - Valor: ${value}
        </Typography>
        <ItemCountInCard
          stockFood={stock}
          onAdd={onAdd}
        /> 
      </CardContent>.
    </Card>
  );
}