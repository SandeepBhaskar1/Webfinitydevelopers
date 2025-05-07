'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import './SplineViewer.css';

const SplineComponent = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="loading-container">Loading Spline Scene...</div>, // Add a loading indicator
});

export default function SplineViewer() {
  return (
    <div className="background">
      <Suspense fallback={<div className="loading-container">Loading Spline Scene...</div>}>
        <SplineComponent scene="https://prod.spline.design/VzxNs53BPBy2CW3p/scene.splinecode" />
      </Suspense>
    </div>
  );
}
