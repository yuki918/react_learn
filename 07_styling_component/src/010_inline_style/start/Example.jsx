import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);
    // ハイフンはキャメルケースで記載する。
    // cssのプロパティ名をそのまま使用したい場合は、ダブルクォーテーションなどで囲むこと
    const style = {
      width: 120,
      height: 60,
      display: "block",
      fontWeight: "bold",
      "border-radius": 50,
      cursor: "pointer",
      border: "none",
      margin: "auto",
      // 下記は空文字の場合は、プロパティ自体削除される
      background: isSelected ? "pink" : "",
    }

    return (
        <>
            <button onClick={clickHandler} style={style}>ボタン</button>
            <div style={{ textAlign: "center" }}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
