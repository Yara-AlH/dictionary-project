import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [definitions, setDefinitions] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleApiResponse(response) {
    if (response.data.meanings) {
      setDefinitions(response.data);

      const imgApiKey = "0c6283dt87dcb24afbce90bd2bac3o16";
      let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;

      axios.get(imgApiUrl).then(getPhotos);
    } else {
      return alert(
        `Could not find "${keyword}" in the Dictionary, please try a different word.`
      );
    }
  }

  function getPhotos(response) {
    if (response.data.total_results > 0) {
      setPhotos(response.data.photos);
    } else {
      return null;
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const inputIsValid = /^[a-zA-Z]/.test(keyword);

    if (!inputIsValid) {
      alert("Please enter a valid word");
    }
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    const apiKey = "0c6283dt87dcb24afbce90bd2bac3o16";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3 form-input ">
              <label className="form-label">
                What word are you searching for?
              </label>
              <input
                className="form-control"
                type="search"
                placeholder="Search for a word"
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
              />
            </div>
          </form>
          <p>i.e paris, wine, sunset, coding</p>
        </section>

        <Results definitions={definitions} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
