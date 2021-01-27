import React from "react";
import GlobalState from "./ContextState/GlobalState";
import "./App.scss";
import MovieData from "./Components/MovieData";
import Video from "./Components/Video";


function App() {
  return (
    <div className="App ">
      <GlobalState>
        <Video />
        <MovieData />
      </GlobalState>
    </div>
  );
}

export default App;
