import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Impact", path: "/impact" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center border-b border-slate-200",
        isScrolled
          ? "bg-white shadow-sm"
          : "bg-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-10 w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/d4vXYtSR/rhohf-logo.png"
              alt="REHOBOTH HEARTS OF HOPE FOUNDATION"
              className="h-[55px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "text-[14px] font-semibold uppercase tracking-wide transition-colors hover:text-green",
                      location.pathname === link.path
                        ? "text-green"
                        : "text-navy"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 ml-2">
              <Link
                to="/get-involved"
                className="text-[14px] font-semibold uppercase tracking-wide text-navy hover:text-green transition-colors"
              >
                Get Involved
              </Link>
              <Link
                to="/donate"
                className="bg-green hover:bg-green-hover text-white px-5 py-2.5 rounded font-bold text-[14px] transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "block text-[14px] font-semibold uppercase tracking-wide transition-colors",
                    location.pathname === link.path
                      ? "text-green"
                      : "text-navy"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/get-involved"
                className="block text-[14px] font-semibold uppercase tracking-wide text-navy"
              >
                Get Involved
              </Link>
            </li>
          </ul>
          <div className="pt-4 border-t border-slate-100">
            <Link
              to="/donate"
              className="flex justify-center w-full bg-green hover:bg-green-hover text-white px-5 py-2.5 rounded font-bold text-[14px] transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
