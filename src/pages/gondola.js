import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CTX } from '../rdx'
import GondolaItem from '../components/gondolaItem'

const Gondola = () => {
  const {state, dispatch, action} = useContext(CTX)
  const handleColocar = id => () => dispatch(action.colocaNoCarrinho({ id }))
  const isDisabled = id => state.cart.find(el => el.id === id) ? true : false

  return <>
    <h1>Gondola</h1>
    <ul>
      {
        state.itens.map(({id, name, price, img}) => <GondolaItem
          key={id}
          name={name}
          price={price}
          img={img}
          handleColocar={handleColocar(id)}
          isDisabled={isDisabled(id)}
        />)
      }
    </ul>
    <Link  to='/carrinho'>
      <span>ver carrinho</span>
    </Link>
  </>
}

export default Gondola