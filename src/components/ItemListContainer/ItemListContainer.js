import React from 'react';
import CardFood from '../CardFood/CardFood';

const ItemListContainer = () => {
  const onAdd = (quantify) =>{
    if (quantify>0){
      alert(`Se agregaron ${quantify}`);
    }
  }

  return (
    <div>
      <CardFood
        name='Hamburguesa Triple'
        img='https://www.clarin.com/img/2021/05/20/Lj4vcOHr__720x0__1.jpg'
        desc='Triple Carne, Panceta y CHEDDAR'
        stock={10}
        onAdd={onAdd}
      />
    </div>
  )
}

export default ItemListContainer