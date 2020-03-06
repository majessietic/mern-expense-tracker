import React, { createContext, useReducer } from 'react'
import { AppReducer } from '@Component/AppReducer'
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
        type: 'ERROR_TRANSACTION',
        payload: err.response.data.error
      })
    }
  }

  const deleteTransaction = async id => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`)

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      })
    } catch (err) {
      dispatch({
        type: 'ERROR_TRANSACTION',
        payload: err.response.data.error
      })
    }
  }

  const addTransaction = async transaction => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/transactions', transaction, config)

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
      })
    } catch (err) {
      dispatch({
        type: 'ERROR_TRANSACTION',
        payload: err.response.data.error
      })
    }
  }

  return (
    <GlobalContext.Provider
      value={{ 
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
