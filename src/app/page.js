import Hero from './components/HeroSection/hero';
import Testimonials from './components/Testimony/Testimonials';
import Frame from './components/WhatWedo/WhatWeDo';
import './globals.css';

export default function Home() {
  return (
    <>
    <Hero />
    <Testimonials />
    <Frame />
    </>
  );
}