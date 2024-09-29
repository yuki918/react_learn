import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  
  const OPTIONS = ["Apple", "Banana", "Cherry"];
  const [selected, setSelected] = useState("Banana");

  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value);
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <h3>inputとtextarea</h3>
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

      <h3>select</h3>
      <div>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {OPTIONS.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <p>選択された果物：{selected}</p>
      </div>

      <h3>radio</h3>
      <div>
        {RADIO_COLLECTION.map((item) => 
          <label>
            <input type="radio" value={item} checked={fruit === item} onChange={onChange} />
            {item}
          </label>
        )};
        
        {/* <label>
          <input type="radio" value="Apple" checked={fruit === "Apple"} onChange={onChange} />
          Apple
        </label>
        <label>
          <input type="radio" value="Banana" checked={fruit === "Banana"} onChange={onChange} />
          Banana
        </label>
        <label>
          <input type="radio" value="Cherry" checked={fruit === "Cherry"} onChange={onChange} />
          Cherry
        </label> */}
        <h3>私は{fruit}がたべたい</h3>
      </div>
    </>
  );
};

export default Example;