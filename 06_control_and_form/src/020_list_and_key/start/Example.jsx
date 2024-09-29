
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });

  return (
    <>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList}
        {helloAnimals} */}
        {/* {animalList} */}

        {/* 配列で子要素を繰り返し処理する場合は、keyを設定する
            keyが未設定の場合は、コンソールでエラーが発生する */}
        {animals.map((animal) => <li key={animal}>Hello, {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
