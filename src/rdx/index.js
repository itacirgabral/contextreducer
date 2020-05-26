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