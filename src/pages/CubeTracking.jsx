import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MergeCube from '../components/MergeCube.jsx';

export default function CubeTracking() {
  // speed in radians per frame-ish; 0.01 is your current default
  const [speed, setSpeed] = useState(0.01);

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-40 px-4">
      {/* Back button */}
      <div className="absolute top-4 left-4">
        <Link
          to="/"
          className="inline-flex items-center px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-sm"
        >
          ← Back
        </Link>
      </div>

      {/* Cube area */}
      <div className="w-full max-w-5xl">
        <div className="aspect-square w-full max-h-[80vh] mx-auto">
          <MergeCube rotationSpeed={speed} />
        </div>
      </div>

      {/* Slider controls */}
      <div className="mt-6 w-full max-w-md">
        <label className="block text-sm mb-1">
          Rotation speed: <span className="font-mono">{speed.toFixed(3)}</span>
        </label>
        <input
          type="range"
          min="0"
          max="50"
          step="1"
          value={speed * 1000} // map 0–0.05 to 0–50
          onChange={(e) => setSpeed(Number(e.target.value) / 1000)}
          className="w-full accent-indigo-400"
        />
        <div className="flex justify-between text-xs mt-1 text-gray-300">
          <span>Stopped</span>
          <span>Fast</span>
        </div>
      </div>
    </div>
  );
}
