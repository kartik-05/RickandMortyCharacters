import React from "react";
import useFetch from "../../Hooks/useFetch";
import { useRef, useState, useCallback } from "react";
import Card from "../Card/Card";
import "./ScrollLoad.css";
import { TextField } from "@mui/material";

function ScrollLoad() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { characters, hasMore, loading, error } = useFetch(query, pageNumber);

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <div className="image-grid-container">
      <div className="search-bar">
        <TextField
          variant="outlined"
          label="Search Character"
          type="text"
          placeholder="Search Character"
          onChange={handleSearch}
          value={query}
          size="small"
        />
      </div>
      <div className="image-grid">
        {characters.map((character, index) => {
          if (characters.length === index + 1) {
            return (
              <section
                className="card-container"
                ref={lastElementRef}
                key={index}
              >
                <div className="image-container">
                  <img src={character.image} alt="" loading="lazy" />
                </div>
                <div className="card-name">{character.name}</div>
              </section>
            );
          } else {
            return (
              <Card key={index} name={character.name} image={character.image} />
            );
          }
        })}
      </div>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  );
}

export default ScrollLoad;
