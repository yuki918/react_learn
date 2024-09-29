import { useState } from "react";

const Example = () => {
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value);
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];
  return (
    <>
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
    </>
  );
};

export default Example;
