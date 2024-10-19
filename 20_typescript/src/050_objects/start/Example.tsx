const Example = () => {
  //// 配列の型定義
  const array01: number[] = [1, 2, 3];
  const array02: string[] = ['test01', 'test02', 'test03'];
  // arrayコンストラクタを使用した配列の型定義
  const array03: Array<number> = [1, 2, 3];
  // 数字と文字列の配列
  const array04: (number | string)[] = [1, 'test02', 3];
  const array05: Array<number | string> = [1, 'test02', 3];

  //// オブジェクトの型定義
  const obj01: { name: string, age: number } = { name: 'Taro', age: 18 };
  type Person01 = { name: string, age: number };
  const obj02: Person01 = { name: 'Taro', age: 18 };
  // エラーになる
  // obj01.name = 18;
  // obj01.sex = 18;
  // const obj03: Person01 = { name: 'Taro' };
  // ageにクエスションマークを付与することで、ageを設定が不要になる
  type Person02 = { name: string, age?: number };
  const obj03: Person02 = { name: 'Taro' };

  //// オブジェクトと配列の定義
  const users: Person02[] = [
    { name: 'Taro' },
    { name: 'Hanako', age: 20 },
    { name: 'Jiro', age: 18 },
  ];
};

export default Example;
