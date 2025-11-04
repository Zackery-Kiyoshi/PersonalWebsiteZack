import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Zackery Kurima</div>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="https://linkedin.com" className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</a>
          <a href="https://github.com" className="text-sm text-gray-600 hover:text-gray-900">GitHub</a>
          <a href="mailto:you@example.com" className="text-sm text-gray-600 hover:text-gray-900">Email</a>
        </div>
      </div>
    </footer>
  );
}