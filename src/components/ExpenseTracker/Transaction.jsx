import React from "react";

import { firestore } from '../../firebase'

export const Transaction = ({ transaction }) => {


  const { text, amount, id } = transaction;

  const docRef = firestore.doc(`transactions/${id}`)
  const deleteDoc = () => docRef.delete();

  const sing = amount < 0 ? "-" : "+";
  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}{" "}
      <span>
        <span>{sing}</span>${Math.abs(amount)}
      </span>
      <button
        onClick={deleteDoc}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
