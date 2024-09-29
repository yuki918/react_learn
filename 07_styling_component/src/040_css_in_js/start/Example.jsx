import { useState } from "react";
import styled from "styled-components";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const StyleButton = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props) => props.isSelected ? "pink" : ""};
    @media (max-width: 600px) {
      width: 100px;
    }
  `;

  // 背景色だけ違うボタン
  const OrangeButton = styled(StyleButton)`
    background-color: orange;
    &:hover {
      color: red;
      opacity: .7;
    }
    span {
      font-size: 1.4rem;
    }
  `;

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyleButton isSelected={isSelected} onClick={clickHandler}>ボタン</StyleButton>
      <OrangeButton isSelected={isSelected} onClick={clickHandler}><span>ボタン</span></OrangeButton>
      <button
        className={`btn ${isSelected ? "selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
