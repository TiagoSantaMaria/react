import React, { useState, useEffect, setIsLoading } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetailConteiner from '../../components/ItemDetailConteiner/ItemDetailConteiner';

const CharacterDetail = () => {
  const [food, setFood] = useState([]);
  let {id} = useParams();
  
  //PETICION A API
  useEffect(() => {
    try{
      fetch(`json/productos.json/food/${id}`)
      .then((response) => response.json())
      .then((food) => setFood(food));
      setTimeout(()=>{
        setIsLoading(false);
      },2000)
    }catch (error) {
      console.log("error")
    }
  },[id])


  return (
    food.map((food) =>
          <div key={food.idFood}>
            {
            <ItemDetailConteiner
              name={food.nameFood}
              desc={food.descFood}
              stock={food.stockFood}
              value={food.valueFood}
              img={food.img}
              idFood={food.idFood}
            />
            }
          </div>
            )
  )
}

export default CharacterDetail