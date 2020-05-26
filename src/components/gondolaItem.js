import React from 'react'

const GondolaItem = ({ name, price, img, handleColocarClick, isDisabled }) => <li>
  <p>
    <span>{name} </span>
    <span> {price} </span>
    <span> {img} </span>
    <button
      onClick={handleColocarClick}
      disabled={isDisabled}
    >
      Colocar no Carrinho
    </button>
  </p>
</li>

export default GondolaItem