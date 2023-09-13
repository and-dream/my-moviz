import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faStar, faVideo} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Movie.module.css';
import { useState } from 'react';

export default function Movie(props) {
  // console.log(props);

  //states
  const [personalNote, setPersonalNote] = useState(0);
  const [watchCount, setWatchCount] = useState(0);
  const [like, setLike] = useState(false);

  // console.log(personalNote);

  const etoile = [];
    for (let i = 0; i < 10; i++) {
      let style = {cursor: 'pointer'};
        if (i < personalNote){
          style = { cursor: 'pointer', color: '#2196f3'}
        }
      
      etoile.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        style={style}
        onClick={() => setPersonalNote(i + 1) }
        />
      );
    }
    

    let camStyle = {cursor: 'pointer'};
    const handleViews = () => setWatchCount(watchCount + 1);
    
    
   
    if (watchCount > 0){
      camStyle = {cursor: 'pointer', color: '#e74c3c'}
    }
      
    

    const handleClick = () => {
          // console.log('Click detected');
          setLike(!like);       // tu me set la valeur à son inverse
        };
  
    
    let likeStyle = {cursor: 'pointer'};
    if(like){
      likeStyle = {cursor: 'pointer', color: '#e74c3c'};
    }

       
    
    const stars = [];
    
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
        <p className={styles.description}>{props.overview.substring(0, 250)}</p>
        <span className={styles.vote}>{stars} ({props.voteCount})</span>
        <div className={styles.vote}>{etoile} ({personalNote})</div>
        < FontAwesomeIcon icon={faVideo} onClick={() => handleViews()} style={{cursor: 'pointer'}}/> ({(watchCount)})     
        < FontAwesomeIcon icon={faHeart} onClick={() => handleClick()} style={{cursor: 'pointer'}}/> 
      </div>
    </div>
  );
}
