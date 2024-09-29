import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  console.log(nums);
  const shuffle = () => {
    const newNums = [ ...nums ];
    // 上記の意味はnumsの配列の1つ1つを展開して、新しい配列を定義している
    console.log(newNums === nums);
    // falseが返ってくる。同じ値ではない。

    const value = newNums.pop();
    newNums.unshift(value);
    console.log(newNums);
    // (5) [5, 1, 2, 3, 4]（現状）
    setNums(newNums);
  }
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
