import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";

const CategoryFilter = () => {
  const { all_products } = useFilterContext();

  // GET-UNIQUE-DATA-FUNC

  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property];
    });
    console.log(newVal);
    let newVal1 = ["All", ...new Set(newVal)];
    console.log(newVal1);
  };

  // UNIQUE-DATA
  let categoryOnlyData = getUniqueData(all_products, "category");

  return <h2>l</h2>;
};

const Wrapper = styled.section`
  .filter-h {
    font-weight: 600;
    font-size: 1.5rem;
    border-bottom: 2px solid #6254f3;
    width: 14rem;
  }

  .category-filter ul {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    padding-left: 2rem;
  }

  .category-filter ul li {
    width: 8rem;
    font-size: 1.5rem;
    list-style: circle;
    cursor: pointer;
  }

  .li-bottom-color-initial {
    border-bottom: 2px solid transparent;
  }

  .li-bottom-color {
    border-bottom: 3px solid #6254f3;
    border-radius: 3px;
    width: 100%;
  }
`;

export default CategoryFilter;
