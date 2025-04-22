import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';
import './VantaBackground.css';

export default function VantaBackground() {
  const vantaRef = useRef(null);
  let vantaEffect = null;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      vantaEffect = HALO({
        el: vantaRef.current,
        THREE: THREE, // Pass THREE as a prop
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0x6780e,
        backgroundColor: 0x0,
        xOffset: 0.2,
      });
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <main>
      <div className="background" ref={vantaRef}></div>
    </main>
  );
}