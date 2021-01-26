import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { getMovies } from "./fakeMovieService";

function Video(props) {
  const [movies, setMovies] = useState(getMovies());
  return (
    <div>
      <Table hover striped bordered className="container">
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
              <td>
                <button
                  className="btn btn-danger"
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
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Video;
