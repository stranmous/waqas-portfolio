import { useEffect, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";

export default function Phone3DStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="phone-3d-container" role="img" aria-label="3D rotating phone showing GlycoTwin dashboard">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 38 }}
        dpr={[1, 2]}
        frameloop={isVisible ? "always" : "never"}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 6]} intensity={1.4} color="#ffffff" />
        <directionalLight position={[-3, 2, 4]} intensity={0.5} color="#9ecfda" />
        <pointLight position={[0, -3, 3]} intensity={0.3} color="#de048d" />
        <Suspense fallback={null}>
          <Phone3D />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Phone3D() {
  const group = useRef<THREE.Group>(null);
  const pointerOffset = useRef({ x: 0, y: 0 });
  
  // Drag physics state
  const isDragging = useRef(false);
  const previousPointer = useRef({ x: 0, y: 0 });
  const dragVelocity = useRef({ x: 0, y: 0 });
  const manualRot = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  
  const { gl } = useThree();
  const screenTexture = useLoader(THREE.TextureLoader, "/App-Screen.png");

  useEffect(() => {
    const canvas = gl.domElement;
    
    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      previousPointer.current = { x: e.clientX, y: e.clientY };
      dragVelocity.current = { x: 0, y: 0 };
    };
    
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - previousPointer.current.x;
      const deltaY = e.clientY - previousPointer.current.y;
      
      const rotX = deltaY * 0.005;
      const rotY = deltaX * 0.005;
      
      manualRot.current.x += rotX;
      manualRot.current.y += rotY;
      
      dragVelocity.current = { x: rotX, y: rotY };
      previousPointer.current = { x: e.clientX, y: e.clientY };
    };
    
    const onPointerUp = () => {
      isDragging.current = false;
    };
    
    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    
    return () => {
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, [gl]);

  useEffect(() => {
    if (screenTexture) {
      screenTexture.colorSpace = THREE.SRGBColorSpace;
      screenTexture.minFilter = THREE.LinearMipmapLinearFilter;
      screenTexture.magFilter = THREE.LinearFilter;
      screenTexture.generateMipmaps = true;
      screenTexture.anisotropy = gl.capabilities.getMaxAnisotropy();
      screenTexture.needsUpdate = true;
    }
  }, [screenTexture, gl.capabilities]);

  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    
    // 1. Smoothly interpolate pointer offset for subtle parallax
    pointerOffset.current.x = THREE.MathUtils.lerp(pointerOffset.current.x, pointer.x, 0.05);
    pointerOffset.current.y = THREE.MathUtils.lerp(pointerOffset.current.y, pointer.y, 0.05);

    // 2. Handle Physics
    if (!isDragging.current) {
      // Auto-rotation time advances only when NOT dragging
      // Cap delta to prevent massive jumps if tab was inactive
      const safeDelta = Math.min(delta, 0.1); 
      timeRef.current += safeDelta;
      
      // Apply momentum/inertia when let go
      manualRot.current.x += dragVelocity.current.x;
      manualRot.current.y += dragVelocity.current.y;
      
      // Dampen velocity (friction)
      dragVelocity.current.x *= 0.92;
      dragVelocity.current.y *= 0.92;
      
      // Gradually return X axis (pitch) to 0 so the phone doesn't stay flipped upside down forever
      manualRot.current.x = THREE.MathUtils.lerp(manualRot.current.x, 0, 0.02);
    }

    const baseRotY = timeRef.current * 0.5;
    const basePosY = Math.sin(timeRef.current * 0.8) * 0.06;
    
    // 3. Combine everything: Auto-rotation + Drag Rotation + Parallax Offset
    group.current.rotation.y = baseRotY + manualRot.current.y + (pointerOffset.current.x * Math.PI) / 6;
    group.current.rotation.x = manualRot.current.x - (pointerOffset.current.y * Math.PI) / 12;
    group.current.position.y = basePosY;
  });

  // Phone dimensions (realistic smartphone proportions)
  const phoneW = 1.52;
  const phoneH = 3.1;
  const phoneD = 0.08;
  const bezelTop = 0.06;
  const bezelSide = 0.05;
  const bezelBottom = 0.06;
  const screenW = phoneW - bezelSide * 2;
  const screenH = phoneH - bezelTop - bezelBottom;
  const cornerRadius = 0.14;

  return (
    <group ref={group}>
      {/* Phone body */}
      <RoundedBox args={[phoneW, phoneH, phoneD]} radius={cornerRadius} smoothness={4}>
        <meshStandardMaterial
          color="#1a1d21"
          metalness={0.7}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Screen bezel / glass (slightly inset from body) */}
      <RoundedBox
        args={[phoneW - 0.02, phoneH - 0.02, 0.005]}
        radius={cornerRadius - 0.01}
        smoothness={4}
        position={[0, 0, phoneD / 2 + 0.001]}
      >
        <meshStandardMaterial
          color="#111316"
          metalness={0.3}
          roughness={0.5}
        />
      </RoundedBox>

      {/* Screen with GlycoTwin screenshot */}
      <mesh position={[0, (bezelTop - bezelBottom) / 2, phoneD / 2 + 0.005]}>
        <planeGeometry args={[screenW, screenH]} />
        <meshBasicMaterial
          map={screenTexture}
          toneMapped={false}
        />
      </mesh>

      {/* Screen glass reflection overlay */}
      <mesh position={[0, (bezelTop - bezelBottom) / 2, phoneD / 2 + 0.006]}>
        <planeGeometry args={[screenW, screenH]} />
        <meshStandardMaterial
          transparent
          opacity={0.06}
          color="#ffffff"
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Back panel */}
      <RoundedBox
        args={[phoneW - 0.04, phoneH - 0.04, 0.003]}
        radius={cornerRadius - 0.02}
        smoothness={4}
        position={[0, 0, -phoneD / 2 - 0.001]}
      >
        <meshStandardMaterial
          color="#222529"
          metalness={0.6}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Camera module bump */}
      <RoundedBox
        args={[0.52, 0.52, 0.025]}
        radius={0.1}
        smoothness={4}
        position={[-0.38, 1.08, -phoneD / 2 - 0.013]}
      >
        <meshStandardMaterial
          color="#2a2d32"
          metalness={0.8}
          roughness={0.15}
        />
      </RoundedBox>

      {/* Camera lens 1 */}
      <mesh position={[-0.48, 1.18, -phoneD / 2 - 0.028]}>
        <cylinderGeometry args={[0.07, 0.07, 0.01, 32]} />
        <meshStandardMaterial
          color="#0a0c0e"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {/* Camera lens ring 1 */}
      <mesh position={[-0.48, 1.18, -phoneD / 2 - 0.029]}>
        <torusGeometry args={[0.072, 0.008, 16, 48]} />
        <meshStandardMaterial
          color="#4a4d52"
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Camera lens 2 */}
      <mesh position={[-0.28, 1.18, -phoneD / 2 - 0.028]}>
        <cylinderGeometry args={[0.07, 0.07, 0.01, 32]} />
        <meshStandardMaterial
          color="#0a0c0e"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {/* Camera lens ring 2 */}
      <mesh position={[-0.28, 1.18, -phoneD / 2 - 0.029]}>
        <torusGeometry args={[0.072, 0.008, 16, 48]} />
        <meshStandardMaterial
          color="#4a4d52"
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Camera lens 3 */}
      <mesh position={[-0.38, 0.98, -phoneD / 2 - 0.028]}>
        <cylinderGeometry args={[0.07, 0.07, 0.01, 32]} />
        <meshStandardMaterial
          color="#0a0c0e"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {/* Camera lens ring 3 */}
      <mesh position={[-0.38, 0.98, -phoneD / 2 - 0.029]}>
        <torusGeometry args={[0.072, 0.008, 16, 48]} />
        <meshStandardMaterial
          color="#4a4d52"
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Flash LED */}
      <mesh position={[-0.48, 0.98, -phoneD / 2 - 0.027]}>
        <circleGeometry args={[0.025, 24]} />
        <meshStandardMaterial
          color="#f5e6c8"
          emissive="#f5e6c8"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Back branding text */}
      <Text
        fontSize={0.09}
        color="#555860"
        anchorX="center"
        anchorY="middle"
        position={[0, -0.2, -phoneD / 2 - 0.004]}
        rotation={[0, Math.PI, 0]}
      >
        GlycoTwin
      </Text>

      {/* Side power button */}
      <RoundedBox
        args={[0.025, 0.22, 0.03]}
        radius={0.01}
        smoothness={4}
        position={[phoneW / 2 + 0.012, 0.5, 0]}
      >
        <meshStandardMaterial
          color="#2a2d32"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Side volume up button */}
      <RoundedBox
        args={[0.025, 0.16, 0.03]}
        radius={0.01}
        smoothness={4}
        position={[-phoneW / 2 - 0.012, 0.7, 0]}
      >
        <meshStandardMaterial
          color="#2a2d32"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Side volume down button */}
      <RoundedBox
        args={[0.025, 0.16, 0.06]}
        radius={0.01}
        smoothness={4}
        position={[-phoneW / 2 - 0.012, 0.42, 0]}
      >
        <meshStandardMaterial
          color="#2a2d32"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Bottom speaker grille (small dots) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={`speaker-${i}`} position={[0.12 + i * 0.06, -phoneH / 2 + 0.04, phoneD / 2 + 0.001]}>
          <circleGeometry args={[0.012, 12]} />
          <meshStandardMaterial color="#2a2d32" />
        </mesh>
      ))}

      {/* USB-C port */}
      <mesh position={[0, -phoneH / 2 + 0.04, phoneD / 2 + 0.001]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.015, 0.1, 4, 12]} />
        <meshStandardMaterial color="#2a2d32" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}
