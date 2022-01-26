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
} from "./styles/Navbar.styled.js";
import { useGlobalContext } from "../context.js";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, Outlet, useLocation } from "react-router";

const topRatedURL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=31e2e4cb7fcd919ecae1823621328dc9&language=en-US&page=1";

const revenueURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=31e2e4cb7fcd919ecae1823621328dc9&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1";

const popularURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=31e2e4cb7fcd919ecae1823621328dc9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

const Navbar = () => {
  const { term, setTerm, getMoviesByTerm, getMovies, setTheme, themes } =
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
    setShowMenu(!showMenu);
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
                    onClick={() =>
                      setTheme(themes.find((item) => item.name === theme.name))
                    }
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
            <Li
              name={"/"}
              location={pathname}
              onClick={() => {
                getMovies(popularURL);
              }}
            >
              <Link to={{ pathname: "/" }}>most viewed</Link>
            </Li>
            <Li
              name={"/toprated"}
              location={pathname}
              onClick={() => {
                getMovies(topRatedURL);
              }}
            >
              <Link to={{ pathname: "/toprated" }}>top rated</Link>
            </Li>
            <Li
              name={"/bestselling"}
              location={pathname}
              onClick={() => {
                getMovies(revenueURL);
              }}
            >
              <Link to={{ pathname: "/bestselling" }}>best selling</Link>
            </Li>
          </Links>
          <div>
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
          </div>
        </StyledNav>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
