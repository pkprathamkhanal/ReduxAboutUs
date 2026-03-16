import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0a0a0f, 1);
    camera.position.z = 5;

    const particles = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      const color = new THREE.Color();
      color.setHSL(0.7 + Math.random() * 0.1, 0.8, 0.5);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    const geometry = new THREE.TorusGeometry(2.5, 0.15, 16, 100);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x8b5cf6, 
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const geometry2 = new THREE.IcosahedronGeometry(1.5, 0);
    const material2 = new THREE.MeshBasicMaterial({ 
      color: 0xa855f7, 
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const icosahedron = new THREE.Mesh(geometry2, material2);
    icosahedron.position.set(3, -2, -3);
    scene.add(icosahedron);

    const ringGeometry = new THREE.RingGeometry(1.5, 2, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x7c3aed, 
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.1
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.set(-3, 2, -2);
    scene.add(ring);

    const animate = () => {
      requestAnimationFrame(animate);

      particleSystem.rotation.x += 0.0003;
      particleSystem.rotation.y += 0.0005;

      torus.rotation.x += 0.002;
      torus.rotation.y += 0.003;

      icosahedron.rotation.x += 0.004;
      icosahedron.rotation.y -= 0.002;

      ring.rotation.x += 0.001;
      ring.rotation.z += 0.002;

      const positions = particles.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += Math.sin(Date.now() * 0.001 + positions[i]) * 0.001;
      }
      particles.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      particleMaterial.dispose();
      geometry2.dispose();
      material2.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}