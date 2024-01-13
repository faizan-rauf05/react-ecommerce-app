const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArray = action.payload.map((currElem) => currElem.price);
      let maxPrice = priceArray.reduce((acc, currValue) => {
        return Math.max(acc, currValue);
      }, 0);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice,
          price: maxPrice,
        },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      let userSort = action.payload;
      return {
        ...state,
        sorting_value: userSort,
      };

    case "SET_SORTING_VALUE":
      let newSortData;

      const { filter_products } = state;
      let tempSortData = [...filter_products];

      // sort-products-switch
      switch (state.sorting_value) {
        case "a-z":
          newSortData = tempSortData.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;
        case "z-a":
          newSortData = tempSortData.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          break;
        case "low":
          newSortData = tempSortData.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "high":
          newSortData = tempSortData.sort((a, b) => {
            return b.price - a.price;
          });
          break;
        default:
          return state;
      }
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE-FILTERS-VALUES":
      let { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterData = [...all_products];
      const { text, category, company, colors, price } = state.filters;
      const trimmedText = text.replace(/\s/g, "");

      if (text) {
        tempFilterData = tempFilterData.filter((currElem) => {
          const trimmedName = currElem.name.replace(/\s/g, "");
          return trimmedName.toLowerCase().includes(trimmedText.toLowerCase());
        });
      }
      if (category !== "all") {
        tempFilterData = tempFilterData.filter(
          (curElem) => curElem.category === category
        );
      }
      if (company !== "all") {
        tempFilterData = tempFilterData.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }
      if (colors !== "all") {
        tempFilterData = tempFilterData.filter((curElem) => {
          return curElem.colors.includes(colors);
        });
      }
      if (price === 0) {
        tempFilterData = tempFilterData.filter((curElem) => {
          return curElem.price === price;
        });
      } else {
        tempFilterData = tempFilterData.filter((curElem) => {
          return curElem.price <= price;
        });
      }
      return {
        ...state,
        filter_products: tempFilterData,
      };

    case "CLEAR_FILTERS":
      console.log("run");
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          colors: "all",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: 0,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
