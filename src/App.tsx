import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Reasons from './components/Reasons';
import Letter from './components/Letter';
import styles from './styles/App.module.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className={styles.container}>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className={styles.mainContent}>
        {activeTab === 'home' && <Home />}
        {activeTab === 'reasons' && <Reasons />}
        {activeTab === 'letter' && <Letter />}
      </main>
    </div>
  );
}

export default App;