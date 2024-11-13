// components/Footer.tsx
"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 border-8 border-white">
      <div className="container mx-auto px-4 ">
        <img src="/ESG.png" alt="icons" className="w-full h-full mt-4" />
      </div>
    </footer>
  );
};

export default Footer;
