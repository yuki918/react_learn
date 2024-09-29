import { useState } from "react";
// POINT プリミティブ型：1, "str", bool, 10n, Symbol(), null, undefined
// POINT オブジェクト型：{}, []などのプリミティブ型以外
// POINT オブジェクト型のstateを変更する場合には必ず新しいオブジェクトを作成する！

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  // const changeName = (e) => setPerson({ name: e.target.value, age: person.age })
  // スプレッド演算子を用いることで、1つだけの指定をすることができる
  // 現状はオブジェクトがnameとageの2つのみだが、10個以上になると再設定が手間なので、使いやすい
  const changeName = (e) => setPerson({ ...person, name: e.target.value })
  // const changeAge = (e) => setPerson({ name: person.name, age: e.target.value })
  const changeAge = (e) => setPerson({ ...person, age: e.target.value })
  const changeReset = () => setPerson({ name: '' , age: '' })

  return (
    <>
      <h3>name：{person.name}</h3>
      <h3>age：{person.age}</h3>
      <input onChange={changeName} type="text" value={person.name} />
      <input onChange={changeAge} type="number" value={person.age} />
      <div><button onClick={changeReset}>リセット</button></div>
    </>
  );
};

export default Example;
