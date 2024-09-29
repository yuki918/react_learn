const Bye = (props) => {
  // propsの書き換えをすることはできない
  // props.name = "bob";
  return (
    <div>
      <h3>Bye {props.name}</h3>
    </div>
  );
};

export default Bye;