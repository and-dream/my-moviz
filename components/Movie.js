import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faVideo} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Movie.module.css';
import { useState } from 'react';

export default function Movie(props) {
  // console.log(props);

    const etoile = [];
    const [personalNote, setPersonalNote] = useState(0);
    for (let i = 0; i < 10; i++) {
      let style = [];
        if (i < personalNote){
          style = { color: '#2196f3'}
        }
      
      etoile.push( <FontAwesomeIcon key={i} icon={faStar} style={style} onClick={() => setPersonalNote(i +1) }/>)
    }
    // console.log(personalNote);

    const [watchCount, setWatchCount] = useState(0);
    const handleViews = () => setWatchCount(watchCount + 1);
    for (let i = 0; i < 10; i++) {
      const element = array[index];
      
    }



    const [like, setLike] = useState(0);

    

    const stars = [];
    const handleClick = () => {
      // console.log('Click detected');
    };
    for (let i = 0; i < 10; i++) {
      //on va créer un objet vide et faire un style inline
      let style = {};
      // console.log(i, props.voteAverage);
      // si l'index de la boucle (index 0) est plus petit que le nombre d'étoiles on la colore
      if ( i < (props.voteAverage - 1 )){
            style = { color: '#f1c40f'};
        }
        stars.push(< FontAwesomeIcon key={i} icon={faStar} style={style}/>);
        
    }
  return (
    <div className={styles.card}>
      
      <img className={styles.images} src={props.poster} alt="Affiche" />
      <div className={styles.textContainer}>
        <span className={styles.name}>{props.title}</span>
        <p className={styles.description}>{props.overview}</p>
        <span className={styles.vote}>{stars} ({props.voteCount})</span>
        <span className={styles.vote}>{etoile}</span>
        <button>(< FontAwesomeIcon icon={faVideo} onClick={ () => handleViews()} />){(watchCount)}</button>
        <button onClick={() => handleClick()}>Like</button>

      </div>
    </div>
  );
}
