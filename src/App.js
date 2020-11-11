import React, { useState } from "react";
import "./App.css";
import SingleColumn from "./SingleColumn";
import MultiColumn from "./MultiColumn";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SingleColumn />
        <MultiColumn />
      </header>
      <p>
        Images from{" "}
        <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">
          Final Space Wiki
        </a>
      </p>
    </div>
  );
}

export default App;
