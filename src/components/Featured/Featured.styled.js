import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 769px) {
    height: calc(100vh - 200px);
  }
`;

export const Center = styled(motion.div)`
  width: 80%;
  height: 80%;
  background-image: ${({ img }) => img};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  h1 {
    font-size: 48px;
    color: white;
    text-shadow: 2px 2px 10px #444;
  }

  @media (max-width: 768px) {
    background-image: ${({ mobileImg }) => mobileImg};
    width: 90%;
    height: 90%;
    background-position: top;
  }
`;
