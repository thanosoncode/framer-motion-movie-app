import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  StyledNav,
  DropDownUl,
  ThemesLi,
  Li,
  Span,
  Links,
  Flex,
} from "./Navbar.styled.js";
import { useGlobalContext } from "../../context.js";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, Outlet, useLocation } from "react-router";
import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  const { term, setTerm, getMoviesByTerm, setTheme, themes } =
    useGlobalContext();

  const themesEl = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [menuLocation, setMenuLocation] = useState({});

  let navigate = useNavigate();
  let { pathname } = useLocation();

  const handleThemesClick = () => {
    let rect = themesEl.current.getBoundingClientRect();
    let left = rect.left - 46 + "px";
    let top = rect.top + 30 + "px";
    setShowMenu(true);
    setMenuLocation({ top, left });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getMoviesByTerm(term);
    setTerm("");
    navigate("/search");
  };

  return (
    <>
      <Container>
        <AnimatePresence>
          {showMenu && (
            <DropDownUl
              location={menuLocation}
              as={motion.ul}
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
            >
              {themes.map((theme, index) => {
                const { bg, accent, name } = theme;
                return (
                  <ThemesLi
                    key={index}
                    bg={bg}
                    color={accent}
                    onClick={() => {
                      setTheme(themes.find((item) => item.name === theme.name));
                      setShowMenu(false);
                    }}
                  >
                    {name}
                  </ThemesLi>
                );
              })}
            </DropDownUl>
          )}
        </AnimatePresence>
        <StyledNav as={motion.nav}>
          <Links>
            <Li>
              <Link to={{ pathname: "/" }}>
                <img src={logo} alt="logo" />
              </Link>
            </Li>
            <Li name={"/mostviewed"} location={pathname}>
              <Link to={{ pathname: "/mostviewed" }}>most viewed</Link>
            </Li>
            <Li name={"/toprated"} location={pathname}>
              <Link to={{ pathname: "/toprated" }}>top rated</Link>
            </Li>
            <Li name={"/bestselling"} location={pathname}>
              <Link to={{ pathname: "/bestselling" }}>best selling</Link>
            </Li>
          </Links>
          <Flex>
            <Span
              ref={themesEl}
              onClick={handleThemesClick}
              menu={showMenu ? "open" : "close"}
            >
              Themes
            </Span>

            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </form>
          </Flex>
        </StyledNav>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
