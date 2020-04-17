import React, { useContext } from "react";
import { TransactionsContext } from '../../context/TransactionsContext'

export const Balance = () => {
  const { transactions } = useContext(TransactionsContext);

  const amount = transactions.map(transaction => transaction.amount)
  const total = amount.reduce((acc, current) => acc += current, 0)

  return (
    <>
      <h4>Your Balance</h4>
      <h1 className={total > 0 ? 'plus' : 'minus'}>${total}</h1>
    </>
  );
};
