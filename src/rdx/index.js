import React, { useReducer, createContext } from 'react'
import initialArg from './initialArg'
import action from './action'
import reducer from './reducer'

export const CTX = createContext()

const RDX = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialArg)
  return <CTX.Provider value={{ state, dispatch, action }}>
    {children}
  </CTX.Provider>
}

export default RDX