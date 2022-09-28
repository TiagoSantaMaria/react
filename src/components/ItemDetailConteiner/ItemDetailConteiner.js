/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';

//COMPONENT
import ItemDetail from '../../components/ItemDetail/ItemDetail';

//ESTILO CSS
import './ItemDetailConteiner.css';

//CONTEXT FOOD
import { ItemsContext } from '../../components/Context/ItemsContext';

const ItemDetailConteiner = () => {
  //Context
  const [foodsMenu] = useContext(ItemsContext);
  
  //NOTIFICACION ADD CARRITO
  const onAdd = (quantify) =>{
    alert(`Se agregaron ${quantify}`);
  }
  
  let {id} = useParams();

  return (
    <div className='acomodoComponent'>
      <div key={foodsMenu[id-1].idFood} className = 'acomodo'>
        {
        <ItemDetail
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

export default ItemDetailConteiner