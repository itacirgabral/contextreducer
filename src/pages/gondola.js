import React from 'react'
import { Link } from 'react-router-dom'


const Gondola = ({state, dispatch, action}) => {
  console.dir(state)
  return <>
    <h1>Gondola</h1>
    <ul>
      {
        state.itens.map(({id, name, price, img}) => <li key={id}>
          <p>
            <span>{name} </span>
            <span> {price} </span>
            <span> {img} </span>
            <button>adicionar</button>
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