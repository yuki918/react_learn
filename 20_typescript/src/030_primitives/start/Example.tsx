// POINT プリミティブとは
// プリミティブとは、TypeScriptが扱うことの出来る基本的な値のこと
// 具体的な例としては、文字列、数値、巨大な数値、真偽値、null、undefinedなどがある

const Example = () => {
  let str: string = 'hello';
  // 文字列に数字を入れると、エラーが発生する
  // str = 1;
  // console.log(str);

  let num: number = 100;
  // console.log(num);

  let bigNum: bigint = 100n;
  // console.log(bigNum);

  let bool: boolean = true;
  // console.log(bool);

  let nullish: null = null;
  // console.log(nullish);

  let undefinedValue: undefined = undefined;
  // console.log(undefinedValue);

  // リテラル型
  let trueVal: true = true;
  // trueのみ許容されている
  // trueVal = false;
  let num123: 123 = 123;
  let hello: 'hello' = 'hello';

  // ユニオン型（複数の型を組み合わせて「型Tまたは型U」のような、「または」の意味を表すことができる）
  // T | U というように、|（パイプ） を用いてユニオン型を表す
  let strOrNum: string | number | boolean = 111;
  strOrNum = "hello";
  strOrNum = true;
  // console.log(strOrNum);

  // 文字列の「hello」かnumber型とboolean型のみ
  let helloOrNumOrBool: 'hello' | number | boolean = 111;

  // typeを使用して、変数として使用する
  type helloOrNum = 'hello' | number;
  const hello02: helloOrNum = "hello";

  // 見た目のために最初にパイプを使用しているが、無視される。
  type DayOfWeek =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday'

  const day: DayOfWeek = "Sunday";
};

export default Example;
