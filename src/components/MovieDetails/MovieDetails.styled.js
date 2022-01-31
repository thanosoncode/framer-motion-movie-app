import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ img }) => img};
  width: 100vw;
  min-height: 100vh;
  opacity: 0.3;
  position: relative;
  z-index: -1;
  overflow: hidden;

  margin-bottom: 50px;

  @media (max-width: 768px) {
    background-image: ${({ mobileImg }) => mobileImg};
  }
`;

export const Card = styled.div`
  position: absolute;
  display: flex;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  h1 {
    font-size: 42px;
    margin-bottom: 10px;
  }

  h4 {
    margin-bottom: 10px;
  }

  p {
    width: 100%;
    max-width: 500px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 90%;
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
`;

export const Footer = styled.footer`
  position: relative;
  padding-bottom: 100px;
  padding-top: 40px;
`;

export const Button = styled(motion.button)`
  display: block;
  position: absolute;
  top: 40px;
  left: calc(50% - 100px);
  width: 200px;
  margin: 0 auto;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.accent};
  border: 2px solid ${({ theme }) => theme.accent};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
  padding: 10px 18px;
  text-transform: capitalize;
  font-size: 18px;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.bg};
  }
`;

export const Image = styled(motion.img)`
  min-width: 300px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledSection = styled(motion.section)`
  margin-left: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const Cast = styled.div`
  display: flex;
  gap: 5px;

  img {
    height: 140px;
    transition: 0.3s ease;
  }

  img:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    max-width: 350px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    img {
      height: 100px;
    }
  }
`;

export const Genres = styled(motion.div)`
  display: flex;
  gap: 10px;

  margin-bottom: 20px;
  div {
    border: 3px solid ${({ theme }) => theme.accent};
    padding: 4px 12px;
    color: ${({ theme }) => theme.accent};
    border-radius: 999px;
    transition: 0.3s ease;
  }
  div:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    max-width: 300px;
    flex-wrap: wrap;
    justify-content: center;
    div {
      padding: 4px 6px;
      font-size: 0.8rem;
      margin-right: 5px;
    }
  }
`;
