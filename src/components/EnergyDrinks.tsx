import raozicans from "@/assets/raozi-cans.png";
import raozipremium from "@/assets/raozi-premium.png";

const EnergyDrinks = () => {
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
  }];
  return <section className="relative py-24 bg-gradient-to-b from-background via-card/20 to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-br from-brand-fire/30 to-transparent rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-brand-cyan/30 to-transparent rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-foreground via-accent to-brand-fire bg-clip-text text-transparent">
            Energy Drinks
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium energy solutions crafted for excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {drinks.map((drink, index) => <div key={index} className="group relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-3xl p-10 border-2 border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(238,91,43,0.3)] cursor-pointer overflow-hidden animate-fade-in backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}>
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
            </div>)}
        </div>
      </div>
    </section>;
};
export default EnergyDrinks;