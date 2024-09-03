// components/Navbar.tsx

'use client'; // Add this at the top

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic (e.g., redirect to a search results page)
    console.log('Search for:', searchQuery);
    // Redirect to search results page (assuming you have one)
    // router.push(`/search?q=${searchQuery}`);
  };

  return (
    <nav className="relative z-[1000] flex items-center justify-between p-4 ">
      <div className="flex items-center">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="My Blog Logo"
            width={50}
            height={50}
            className="mr-2"
          />
        </Link>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-gray-200">Blog</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-200">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
