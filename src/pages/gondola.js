import React from 'react'
import { Link } from 'react-router-dom'

const Gondola = () => {
  return <>
    <h1>Gondola</h1>
    <Link  to='/carrinho'>
      <span>ver carrinho</span>
    </Link>
  </>
}

export default Gondola