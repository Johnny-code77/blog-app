// app/layout.tsx
import React from 'react';
import Navbar from '../components/navbar'; // Adjust the path if needed
import Footer from '../components/footer'; // Adjust the path if needed
import './globals.css'; // Ensure the path is correct
import { StarsBackground } from '@/components/ui/stars-background';
import { ShootingStars } from '@/components/ui/shooting-stars';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: '1em', minHeight: '80vh' }}>
          {children}
          <StarsBackground/>
          <ShootingStars/>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
