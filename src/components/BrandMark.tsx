import React from 'react';

export const BrandMark: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`relative flex items-center justify-center bg-white rounded-xl shadow-md p-1 border border-red-100 overflow-hidden ${className}`}>
    {/* SVG exact recreation of the Red Apple Repair logo */}
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top curved text area placeholder / background */}
      <rect width="200" height="200" fill="white"/>
      
      {/* Phone Body Outline */}
      <rect x="55" y="32" width="90" height="142" rx="14" stroke="#111827" strokeWidth="6" fill="#F8FAFC"/>
      {/* Notch / Speaker */}
      <path d="M80 32C80 28 88 28 100 28C112 28 120 28 120 32" stroke="#111827" strokeWidth="4" strokeLinecap="round"/>
      
      {/* Screen Split (Left Cracked, Right Clean) */}
      <path d="M100 45V160" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4"/>
      
      {/* Cracks on Left Screen */}
      <path d="M100 85L78 65M100 85L68 92M100 85L75 115M100 85L88 70M100 85L65 75" stroke="#111827" strokeWidth="3" strokeLinecap="round"/>
      {/* Crack Glow/Flash */}
      <circle cx="100" cy="85" r="4" fill="#38BDF8"/>

      {/* Red Apple Ribbon / Banner at Bottom */}
      <path d="M25 155C60 170 140 170 175 155C185 170 165 195 100 195C35 195 15 170 25 155Z" fill="#111827" stroke="#DC2626" strokeWidth="3"/>
      
      {/* Banner Text: RED APPLE */}
      <text x="100" y="180" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1.5">
        RED APPLE
      </text>

      {/* Top Curved Text: MOBILE REPAIR */}
      <path id="textPath" d="M 40,30 Q 100,5 160,30" fill="none"/>
      <text fontSize="13" fontWeight="800" fill="#111827" fontFamily="system-ui, sans-serif" letterSpacing="1">
        <textPath href="#textPath" startOffset="50%" textAnchor="middle">MOBILE REPAIR</textPath>
      </text>
    </svg>
  </div>
);

export default BrandMark;
