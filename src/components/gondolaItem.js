import React from 'react'

const GondolaItem = ({ name, price, img, handleColocar, isDisabled }) => <li>
  <span>{name} </span>
  <span> {price} </span>
  <span> {img} </span>
  <button
    onClick={handleColocar}
    disabled={isDisabled}
  >
    Colocar no Carrinho
  </button>
</li>

export default GondolaItem