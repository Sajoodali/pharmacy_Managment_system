import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-xl font-bold text-white">PharmaCare</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in health. Committed to providing genuine
              medicines and exceptional care to the community.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#branches"
                  className="hover:text-teal-400 transition-colors"
                >
                  Find a Branch
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Upload Prescription
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>(021) 111-PHARMA</li>
              <li>support@pharmacare.pk</li>
              <li>Head Office: Main Clifton Road, Karachi</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for health tips and offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-none rounded-lg px-4 py-2 w-full text-sm focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 PharmaCare Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
