import AnimalItem from "./AnimalItem";

const AnimalList = ({ animals }) => {
  if (animals.length === 0) return <h3>アニマルがありません。</h3>;
  return (
    <ul>
      {animals.map((animal) => <AnimalItem key={animal} animal={animal}/>)}
    </ul>
  );
};

export default AnimalList;
