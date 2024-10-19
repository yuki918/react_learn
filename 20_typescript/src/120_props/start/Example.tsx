import Hello, { Btn } from "./Hello";

const Example: React.FC = () => {
    return (
      <>
        <Btn fn={(text) => console.log(`hello ${text}`)} />
        <Hello text="TypeScript">Children</Hello>
      </>
    );
};

export default Example;
