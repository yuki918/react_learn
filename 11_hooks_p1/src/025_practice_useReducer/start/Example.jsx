import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    // inputのvalueの値がJavaScriptに渡される際に文字列になるため数値に変換
    case "add": {
      return { ...state, result: Number(state.a) + Number(state.b) };
    }
    case "minus": {
      return { ...state, result: Number(state.a) - Number(state.b) };
    }
    case "divide": {
      return { ...state, result: Number(state.a) / Number(state.b) };
    }
    case "multiply": {
      return { ...state, result: Number(state.a) * Number(state.b) };
    }
    default:
      throw new Error("operator is invalid");
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  const numChangeHandler = (e) => {
    dispatch({ type: "change", payload: { name: e.target.name, value: e.target.value } });
  }

  return (
    <>
      {/* <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p> */}
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select name="type" onChange={calculate}>
        {CALC_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
