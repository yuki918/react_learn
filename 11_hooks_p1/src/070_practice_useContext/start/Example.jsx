import { CalcProvider } from "./context/CalcContext";
import Number from "./components/Number";
import Select from "./components/Select";
import Result from "./components/Result";

const Example = () => {
  return (
    <CalcProvider>
      <Number type="a" />
      <Number type="b" />
      <Select />
      <Result />
    </CalcProvider>
  )
};

export default Example;
