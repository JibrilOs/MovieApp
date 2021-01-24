import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { getMovies } from "./fakeMovieService";

function Video(props) {
  const [movies, setMovies] = useState(getMovies());
  return (
    <div>
      <Table hover striped bordered>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <button
                className="btn btn-danger mt-2 ml-2"
                onClick={() => {
                  const moviesdb = movies;
                  const filtered = moviesdb.filter(
                    (moviedb) => movie._id !== moviedb._id
                  );
                  return setMovies(filtered);
                }}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Video;
