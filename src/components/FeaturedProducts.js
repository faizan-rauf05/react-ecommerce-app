import styled from "styled-components";
import { AppProductContext } from "../context/ProductContext";
import Product from "./Product";

const FeaturedProducts = () => {
  //HOOK
  const { isLoading, featuredProducts } = AppProductContext();

  return (
    <Wrapper>
      <div className="container">
        <div className="featured-section">
          <div className="feature-desc">
            <span className="f-span-text">Check Now</span>
            <h3 className="f-heading-text">Featured Products</h3>
          </div>
          <div className="feature-products">
            {featuredProducts.map((currElem) => {
              return <Product key={currElem.id} {...currElem} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 4rem 0;
  margin: 5rem 0;

  .container {
    max-width: 100rem;
    margin: 0 auto;
  }

  .f-heading-text {
    font-weight: 600;
    font-size: 2.5rem;
  }
  .f-span-text {
    font-size: 1.5rem;
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
  h3 {
    margin: 1rem 0;
    padding: 0;
  }
`;

export default FeaturedProducts;
