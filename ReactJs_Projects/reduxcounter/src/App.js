import {
    connect
} from "react-redux";
import Counter from "./Counter";

//Map Redux state to component props
function mapStateToProps(state) {
    return {
        countValue: state.count
    };
}

//Action 
var increaseAction = {
    type: "increase"
};
var decreaseAction = {
    type: "decrease"
};

//Map Redux Actions to component props
function mapDispatchToProps(dispatch) {
    return {
        increaseCount: function () {
            return dispatch(increaseAction);
        },
        decreaseCount: function () {
            return dispatch(decreaseAction);
        }
    };
}

// the HOC
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default connectedComponent;