import React, { createContext, useState, useEffect } from "react";

import { firestore } from "../firebase";



export const RemindersContext = createContext();

export const RemindersProvider = ({ children }) => {

  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const unsubscribeFromFirestore = firestore
      .collection("reminders")
      .onSnapshot(snapshot => {
        const myReminders = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        setReminders(myReminders);
      });
    return () => {
      unsubscribeFromFirestore();
    };
  }, []);




  return (
    <RemindersContext.Provider
      value={reminders}
    >
      {children}
    </RemindersContext.Provider>
  );
};
