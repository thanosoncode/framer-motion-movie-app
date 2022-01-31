import React from "react";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router";
import Spinner from "../Spinner/Spinner";
import { Container, Center } from "./Featured.styled";
import { motion } from "framer-motion";

const bgURL = "https://image.tmdb.org/t/p/original";

const Featured = ({ movie }) => {
  const { isLoading, setId } = useGlobalContext();
  let navigate = useNavigate();

  const handleClick = () => {
    setId(movie.id);
    navigate("/movie/" + movie.id);
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (movie) {
    return (
      <>
        <Container>
          <Center
            img={`url(${bgURL + movie.backdrop_path})`}
            mobileImg={`url(${bgURL + movie.poster_path})`}
            // style={{ backgroundImage: `url(${bgURL + movie.backdrop_path})` }}
            onClick={handleClick}
            as={motion.div}
            initial={{ opacity: 0, y: -1000 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -1000 }}
          >
            <h1>{movie.title}</h1>
          </Center>
        </Container>
      </>
    );
  } else {
    return null;
  }
};

export default Featured;
