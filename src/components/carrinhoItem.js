import React from 'react'

const CarrinhoItem = ({ id, name, price, img, handleTirar }) => <li>
  <span>{name} </span>
  <span> {price} </span>
  <span> {img} </span>
  <button onClick={handleTirar}>devolver</button>
</li>

export default CarrinhoItem