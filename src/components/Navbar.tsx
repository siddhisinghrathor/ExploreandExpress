import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "blog", label: "Blog" }
  ];

  const handleNavClick = (id: string) => {
    onPageChange(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-[#556F2D]/95 border-[#3F5222]/20 backdrop-blur-md py-3 shadow-md"
            : "bg-[#556F2D] border-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="text-2xl font-medium tracking-wide text-[#F7F4EE] hover:opacity-90 transition-opacity focus:outline-none"
          >
            Explore & Express
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-widest uppercase relative py-1 transition-colors duration-300 focus:outline-none ${
                  currentPage === item.id
                    ? "text-[#F7F4EE] font-semibold"
                    : "text-[#DAD5E7] hover:text-[#F7F4EE]"
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#E4CDD3]" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-5 py-2.5 text-xs uppercase tracking-widest border border-[#E4CDD3] bg-[#E4CDD3] text-[#3F5222] hover:bg-transparent hover:text-[#F7F4EE] transition-all duration-300 rounded-sm"
            >
              Begin Your Journey
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#F7F4EE] hover:opacity-80 transition-opacity focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Paper Style) */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-500 transform md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-[#3F5222]/40 backdrop-blur-xs"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#F7F4EE] shadow-2xl flex flex-col justify-between p-8 border-l border-[#A8B08D]/30">
          <div className="space-y-8 pt-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#556F2D] border-b border-[#A8B08D]/20 pb-4">
              Explore & Express
            </p>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg py-1 tracking-wider transition-colors duration-300 focus:outline-none ${
                    currentPage === item.id
                      ? "text-[#556F2D] font-bold"
                      : "text-[#374038] hover:text-[#556F2D]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full text-center py-3 text-xs uppercase tracking-widest bg-[#556F2D] text-[#F7F4EE] hover:bg-[#3F5222] transition-colors rounded-sm"
            >
              Begin Your Journey
            </button>
            <p className="text-[10px] text-center text-[#374038]/60 leading-relaxed">
              “Art does not tell us who we are.<br />It helps us remember.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
