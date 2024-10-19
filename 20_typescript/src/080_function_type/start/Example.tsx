const Example = () => {
  function sum01(x: number, y: number) {
    return x + y;
  }
  // 上記だと型推論で返り値がnumberになるが、下記だと返り値をnumberと設定する
  // function sum01(x: number, y: number): number {
  //   return x + y;
  // }
  console.log(sum01(1, 5));
  // アロー関数
  const sum02 = (x: number, y: number) => x + y;
  console.log(sum02(1, 8));
  // デフォルト値
  const sum03 = (x: number, y: number = 1) => x + y;
  console.log(sum03(1));
  // Nullを許容する
  function sum04(x: number, y?: number) {
    return y ? x + y: x;
  }
  console.log(sum04(2000));
  // voidは返り値がない（returnがない）
  const sum05 = (x: number, y: number): void => console.log(x + y);
  sum05(1000, 2000);

  // typeで型の設定
  type Sum = (x: number, y: number) => number;
  const sum06: Sum = (x, y) => x + y;
  console.log(sum06(1, 11));
};

export default Example;
