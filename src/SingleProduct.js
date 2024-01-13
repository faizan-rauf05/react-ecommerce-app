import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AppProductContext } from "./context/ProductContext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import FormatPrice from "./components/FormatPrice";
import StarRatings from "./components/StarRatings";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    AppProductContext();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div>
        <img src="./images/hero.jpg" alt="loading" />
      </div>
    );
  }

  return (
    <Wrapper>
      <PageNavigation pTitle={name} />
      <div className="container">
        <div className="grid grid-two-column">
          {/* images  */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>
          {/* product_info */}
          <div className="product-data">
            <h2>{name}</h2>
            <div className="stars-rating">
              <StarRatings stars={stars} />
              {stars}
            </div>
            <p>{reviews} reviews</p>
            <p className="product-data-price">
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the day :<FormatPrice price={price} />
            </p>
            <p className="product-desc">{description}</p>
            <div className="product-data-info">
              <p>
                Available :
                <span> {stock > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>
              <p>
                ID:
                <span> {id}</span>
              </p>
              <p>
                Brand:
                <span> {company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 6rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;

    .product_images {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .stars-rating {
      color: #ffcc00;
    }

    .stars-rating {
      display: flex;
      gap: 0.5rem;
    }

    h2 {
      font-size: 2.5rem;
      line-height: 0;
    }
    p {
      line-height: 0;
    }
    .product-desc {
      line-height: 23px;
    }

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
