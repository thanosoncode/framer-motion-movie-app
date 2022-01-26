import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  background: ${({ theme }) => theme.bg2};
  position: relative;
`;

export const StyledNav = styled(motion.nav)`
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 8px 50px;
  overflow: hidden;

  & > ul {
  }

  a {
    text-decoration: none;
  }

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
  }

  input {
    outline: none;
    padding: 5px 10px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    padding: 8px 20px;
    flex-direction: column-reverse;
    input {
      padding: 5px;
      width: 150px;
    }
  }

  @media (max-width: 400px) {
    padding: 8px 5px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Links = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Li = styled.li`
  margin-right: 20px;
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 600;
  color: ${({ location, theme, name }) =>
    location === name ? theme.accent : theme.color};
`;

export const Span = styled.span`
  margin-right: 25px;
  cursor: pointer;

  font-weight: 600;
  color: ${({ menu, theme }) => (menu === "open" ? theme.accent : theme.color)};

  @media (max-width: 768px) {
    margin-right: 5px;
  }
`;

export const DropDownUl = styled(motion.ul)`
  list-style-type: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: ${({ location }) => location.top};
  left: ${({ location }) => location.left};
  background-color: ${({ theme }) => theme.bg2};
  padding: 6px 14px;
  border-radius: 5px;
  gap: 8px;
  box-shadow: 0 4px 14px ${({ theme }) => theme.bg};
  z-index: 5;

  @media (max-width: 768px) {
    padding: 6px 14px 2px 14px;
  }
`;

export const ThemesLi = styled.li`
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  padding: 8px 25px;
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const Tools = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  justify-content: center;

  span {
    margin-right: 5px;
    display: block;
  }
`;

export const SwitchContainer = styled.div`
  position: relative;
  background-color: ${({ theme, datesOneByOne }) =>
    datesOneByOne === "on" ? theme.accent : theme.bg};
  width: 38px;
  height: 18px;
  border-radius: 999px;

  div {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 1px;
    border-radius: 100%;
    background-color: white;
    cursor: pointer;
    border: 1px solid #777;
    transition: 0.3s ease;
    transform: ${(props) => props.move};
  }
`;
