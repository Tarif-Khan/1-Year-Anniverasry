import React from 'react';

const Letter = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full transform transition-transform hover:scale-105">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-red-500">My Dearest Sonia</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              As we celebrate our first year together, I want to tell you how much joy and happiness
              you've brought into my life. Every moment with you has been precious, and I cherish
              all the memories we've created together.
            </p>
            <p>
              You make my world brighter, my smile wider, and my heart fuller. Thank you for being
              the amazing person you are and for sharing your life with me.
            </p>
            <p className="font-semibold text-red-500">
              Here's to many more years of love, laughter, and adventures together.
            </p>
            <p className="text-xl font-bold text-red-500 pt-4">
              With all my love,<br />
              [Your Name]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letter;