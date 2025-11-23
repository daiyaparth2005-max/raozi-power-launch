import raozicans from "@/assets/raozi-cans.png";

const EnergyDrinks = () => {
  const drinks = [
    {
      name: "RAOZI Classic",
      variant: "Original Energy",
      size: "250 ML",
      image: raozicans,
      position: "object-[20%_center]",
    },
    {
      name: "RAOZI Premium",
      variant: "Mountain Edition",
      size: "250 ML", 
      image: raozicans,
      position: "object-[80%_center]",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-foreground">
          Energy Drinks
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {drinks.map((drink, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer overflow-hidden"
            >
              {/* Popup effect on hover */}
              <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2 text-center">
                  {drink.name}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  {drink.variant}
                </p>

                {/* Product Image */}
                <div className="relative h-80 mb-6 overflow-hidden rounded-xl">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className={`w-full h-full ${drink.position} scale-150 transition-transform duration-500 group-hover:scale-[1.6]`}
                  />
                </div>

                <div className="text-center">
                  <span className="inline-block px-6 py-2 bg-accent/10 text-accent font-bold rounded-full border border-accent/20">
                    {drink.size}
                  </span>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnergyDrinks;
