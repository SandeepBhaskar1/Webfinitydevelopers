'use client'

import dynamic from 'next/dynamic';
import React from 'react';
import Spline from '@splinetool/react-spline';
import './SplineViewer.css'

export default function SplineViewer() {
  return (
    <div className='background'>
      <Spline scene="https://prod.spline.design/VzxNs53BPBy2CW3p/scene.splinecode" />
    </div>
  );
}
