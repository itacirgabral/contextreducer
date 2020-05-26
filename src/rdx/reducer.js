import handle from './handle'

const reducer = (state, action) => {
  switch (action.type) {
    case 'drawerInc':
      return handle.drawerInc(state, action)
    default:
      return state
  }
}

export default reducer