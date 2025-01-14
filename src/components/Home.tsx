import React from 'react';
import { Heart } from 'lucide-react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heartContainer}>
        <Heart className={styles.heart} fill="currentColor" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>I Love You Sonia</h1>
        <h2 className={styles.subtitle}>Happy One Year Anniversary</h2>
      </div>
    </div>
  );
};

export default Home;