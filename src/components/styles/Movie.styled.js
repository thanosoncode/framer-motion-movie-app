import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMovie = styled(motion.article)`
  /* background: ${({ theme }) => theme.bg2}; */
  display: flex;
  padding-right: 5px;
  border-radius: 5px;
  max-width: 700px;
  box-shadow: 0px 0px 6px 1px #777;

  img {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
    flex-shrink: 0;
    min-width: 200px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 30px;

  h1 {
    margin-top: 10px;
    font-size: 32px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.accent};
    cursor: pointer;
  }

  h4 {
    margin-bottom: 10px;
  }

  p {
    text-align: justify;
  }

  @media (max-width: 768px) {
    padding: 0 10px;

    h1 {
      font-size: 24px;
      max-width: 150px;
    }
    p,
    strong {
      display: none;
    }
  }
`;

export const Footer = styled.footer`
  margin-bottom: 10px;
  div:first-child {
    font-weight: 600;
    font-size: 28px;
    color: ${({ theme }) => theme.accent};
    margin-bottom: 10px;
  }

  span {
    margin-right: 6px;
  }
`;

export const TextDiv = styled.div`
  line-height: 20px;
`;
