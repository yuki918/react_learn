// POINT コールバック関数の使い方
function print(callback) {
  // console.log(callback);
  // ƒ fn(number = 3) {
  //   return number * 2;
  // }
  // const result = callback();
  const result = fn(2);
  console.log(result);
}

function fn(number = 3) {
  return number * 2;
}

print(fn)

// console.log(fn(2));
// console.log(fn(4));

// const fnArrow = number => {
//   console.log(number);
//   return number * 2;
// };

// const fnArrowObj = number => ({ result: number * 2 })

// console.log(fnArrowObj(2));