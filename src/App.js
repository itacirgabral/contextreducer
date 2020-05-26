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
