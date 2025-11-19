import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MergeCube from '../components/MergeCube.jsx';

/// TODO: Tracking, set rotation and axis speeds, color background

export default function CubeTracking() {
  // speed in radians-ish per frame; 0.01 is a nice default
  const [speed, setSpeed] = useState(0.01);

  return (
    <div className="fixed inset-0 bg-black text-white z-40">
      {/* Fullscreen cube fills the entire viewport */}
      <div className="w-full h-full">
        <MergeCube rotationSpeed={speed} className="w-full h-full" />
      </div>

      {/* Back button */}
      <div className="absolute top-4 left-4 z-50">
        <Link
          to="/"
          className="inline-flex items-center px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-sm"
        >
          ← Back
        </Link>
      </div>

      {/* Speed slider */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-50">
        <label className="block text-sm mb-1">
          Rotation speed:{' '}
          <span className="font-mono">
            {speed.toFixed(3)}
          </span>
        </label>
        <input
          type="range"
          min="0"
          max="30"
          step="1"
          value={speed * 1000} // 0–0.05 mapped to 0–50
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
