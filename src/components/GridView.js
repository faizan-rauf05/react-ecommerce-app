import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="section">
        <div className="container grid grid-three-column">
          {products.map((currElem) => {
            return <Product key={currElem.id} {...currElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 0;

  .grid {
    gap: 3.2rem;
  }

  .f-p-image {
    width: 270px;
    height: 190px;
  }
  .f-p-card {
    width: 21.2vw;
    height: 50vh;
    position: relative;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
  }
  .top-card img {
    width: 100%;
  }
  .top-card {
    padding: 1rem;
  }
  .f-p-card:hover {
    transform: scale(1.01);
    transition: 0.3s;
  }

  .f-p-category {
    position: absolute;
    color: #fff;
    right: 10px;
    border-radius: 6px;
    top: 7px;
    padding: 7px;
    background-color: #000;
  }
  .f-p-desc {
    padding: 0 1rem;
  }
  h3 {
    margin: 1rem 0;
    padding: 0;
  }
  .f-p-desc h3 {
    padding: 0 0.5rem;
  }
  .feature-desc {
    display: flex;
    flex-direction: column;
    gap: -3rem;
  }
  .feature-products {
    display: flex;
    justify-content: space-between;
  }
`;

export default GridView;
