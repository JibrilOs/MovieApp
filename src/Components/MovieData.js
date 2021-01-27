import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";

import axios from "axios";

function MovieData(props) {
  const [moviedb, setMoviedb] = useState([]);
 
  let p1 = 1;
  let p2 = 2;
  const urlp1 = `https://api.themoviedb.org/3/movie/now_playing?api_key=97780349323b9eee89666852289d1a44&language=en-US&page=${p1}`;
  const urlp2 = `https://api.themoviedb.org/3/movie/now_playing?api_key=97780349323b9eee89666852289d1a44&language=en-US&page=${p2}`;
  const GetMoviedata = async () => {
    try {
      const res1 = await axios.get(urlp1);
      const res2 = await axios.get(urlp2);
      const Combined = [...res1.data.results, ...res2.data.results];
      // console.log([res1.data.results, ...res2.data.results], "inside tehfetch");
      return setMoviedb(Combined);
      // return setMoviedb2(res2.data.results);
    } catch (err) {
      return console.log(err);
    }
  };
  // eslint-disable-next-line
  useEffect(() => GetMoviedata(), []);
  const imgUrl = `http://image.tmdb.org/t/p/original/`;
  return (
    <div
      className="moviecont"
      style={{
        width: "100%",
        display: "inline-block",
      }}
    >
      {moviedb.map((movie, id) => (
        <Image
          fluid
          thumbnail
          key={id}
          src={`${imgUrl}${movie.poster_path}`}
          alt="pic"
          style={{
            width: "220.6px",
            paddingLeft: "5px",
            paddingTop: "10px",
            paddingRight: "3px",
          }}
        />
      ))}
    </div>
  );
}

export default MovieData;
