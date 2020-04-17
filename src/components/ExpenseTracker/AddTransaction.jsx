import React, { useState } from "react";
// import { GlobalContext } from "../context/GlobalState";
import { firestore } from "../../firebase";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // const { addTransaction } = useContext(GlobalContext);

  const handleForm = e => {
    e.preventDefault()
    const transaction = {
      text: text,
      amount: parseInt(amount, 10)
    };

    // addTransaction(transaction);
    firestore.collection("transactions").add(transaction);

    setAmount(0);
    setText("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleForm}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={e => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
