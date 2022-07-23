import React, { useState } from "react";
// Import Styles
import "./style/style.scss";

// Adding Components
import Player from "./components/player";
import Song from "./components/song";
//import Data
import data from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
