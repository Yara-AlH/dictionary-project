import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [definitions, setDefinitions] = useState(null);

  function handleResponse(response) {
    console.log(response.data);

    setDefinitions(response.data);
    // response.data.meanings.0.definition
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    const apiKey = "0c6283dt87dcb24afbce90bd2bac3o16";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <h3>What word are you searching for?</h3>
      <form onSubmit={handleFormSubmit}>
        <input
          type="search"
          placeholder="Search for a word"
          onChange={handleKeywordChange}
        />
      </form>
      <Results definitions={definitions} />
    </div>
  );
}
