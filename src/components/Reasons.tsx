import React from 'react';

const reasons = [
  {
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=600",
    text: "Your beautiful smile brightens up my darkest days"
  },
  {
    image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&q=80&w=600",
    text: "Your kindness and compassion inspire me every day"
  },
  {
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600",
    text: "The way you make me laugh when I need it most"
  }
];

const Reasons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {reasons.map((reason, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
        >
          <img 
            src={reason.image} 
            alt={`Reason ${index + 1}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <p className="text-gray-800 text-lg">{reason.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reasons;