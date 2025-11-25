import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFire from "@/assets/hero-fire.jpg";
import heroDuoDark from "@/assets/hero-duo-dark.png";
import heroDuoLight from "@/assets/hero-duo-light.png";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: heroFire,
    title: "Energy For Leaders",
    subtitle: "Unleash Your Potential"
  }, {
    image: heroDuoDark,
    title: "Fuel Your Greatness",
    subtitle: "Explore Energy"
  }, {
    image: heroDuoLight,
    title: "Designed For Achievers",
    subtitle: "Premium Energy Experience"
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/40 via-black/60 to-brand-fire/40 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,100,50,0.15),transparent_60%)] z-10" />
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover animate-[scale_20s_ease-in-out_infinite] [animation-play-state:paused]" style={{animationPlayState: index === currentSlide ? 'running' : 'paused'}} />
        </div>)}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-electric to-white animate-shimmer bg-[length:200%_100%]">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-brand-fire via-brand-electric to-brand-fire bg-clip-text text-transparent drop-shadow-lg animate-shimmer bg-[length:200%_100%]">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/about">
              <Button size="lg" className="relative overflow-hidden bg-gradient-to-r from-accent via-brand-fire to-accent bg-[length:200%_100%] hover:bg-[position:right_center] text-white font-bold text-lg px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(238,91,43,0.5)] hover:shadow-[0_0_50px_rgba(238,91,43,0.8)] hover:scale-105 transition-all duration-300 animate-shimmer before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700">
                Discover More
              </Button>
            </Link>
            <Link to="/distributor">
              <Button size="lg" className="relative overflow-hidden bg-gradient-to-r from-accent via-brand-fire to-accent bg-[length:200%_100%] hover:bg-[position:right_center] text-white font-bold text-lg px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(238,91,43,0.5)] hover:shadow-[0_0_50px_rgba(238,91,43,0.8)] hover:scale-105 transition-all duration-300 animate-shimmer before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700">
                Become a Distributor
              </Button>
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 justify-center mt-12">
          {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-gradient-to-r from-accent to-brand-electric shadow-[0_0_10px_rgba(238,91,43,0.8)]" : "w-2 bg-white/50 hover:bg-white/80"}`} />)}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-accent/30 to-brand-purple/30 hover:from-accent/50 hover:to-brand-purple/50 backdrop-blur-md p-3 rounded-full transition-all border border-white/20 shadow-[0_0_20px_rgba(238,91,43,0.3)] hover:shadow-[0_0_30px_rgba(238,91,43,0.6)] hover:scale-110">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-accent/30 to-brand-purple/30 hover:from-accent/50 hover:to-brand-purple/50 backdrop-blur-md p-3 rounded-full transition-all border border-white/20 shadow-[0_0_20px_rgba(238,91,43,0.3)] hover:shadow-[0_0_30px_rgba(238,91,43,0.6)] hover:scale-110">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>;
};
export default Hero;