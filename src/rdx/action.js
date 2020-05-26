const action = {
  colocaNoCarrinho: ({ id }) => ({ type: 'colocaNoCarrinho', id }),
  tiraDoCarrinho: ({ id }) => ({ type: 'tiraDoCarrinho', id }),
}

export default action