import styled from "styled-components";
import { motion } from "framer-motion";

export const MovieListContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 50px;

  padding: 50px;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 40px auto;
    width: 100%;
  }
`;

export const Span = styled.span`
  display: block;
  width: 360px;
  text-align: center;
  font-size: 26px;
  color: ${({ theme }) => theme.accent};
  margin: 200px auto;
  line-height: 45px;
`;
