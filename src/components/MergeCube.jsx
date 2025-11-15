import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export default function MergeCube({ rotationSpeed = 0.01 }) {
  const mountRef = useRef();
  const speedRef = useRef(rotationSpeed);

  // keep speedRef updated when prop changes
  useEffect(() => {
    speedRef.current = rotationSpeed;
  }, [rotationSpeed]);

  useEffect(() => {
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Load textures from /public
    const loader = new THREE.TextureLoader();
    const textures = {
      front: loader.load('/merge-front.png'),
      back: loader.load('/merge-back.png'),
      left: loader.load('/merge-left.png'),
      right: loader.load('/merge-right.png'),
      top: loader.load('/merge-top.png'),
      bottom: loader.load('/merge-bottom.png'),
    };

    const materials = [
      new THREE.MeshBasicMaterial({ map: textures.right }),   // +X
      new THREE.MeshBasicMaterial({ map: textures.left }),    // -X
      new THREE.MeshBasicMaterial({ map: textures.top }),     // +Y
      new THREE.MeshBasicMaterial({ map: textures.bottom }),  // -Y
      new THREE.MeshBasicMaterial({ map: textures.front }),   // +Z
      new THREE.MeshBasicMaterial({ map: textures.back }),    // -Z
    ];

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(2, 3, 5);
    scene.add(light);

    camera.position.z = 3;

    function onResize() {
      const { clientWidth, clientHeight } = mount;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', onResize);

    let id;
    const animate = () => {
      id = requestAnimationFrame(animate);
      const s = speedRef.current;
      cube.rotation.x += s;
      cube.rotation.y += s;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      materials.forEach((m) => m.dispose());
      Object.values(textures).forEach((t) => t.dispose());
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-64"
      ref={mountRef}
    />
  );
}
