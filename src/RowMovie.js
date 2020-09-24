import React from "react";
import { Row } from "./Row";
import requests from "./requests";

export const RowMovie = () => {
  return (
    <div className="rowmovie">
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}  />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Sci-Fi" fetchUrl={requests.fetchSciFi} />
      <Row title="Mystery" fetchUrl={requests.fetchMystery} />
      <Row title="Western" fetchUrl={requests.fetchWestern} />
      <Row title="TV" fetchUrl={requests.fetchTV} />
      {/* <Row title="" fetchUrl={requests.} /> */}
    
    </div>
  );
};

//fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16` ,