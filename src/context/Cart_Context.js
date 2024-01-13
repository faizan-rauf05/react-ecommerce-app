import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/Cart_Reducer";
import { useEffect } from "react";

export const cartContext = createContext();

const retrieveCartData = () => {
  let newCartData = localStorage.getItem("mycart");
  if (newCartData === []) {
    return [];
  } else {
    return JSON.parse(newCartData);
  }
};

const initialState = {
  // cart: [],
  cart: retrieveCartData(),
  total_items: "",
  total_amount: "",
  shipping_fee: 5000,
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  console.log(state.cart);
  // REMOVE-ITEMS-FROM-CART
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_CART_ITEMS", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("mycart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <cartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
