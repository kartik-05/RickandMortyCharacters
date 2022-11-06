import React, { useState } from "react";
import { useEffect } from "react";
import "./LiveSearch.css";
import Card from "../Card/Card";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";

function LiveSearch() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const LoadPage = async () => {
    try {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchImages = async () => {
    try {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  useEffect(() => {
    LoadPage();
  }, [page]);

  return (
    <div className="image-grid-container">
      <div className="search-bar">
        <TextField
          variant="outlined"
          label="Search Character"
          type="text"
          placeholder="Search Character"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
          size="small"
        />
      </div>
      {characters.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="image-grid">
          {characters?.map((character, idx) => (
            <Card key={idx} name={character.name} image={character.image} />
          ))}
        </div>
      )}
      <Pagination count={40} onChange={handlePageChange} page={page} />
    </div>
  );
}

export default LiveSearch;
