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

  function handleDictionaryResponse(response) {
    setDefinitions(response.data);
  }

  function handleImagesResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
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
    axios.get(apiUrl).then(handleDictionaryResponse);

    const imgApiKey = "0c6283dt87dcb24afbce90bd2bac3o16";
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;

    axios.get(imgApiUrl).then(handleImagesResponse);
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
