import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">Zackery Kurima</Link>
        <nav className="space-x-4 hidden md:flex">
          <Link className="text-sm hover:text-indigo-600" to="/">Home</Link>
          <Link className="text-sm hover:text-indigo-600" to="/work">Work</Link>
          <Link className="text-sm hover:text-indigo-600" to="/projects">Projects</Link>
          <Link className="text-sm hover:text-indigo-600" to="/about">About</Link>
          <Link className="text-sm hover:text-indigo-600" to="/contact">Contact</Link>
        </nav>
        <select onChange={(e) => navigate(e.target.value)} className="md:hidden border rounded px-2 py-1 text-sm">
          <option value="" disabled selected>Menu</option>
          <option value="/">Home</option>
          <option value="/work">Work</option>
          <option value="/projects">Projects</option>
          <option value="/about">About</option>
          <option value="/contact">Contact</option>
        </select>
      </div>
    </header>
  );
}