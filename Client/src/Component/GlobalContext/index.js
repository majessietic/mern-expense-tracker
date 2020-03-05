import React, { createContext, useReducer } from 'react'
import { AppReducer } from '@Component/AppReducer'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

const initialState = {
  transactions: [],
  error: null,
  loading: true
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const getTransactions = async () => {
    try {
      const res = await axios.get('/api/v1/transactions')

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'ERROR_TRANSACTIONS',
        payload: err.response.data.error
      })
    }
  }

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
        addTransaction,
        getTransactions,
        error: state.error,
        loading: state.loading
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
