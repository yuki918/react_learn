// POINT TypeScriptでは型推論(type inference)によって型をある程度推定してくれる機能がある
// 基本的には、明らかに型が分かるような場合の型定義は型推論に任せるようにする

const Example = () => {
  let str = 'hello';
  // 型推論でstrは文字列と判断されたため、下記はエラーになる
  // str = 123
  let obj = { name: 'Taro', age: 12 };

  const bye = 'bye';
  // constの場合は、リテラル型になるため、bye以外だとエラーになる
  // bye = 'test';
  const nmb = 123;
};

export default Example;
