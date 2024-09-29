import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  // const countUp = () => setCount(count + 1);
  const countUp = () => {
    setCount(count + 1);
    // setCount(count + 1);
    // 上記でプラス2になると思うが、実際はプラス1のままである
    // 下記の様にprevstateを用いることで、プラス2にすることができる
    setCount(prevstate => prevstate + 1);
    // count変数は0のまま。非同期で処理されるため
    console.log(count);
  };
  const countDown = () => setCount(count - 1);
  return (
    <>
      <p>現在のカウント数：{count}</p>
      {/* <button onClick={(e) => setCount(count + 1)}>+</button>
      <button onClick={(e) => setCount(count - 1)}>-</button> */}
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
