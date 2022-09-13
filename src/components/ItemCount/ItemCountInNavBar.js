import React, { useContext } from 'react'

import { CounterContext } from '../Context/CounterContext';

const ItemCountInNavBar = ({counter}) => {
  const [generalCounter] = useContext(CounterContext);
  return (
    <div>
        🛒{generalCounter}
    </div>
  )
}

export default ItemCountInNavBar