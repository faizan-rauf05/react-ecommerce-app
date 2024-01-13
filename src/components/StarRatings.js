import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import styled from "styled-components";

const StarRatings = ({ stars }) => {
  const updateStarRatings = Array.from({ length: 5 }, (elem, i) => {
    return (
      <span key={i}>
        {stars >= i + 1 ? (
          <MdOutlineStar className="icon" />
        ) : stars >= i + 0.5 ? (
          <MdOutlineStarHalf className="icon" />
        ) : (
          <MdOutlineStarBorderPurple500 className="icon" />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="icon-style">{updateStarRatings}</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 1.6rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default StarRatings;
