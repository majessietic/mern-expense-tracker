import React from 'react'
import { Header } from '@Component/Header'
import { Balance } from '@Component/Balance'
import { IncomeExpenses } from '@Component/IncomeExpenses'
import { TransactionList } from '@Component/TransactionList'
import { AddTransaction } from '@Component/AddTransaction'

import { GlobalContextProvider } from '@Component/GlobalContext'

export function App () {
  return (
    <GlobalContextProvider>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalContextProvider>
  )
}
