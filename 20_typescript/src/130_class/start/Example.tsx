class User {
  public name: string;
  // デフォルト値
  // public name: string = 'Hanako';
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const Example = () => {
  const user01 = { name: 'Hanako', age: 22 };
  const user02 = new User('Hanako', 24);
  // console.log(user02);
  return (
    <div>
      <p>name:{user02.name}</p>
      <p>age:{user02.age}</p>
    </div>
  )
};

export default Example;
