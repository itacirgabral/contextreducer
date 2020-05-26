import React from 'react'

const CarrinhoItem = ({ id, name, price, img, handleTirarClick }) => <li>
  <p>
    <span>{name} </span>
    <span> {price} </span>
    <span> {img} </span>
    <button onClick={handleTirarClick}>devolver</button>
  </p>
</li>

export default CarrinhoItem