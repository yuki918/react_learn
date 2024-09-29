import { useState } from "react";

const Example = () => {
  // 予め変数を用意して、代入する方法は上手くいかない
  // let text;
  // 

  // 重要：useStateの配列について
  // 配列の0番目：参照用の値（現在の値、下記の場合は「hello」）
  // 配列の1番目：更新用の関数
  
  // let text = useState('hello');
  // 上の様に初期値を設定をすることも可能
  // let text = useState();
  // console.log(text);

  // useStateを分割代入することが一般的
  let [val, setVal] = useState();
  return (
    <>
      {/* <input
        type="text"
        // onChange={text = (e) => e.target.value}
        onChange={(e) => {
          // text[1]にtext[0]のテキストを変更する関数が格納されている
          const setFn = text[1];
          console.log(setFn);
          setFn(e.target.value);
        }}
      /> = {text[0]} */}
      {/* 完結にuseStateを記述することができる */}
      <input
        type="text"
        onChange={(e) => setVal(e.target.value)}
      /> = {val}
    </>
  );
};

// const Example = () => {
//   let text;

//   return (
//     <>
//       <input
//         type="text"
//         onChange={text = (e) => e.target.value}
//       /> = {text}
//     </>
//   );
// };

// 上記がなぜうまく機能しないのか？
// onChangeはあくまで括弧内のコードだけが実行されるだけである
// その外の変数が実行されているわけではないので、変数は変わらない
// 変数textを変更するには、Exampleが再実行される必要がある

export default Example;
