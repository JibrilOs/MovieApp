import React, { useState } from "react";
import "./App.css";
import MovieData from "./Components/MovieData";
import Video from "./Components/Video";


function App() {
  return (
    <div className="App container">
      <Video />
      <MovieData />
    </div>
  );
}

export default App;
