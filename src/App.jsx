import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import MergeGaming from './pages/MergeGaming.jsx';
import MergeBlaster from './pages/MergeBlaster.jsx';
import MergeEdu from './pages/MergeEdu.jsx';
import CubeTracking from './pages/CubeTracking.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/merge-gaming" element={<MergeGaming />} />
        <Route path="/work/merge-blaster" element={<MergeBlaster />} />
        <Route path="/work/merge-edu" element={<MergeEdu />} />
        <Route path="/cube-tracking" element={<CubeTracking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
