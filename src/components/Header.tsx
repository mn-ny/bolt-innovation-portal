
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Removed unused navigation items
  const navigationItems = [];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300",
      isScrolled ? "bg-hackathon-dark/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <img 
            src="https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/bolt.png" 
            alt="Bolt Logo" 
            className="h-8 w-auto"
          />
        </a>
        
        {/* Desktop Navigation */}
        {navigationItems.length > 0 && (
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  location.pathname === item.href 
                    ? "text-white" 
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
        
        <div className="flex items-center gap-4">
          <Button className="glassmorphism text-white hover:bg-white/20 transition-all duration-300" size="sm">
            Register Now!
          </Button>
          
          {/* Mobile menu button - only show if we have navigation items */}
          {navigationItems.length > 0 && (
            <button
              className="md:hidden text-white p-1"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>
      
      {/* Mobile Navigation - only show if menu is open and we have navigation items */}
      {isMenuOpen && navigationItems.length > 0 && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-hackathon-dark/90 backdrop-blur-lg border-b border-white/10 py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium py-2 transition-colors duration-200",
                  location.pathname === item.href 
                    ? "text-white" 
                    : "text-white/70 hover:text-white"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
