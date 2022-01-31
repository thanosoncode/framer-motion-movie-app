import styled from "styled-components";
import { motion } from "framer-motion";

export const MovieListContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  justify-items: center;
  gap: 20px;

  padding: 50px;
  max-width: 1300px;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100vw;
    grid-template-columns: repeat(auto-fill, 180px);
    gap: 10px;
    padding: 50px 0;
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
