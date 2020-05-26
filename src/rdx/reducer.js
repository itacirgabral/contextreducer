import handle from './handle'
import symbol from './symbol'

const reducer = (state, action) => {
  switch (action.type) {
    case symbol.colocaNoCarrinho:
      return handle.colocaNoCarrinho(state, action)
    case symbol.tiraDoCarrinho:
      return handle.tiraDoCarrinho(state, action)
    default:
      return state
  }
}

export default reducer