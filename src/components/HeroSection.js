import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grid grid-two-column">
            <div className="hero-section-data">
              <p className="intro-data">Welcome to</p>
              <h2>{name}</h2>
              <p>
                eCart is the future of online shopping. With our wide selection
                of products, competitive prices, and convenient delivery
                options, we make it easy to find everything you need, all in one
                place. Whether you're looking for the latest electronics,
                fashion trends, or home goods, we have you covered.
              </p>
              <NavLink to="/products">
                <Button>Shop Now</Button>
              </NavLink>
            </div>
            <div className="hero-section-image">
              <figure>
                <img src="./images/hero.jpg" alt="hero" />
              </figure>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 5rem 13.2rem;
  margin: 0 auto;

  img {
    min-width: 30rem;
    height: 30rem;
  }

  .hero-section-data {
    p {
      color:#000;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    h2{
      color: #6254F3;
      font-size:6rem;
      margin-top:-.2rem;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image img{
    width:100%;
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

 

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    .container{
      flex
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
