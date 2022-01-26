import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../context";
import { StyledMovie, Info, TextDiv, Footer } from "./styles/Movie.styled";

import { motion } from "framer-motion";

const imageURL = "https://image.tmdb.org/t/p/w200";

const Movie = ({ movie, index }) => {
  let navigate = useNavigate();
  const { setId, movies } = useGlobalContext();

  const {
    poster_path,
    title,
    id,
    release_date,
    overview,
    vote_average,
    vote_count,
  } = movie;
  const handleMovieClick = () => {
    setId(id);
    navigate(`/movie/${id}`);
  };

  const [text, setText] = useState(overview.slice(0, 200) + " ...");
  const [showReadMore, setShowReadMore] = useState(true);

  useEffect(() => {
    setText(overview.slice(0, 200) + " ...");
  }, [overview]);

  let delay = 0.5;
  let duration = 0.5;

  const cardVariants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: duration,
        when: "beforeChildren",
        bounce: 0.4,
        stiffness: 90,
        delay: delay * index,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    transition: { duration: 0.5 },
  };

  const [pulseDates, setPulseDates] = useState(false);
  useEffect(() => {
    let time = movies.length * duration + 2 * delay + "000";

    setTimeout(() => {
      setPulseDates(true);
    }, time);
  }, [movies]);

  return (
    <StyledMovie variants={cardVariants} initial="hidden" animate="visible">
      <motion.img
        src={imageURL + poster_path}
        alt={title}
        onClick={handleMovieClick}
        variants={imageVariants}
      />
      <Info>
        <div>
          <h1 onClick={handleMovieClick}>{title}</h1>
          <motion.h4
            initial={{ opacity: 1 }}
            animate={pulseDates && { opacity: [0, 1, 0, 1, 0, 1, 0, 1] }}
            transition={{ duration: 2, delay: index * 0.5 }}
          >
            {release_date}
          </motion.h4>
          <TextDiv>
            <p>{overview.length >= 210 ? text : overview}</p>
            {showReadMore && (
              <strong
                onClick={() => {
                  setText(overview);
                  setShowReadMore(false);
                }}
              >
                {overview.length >= 210 ? "read more" : ""}
              </strong>
            )}
          </TextDiv>
        </div>

        <Footer>
          <div>{vote_average}</div>
          <div>
            <span>{vote_count}</span>
            <small>votes</small>
          </div>
        </Footer>
      </Info>
    </StyledMovie>
  );
};

export default Movie;
