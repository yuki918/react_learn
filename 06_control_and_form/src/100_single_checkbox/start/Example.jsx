import { useState } from "react";

// POINT チェックボックスの実装
const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  // const toggleChecked = (e) => {
  //   setIsChecked((prevState) => !prevState);
  // }
  const toggleChecked = (e) => setIsChecked((prevState) => !prevState);
  return (
    <div>
      <label htmlFor="my-check">
        チェック：
      </label>
      <input
        type="checkbox"
        id="my-check"
        checked={isChecked}
        // onChange={toggleChecked}
        onChange={() => setIsChecked(prevState => !prevState)}
      />
      <br />
      <label htmlFor="my-check02">
        チェック：
      </label>
      <input
        type="checkbox"
        id="my-check02"
      />
      <div>{isChecked ? "ON!" : "OFF!"}</div>
    </div>
  );
};

export default Example;
