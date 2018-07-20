import actionTypes from "../actions/actionTypes";

const reducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      console.log("Added to cart");
      return state;
    default:
      return state;
  }
};

export default reducer;