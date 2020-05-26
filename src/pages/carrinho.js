import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CTX } from '../rdx'

import CarrinhoItem from '../components/carrinhoItem'

const Carrinho = () => {
  const {state, dispatch, action} = useContext(CTX)
  const handleTirarClick = id => () => dispatch(action.tiraDoCarrinho({ id }))
  return <>
    <h1>Carrinho</h1>
    <ul>
      {
        state.cart.map(({id, name, price, img}) => <CarrinhoItem
          key={id}
          name={name}
          price={price}
          handleTirarClick={handleTirarClick(id)}
        />)
      }
    </ul>
    <Link  to='/'>
      <span>voltar</span>
    </Link>
  </>
}

export default Carrinho