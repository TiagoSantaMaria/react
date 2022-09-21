/* eslint-disable no-unused-vars */
import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';

import ItemDetailConteiner from '../../components/ItemDetailConteiner/ItemDetailConteiner';
import './CharacterDetail.css'


//CONTEXT FOOD
import { ItemsContext } from '../../components/Context/ItemsContext';

const CharacterDetail = () => {
  //Context
  const [foodsMenu] = useContext(ItemsContext);
  
  //NOTIFICACION ADD CARRITO
  const onAdd = (quantify) =>{
    alert(`Se agregaron ${quantify}`);
  }
  
  let {id} = useParams();
  console.log(id);

  return (
    <div className='acomodoComponent'>
      <div key={foodsMenu[id-1].idFood} className = 'acomodo'>
        {
        <ItemDetailConteiner
          name={foodsMenu[id-1].nameFood}
          desc={foodsMenu[id-1].descFood}
          stock={foodsMenu[id-1].stockFood}
          value={foodsMenu[id-1].valueFood}
          img={foodsMenu[id-1].img}
          idFood={foodsMenu[id-1].idFood}
          completeDesc={foodsMenu[id-1].completeDesc}
          onAdd={onAdd}
          foodsArray={foodsMenu}
        />
        }
      </div>
    </div>
  )
}

export default CharacterDetail