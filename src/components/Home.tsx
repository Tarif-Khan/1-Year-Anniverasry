import React from 'react';
import { Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
      <div className="animate-pulse">
        <Heart className="w-40 h-40 text-red-500 animate-[beat_1s_ease-in-out_infinite]" fill="currentColor" />
      </div>
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-red-500">I Love You Sonia</h1>
        <h2 className="text-3xl font-semibold text-pink-600">Happy One Year Anniversary</h2>
      </div>
    </div>
  );
}

export default Home;