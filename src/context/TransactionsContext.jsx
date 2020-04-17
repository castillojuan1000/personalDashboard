import React, { createContext, useState, useEffect } from "react";

import { firestore } from "../firebase";



export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {

  const [myTransactions, setMyTransactions] = useState([]);

  useEffect(() => {
    const unsubscribeFromFirestore = firestore
      .collection("transactions")
      .onSnapshot(snapshot => {
        const transactions = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        setMyTransactions(transactions);
      });
    return () => {
      unsubscribeFromFirestore();
    };
  }, []);




  return (
    <TransactionsContext.Provider
      value={{
        transactions: myTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
