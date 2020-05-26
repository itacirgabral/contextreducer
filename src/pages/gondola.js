import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CTX } from '../rdx'


const Gondola = () => {
  const {state, dispatch, action} = useContext(CTX)
  const handleColocarClick = id => () => dispatch(action.colocaNoCarrinho({ id }))
  const isDisabled = id => state.cart.find(el => el.id === id) ? true : false
  return <>
    <h1>Gondola</h1>
    <ul>
      {
        state.itens.map(({id, name, price, img}) => <li key={id}>
          <p>
            <span>{name} </span>
            <span> {price} </span>
            <span> {img} </span>
            <button
              onClick={handleColocarClick(id)}
              disabled={isDisabled(id)}
            >
              Colocar no Carrinho
            </button>
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