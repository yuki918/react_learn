import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  return (
    <div>
      {/* reactではfor属性はhtmlForで記述する */}
      <label htmlFor="123">ラベル</label>
      <input
        id="123"
        type="text"
        placeholder="input"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      {/* <textarea
        id="456"
        placeholder="textarea"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      ></textarea> */}
      {/* 通常であれば上記のようになるが、JSXでは下記の様になる */}
      <textarea
        id="456"
        placeholder="textarea"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <h3>{val}</h3>
      <button onClick={clearVal}>クリア</button>
    </div>
  );
};

export default Example;
