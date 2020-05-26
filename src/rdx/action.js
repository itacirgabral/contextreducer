import symbol from './symbol'

const action = {
  colocaNoCarrinho: ({ id }) => ({ type: symbol.colocaNoCarrinho, id }),
  tiraDoCarrinho: ({ id }) => ({ type: symbol.tiraDoCarrinho, id }),
}

export default action