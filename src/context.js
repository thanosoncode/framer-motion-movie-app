import { createContext, useContext, useState, useEffect } from "react";
import {
  dark,
  eclipse,
  carbon,
  leviathan,
  eighty,
  space,
  honeywell,
} from "./themes";

const popularURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=31e2e4cb7fcd919ecae1823621328dc9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

const searchURL =
  "https://api.themoviedb.org/3/search/movie?api_key=31e2e4cb7fcd919ecae1823621328dc9&query=";

const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");
  const [id, setId] = useState("hello");
  const themes = [dark, eclipse, carbon, leviathan, eighty, space, honeywell];
  const [theme, setTheme] = useState(dark);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [datesOneByOne, setDatesOneByOne] = useState(false);

  const getMovies = async (URL) => {
    setError(false);
    setIsLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (data) {
        setMovies(data.results);
      } else {
        setMovies([]);
      }
      setIsLoading(false);
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
        setMovies(data.results);
      } else {
        setMovies([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getMovies(popularURL);
  }, []);

  const value = {
    movies,
    setMovies,
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
    datesOneByOne,
    setDatesOneByOne,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
