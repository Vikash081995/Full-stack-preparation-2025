/* eslint-disable react/prop-types */

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
};

export default ChildComponent;
