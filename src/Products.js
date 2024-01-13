import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";

const Products = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div className="filter-section">
          <FilterSection />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 2fr;
  }
  .grid-view-icon {
    font-size: 2rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  .filter-section {
    padding-top: 3.2rem;
  }
  .grid {
    padding: 3rem 0;
  }
`;

export default Products;
