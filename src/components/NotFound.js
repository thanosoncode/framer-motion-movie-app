import React from "react";
import styled from "styled-components";
import { Button } from "./styles/MovieDetails.styled";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const buttonVariants = {
  hover: {
    scale: [1.2, 1],
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const Error = () => {
  let navigate = useNavigate();
  return (
    <Div>
      <h1>
        404! <br />
        Page not Found
      </h1>
      <Button
        as={motion.button}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => navigate("/")}
        style={{ position: "static", transform: "none" }}
      >
        Go back
      </Button>
    </Div>
  );
};

export default Error;

const Div = styled.div`
  width: 300px;
  text-align: center;
  font-size: 26px;
  color: ${({ theme }) => theme.color};
  margin: 200px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-bottom: 40px;
  }
`;
