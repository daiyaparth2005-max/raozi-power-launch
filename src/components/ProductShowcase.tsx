import { Zap, Award, Leaf, Flame } from "lucide-react";
import productClean from "@/assets/product-clean.png";

const ProductShowcase = () => {
  const features = [
    {
      icon: Zap,
      title: "30mg Caffeine per 100ml",
      description: "Carefully calibrated to boost focus and energy levels",
    },
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "Carbonated water with natural flavoring agents",
    },
    {
      icon: Award,
      title: "0.40% Taurine",
      description: "Supports mental alertness and physical endurance",
    },
    {
      icon: Flame,
      title: "B-Vitamin Complex",
      description: "B3, B2, B6, and B12 for energy metabolism",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Product Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full animate-pulse-glow" />
            <img
              src={productClean}
              alt="RAOZI Energy Drink"
              className="relative z-10 w-full max-w-md mx-auto animate-float drop-shadow-2xl"
            />
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
              RAOZI Energy Drink
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Engineered for leaders, movers, and achievers. RAOZI delivers 37.20 kcal per 100ml 
              with a powerful blend of taurine, caffeine, and essential B-vitamins. Our premium 
              formula enhances mental alertness, supports cardiovascular health, and fuels peak performance.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg hover:scale-105"
                >
                  <feature.icon className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
