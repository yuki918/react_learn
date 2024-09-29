const Example = () => {
  const clickHandler01 = () => {
    alert('クリックされました。');
  }
  const clickHandler02 = () => {
    console.log('クリックされました。');
  }
  return (
    <>
      {/* <button onClick={clickHandler01()}>クリックしてね</button> */}
      {/* 上記だとリロードされたときに実行されるので、 onClick実行時するには括弧を付けない*/}
      <button onClick={clickHandler01}>クリックしてね</button>
      {/* 上記と下記は同じ挙動をするが、可読性を考量して、関数として定義した方が良い */}
      <button onClick={() => {alert('クリックされました。')}}>クリックしてね</button>
      <button onClick={clickHandler02}>クリックしてね</button>
    </>
  );
};

export default Example;
