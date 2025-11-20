import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFire from "@/assets/hero-fire.jpg";
import productSplash from "@/assets/product-splash.png";
import productDuo from "@/assets/product-duo.png";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: heroFire,
    title: "Energy For Leaders",
    subtitle: "Unleash Your Potential"
  }, {
    image: productSplash,
    title: "Power Your Performance",
    subtitle: "High Caffeine, Zero Sugar"
  }, {
    image: productDuo,
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
        </div>)}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white drop-shadow-2xl">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-3xl font-bold mb-8 text-accent drop-shadow-lg">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/about">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-2xl hover:scale-105 transition-all">
                Discover More
              </Button>
            </Link>
            <Link to="/distributor">
              <Button size="lg" variant="outline" className="border-2 border-white font-bold text-lg px-8 py-6 rounded-lg shadow-2xl hover:scale-105 transition-all bg-[#ee5b2b] text-slate-50">
                Become a Distributor
              </Button>
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 justify-center mt-12">
          {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/50"}`} />)}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>;
};
export default Hero;