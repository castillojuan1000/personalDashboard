import React, { useState } from "react";
// import { GlobalContext } from "../context/GlobalState";
import { firestore } from "../../firebase";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
            className='transaction'
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
            className='transaction'
            placeholder="Enter amount..."
            value={amount}
            onChange={e => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <MyButton type="submit" value="Submit" color="blue">
          Submit
          </MyButton>
      </form>
    </>
  );
};

//? Submit button
const styles = {
  root: {
    background: props =>
      props.color === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: props =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    width: "50%"
  }
};

function MyButtonRaw(props) {
  const { classes, color, ...other } = props;
  return <Button className={classes.root} {...other} />;
}

MyButtonRaw.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["blue", "red"]).isRequired
};

const MyButton = withStyles(styles)(MyButtonRaw);
