import React from 'react'
import { Link } from 'react-router-dom'


const Carrinho = ({state, dispatch, action}) => {
  const handleTirarClick = id => () => dispatch(action.tiraDoCarrinho({ id }))
  return <>
    <p>Carrinho</p>
    <ul>
      {
        state.cart.map(({id, name, price, img}) => <li key={id}>
          <p>
            <span>{name} </span>
            <span> {price} </span>
            <span> {img} </span>
            <button onClick={handleTirarClick(id)}>devolver</button>
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