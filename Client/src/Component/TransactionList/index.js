import React, { Fragment, useContext, useEffect } from 'react'
import { GlobalContext } from '@Component/GlobalContext'
import { Transaction } from '@Component/Transaction'

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext)

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </Fragment>
  )
}
