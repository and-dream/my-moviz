import React from 'react';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.main}>
        <header className="styles.header">
          <div className="{styles.logocontainer}">
            <img src="logoletter.png" alt="" />
            <img src="logo.png" alt="" />
          </div>
            
        </header>
        <h1>last releases</h1>
    </div>
  )
}
