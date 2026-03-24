

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import CartIcon from './CartIcon';
import Logo from '../IMAGES/logoN.png';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section for highlighting
      if (location.pathname === '/') {
        const sections = ['hero', 'apropos', 'produits', 'avantages', 'avis', 'livraison', 'contact-section'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        setActiveSection(currentSection || '');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { id: 'hero', path: '/', label: 'Accueil', hash: '#hero' },
    { id: 'apropos', path: '/', label: 'À propos', hash: '#apropos' },
    { id: 'produits', path: '/', label: 'Produits', hash: '#produits' },
    { id: 'avis', path: '/', label: 'Avis', hash: '#avis' },
    { id: 'livraison', path: '/', label: 'Livraison', hash: '#livraison' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setMobileMenuOpen(false);
    
    if (item.path === location.pathname && item.hash) {
      // Scroll to section on same page
      const sectionId = item.hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Height du header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (item.path !== location.pathname && item.hash) {
      // Navigate to home page and then scroll
      navigate(item.path);
      setTimeout(() => {
        const sectionId = item.hash.replace('#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Regular navigation
      navigate(item.path);
    }
  };

  const isActive = (item: typeof navItems[0]) => {
    if (item.path === '/contact' && location.pathname === '/contact') {
      return true;
    }
    if (location.pathname === '/' && item.id === activeSection) {
      return true;
    }
    if (location.pathname !== '/' && item.path === location.pathname) {
      return true;
    }
    return false;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-4'
          : 'bg-white py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-20 h-8 rounded-full flex items-center justify-center">
                <img src={Logo} alt="Logo" className="w-14 h-12" />
              {/* <span className="text-white font-bold text-xl">B</span> */}
            </div>
            {/* <div>
              <h1 className="text-2xl font-bold text-gray-900">Bienêtre<span className="text-primary-600">Shop</span></h1>
              <p className="text-xs text-gray-500">Bracelet & Pommade</p>
            </div> */}
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path + (item.hash || '')}
                onClick={() => handleNavClick(item)}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  isActive(item)
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.label}
                {isActive(item) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Cart & Menu */}
          <div className="flex items-center space-x-4">
            <CartIcon />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-primary-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.path + (item.hash || '')}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                    isActive(item)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;