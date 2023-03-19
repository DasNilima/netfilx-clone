import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './components/Requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow = {true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movie" fetchUrl={requests.fetchTopRated} />
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcomingMovies} />
      <Row title="Popular Tv Shows" fetchUrl={requests.fetchTvShows} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={ requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
