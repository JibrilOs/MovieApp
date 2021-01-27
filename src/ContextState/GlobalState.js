import React, { useState, useEffect, createContext } from "react";
import MovieContext from "./createContext";
import axios from "axios";

function GlobalState(props) {
  const [moviedb, setMoviedb] = useState([]);

  const GetMoviedata = async () => {
    try {
      let p1 = 1;
      let p2 = 2;
      const urlp1 = `https://api.themoviedb.org/3/movie/now_playing?api_key=97780349323b9eee89666852289d1a44&language=en-US&page=${p1}`;
      const urlp2 = `https://api.themoviedb.org/3/movie/now_playing?api_key=97780349323b9eee89666852289d1a44&language=en-US&page=${p2}`;
      const res1 = await axios.get(urlp1);
      const res2 = await axios.get(urlp2);
      const Combined = [...res1.data.results, ...res2.data.results];
      // console.log([res1.data.results, ...res2.data.results], "inside tehfetch");
      return setMoviedb(Combined);
      // return setMoviedb2(res2.data.results);
    } catch (err) {
      return console.log(err, "what can of error is this");
    }
  };
  // eslint-disable-next-line
  useEffect(() => GetMoviedata(), []);

  return (
    <MovieContext.Provider value={moviedb}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default GlobalState;
