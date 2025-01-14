import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Reasons from './components/Reasons';
import Letter from './components/Letter';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-pink-100">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && <Home />}
        {activeTab === 'reasons' && <Reasons />}
        {activeTab === 'letter' && <Letter />}
      </main>
    </div>
  );
}

export default App;