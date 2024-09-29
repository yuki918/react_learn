import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "blue" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？">
        {/* {"Childrenを書いてみよう"} */}
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Container>
      {/* 下記の様に記述することも可能だが、keyプログラムが必要になる */}
      <Container title="Childrenとは？" 
        children={[
          <Profile key={profile[0].name} {...profile[0]} />,
          <Profile key={profile[1].name} {...profile[1]} />
        ]}
      />
    </div>
  );
};

export default Example;
