import React from 'react';

export const BrandMark: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`relative flex items-center justify-center bg-white rounded-xl shadow-md p-1.5 border border-red-100 ${className}`}>
    {/* SVG Apple with Cracked Screen & Red Theme */}
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Apple Body */}
      <path
        d="M72.5 59.5C72.5 48 81.5 42 82 41.5C77 34.5 69.5 33.5 67 33C60.5 32.5 54.5 37 51 37C47.5 37 42 32.5 36.5 33C29.5 33.5 23 37.5 19 44.5C10.5 59 17 80 25 91.5C29 97 33 100 38 100C42.5 100 44.5 97 50.5 97C56.5 97 58 100 63 100C68 100 72 97 76 91.5C81 84.5 83 77.5 83.5 77C83 76.5 72.5 71 72.5 59.5Z"
        fill="#DC2626"
      />
      {/* Leaf */}
      <path
        d="M62 20C62 20 68 8 58 4C48 0 45 12 52 18C55 20.5 59 21 62 20Z"
        fill="#16A34A"
      />
      {/* Crack Line */}
      <path
        d="M45 45L55 60L42 75L58 90"
        stroke="#FCA5A5"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
export default BrandMark;
