// app/about/page.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-4xl font-extrabold text-gray-300 mb-4">About Us</h1>
          <p className="text-lg text-gray-500 mb-6">
            Welcome to our blog! Here, we share insights and stories about various topics. Our goal is to provide valuable information and foster a community of engaged readers.
          </p>
          <p className="text-lg text-gray-500 mb-6">
            Our team is dedicated to delivering quality content and engaging with our readers. Thank you for visiting!
          </p>
          <div className="text-center mt-8">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-700 hover:bg-primary-800 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              Back to Home
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
