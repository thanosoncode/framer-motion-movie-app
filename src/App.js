import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/styles/GlobalStyle";
import MovieDetails from "./components/MovieDetails";
import { ThemeProvider } from "styled-components";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { useGlobalContext } from "./context";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";

const App = () => {
  const { theme } = useGlobalContext();
  let location = useLocation();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<MovieList />} />
              <Route path="/toprated" element={<MovieList />} />
              <Route path="/bestselling" element={<MovieList />} />
              <Route path="/search" element={<MovieList />} />
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
