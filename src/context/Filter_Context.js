import { createContext, useContext, useEffect, useReducer } from "react";
import { AppProductContext } from "./ProductContext";
import reducer from "../reducer/Filter_Reducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    colors: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = AppProductContext();

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  //to show sorted value
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SET_SORTING_VALUE" });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  // check-Present-Field-SORT-VALUE

  const checkPresentField = (event) => {
    let userClickedSortValue = event.target.value;
    dispatch({
      type: "GET_SORT_VALUE",
      payload: userClickedSortValue,
    });
  };

  // searching-value and functionality
  const setSearchingValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch({
      type: "UPDATE-FILTERS-VALUES",
      payload: { name, value },
    });
  };

  // clear-filters
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        checkPresentField,
        setSearchingValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

//custom-hook
export const useFilterContext = () => {
  return useContext(FilterContext);
};
