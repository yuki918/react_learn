
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // forを用いたリスト表示
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li key={animal}>{animal}</li>)
  }

  // mapを用いたリスト表示
  // const helloAnimalList = animals.map(function (animal) {
  //   return <li>hello, {animal}</li>;
  // });
  // 上記の省略
  const helloAnimalList = animals.map((animal) => <li key={animal}>hello, {animal}</li>);
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {animalList}
        {helloAnimalList}
        {/* for分はJSXで使用することができないが、mapの下記省略構文だと使用することができる。
            forではなくmapを使用することが多い */}
        {animals.map((animal) => <li key={animal}>hello, {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
