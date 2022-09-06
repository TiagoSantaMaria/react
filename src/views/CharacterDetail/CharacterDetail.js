import React, { useState, useEffect, setIsLoading } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetailConteiner from '../../components/ItemDetailConteiner/ItemDetailConteiner';

const CharacterDetail = () => {
  const [food, setFood] = useState([]);
  let {id} = useParams();
  
  //PETICION A API
  useEffect(() => {
    try{
      fetch(`../json/productos.json`)
      .then((response) => response.json())
      .then((food) => {
        let foodFilterById = food.filter(food=>food.idFood === parseInt(id));
        setFood(foodFilterById)
      });
      setTimeout(()=>{
        console.log(food);
        console.log(id);
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