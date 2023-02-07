export const addToCart = (item) => {
  return {
    type: "ADDTOCART",
    payload: item,
  };
};

export const deleteFromCart = (item) => {
  return {
    type: "DELETEFROMCART",
    payload: item,
  };
};
