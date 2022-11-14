import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counterSlice";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispach = useDispatch();

  const toggleCounterHandler = () => {
    dispach(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispach(counterActions.increment());
  };

  const increaseHandler = () => {
    dispach(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispach(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increase</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
