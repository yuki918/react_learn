import "./Expression.css";

// JSの使い方

const Expression = () => {
  const title = "Expression";
  const array = ["item01", "item02", "item03"];
  const hello = (arg) => `${arg} Function`;
  const jsx = <h3>Hello JSX</h3>;
  const bool = true;
  return (
    // <div className="expression">
    <div className={title.toLocaleLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{array}</h3>
      <h3>{hello("hello")}</h3>
      {/* jsのコメントコメントアウト */}
      <h3>{/* 画面上には表示されない */}</h3>
      {/* JSXのコメントアウト */}
      {/* <h3>Hello JSX</h3> */}
      { <h3>Hello JSX</h3> }
      { jsx }
      {/* 真偽値は表示されない */}
      { bool }
    </div>
  );
};

export default Expression;