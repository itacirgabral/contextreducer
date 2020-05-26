import React, { useReducer } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import { reducer, initialArg, action } from './rdx'

import Gondola from './pages/gondola'
import Carrinho from './pages/carrinho'

const  App = () => {
  const [state, dispatch] = useReducer(reducer, initialArg)

  return <BrowserRouter >
    <Switch>
      <Route exact path='/' render={() => <Gondola state={state} dispatch={dispatch} action={action}/>}/>
      <Route exact path='/carrinho' render={() => <Carrinho state={state} dispatch={dispatch} action={action}/>}/>
    </Switch>
  </BrowserRouter>
}

export default App;
