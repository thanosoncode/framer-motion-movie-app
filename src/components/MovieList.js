import React from "react";
import { useGlobalContext } from "../context";
import Movie from "./Movie";
import { MovieListContainer, Span } from "./styles/MovieList.styled";
import { motion } from "framer-motion";
import Spinner from "./Spinner";
import Error from "./Error";

const MovieList = () => {
  const { movies, isLoading, error } = useGlobalContext();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  } else {
    return (
      <>
        {movies.length === 0 ? (
          <Span>
            Nothing matched your criteria.
            <br />
            Please try again.
          </Span>
        ) : (
          <MovieListContainer
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {movies.map((movie, index) => {
              return (
                <Movie
                  movie={movie}
                  index={index}
                  key={index}
                  length={movies.length}
                />
              );
            })}
          </MovieListContainer>
        )}
      </>
    );
  }
};

export default MovieList;
