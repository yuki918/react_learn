import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('useEffect is called');
    window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }, [])
  // window.setInterval(() => {
  //   setTime(prev => prev + 1);
  // }, 1000);

  // useEffectの依存配列（第二引数）のstateが更新されると、コールバック関数が実行される
  // 上記コードは依存配列を設定していないので、Exampleが実行されたときのみ実行される
  // 下記コードは1秒ごとにtimeが更新されているので、そのたびにコンソールが実行する
  useEffect(() => {
    console.log('update');
  }, [time])

  useEffect(() => {
    // コンソールログの出力
    console.log('update');
    // DOMの操作（ページのタイトルを変更）
    document.title = 'counter:' + time;
    // サーバーとの通信（ローカルストレージでtime-leyにtimeを設定する）
    window.localStorage.setItem("time-ley", time);
  }, [time])

  // 依存配列をコールバックの中で書き換えることはしてはいけない。
  // 無限ループ
  // useEffect(() => {
  //   window.setInterval(() => {
  //     setTime(prev => prev + 1);
  //   }, 1000);
  // }, [time])
  
  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
