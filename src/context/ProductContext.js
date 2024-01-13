import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //USE-REDUCER-HOOK
  const [state, dispatch] = useReducer(reducer, initialState);

  //API-CALL-TO-GET-DATA
  const getProducts = async (url) => {
    dispatch({ type: "API_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  //USE-EFFECT HOOK
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// CUSTOM-HOOK

const AppProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, AppProductContext };
