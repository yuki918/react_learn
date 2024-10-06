import { useState, useRef } from "react";

/* POINT useRefでDOMを取得
refオブジェクトをref属性に渡すとDOMを参照することができます。
*/
const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  // console.log(inputRef);

  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

// POINT 動画の再生・停止を制御
const Case2 = () => {
  const [playing, setPlaying] = useState("");
  const videoRef = useRef();

  return (
    <div>
      <h3>ユースケース2</h3>
      <video style={{ maxWidth: "100%" }} ref={videoRef}>
        <source src="./sample.mp4"></source>
      </video>
      <button onClick={() => {
        if (playing) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setPlaying(prev => !prev);
      }}>
        {playing ? "停止" : "再生"}
      </button>
    </div>
  );
};

/* POINT useRefは再レンダリングされません。
書き換え可能な情報としてコンポーネントに保持させておくことができます。
state は更新されるごとに再レンダーされますが、refオブジェクトの中身が変わっても再レンダーが走ることはありません。
*/
const createTimeStamp = () => new Date().getTime();
const Case3 = () => {
  const [timeStamp, setValue] = useState(createTimeStamp());
  const ref = useRef(createTimeStamp());

  const updateState = () => setValue(createTimeStamp());
  const updateRef = () => {
    /* コンソールを見るとブラウザの表示と、ref.currentの中身が異なることを確認できます */
    ref.current = createTimeStamp();
    console.log("ref.current -> ", ref.current);
  };

  return (
    <div>
      <h3>ユースケース3</h3>
      {/* useStateは再レンダリングされるため、更新される */}
      <p>
        state: {timeStamp}
        <button onClick={updateState}>更新</button>
      </p>
      {/* useRefは再レンダリングされないため、更新されない */}
      <p>
        ref: {ref.current}
        <button onClick={updateRef}>更新</button>
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
      <Case3 />
    </>
  );
};

export default Example;
