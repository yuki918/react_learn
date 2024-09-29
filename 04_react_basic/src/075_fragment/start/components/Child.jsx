import "./Child.css";
// import React from "react";
// Fragmentのみの読み込み
import { Fragment } from "react";

// jsxのルールとして、要素は1つのルート要素で束ねられている必要があるため、同列のタグをそのまま使用することができない
// Fragmentを使用することで無駄なタグを使用する必要がない

// reactで使用できる項目を確認することができる
// console.log(React);

const Child = () => {
  return (
    // <Fragment>
    //   <div className="component">
    //     <h3>Hello Component</h3>
    //   </div>
    //   <h3>Hello Fragment</h3>
    //   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis hic eligendi mollitia et quas voluptatem, laboriosam dolores magnam. Aut recusandae minus dolor omnis assumenda laborum, nisi vel quos labore neque.</p>
    // </Fragment>

    // Fragment自体の省略可能
    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis hic eligendi mollitia et quas voluptatem, laboriosam dolores magnam. Aut recusandae minus dolor omnis assumenda laborum, nisi vel quos labore neque.</p>
    </>
  );
};

export default Child;
