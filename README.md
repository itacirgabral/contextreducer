# useContext S2 useReducer

## Redux style context
```jsx
import React, { useReducer, createContext } from 'react'
import initialArg from './initialArg'
import action from './action'
import reducer from './reducer'

export const CTX = createContext()

const RDX = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialArg)
  const contextValue = { state, dispatch, action }
  return <CTX.Provider value={contextValue}>
    {children}
  </CTX.Provider>
}

export default RDX
```

## Provider initialization
```jsx
import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import RDX from './rdx'

import Gondola from './pages/gondola'
import Carrinho from './pages/carrinho'

const  App = () => <RDX>
  <BrowserRouter >
    <Switch>
      <Route exact path='/' component={Gondola}/>
      <Route exact path='/carrinho' component={Carrinho}/>
    </Switch>
  </BrowserRouter>
</RDX>

export default App;
```

## Consumer
```jsx
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
      <span>voltar</span>
    </Link>
  </>
}

export default Carrinho
```