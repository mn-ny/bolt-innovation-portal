
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 animate-fade-in">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white font-display">
            <span className="sr-only">Bolt</span>
            <span className="inline-flex items-center">
              b
              <span className="inline-block w-4 h-4 bg-white rounded-full mx-0.5 transform translate-y-0.5"></span>
              lt.New
            </span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["Info", "Judges", "Process", "FAQ"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <Button className="glassmorphism text-white hover:bg-white/20 transition-all duration-300" size="sm">
          Register Now!
        </Button>
      </div>
    </header>
  );
}
