const inititalState = {
  amount: 0,
  items: [],
};
const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case "ADDTOCART": {
      const newItem = action.payload;
      const newItems = [...state.items];
      const index = newItems.findIndex((el) => el.title === newItem.title);
      if (index < 0) {
        newItems.push(newItem);
      } else {
        newItems[index].amount = newItems[index].amount + newItem.amount;
      }
      let amount = 0;
      newItems.forEach((el) => {
        amount = amount + el.amount;
      });

      return {
        ...state,
        amount: amount,
        items: newItems,
      };
    }
    case "DELETEFROMCART": {
      const newItem = action.payload;
      const newItems = [...state.items];
      const index = newItems.findIndex((el) => el.title === newItem.title);

      newItems.splice(index, 1);

      let amount = 0;
      newItems.forEach((el) => {
        amount = amount + el.amount;
      });

      return {
        ...state,
        amount: amount,
        items: newItems,
      };
    }
    default:
      return state;
  }
};
export default reducer;
