const colocaNoCarrinho = (state, action) => ({
  ...state,
  cart: state.cart.concat(state.itens.find(el => el.id === action.id))
})
const tiraDoCarrinho = (state, action) => ({
  ...state,
  cart: state.cart.filter(el => el.id !== action.id)
})

export default {
  colocaNoCarrinho,
  tiraDoCarrinho,
}