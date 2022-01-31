import React from "react";
import { Item } from "./Thumbnail.styled";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const imageURL = "https://image.tmdb.org/t/p/w200";

const Thumbnail = ({ movie, index }) => {
  let navigate = useNavigate();
  const { setId } = useGlobalContext();

  const handleMovieClick = (id) => {
    setId(id);
    navigate(`/movie/${id}`);
  };

  const itemVariants = {
    hidden: {
      x: "100vw",
      opacity: 1,
    },
    visible: {
      x: 0,

      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        when: "beforeChildren",
        bounce: 0.1,
        stiffness: 80,
        delay: 0.3 * index,
      },
    },
  };

  return (
    <Item
      onClick={() => handleMovieClick(movie.id)}
      as={motion.div}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <img src={imageURL + movie.poster_path} alt="" />
    </Item>
  );
};

export default Thumbnail;
