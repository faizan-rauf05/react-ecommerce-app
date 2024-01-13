import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  } else if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

const Wrapper = styled.section``;

export default ProductList;
