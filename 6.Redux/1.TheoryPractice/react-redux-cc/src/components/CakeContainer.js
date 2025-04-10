/* eslint-disable react/prop-types */

import { buyCake } from "./redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Numbers of cake - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
