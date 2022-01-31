import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/globalstyle/GlobalStyle";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import { ThemeProvider } from "styled-components";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/404/NotFound";
import { useGlobalContext } from "./context";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
import Home from "./components/Home/Home";

const App = () => {
  const { theme, topRated, mostViewed, bestSelling, searched } =
    useGlobalContext();
  let location = useLocation();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/toprated"
                element={<MovieList movies={topRated} />}
              />
              <Route
                path="/mostviewed"
                element={<MovieList movies={mostViewed} />}
              />
              <Route
                path="/bestselling"
                element={<MovieList movies={bestSelling} />}
              />
              <Route path="/search" element={<MovieList movies={searched} />} />
            </Route>

            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
