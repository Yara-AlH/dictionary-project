import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
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
      <form onSubmit={handleFormSubmit}>
        <input
          type="search"
          placeholder="Search for a word"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
