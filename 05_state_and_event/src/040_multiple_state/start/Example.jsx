import { useState } from "react";

// useStateはコンポーネントの中（トップレベル）でしか使用することができない
// const [countA, setCountA] = useState(0);

const Example = () => {
  // コンポーネントのトップレベルとはここのことである
  // 例えば、if文で条件分岐することもできない
  // if (bool) {
  //   const [countA, setCountA] = useState(0);
  // }
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);
  return (
    <>
      <p>ボタンを{countA}回押しました。</p>
      <button onClick={(e) => setCountA(countA + 1)}>ボタンA</button>
      <p>ボタンを{countB}回押しました。</p>
      <button onClick={(e) => setCountB(countB + 10)}>ボタンB</button>
      <p>ボタンを{countC}回押しました。</p>
      <button onClick={(e) => setCountC(countC + 100)}>ボタンC</button>
    </>
  );
};

export default Example;
