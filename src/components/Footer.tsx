"use client";

import { seynation } from "../app/index.js";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Footer Ambient Glows */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primaryOne/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primaryThree/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Identity */}
          <div className="space-y-8">
            <Link href="/" className="block group w-max">
              <Image src={seynation} alt="Seynation" className="h-10 w-auto transform transition-transform group-hover:scale-105" />
            </Link>
            <p className="text-gray-400 font-inter leading-relaxed max-w-xs">
              Architecting the digital future through mastery, innovation, and creative excellence since 2015.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaLinkedinIn, link: "https://linkedin.com/company/seynation" },
                { icon: FaInstagram, link: "https://instagram.com/seynationdigital" },
                { icon: FaWhatsapp, link: "https://wa.me/255742005867" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primaryOne hover:text-white hover:border-primaryOne transition-all duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-white font-mina font-bold text-lg tracking-widest uppercase">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Our Services", href: "/solutions" },
                { label: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-primaryOne transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-8">
            <h4 className="text-white font-mina font-bold text-lg tracking-widest uppercase">Services</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li>Web & App Development</li>
              <li>Branding & Identity</li>
              <li>Social Media Strategy</li>
              <li>AI & Emerging Tech</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-white font-mina font-bold text-lg tracking-widest uppercase">Connect</h4>
            <div className="space-y-6">
              <div className="space-y-1">
                <a href="mailto:info@seynation.co" className="text-gray-300 hover:text-primaryOne block transition-colors">info@seynation.co</a>
                <p className="text-gray-500 text-sm">Mega Complex Building, 7th Floor <br /> Arusha, Tanzania</p>
              </div>
              <div className="space-y-1">
                <a href="tel:+255742005867" className="text-gray-300 block hover:text-primaryOne transition-colors">+255 742 005 867</a>
                <a href="tel:+255684224468" className="text-gray-300 block hover:text-primaryOne transition-colors">+255 684 224 468</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-inter">
            © 2025 <span className="text-white font-bold">Seynation Digital LTD.</span> All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};