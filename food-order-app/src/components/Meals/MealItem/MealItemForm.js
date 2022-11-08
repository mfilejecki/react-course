import { useRef, useState } from "react";

import styles from "./MealItemForm.module.css";

import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNum);
  };

  const inputSettings = {
    id: `amount_${props.id}`,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input label="Amount" input={inputSettings} ref={amountInputRef} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please render a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
