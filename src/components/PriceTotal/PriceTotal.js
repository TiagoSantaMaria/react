/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'

export default function PriceTotal({orderFood, priceTotal, setPriceTotal}){

    return (
        <div>
            {
            orderFood.map((food)=>
                setPriceTotal(priceTotal + food.valueFood*food.quantityFood)
            )}
            <p>PRECIO DEL PEDIDO: ${priceTotal}</p>
        </div>

    )
}
