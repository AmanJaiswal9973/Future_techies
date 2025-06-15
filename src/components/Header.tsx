/* Updated Header.tsx */
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import icon from "../assets/images/icon.png";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onJoinClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onJoinClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "courses", label: "Courses" },
    { id: "fees", label: "Fees & Batches" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg">
              <img src={icon} alt="Hero" className="h-14 w-14 sm:h-16 sm:w-16" />
            </div>
            <span className="text-2xl font-bold flex space-x-1">
              <span className={isScrolled ? "text-blue-600" : "text-blue-300"}>
                Future
              </span>
              <span className={isScrolled ? "text-gray-900" : "text-white"}>
                Techies
              </span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors font-medium ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-blue-600"
                      : "text-blue-300"
                    : isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onJoinClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Join Us
            </button>
          </nav>

          {/* Mobile Menu */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 transition-colors ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onJoinClick();
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 mx-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Join Us
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;