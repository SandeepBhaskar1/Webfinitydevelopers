'use client';

import dynamic from 'next/dynamic';
import './SplineViewer.css';

const Spline = dynamic(() => import('@splinetool/react-spline/dist/react-spline'), {
  ssr: false,
});

export default function SplineViewer() {
  return (
    <div className="background">
      <Spline scene="https://prod.spline.design/VzxNs53BPBy2CW3p/scene.splinecode" />
    </div>
  );
}
