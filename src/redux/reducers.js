const inititalState = { amount: 0 };
const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case "ADDTOCART": {
      return { ...state, amount: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
