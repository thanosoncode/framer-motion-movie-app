import { createContext, useContext, useState, useEffect } from "react";
import { dark, white, rainbow, coal, purple, eclipse } from "./themes";

const mostViewedURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=31e2e4cb7fcd919ecae1823621328dc9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

const topRatedURL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=31e2e4cb7fcd919ecae1823621328dc9&language=en-US&page=1";

const bestSellingURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=31e2e4cb7fcd919ecae1823621328dc9&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1";

const searchURL =
  "https://api.themoviedb.org/3/search/movie?api_key=31e2e4cb7fcd919ecae1823621328dc9&query=";

const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [searched, setSearched] = useState([]);
  const [term, setTerm] = useState("");
  const [id, setId] = useState("hello");
  const themes = [dark, white, rainbow, coal, purple, eclipse];
  const [theme, setTheme] = useState(dark);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [mostViewed, setMostViewed] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);

  const getMovies = async (URL) => {
    setError(false);
    setIsLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (data) {
        setIsLoading(false);
        return data.results;
      } else {
        setIsLoading(false);
        return null;
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setError(true);
    }
  };

  const getMoviesByTerm = async (term) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(searchURL + term);
      const data = await response.json();
      if (data) {
        setSearched(data.results);
      } else {
        setSearched([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getMovies(mostViewedURL).then((data) => setMostViewed(data));
    getMovies(topRatedURL).then((data) => setTopRated(data));
    getMovies(bestSellingURL).then((data) => setBestSelling(data));
  }, []);

  const value = {
    searched,
    mostViewed,
    bestSelling,
    topRated,
    term,
    setTerm,
    id,
    setId,
    themes,
    theme,
    setTheme,
    getMoviesByTerm,
    getMovies,
    isLoading,
    error,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
