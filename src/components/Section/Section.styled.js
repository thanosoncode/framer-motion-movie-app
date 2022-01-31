import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSection = styled.section``;

export const SectionCenter = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 40px;
  position: relative;

  h1 {
    font-size: 28px;
  }

  a,
  a:visited,
  a:hover,
  a:active {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const FlexWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  height: 300px;
`;
export const Flex = styled(motion.div)`
  display: flex;
  position: absolute;
  left: ${({ left }) => left + "px"};
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  transition: 0.4s ease-out;
`;

export const Item = styled(motion.div)`
  width: 160px;
  height: auto;
  flex-shrink: 0;
  margin-right: 10px;

  img {
    display: block;
    width: 100%;
    object-fit: contain;
  }
`;

export const ArrowLeft = styled.div`
  position: absolute;
  width: 100px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

export const ArrowRight = styled.div`
  position: absolute;
  width: 100px;
  right: 0;
  transform: translateY(-50%);
  top: 50%;
`;
