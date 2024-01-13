import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import AmoutToggle from "./AmoutToggle";
import { NavLink } from "react-router-dom";
import Button from "../styles/Button";
import { useCartContext } from "../context/Cart_Context";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();

  const setIncrement = () => {
    {
      amount < stock ? setAmount(amount + 1) : setAmount(amount);
    }
  };

  const setDecrement = () => {
    {
      amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
  };

  return (
    <Wrapper>
      <div className="color">
        <p>
          colors:
          {colors.map((currElem, index) => {
            return (
              <button
                style={{ backgroundColor: currElem }}
                className={
                  color === currElem.colors ? "btnStyle active" : "btnStyle"
                }
                key={index}
                onClick={() => {
                  setColor(currElem);
                }}
              >
                {color === currElem ? (
                  <TiTick style={{ color: "#fff" }} />
                ) : null}
              </button>
            );
          })}
        </p>
        <div className="amount-toggle">
          <AmoutToggle
            amount={amount}
            setIncrement={setIncrement}
            setDecrement={setDecrement}
          />
        </div>
        <div className="cart-button">
          <NavLink
            to="/cart"
            onClick={() => addToCart(id, color, amount, product)}
          >
            <Button>Add to cart</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    .counter-button {
      font-size: 2rem;
      cursor: pointer;
    }

    .toggle-btns {
      background-color: #6254f3;
      padding: 0.6rem 1rem;
    }

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
