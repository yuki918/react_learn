// アロー関数の使い方

function fn(number) {
  return number * 2;
}
console.log(fn(2));
// 4

// アロー関数の記述と省略分（変数が1つで中身が1行の場合のみ）
// const fnArron = (number) => {
//   return number * 2;
// }
// const fnArron = number => {
//   return number * 2;
// }
const fnArron01 = number => number * 2;
console.log(fnArron01(2));
// 4

const fnArron02 = number => {
  console.log(number);
  return number * 2;
}
console.log(fnArron02(4));
// 4
// 8

const fnArronObj = number => ({ reslut: number * 2 });
console.log(fnArronObj(6));
// {
//   "reslut": 12
// }