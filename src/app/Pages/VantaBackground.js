'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';
import './VantaBackground.css';

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = HALO({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0x06780e,
        backgroundColor: 0x000000,
        xOffset: 0.2,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="background" />
  );
}
