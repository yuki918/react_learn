/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

// const Child = ({ color = "green" }) => {
// プロパティ名を変更することも可能
const Child = ({ color: c = "green", num, fn, bool, obj }) => {
  // console.log(props);
  // コンソールでプロパティcolorを確認することができる
  // {color: 'red'}
  return (
    <>
      {/* <div className={`component ${props.color}`}> */}
      <div className={`component ${c}`}>
        <h3>Hello Component</h3>
        <p>{num}</p>
        <p>{fn("function")}</p>
        <p>{bool ? 'true' : 'false'}</p>
        <p>{obj.name + obj.age}</p>
      </div>
    </>
  );
};

export default Child;
