import { useState } from "react";
import "./Example.css";

const Example = () => {
  console.log("render")
  // const [countA, setCountA] = useState(0);
  const [countA, setCountA] = useState({
    val: 0,
  });
  // Object.isでオブジェクトの比較ができる（boolean）
  // 下記は同じオブジェクトに思えるが、falseを返す。
  // const isSame = Object.is({val:0}, {val:0});
  // 下記はtrue
  const obj01 = {val:0};
  const obj02 = obj01;
  const isSame = Object.is(obj01, obj02);
  console.log(isSame);
  return (
    <div className="parent">
      <div>
        <h3>再レンダリング？</h3>
        <button
          onClick={() => {
            // 再レンダリングされない
            // setCountA({
            //   val: 0,
            // })
            setCountA(prev => {
              // 再レンダリングされない
              // prev.val = 1
              const newState = { ...prev };
              newState.val = 1
              return newState;
            });
          }}
        >
          ボタンA
        </button>
      </div>
      <div>
        <p>ボタンAクリック回数：{}</p>
      </div>
    </div>
  );
};

export default Example;
