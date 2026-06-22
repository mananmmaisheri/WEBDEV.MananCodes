import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CyberCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles Group
    const particlesGroup = new THREE.Group();
    scene.add(particlesGroup);

    // Particle Parameters
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const initialPositions: [number, number, number][] = [];

    const colorViolet = new THREE.Color("#A855F7");
    const colorBlue = new THREE.Color("#3B82F6");
    const colorWhite = new THREE.Color("#FFFFFF");

    for (let i = 0; i < particleCount; i++) {
      // Cylindrical or spherical distribution
      const r = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = (Math.random() - 0.5) * 6;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      initialPositions.push([x, y, z]);

      // Gradient color blend based on position
      const mixRatio = Math.random();
      let chosenColor = colorViolet.clone().lerp(colorBlue, mixRatio);
      if (Math.random() > 0.95) {
        chosenColor = colorWhite;
      }

      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Circular Particle Texture
    const createParticleTexture = () => {
      const size = 16;
      const canvasTex = document.createElement("canvas");
      canvasTex.width = size;
      canvasTex.height = size;
      const ctx = canvasTex.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.3, "rgba(200, 200, 255, 0.8)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, size, size);
      }
      return new THREE.CanvasTexture(canvasTex);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.15,
      map: createParticleTexture(),
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    particlesGroup.add(particleSystem);

    // Central Wireframe "M" Shield Layout (Interactive 3D geometry overlay)
    const centralGroup = new THREE.Group();
    scene.add(centralGroup);

    // Dynamic Central Geometry (Octahedron / Sphere wireframe combined)
    const geometryOct = new THREE.OctahedronGeometry(2.2, 1);
    const materialOct = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const octahedron = new THREE.Mesh(geometryOct, materialOct);
    centralGroup.add(octahedron);

    // Inner Core glowing logo (represented by elegant orbital rings)
    const rings: THREE.Line[] = [];
    for (let r = 0; r < 3; r++) {
      const ringGeom = new THREE.RingGeometry(1.2 + r * 0.35, 1.25 + r * 0.35, 32);
      const ringMat = new THREE.LineBasicMaterial({
        color: r === 0 ? 0x3b82f6 : r === 1 ? 0xa855f7 : 0xffffff,
        transparent: true,
        opacity: 0.4 - r * 0.12,
      });
      const ring = new THREE.Line(ringGeom, ringMat);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      centralGroup.add(ring);
      rings.push(ring);
    }

    // Light highlights
    const pointLight1 = new THREE.PointLight(0xa855f7, 2, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x3b82f6, 2, 50);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Mouse movement listeners
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = event.clientX - rect.left;
      const relativeY = event.clientY - rect.top;

      mouse.targetX = (relativeX / width) * 2 - 1;
      mouse.targetY = -(relativeY / height) * 2 + 1;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Animation variables
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const delta = clock.getDelta();

      requestAnimationFrame(animate);

      // Smooth mouse coordinates interpolation (lagging/easing effect)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Rotate central logo
      centralGroup.rotation.y = elapsed * 0.18;
      centralGroup.rotation.x = elapsed * 0.08;

      octahedron.rotation.z = -elapsed * 0.05;

      // Rotate individual orbital rings
      rings.forEach((ring, index) => {
        const factor = (index + 1) * 0.12;
        ring.rotation.x += delta * factor;
        ring.rotation.y -= delta * (factor * 0.8);
      });

      // Apply orbital swirling plus mouse gravity deflection to particles
      const posArray = particleGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const px = initialPositions[i][0];
        const py = initialPositions[i][1];
        const pz = initialPositions[i][2];

        // Wave formula for swirling coordinates
        const angle = elapsed * 0.18 + i * 0.005;
        const wave = Math.sin(angle) * 0.25;

        // Base swirl rotation
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);

        let finalX = px * cosAngle - py * sinAngle;
        let finalY = px * sinAngle + py * cosAngle;
        let finalZ = pz + wave;

        // Mouse displacement effect
        // Project mouse position into world spaces
        const mouseWorldX = mouse.x * 5;
        const mouseWorldY = mouse.y * 5;

        const dx = finalX - mouseWorldX;
        const dy = finalY - mouseWorldY;
        const distSq = dx * dx + dy * dy;

        if (distSq < 15) {
          const pushForce = (15 - distSq) * 0.08; // Pushes away or deflects
          finalX += (dx / Math.sqrt(distSq)) * pushForce;
          finalY += (dy / Math.sqrt(distSq)) * pushForce;
        }

        posArray[i * 3] += (finalX - posArray[i * 3]) * 0.1;
        posArray[i * 3 + 1] += (finalY - posArray[i * 3 + 1]) * 0.1;
        posArray[i * 3 + 2] += (finalZ - posArray[i * 3 + 2]) * 0.1;
      }

      particleGeometry.attributes.position.needsUpdate = true;

      // Overall tilt with mouse cursor
      particlesGroup.rotation.y = mouse.x * 0.35;
      particlesGroup.rotation.x = mouse.y * 0.35;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      width = container.clientWidth || 500;
      height = container.clientHeight || 500;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      geometryOct.dispose();
      materialOct.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="cyber-canvas-container"
      className="absolute inset-0 w-full h-full min-h-[400px] flex items-center justify-center pointer-events-auto"
    >
      <canvas ref={canvasRef} id="cyber-canvas-view" className="w-full h-full max-w-full block" />
    </div>
  );
}
