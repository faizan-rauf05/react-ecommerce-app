import React from "react";
import { useFilterContext } from "../context/Filter_Context";
import styled from "styled-components";

const SearchFilter = () => {
  const {
    setSearchingValue,
    filters: { text },
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
            onChange={(event) => {
              setSearchingValue(event);
            }}
          />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  input:focus {
    outline: 0;
  }
`;

export default SearchFilter;
