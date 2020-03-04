import React, { createContext, useReducer } from 'react'
import { AppReducer } from '@Component/AppReducer'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  transactions: []
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const deleteTransaction = id => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  const addTransaction = transaction => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider
      value={{ 
        transactions: state.transactions, 
        deleteTransaction,
        addTransaction
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
