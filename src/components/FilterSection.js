import React, { useState } from "react";
import { useFilterContext } from "../context/Filter_Context";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import FormatPrice from "./FormatPrice";

const FilterSection = () => {
  const [pColor, setPColor] = useState();
  const { all_products } = useFilterContext();

  // GET-UNIQUE-DATA-FUNC

  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property];
    });
    if (property === "colors") {
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };

  // UNIQUE-DATA
  let categoryOnlyData = getUniqueData(all_products, "category");
  let companyOnlyData = getUniqueData(all_products, "company");
  let colorOnlyData = getUniqueData(all_products, "colors");

  const {
    setSearchingValue,
    clearFilters,
    filters: { text, minPrice, maxPrice, price },
  } = useFilterContext();

  return (
    <Wrapper>
      <div className="search-filter">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            className="filter-search-bar"
            placeholder="search"
            onChange={setSearchingValue}
          />
        </form>
      </div>
      {/* CATEGORY-FILTER  */}
      <div className="category-filter">
        <h3>Filter by Category</h3>
        {categoryOnlyData.map((currElem, i) => {
          return (
            <button
              name="category"
              value={currElem}
              onClick={setSearchingValue}
              key={i}
            >
              {currElem}
            </button>
          );
        })}
      </div>
      <div className="filter-company">
        <h3>Filter by Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={setSearchingValue}
          >
            {companyOnlyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="color-filter">
        <h3>Filter by Color</h3>
        <div className="color-filter-btn">
          {colorOnlyData.map((currElem, i) => {
            if (currElem === "all") {
              return (
                <button
                  className={
                    pColor === currElem
                      ? "active colors-button"
                      : "colors-button"
                  }
                  style={{ backgroundColor: currElem }}
                  name="colors"
                  value={currElem}
                  onClick={(e) => {
                    setSearchingValue(e);
                    setPColor(currElem);
                  }}
                  key={i}
                >
                  All
                </button>
              );
            }
            return (
              <button
                className={
                  pColor === currElem ? "active colors-button" : "colors-button"
                }
                style={{ backgroundColor: currElem }}
                name="colors"
                value={currElem}
                onClick={(e) => {
                  setSearchingValue(e);
                  setPColor(currElem);
                }}
                key={i}
              >
                {pColor === currElem ? (
                  <TiTick style={{ color: "#fff" }} />
                ) : null}
              </button>
            );
          })}
        </div>
        <div className="price-range-filter">
          <h3>Filter by Price</h3>
          <div className="price-range-filter">
            <p>
              <FormatPrice price={price} />
            </p>
            <input
              type="range"
              name="price"
              id="range"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={setSearchingValue}
            />
          </div>
        </div>
        <div className="clear-filters">
          <button onClick={clearFilters}>Clear All</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  input:focus {
    outline: 0;
  }

  .category-filter {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 3rem;
  }
  .ll {
    background-color: #fff;
  }

  .category-filter button {
    gap: 2rem;
    text-align: start;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .color-filter-btn {
    display: flex;
    gap: 0.8rem;
  }
  .color-filter .colors-button {
    width: 2.5rem;
    height: 2.5rem;
    outline: 0;
    border: none;
    cursor: pointer;
    opacity: 0.7;
  }
  .active {
    opacity: 1 !important;
  }
  .price-range-filter input {
    box-shadow: none;
    margin-top: -20px;
  }
`;

export default FilterSection;
