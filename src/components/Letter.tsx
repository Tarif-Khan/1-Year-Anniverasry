import React from 'react';
import styles from '../styles/Letter.module.css';

const Letter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h2 className={styles.title}>Dear Wife</h2>
          <div className={styles.text}>
            <p>
              As we celebrate our first year together, I want to tell you how much joy and happiness
              you've brought into my life. Every moment with you has been precious, and I cherish
              all the memories we've created together.
            </p>
            <p>
              I knew I had to have you from the moment I layed eyes on you in that Scotiabank hallway.
              I tried my best to gain your interest in the middle of a LensCrafters but it wasn't meant to be.
              I remember saying you looked different on that Marino staircase because honestly I didn't know WHAT to say.
              I tried my best to be romantic when I pulled you close in the rain making an excuse that puddles would hit you and asking you to dinner.
              ...
              But then you said no.
              A week later, you asked ME out because I mustered up enough courage to ask you for a spot in the gym when Kyle bailed on me and from there, it all began.
            </p>
            <p>(You only asked me because you objectified me though lets be honest.)
            </p>
            <p>
              You have done everything to show me that your love knows no bounds. You have taken care of me when I've been ill and brought me up at my lowest lows.
              You're everything I've ever wanted and I'm so happy I made you mine. I can't believe we've already made it to one year. I know I can be a demanding pet
              in what I require from my partner, but you effortlessly meet all the expectations I could ever have. My written card will be more detailed, but I want you to be
              able to keep this forever.
            </p>
            <p className="font-semibold text-red-500">
              Here's to many more years of love, laughter, and adventures together. (By many years I require the rest of your natural life and all of eternity after)
            </p>
            <p className={styles.signature}>
              With all my love,<br />
              Pet (Tarif Khan)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;