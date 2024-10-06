import { useState, useReducer } from "react";

const Example = () => {
  // useStateとuseReducerでカウントアップの実装
  const [state, setState] = useState(0);
  // dispatchを実行すると、useReducerの第一引数の関数が実行される
  // const [rstate, dispatch] = useReducer(prev => ++prev, 0);
  // const [rstate, dispatch] = useReducer((prev, action) => {
  //   return (action === '+') ? ++prev : --prev;
  // }, 0);
  // typeでカウントアップかカウントダウンかの確認
  // stepで増減数を設定する
  const [rstate, dispatch] = useReducer((prev, { type, step }) => (type === '+') ? prev + step : prev - step, 0);
  // useStateは使用するときにstateの実装をするが、
  // useReducerは定義するときにstateの実装をする
  const countUp = () => setState(prev => ++prev);
  const rcountUp = () => dispatch({ type: '+', step: 2 });
  const rcountDown = () => dispatch({ type: '-', step: 4 });
  return (
    <>
      <h3>{state}</h3>
      <button onClick={countUp}>+</button>
      <h3>{rstate}</h3>
      <button onClick={rcountUp}>+</button>
      <button onClick={rcountDown}>-</button>
    </>
  );
};

export default Example;
