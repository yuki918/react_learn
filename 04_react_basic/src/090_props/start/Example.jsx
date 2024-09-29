import Child from "./components/Child";
const hello = (arg) => `hello ${arg}`;
const child = {
  color: 'red',
  num: 1000,
}

const Example = () => (
  <>
    <Child
      num={123}
      fn={hello}
      bool
      obj={{ name: 'tom', age: 18 }}
    />
    <Child
      // color="red"
      // num={124}
      // ...(ドット3つ)でオブジェクトの展開をすることができる
      // スプレッド構文と呼ばれる
      {...child}
      fn={hello}
      bool
      obj={{ name: 'jack', age: 22 }}
    />
    <Child
      color="blue"
      num={125}
      fn={hello}
      bool
      obj={{ name: 'sasaki', age: 10 }}
    />
  </>
);

export default Example;
