import React, { useState, useEffect, useContext } from "react";
import  MovieContext  from "../ContextState/createContext";
import Image from "react-bootstrap/Image";


function MovieData(props) {
  const moviedb = useContext(MovieContext);;

  const imgUrl = `http://image.tmdb.org/t/p/original/`;
  return (
    <div
      className="moviecont container " 
      
    >
      {moviedb.map((movie, id) => (
        <Image className="img"
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
