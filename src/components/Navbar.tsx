import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Career", path: "/career" },
  { name: "Travel", path: "/travel" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            Barathkrishna S.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-all hover:text-primary relative py-1",
                isActive(item.path) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
              {isActive(item.path) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in zoom-in duration-300" />
              )}
            </Link>
          ))}
          <Link to="/contact">
             <Button size="sm" variant="default" className="shadow-lg shadow-primary/20">Contact Me</Button>
          </Link>
        </div>

        {/* Mobile Navigation Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-secondary",
                  isActive(item.path) ? "text-primary bg-secondary/50" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-2">Contact Me</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;