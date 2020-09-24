import React, { useState, useEffect } from "react";
import "./Banner.css";
import requests from "./requests";
import axios from "./axios";
//import TextTruncate from 'react-text-truncate'

export const Banner = () => {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "...." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: " center center",
      }}
    >
      <div className="banner__contents">
        <h2 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h2>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* <TextTruncate className='banner__description'
      line={2}
      element='h1'
      truncateText='...'
      text={movie?.overview}
      /> */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};
