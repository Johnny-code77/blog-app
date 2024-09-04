import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { FloatingDock } from './ui/floating-dock';

const Footer = () => {
  const socialLinks = [
    { title: 'Facebook', icon: <Facebook />, href: 'https://web.facebook.com' },
    { title: 'Instagram', icon: <Instagram />, href: 'https://www.instagram.com' },
    { title: 'Github', icon: <Github />, href: 'https://github.com' },
    { title: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com' },
  ];

  return (
    <footer className="p-4 text-gray-300 mt-8">
      <div className="container mx-auto text-center" style={{ zIndex: 9999 }}>
        <p>&copy; 2024 Blog. All rights reserved.</p>
        <div className="mt-4" style={{ zIndex: 9999 }}>
          <FloatingDock 
            items={socialLinks} 
            desktopClassName="justify-center"
            mobileClassName="bottom-0 right-4 fixed" 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;