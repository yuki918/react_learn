import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)} />
      <ul>
        {animals
          // filterメソッドで、入力された文字がanimals配列のそれぞれに含まれているかを確認する
          // 含まれていたらtrueを返して、含まれていなのであればfalseを返す
          // trueの要素のみを配列としてmapに渡している
          .filter(animal => animal.indexOf(filterVal) !== -1)
          .map((animal) => <li key={animal}>{animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
