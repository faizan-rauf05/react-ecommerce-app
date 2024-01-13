import styled from "styled-components";
import { useCartContext } from "./context/Cart_Context";
import FormatPrice from "./components/FormatPrice";
import { MdDelete } from "react-icons/md";
import Button from "./styles/Button";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCartContext();
  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart_heading  ">
          {cart.map((currElem, i) => {
            return (
              <div key={i} className="grid grid-five-column">
                <div className="cart-image--name">
                  <div className="product-image">
                    <figure>
                      <img src={currElem.image.url} alt="" />
                    </figure>
                  </div>

                  <div className="color-div">
                    <p>{currElem.name}</p>
                    <button
                      className="color-style"
                      style={{ backgroundColor: currElem.color }}
                    ></button>
                  </div>
                </div>
                <p>
                  <FormatPrice price={currElem.price} />
                </p>
                <p>{currElem.amount}</p>
                <p>
                  <FormatPrice price={currElem.price * currElem.amount} />
                </p>
                <MdDelete
                  className="remove_icon"
                  onClick={() => removeFromCart(currElem.id)}
                />
              </div>
            );
          })}
        </div>
        <hr />
        <div className="continue-shopping">
          <NavLink to="/products">
            <Button>Continue Shopping</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 90rem;
    margin: 0 auto;
  }
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    align-items: center;
    display: grid;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    margin-left: -5rem;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      gap: 0.5rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;
        border: none;
        border-radius: 50%;
      }
    }
  }
  .product-image {
    margin-left: 0;
  }
  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

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

  .remove_icon {
    font-size: 2.2rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
