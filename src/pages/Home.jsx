import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../components/Card.jsx';
import MergeCube from '../components/MergeCube.jsx';

export default function Home() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-xl p-8 bg-gradient-to-r from-purple-500/10 to-indigo-400/10 border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold">Hi — I&apos;m Zackery.</h1>
          <p className="mt-2 text-gray-700 max-w-2xl">
            I build immersive AR/VR experiences and developer tools. Explore my work history, projects, and experiments.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded shadow-sm"
            >
              Work
            </Link>
            <a href="#projects" className="inline-block px-4 py-2 border rounded">
              Projects
            </a>
            <Link
              to="/cube-tracking"
              className="inline-block px-4 py-2 border border-indigo-400 text-indigo-600 rounded"
            >
              Tracking mode (Merge Cube)
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Interactive Demo — Merge Cube</h2>
        <div className="mt-4 rounded-xl border bg-white p-4">
          {/* normal small cube preview */}
          <MergeCube />
        </div>
      </div>

      {/* existing Featured Projects section below... */}
    </section>
  );
}
