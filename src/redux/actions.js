export const addToCart = (amount) => {
  return {
    type: "ADDTOCART",
    payload: amount,
  };
};
