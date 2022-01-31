import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <StyledH1>
      Snap! Something went wrong. <br />
      Please try again...
    </StyledH1>
  );
};

export default Error;

const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 26px;
  color: ${({ theme }) => theme.color};
  margin-top: 200px;
`;
