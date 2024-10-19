import { useEffect, useState } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp(prev => !prev)}>トグル</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);

  // 依存配列がない場合は、useEffectが削除された際にreturnが発動する
  useEffect(() => {
    // console.log('init');
    let intervalId = null;
    intervalId = window.setInterval(() => {
      console.log('interval called');
      setTime(prev => prev + 1);
    }, 1000);
    // return () => console.log('end');
    return () => {
      window.clearInterval(intervalId);
    }
  }, [])
  
  useEffect(() => {
    // console.log('update');
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time);
    // return () => console.log('update end');
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
