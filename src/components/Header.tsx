import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMain from "@/assets/logo-main.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Become a Distributor",
    path: "/distributor"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 text-zinc-950">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center transition-transform hover:scale-105">
            <img alt="RAOZI Energy Drink" className="h-10 md:h-12" src={logoMain} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => <Link key={item.path} to={item.path} className="text-foreground font-semibold hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">
                {item.name}
              </Link>)}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-slide-in">
            {navItems.map(item => <Link key={item.path} to={item.path} className="text-foreground font-semibold hover:text-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>)}
          </nav>}
      </div>
    </header>;
};
export default Header;