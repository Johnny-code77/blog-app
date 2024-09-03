import React from 'react';

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    padding: '1em',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center' as const,  // Explicitly specify 'textAlign' as a valid CSS value
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 My Blog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
