import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-12 pb-6 opacity-95">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & About */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 bg-white/10 p-2 rounded w-fit">
              <img
                src="https://i.ibb.co/d4vXYtSR/rhohf-logo.png"
                alt="REHOBOTH HEARTS OF HOPE FOUNDATION"
                className="h-[55px] w-auto object-contain bg-white rounded p-1"
              />
            </Link>
            <p className="text-slate-300 text-[12px] leading-[1.5]">
              Dedicated to empowering communities and creating sustainable impact globally. Join us in our mission to build a better future for those in need.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-green transition-colors" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-green transition-colors" aria-label="Twitter">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-green transition-colors" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-green transition-colors" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-bold mb-4 text-white uppercase tracking-[1px]">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-green transition-colors text-[12px] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-slate-300 hover:text-green transition-colors text-[12px] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green"></span>
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-slate-300 hover:text-green transition-colors text-[12px] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green"></span>
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-slate-300 hover:text-green transition-colors text-[12px] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green"></span>
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-[11px] font-bold mb-4 text-white uppercase tracking-[1px]">Get Involved</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/donate" className="text-slate-300 hover:text-green transition-colors text-[12px] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green"></span>
                  Donate Now
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-slate-300 hover:text-green transition-colors text-[12px] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green"></span>
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-slate-300 hover:text-green transition-colors text-[12px] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green"></span>
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[11px] font-bold mb-4 text-white uppercase tracking-[1px]">Contact Us</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-[12px] text-slate-300">
                <MapPin size={14} className="text-green shrink-0 mt-0.5" />
                <span>123 NGO Street, Global City, GC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-[12px] text-slate-300">
                <Phone size={14} className="text-green shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-[12px] text-slate-300">
                <Mail size={14} className="text-green shrink-0" />
                <a href="mailto:contact@rhohf.org" className="hover:text-green transition-colors">contact@rhohf.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-400 uppercase tracking-[1px]">
            &copy; {new Date().getFullYear()} RHOHF International. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] text-slate-400 uppercase tracking-[1px]">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
