import React, { useEffect, useRef } from 'react';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';
import { heroSection } from '../data/content';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > canvas.height) {
          this.reset();
        }

        if (this.x > canvas.width || this.x < 0) {
          this.speedX *= -1;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particlesArray = [];
    const numberOfParticles = 80;

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      {/* Animated Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full -top-48 -right-48 animate-float" />
        <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full -bottom-32 -left-32 animate-float" />
        <div className="absolute w-80 h-80 bg-white opacity-5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold">{heroSection.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {heroSection.title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {heroSection.subtitle}
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            {heroSection.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16">
            <a
              href="#positions"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group shadow-xl"
            >
              <Rocket className="w-5 h-5" />
              {heroSection.cta1}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="bg-white text-purple-600 hover:bg-opacity-90 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              {heroSection.cta2}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {heroSection.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ zIndex: 10 }}>
        <div className="w-6 h-10 rounded-full border-2 border-white border-opacity-50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;