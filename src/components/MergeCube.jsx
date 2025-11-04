import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export default function MergeCube() {
  const mountRef = useRef();

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x6366f1, roughness: 0.4, metalness: 0.7 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(2, 3, 5);
    scene.add(light);

    camera.position.z = 3;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-64" ref={mountRef}></motion.div>
  );
}