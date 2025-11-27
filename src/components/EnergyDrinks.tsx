import { useState } from "react";
import raozicans from "@/assets/raozi-cans.png";
import raozipremium from "@/assets/raozi-premium.png";
import raozimineralwater from "@/assets/raozi-mineral-water.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EnergyDrinks = () => {
  const [selectedDrink, setSelectedDrink] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const drinks = [{
    name: "RAOZI Classic",
    variant: "Original Energy",
    size: "250 ML",
    image: raozicans,
    position: "object-center"
  }, {
    name: "RAOZI Premium",
    variant: "Mountain Edition",
    size: "250 ML",
    image: raozipremium,
    position: "object-center"
  }, {
    name: "RAOZI | Water |",
    variant: "Pure Life",
    size: "500 ML",
    image: raozimineralwater,
    position: "object-center"
  }];
  return <section ref={ref} className={`relative py-24 bg-gradient-to-b from-background via-card/20 to-background overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-br from-brand-fire/30 to-transparent rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-brand-cyan/30 to-transparent rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
      </div>

      <div className="container mx-auto relative z-10 py-0 px-[3px]">
        <div className="text-center mb-16 animate-fade-in border-8 py-0">
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-foreground via-accent to-brand-fire bg-clip-text text-transparent text-center font-sans font-extrabold px-0 my-0 py-[9px]">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto py-0">
            Premium energy solutions crafted for excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {drinks.map((drink, index) => (
            <Dialog key={index} open={selectedDrink === index} onOpenChange={(open) => setSelectedDrink(open ? index : null)}>
              <DialogTrigger asChild>
                <div 
                  className="group relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-3xl p-10 border-2 border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(238,91,43,0.3)] cursor-pointer overflow-hidden animate-fade-in backdrop-blur-sm active:scale-95" 
                  style={{ animationDelay: `${index * 200}ms` }}
                  onClick={() => setSelectedDrink(index)}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-brand-fire/0 to-brand-electric/0 group-hover:from-accent/10 group-hover:via-brand-fire/5 group-hover:to-brand-electric/10 transition-all duration-500 rounded-3xl pointer-events-none" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

                  {/* Content with popup effect on hover */}
                  <div className="relative transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3">
                    <h3 className="text-3xl md:text-4xl font-black mb-2 text-center bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-brand-fire transition-all">
                      {drink.name}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 text-center font-semibold">
                      {drink.variant}
                    </p>

                    {/* Product Image with glow */}
                    <div className="relative h-96 mb-8 overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                      <img src={drink.image} alt={drink.name} className="relative z-10 object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                    </div>

                    <div className="text-center">
                      <span className="inline-block px-8 py-3 bg-gradient-to-r from-accent/20 to-brand-fire/20 text-accent font-black text-lg rounded-full border-2 border-accent/30 group-hover:border-accent/60 group-hover:shadow-[0_0_20px_rgba(238,91,43,0.4)] transition-all duration-300">
                        {drink.size}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-card/95 to-background border-2 border-accent/30 p-0 sm:rounded-3xl">
                <div className="relative p-8 sm:p-12">
                  {/* Animated background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-brand-fire/40 to-transparent rounded-full blur-3xl animate-pulse-glow" />
                    <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-brand-cyan/40 to-transparent rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
                  </div>

                  <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    {/* Product Image */}
                    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-brand-purple/10" />
                      <img 
                        src={drink.image} 
                        alt={drink.name} 
                        className="relative z-10 object-cover w-full h-full animate-fade-in"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-4xl sm:text-5xl font-black mb-3 bg-gradient-to-r from-accent via-brand-fire to-brand-electric bg-clip-text text-transparent">
                          {drink.name}
                        </h2>
                        <p className="text-xl sm:text-2xl text-muted-foreground font-bold">
                          {drink.variant}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="px-6 py-2 bg-gradient-to-r from-accent/20 to-brand-fire/20 text-accent font-black text-xl rounded-full border-2 border-accent/30">
                          {drink.size}
                        </span>
                      </div>

                      <div className="space-y-4 pt-4">
                        <div className="p-4 rounded-xl bg-gradient-to-r from-card/80 to-card/60 border border-border/50 backdrop-blur-sm">
                          <h3 className="font-bold text-lg mb-2 text-accent">Key Features</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">●</span>
                              <span>30mg Caffeine per 100ml for sustained energy</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">●</span>
                              <span>0.40% Taurine for enhanced performance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">●</span>
                              <span>B-Vitamin Complex for metabolism support</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">●</span>
                              <span>Natural ingredients, premium quality</span>
                            </li>
                          </ul>
                        </div>

                        <div className="p-4 rounded-xl bg-gradient-to-r from-card/80 to-card/60 border border-border/50 backdrop-blur-sm">
                          <h3 className="font-bold text-lg mb-2 text-brand-fire">Nutritional Info</h3>
                          <p className="text-muted-foreground">37.20 kcal per 100ml</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>;
};
export default EnergyDrinks;