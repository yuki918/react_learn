const Example = () => {
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  }
  // 引数Tにそれぞれの型が入る
  // このように、型引数(type parameters)を受け取る関数を作る機能のことをジェネリクスと呼ぶ
  console.log(repeat<number>(10, 10));
  // (10) [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  console.log(repeat<string>('test', 10));
  // (10) ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test']
  // 省略も可能
  console.log(repeat(1000, 10));
  console.log(repeat('test', 10));
};

export default Example;
