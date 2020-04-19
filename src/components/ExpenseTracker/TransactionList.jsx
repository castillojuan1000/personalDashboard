import React, { useContext } from "react";
import { TransactionsContext } from '../../context/TransactionsContext'
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};
