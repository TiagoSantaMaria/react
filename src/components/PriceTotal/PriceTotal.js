/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'

export default function PriceTotal({orderFood, priceTotal, setPriceTotal}){
    let pricesAcm = 0;
    orderFood.map((food)=>
        pricesAcm = pricesAcm + food.valueFood*food.quantityFood
    )
    setPriceTotal(pricesAcm);


    return (
        <div>
            <p>PRECIO DEL PEDIDO: ${priceTotal}</p>
        </div>

    )
}
