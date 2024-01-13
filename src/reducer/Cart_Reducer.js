const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, product } = action.payload;
      let newDataObj = {
        id: id + color,
        name: product.name,
        price: product.price,
        amount,
        color,
        image: product.image[0],
        maxStock: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, newDataObj],
      };

    case "REMOVE_CART_ITEMS":
      const { cart } = state;
      const removeProductId = action.payload;
      let removeProductData = cart.filter((currElem) => {
        return currElem.id !== removeProductId;
      });
      return {
        ...state,
        cart: removeProductData,
      };

    default:
      return state;
  }
};

export default cartReducer;
