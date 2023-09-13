import React from "react";
import styles from "../styles/Home.module.css";
import Movie from "./Movie";
import { useEffect, useState } from "react";

function Home() {
  const [moviesData, setMoviesData] = useState([]);

  const API_KEY = "691f574e729240538ef09fcb461dedc3";

  useEffect(() => {
    fetch(
      // "https://api.themoviedb.org/3/discover/movie?api_key=691f574e729240538ef09fcb461dedc3"
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    )
      .then((response) => response.json()) // on convertit la première réponse au format JSON
      .then((data) => {
        const formatedData = data.results.map((movie, i) => {
          //a l'arrivee du fetch on formate la data
          const poster = "https://image.tmdb.org/t/p/w500/" + movie.poster_path; //movie c'est chaque film du tableau
          let overview = movie.overview;
          if (overview.length > 250) {
              overview = overview.slice(0, 250) + "...";
          }
          return {
            poster,
            overview,
            title: movie.title,
            voteAverage: movie.vote_average,
            voteCount: movie.vote_count,
          };
        });
        setMoviesData(formatedData);
        console.log(data);
      });
  }, []);

  //on va boucler dans chaque élément de l'objet, movie avec une clé pour qu'on ait pas de warning
  //movie correspond à chaque objet du tableau (ou data)
  const movies = moviesData.map((data, i) => {
    return <Movie key={i} {...data} />;
  });

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <img src="logo.png" alt="Logo" />
        <img className={styles.logo} src="logoletter.png" alt="Letter logo" />
      </header>
      <div className={styles.title}>LAST RELEASES</div>
      <div className={styles.moviesContainer}>{movies}</div>
    </div>
  );
}

export default Home;
