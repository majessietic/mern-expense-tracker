import React, { useContext } from 'react'
import { GlobalContext } from '@Component/GlobalContext'
import { comma } from '@Component/Utils'

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${comma(Math.abs(transaction.amount))}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button>
    </li>
  )
}
