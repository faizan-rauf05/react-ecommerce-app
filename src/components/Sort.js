import React from "react";
import { useFilterContext } from "../context/Filter_Context";
import { IoGridOutline } from "react-icons/io5";
import { TfiViewList } from "react-icons/tfi";
import styled from "styled-components";

const Sort = () => {
  const {
    filter_products,
    grid_view,
    setGridView,
    setListView,
    sorting,
    checkPresentField,
  } = useFilterContext();

  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          onClick={setGridView}
          className={grid_view ? "active sort-btn" : "sort-btn"}
        >
          <IoGridOutline className="icon" />
        </button>
        <button
          onClick={setListView}
          className={!grid_view ? "active sort-btn" : " sort-btn"}
        >
          <TfiViewList className="icon" />
        </button>
      </div>
      {/* 2nd column  */}

      <div className="product-data">
        <p>{`${filter_products.length} Product Available`}</p>
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            onChange={(event) => {
              checkPresentField(event);
            }}
            className="sort-selection--style"
          >
            <option value="low">Price(Low)</option>
            <option value="#" disabled></option>
            <option value="high">Price(High)</option>
            <option value="#" disabled></option>
            <option value="a-z">(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0 1rem;
      height: 3rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.8rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;
