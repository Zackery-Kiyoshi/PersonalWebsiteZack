import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Work() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="rounded-xl p-8 bg-white border mb-8">
        <h1 className="text-3xl font-bold">Work Experience — Merge Labs</h1>
        <p className="mt-2 text-gray-700">From consumer AR to educational XR, my journey at Merge spanned creative innovation and technical growth.</p>
      </div>

      <div className="space-y-8">
        <Section title="Merge Gaming" description="The MERGE cube and Gaming in AR/VR" link="/work/merge-gaming" />
        <Section title="Merge Blaster"  link="/work/merge-blaster" />
        <Section title="Merge Edu" description="MERGE when we decided that the education market might be ready to Merge Realities" link="/work/merge-edu" />
      </div>
    </motion.section>
  );
}

function Section({ title, description, link }) {
  return (
    <div className="rounded-lg p-6 bg-white border">
      <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
      <div className="mt-4">
        <Link to={link} className="inline-block px-3 py-2 border rounded text-sm hover:bg-gray-50">View details</Link>
      </div>
    </div>
  );
}