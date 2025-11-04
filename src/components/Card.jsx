import React from 'react';
export default function Card({ title, caption }) {
  return (
    <div className="rounded-lg border p-4 bg-white shadow-sm">
      <div className="h-36 bg-gray-100 rounded-md flex items-center justify-center">Media</div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{caption}</p>
    </div>
  );
}