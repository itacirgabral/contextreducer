import React from 'react'
import { Link } from 'react-router-dom'

const Carrinho = () => {
  return <>
    <p>Carrinho</p>
    <Link  to='/'>
      <span>voltar</span>
    </Link>
  </>
}

export default Carrinho