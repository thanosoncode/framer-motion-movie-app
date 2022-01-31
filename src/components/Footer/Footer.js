import React from "react";
import { Link } from "react-router-dom";
import { StyledFooter, Center, Flex } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Center>
        <Flex>
          <Link to="/">Home</Link>
          <Link to="/mostviewed">Most Viewed</Link>
          <Link to="/toprated">Top Rated</Link>
          <Link to="/bestselling">Best Selling</Link>
        </Flex>
        <p>&copy; 2022</p>
      </Center>
    </StyledFooter>
  );
};

export default Footer;
