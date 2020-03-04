import React, { Fragment, useContext } from 'react'
import { GlobalContext } from '@Component/GlobalContext'
import { Transaction } from '@Component/Transaction'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </Fragment>
  )
}
