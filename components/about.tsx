import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="relative z-[1000] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-4xl font-extrabold text-gray-300 mb-4">About Us</h1>
          <p className="text-lg text-gray-400 mb-6">
            Welcome to our blog! Here, we share insights and stories about various topics. Our goal is to provide valuable information and foster a community of engaged readers.
          </p>
          <p className="text-lg text-gray-400 mb-6">
            Our team is dedicated to delivering quality content and engaging with our readers. Thank you for visiting!
          </p>
          </div>
        </div>
      </div>
    
  );
};

export default About;
