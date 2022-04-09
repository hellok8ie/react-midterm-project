import React from 'react';
import GuessingGame from './GuessingGame';
import styles from "./App.module.css";


function App() {

  return (
    <div className={styles.appDiv}>
      <GuessingGame/>
    </div>
  );
}

export default App;
