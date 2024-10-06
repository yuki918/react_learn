import { useCalc, useCalcDispatch } from "../context/CalcContext";

const Number = ({ type }) => {
  const state = useCalc();
  const dispatch = useCalcDispatch();
  const numChangeHandler = (e) => {
    dispatch({type: 'change', payload: {name: e.target.name, value: e.target.value}});
  };
  return (
    <div>
      {type}:
      <input
        type="number"
        name={type}
        // ブラケット記法
        value={state[type]}
        onChange={numChangeHandler}
      />
    </div>
  );
};

export default Number;
