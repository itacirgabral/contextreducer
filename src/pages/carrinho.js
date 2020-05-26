import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CTX } from '../rdx'
import CarrinhoItem from '../components/carrinhoItem'

const Carrinho = () => {
  const {state, dispatch, action} = useContext(CTX)
  const handleTirar = id => () => dispatch(action.tiraDoCarrinho({ id }))

  return <>
    <h1>Carrinho</h1>
    <ul>
      {
        state.cart.map(({id, name, price, img}) => <CarrinhoItem
          key={id}
          name={name}
          price={price}
          handleTirar={handleTirar(id)}
        />)
      }
    </ul>
    <Link  to='/'>
      <span>voltar as compras</span>
    </Link>
  </>
}

export default Carrinho