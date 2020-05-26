import React from 'react'
import { Link } from 'react-router-dom'

const produtos = Array(3).fill({
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

const Carrinho = () => {
  return <>
    <p>Carrinho</p>
    <ul>
      {
        produtos.map(({name, price, img}) => <li>
          <p>
            <span>{name} </span>
            <span> {price} </span>
            <span> {img} </span>
            <button>devolver</button>
          </p>
        </li>)
      }
    </ul>
    <Link  to='/'>
      <span>voltar</span>
    </Link>
  </>
}

export default Carrinho