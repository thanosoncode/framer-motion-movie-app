import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Spinner from "../Spinner/Spinner";
import {
  Container,
  Card,
  Cast,
  Genres,
  StyledSection,
  Image,
  Button,
  Footer,
} from "./MovieDetails.styled";
import Section from "../Section/Section";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  transition: {
    duration: 1,
  },
  exit: {
    opacity: 0,
  },
};

const imageVariants = {
  hidden: {
    y: 1000,
  },
  visible: {
    y: [0, 1000, 0],
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.4,
      stiffness: 110,
    },
    exit: 1000,
  },
};

const sectionVariants = {
  hidden: {
    y: -1000,
  },
  visible: {
    y: [0, -1000, 0],
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.4,
      stiffness: 110,
      when: "beforeChildren",
    },
    exit: {
      y: -1000,
    },
  },
};

const buttonVariants = {
  hidden: {
    y: 1000,
  },
  visible: {
    y: 0,
  },
  hover: {
    scale: [1.2, 1],
    transition: {
      repeat: Infinity,
      duration: 0.4,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const imageURL = "https://image.tmdb.org/t/p/w200";
const bgURL = "https://image.tmdb.org/t/p/original";

const MovieDetails = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=31e2e4cb7fcd919ecae1823621328dc9`
        );
        const data = await response.json();
        if (data) {
          setMovie(data);
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const getCredits = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=31e2e4cb7fcd919ecae1823621328dc9&language=en-US`
        );
        const data = await response.json();
        if (data) {
          setCredits(data);
        } else {
          setCredits(null);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const getSimilar = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=31e2e4cb7fcd919ecae1823621328dc9&language=en-US&page=1`
        );
        const data = await response.json();
        if (data) {
          setSimilar(data.results);
        } else {
          setSimilar(null);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getCredits();
    getDetails();
    getSimilar();
  }, [id]);

  if (movie && credits && similar) {
    return (
      <>
        <Container
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          img={`url(${bgURL + movie.backdrop_path})`}
          mobileImg={`url(${bgURL + movie.poster_path})`}
        ></Container>
        <div>
          <Card>
            <Image
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              as={motion.img}
              src={imageURL + movie.poster_path}
              alt={movie.title}
            />
            <StyledSection
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              as={motion.section}
            >
              <h1>{movie.title}</h1>
              <Genres>
                {movie.genres.map((genre, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: "-100vh" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 2 + index / 2 }}
                    >
                      {genre.name}
                    </motion.div>
                  );
                })}
              </Genres>
              <p>{movie.overview}</p>
              <div>
                <h4>Cast</h4>
                <Cast>
                  {credits.cast.slice(0, 5).map((cast, index) => {
                    return (
                      <motion.div
                        key={index}
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 2 + index / 2 }}
                      >
                        <img src={imageURL + cast.profile_path} alt={cast} />
                        <h5>{cast.name}</h5>
                      </motion.div>
                    );
                  })}
                </Cast>
              </div>
            </StyledSection>
          </Card>
        </div>
        <Section title="similar" movies={similar} route="/" />
        <Footer>
          <Button
            as={motion.button}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial="hidden"
            animate="visible"
            onClick={() => navigate("/")}
          >
            back to movies
          </Button>
        </Footer>
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default MovieDetails;
