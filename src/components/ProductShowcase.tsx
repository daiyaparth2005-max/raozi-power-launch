import { Zap, Award, Leaf, Flame } from "lucide-react";
import productClean from "@/assets/product-clean.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const ProductShowcase = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  const features = [{
    icon: Zap,
    title: "30mg Caffeine per 100ml",
    description: "Carefully calibrated to boost focus and energy levels"
  }, {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Carbonated water with natural flavoring agents"
  }, {
    icon: Award,
    title: "0.40% Taurine",
    description: "Supports mental alertness and physical endurance"
  }, {
    icon: Flame,
    title: "B-Vitamin Complex",
    description: "B3, B2, B6, and B12 for energy metabolism"
  }];
  return <section ref={ref} className={`relative py-24 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20 my-[18px]">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-brand-electric/30 to-transparent rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-brand-purple/30 to-transparent rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto my-[51px] py-0">
          {/* Product Image */}
          <div className="relative animate-fade-in py-[84px] px-0 mx-0 my-[165px]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-brand-fire/20 to-brand-electric/30 blur-3xl rounded-full animate-pulse-glow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 blur-2xl rounded-full animate-rotate-slow" />
            <img src={productClean} alt="RAOZI Energy Drink" className="relative z-10 w-full max-w-md mx-auto animate-float drop-shadow-2xl rounded-3xl" />
          </div>

          {/* Product Info */}
          <div className="animate-fade-in" style={{
          animationDelay: '200ms'
        }}>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground via-accent to-brand-fire bg-clip-text text-transparent">
              RAOZI Energy Drink
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Engineered for leaders, movers, and achievers. RAOZI delivers 37.20 kcal per 100ml 
              with a powerful blend of taurine, caffeine, and essential B-vitamins. Our premium 
              formula enhances mental alertness, supports cardiovascular health, and fuels peak performance.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => <div key={index} className="group p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,91,43,0.2)] hover:scale-105 backdrop-blur-sm animate-fade-in" style={{
              animationDelay: `${300 + index * 100}ms`
            }}>
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-brand-electric/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <feature.icon className="w-11 h-11 text-accent group-hover:text-brand-fire relative z-10 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(238,91,43,0.5)]" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-black text-lg mb-2 text-foreground group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductShowcase;