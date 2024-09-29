import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          // 参考演算子を用いて、Dogにだけ★を付ける
          // .map((animal) => <li key={animal}>{animal + (animal === "Dog" ? "★" : "")}</li>)}
          // reactでは真偽値は画面に表示されないので、下記でもOK
          .map((animal) => <li key={animal}>{animal}{animal === "Dog" && "★"}</li>)}
      </ul>
    </>
  );
};

export default Example;
