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

  div {
    display: flex;
    align-items: center;
  }

  input {
    outline: none;
    padding: 5px 10px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    padding: 8px 20px;
    flex-direction: column-reverse;

    div {
      margin-bottom: 10px;
    }
  }
`;

export const Links = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
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
`;
