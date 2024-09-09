import React from 'react';
import { BorderBeam } from './magicui/border-beam';

const About: React.FC = () => {
  return (
    <div className="relative flex h-[500px] w-[500px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl mx-auto">
      <div className="text-center space-y-4"> 
        <h1 className="text-xl font-bold text-indigo-600">About Us</h1>
        <p className="max-w-xs justify-center">
          Welcome to our blog! Here, we share insights and stories about various topics. Our goal is to provide valuable information and foster a community of engaged readers.
        </p>
        <p className="max-w-xs justify">
          Our team is dedicated to delivering quality content and engaging with our readers. Thank you for visiting!
        </p>
      </div>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
};

export default About;
