import { Zap, TrendingUp, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BrandHighlights = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const highlights = [
    {
      icon: Zap,
      label: "CAFFEINE",
      color: "from-brand-electric via-yellow-400 to-brand-fire",
      shadow: "shadow-[0_0_40px_rgba(255,200,50,0.4)]",
      hoverShadow: "group-hover:shadow-[0_0_60px_rgba(255,200,50,0.7)]",
    },
    {
      icon: TrendingUp,
      label: "POWER",
      color: "from-brand-fire via-accent to-red-600",
      shadow: "shadow-[0_0_40px_rgba(238,91,43,0.4)]",
      hoverShadow: "group-hover:shadow-[0_0_60px_rgba(238,91,43,0.7)]",
    },
    {
      icon: Shield,
      label: "VITAMINS",
      color: "from-brand-cyan via-brand-blue to-brand-purple",
      shadow: "shadow-[0_0_40px_rgba(80,180,220,0.4)]",
      hoverShadow: "group-hover:shadow-[0_0_60px_rgba(80,180,220,0.7)]",
    },
  ];

  return (
    <section ref={ref} className={`relative py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-fire/20 to-transparent rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-purple/20 to-transparent rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
          Powered By Excellence
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-6 hover:scale-110 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${highlight.color} ${highlight.shadow} ${highlight.hoverShadow} transition-all duration-300 animate-float`}
                   style={{ animationDelay: `${index * 500}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl" />
                <highlight.icon className="w-14 h-14 text-white relative z-10 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {highlight.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandHighlights;
