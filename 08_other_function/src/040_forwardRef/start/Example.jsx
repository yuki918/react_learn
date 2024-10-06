import { useRef, forwardRef } from "react";

// const Input = ({ customRef }) => <input type="text" ref={customRef} />;
const Input = forwardRef((props, ref) => <input type="text" ref={ref} />);
const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
