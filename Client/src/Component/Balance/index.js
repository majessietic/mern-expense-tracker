import React, { Fragment, useContext } from 'react'
import { GlobalContext } from '@Component/GlobalContext'
import { comma } from '@Component/Utils'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>${comma(total)} </h1>
    </Fragment>
  )
}
