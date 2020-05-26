import React from 'react'
import { Link } from 'react-router-dom'

const produtos = Array(20).fill({
  name: 'nome',
  price: 'preço',
  img: 'imagem',
}).map(
  ({name, price, img}, i) => ({
    name: `${name}-${i}`,
    price: `${price}-${i}`,
    img: `${img}-${i}`
  })
)

const Gondola = () => {
  return <>
    <h1>Gondola</h1>
    <ul>
      {
        produtos.map(({name, price, img}) => <li>
          <p>
            <span>{name} </span>
            <span> {price} </span>
            <span> {img} </span>
            <button>comprar</button>
          </p>
        </li>)
      }
    </ul>
    <Link  to='/carrinho'>
      <span>ver carrinho</span>
    </Link>
  </>
}

export default Gondola