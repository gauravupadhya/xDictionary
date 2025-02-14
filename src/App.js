import React, { useState } from "react";
import "./App.css";

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div className="container">
      <h1>Dictionary App</h1>
      

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        data-cy="search-input"
      />


      <button onClick={handleSearch} data-cy="search-button">
        Search
      </button>

      <h3>Definition:</h3>
      {definition && (
        <div className="result" data-cy="definition">
          
          <p>{definition}</p>
        </div>
      )}
    </div>
  );
}

export default App;
