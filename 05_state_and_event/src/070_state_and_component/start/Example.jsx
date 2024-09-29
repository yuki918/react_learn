import { useState } from "react";

const Example = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => setToggle(prev => !prev);
  // 上記で真偽値を切り替えている
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {/* {toggle ? <Count title="A" /> : <Count title="B" />} */}
      {/* titleAとBの値が同じ値になるため、AとBは別々であること */}
      {/* keyとはコンポーネントを一意にするためのもの */}
      {/* {toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" />} */}
      {/* 上記ではトグルすると、値が0にリセットされる */}
      {
        toggle
        ? <Count key="A" title="A" count={countA} setCount={setCountA} />
        : <Count key="B" title="B" count={countB} setCount={setCountB} />
      }
    </>
  );
}

const Count = ({ title, count, setCount }) => {
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
