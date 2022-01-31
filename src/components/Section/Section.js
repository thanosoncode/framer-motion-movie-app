import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import {
  StyledSection,
  SectionCenter,
  FlexWrapper,
  Flex,
  Item,
  ArrowLeft,
  ArrowRight,
} from "./Section.styled";
import left from "../../assets/images/left1.svg";
import right from "../../assets/images/right1.svg";
import Spinner from "../Spinner/Spinner";

import { useInView } from "react-intersection-observer";

const imageURL = "https://image.tmdb.org/t/p/w200";

const Section = ({ title, movies, route }) => {
  let navigate = useNavigate();
  const { setId, isLoading } = useGlobalContext();
  const wrapperEl = useRef(null);
  const flexEl = useRef(null);
  const [maxScroll, setMaxScroll] = useState(null);
  const [fromLeft, setFromLeft] = useState(0);

  let amountToScroll = 450;

  const handleScrollRight = () => {
    if (fromLeft > maxScroll) {
      let spaceAvailable = Math.abs(fromLeft - maxScroll);
      if (spaceAvailable < amountToScroll) {
        setFromLeft(maxScroll);
      } else {
        setFromLeft((prevValue) => prevValue - amountToScroll);
      }
    }
  };

  const handleScrollLeft = () => {
    if (fromLeft >= maxScroll && fromLeft !== 0) {
      if (Math.abs(fromLeft) < amountToScroll) {
        setFromLeft(0);
      } else {
        setFromLeft((prevValue) => prevValue + amountToScroll);
      }
    }
  };

  const handleMovieClick = (id) => {
    setId(id);
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    if (movies) {
      setMaxScroll(
        wrapperEl.current?.offsetWidth - flexEl.current?.offsetWidth
      );
    }
  }, [movies]);

  const { ref, inView } = useInView({ threshold: 0.1 });
  // const { ref2, inView2 } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          delay: 0.2,
          when: "beforeChildren",
          transition: {
            delay: 0.2,
          },
        },
      });
      animation2.start({
        x: 0,
        transition: {
          delay: 0.1,
          duration: 0.5,
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
      animation2.start({
        x: "100vw",
      });
    }
  }, [inView, animation, animation2]);

  if (isLoading) {
    return <Spinner />;
  }
  if (movies) {
    return (
      <StyledSection ref={ref} as={motion.div} animate={animation}>
        <SectionCenter>
          <Link to={route}>
            <h1>{title}</h1>
          </Link>
          <FlexWrapper ref={wrapperEl}>
            <Flex ref={flexEl} left={fromLeft} as={motion.div}>
              {movies.map((movie, index) => {
                return (
                  <Item
                    key={index}
                    onClick={() => handleMovieClick(movie.id)}
                    as={motion.div}
                    animate={animation2}
                  >
                    <img src={imageURL + movie.poster_path} alt="" />
                  </Item>
                );
              })}
            </Flex>
          </FlexWrapper>
          <ArrowLeft onClick={handleScrollLeft}>
            <img src={left} alt="" />
          </ArrowLeft>
          <ArrowRight onClick={handleScrollRight}>
            <img src={right} alt="" />
          </ArrowRight>
        </SectionCenter>
      </StyledSection>
    );
  }
};

export default Section;
