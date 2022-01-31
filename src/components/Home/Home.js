import React from "react";
import { useGlobalContext } from "../../context";
import Featured from "../Featured/Featured";
import Section from "../Section/Section";
import Footer from "../Footer/Footer";

const Home = () => {
  const { mostViewed, bestSelling, topRated } = useGlobalContext();

  let randomMovie = mostViewed[Math.floor(Math.random() * mostViewed.length)];

  return (
    <>
      <Featured movie={randomMovie} />
      <Section title="most viewed" movies={mostViewed} route="/mostviewed" />
      <Section title="top rated" movies={topRated} route="/toprated" />
      <Section title="best selling" movies={bestSelling} route="/bestselling" />
      <Footer />
    </>
  );
};

export default Home;
