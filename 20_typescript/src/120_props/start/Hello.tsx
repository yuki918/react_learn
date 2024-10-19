type HelloProps = {
  text: string,
  children?: React.ReactNode,
}
const Hello: React.FC<HelloProps> = (props) => {
  return <h1>Hello {props.text} {props.children}</h1>
};
// React.FCはコンポーネントを定義できる型です。
// React.FCがbooleanやstringのようなもの。
// コンポーネントでpropsを使用したい場合は、ジェネリクスを設定する
// https://qiita.com/kim_t0814/items/50d46b5f560831005ebc
// 上記参照
// 下記でも同じ実装ができる
// const Hello = (props: HelloProps) => {
//   return <h1>Hello {props.text} {props.children}</h1>
// };

type FnProps = {
  fn: (text: string) => void
}
export const Btn: React.FC<FnProps> = (props) => {
  return <button onClick={() => props.fn('TypeScript')}>ボタン</button>
};

export default Hello;
