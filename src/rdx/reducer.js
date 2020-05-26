import handle from './handle'

const reducer = (state, action) => {
  console.dir(state)
  console.dir(action)
  switch (action.type) {
    case 'colocaNoCarrinho':
      return handle.colocaNoCarrinho(state, action)
    case 'tiraDoCarrinho':
      return handle.tiraDoCarrinho(state, action)
    default:
      return state
  }
}

export default reducer