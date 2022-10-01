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
  
  let {id} = useParams();

  //PARA ENCONTRAR COMIDA E INDEX EN EL ARRAY NO ORDENADO POR IDFOOD
  // eslint-disable-next-line eqeqeq
  const foodFind = foodsMenu.find(food => food.idFood == id);
  const index = foodsMenu.indexOf(foodFind); 

  return (
    <div className='acomodoComponent'>
      <div key={foodsMenu[index].idFood} className = 'acomodo'>
        {
        <ItemDetail
          name={foodsMenu[index].nameFood}
          desc={foodsMenu[index].descFood}
          stock={foodsMenu[index].stockFood}
          value={foodsMenu[index].valueFood}
          img={foodsMenu[index].img}
          idFood={foodsMenu[index].idFood}
          completeDesc={foodsMenu[index].completeDesc}
          foodsArray={foodsMenu}
        />
        }
      </div>
    </div>
  )
}

export default ItemDetailConteiner