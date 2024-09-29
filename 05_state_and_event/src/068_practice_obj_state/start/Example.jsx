import { useState } from 'react';

const Example = () => {
  const orderObj = { item: 'apple', count: 10 };
  const [order, setOrder] = useState(orderObj);
  
  const changeItem = (e) => setOrder(order => ({...order, item: e.target.value}));
  // const changeItem = (e) => setOrder({...order, count: order.count + 1});
  // 上記でも問題ないが、レンダリング初期のstateの値を元に即時処理が走ってしまうので、
  // 前の予約されたsetStateでのstateの値を使用することができない。
  const countUp = () => setOrder(order => ({...order, count: order.count + 1}));
  // 上記は下記の省略（コールバック関数）
  // const changeItem = (e) => setOrder(function (order) {
  //   return { ...order, item: e.target.value }
  // });

  // 下記の場合は、setOrderの場合はプラス1になる。
  // const countUp = () => {
  //   setOrder({ ...order, count: order.count + 1 });
  //   setOrder({ ...order, count: order.count + 1 });
  // };

  // 下記の場合は、setOrderの場合はプラス2になる。
  // const countUp = () => {
  // 　setOrder((order) => ({ ...order, count: order.count - 1 }));
  // 　setOrder((order) => ({ ...order, count: order.count - 1 }));
  // };
  const countDown = () => setOrder(order => ({...order, count: order.count - 1}));
  return (
    <div>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように「+と-ボタンをクリックするとCountの表示が1ずつ増減する機能」と「input要素に連動してItemの表示が変更される機能」を実装してください。コンポーネントの外側（上部）に変数や関数を準備しているためうまく使ってください。
      </p>
      <h3>Item:{order.item}</h3>
      <h3>Count:{order.count}</h3>
      <input type="text" value={order.item} onChange={changeItem} />
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default Example;
