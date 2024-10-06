import GrandChild from "./GrandChild";
import { useContext } from "react";
import { MyContext } from "../Example";
const Child = () => {
  const [value] = useContext(MyContext);
  return (
    <div style={{ border: "1px solid black", padding: 10  }}>
      <h3>子コンポーネント</h3>
      {value}
      <GrandChild />
    </div>
  );
};
export default Child;
