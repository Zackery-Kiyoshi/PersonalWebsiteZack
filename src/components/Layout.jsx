import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from '../utils/ScrollToTop.jsx';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}