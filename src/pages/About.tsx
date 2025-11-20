import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, Zap } from "lucide-react";
import productDark from "@/assets/product-dark.png";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower leaders and achievers with premium energy solutions that fuel success.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a network of ambitious individuals who strive for excellence.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Uncompromising standards in every can we produce.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving to deliver the best energy experience.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
                Energy For Leaders
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                RAOZI was born from a simple vision: to create an energy drink that matches 
                the intensity and ambition of modern leaders, athletes, and achievers.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We don't just provide energy – we fuel the relentless pursuit of excellence. 
                Every can is crafted with premium ingredients, delivering powerful performance 
                without compromise.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full animate-pulse-glow" />
              <img
                src={productDark}
                alt="RAOZI Energy Drink"
                className="relative z-10 w-full max-w-md mx-auto animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-black text-center mb-12">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all hover:shadow-xl hover:scale-105"
                >
                  <value.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="container mx-auto px-4 mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center">What Makes RAOZI Powerful</h2>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg space-y-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent">Taurine (0.40%)</h3>
                  <p className="text-muted-foreground">
                    An amino acid that supports hydration, maintains electrolyte balance, and supports cardiovascular and muscular health. Enhances mental alertness and physical endurance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent">Caffeine (0.03%)</h3>
                  <p className="text-muted-foreground">
                    A natural stimulant at 30mg per 100ml, carefully calibrated to improve focus and increase energy levels without overwhelming your system.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent">B-Vitamin Complex</h3>
                  <p className="text-muted-foreground">
                    <strong>Vitamin B3 (2.40mg)</strong> - Helps convert food into energy and supports the nervous system<br/>
                    <strong>Vitamin B2 (0.20mg)</strong> - Essential for energy production and cellular function<br/>
                    <strong>Vitamin B6 (0.40mg)</strong> - Vital for protein metabolism and neurotransmitter synthesis<br/>
                    <strong>Vitamin B12 (0.20mcg)</strong> - Supports red blood cell production and nervous system health
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent">Natural Ingredients</h3>
                  <p className="text-muted-foreground">
                    Carbonated water base with natural and nature-identical flavoring agents for a refreshing, invigorating experience.
                  </p>
                </div>
              </div>

              {/* Nutritional Information Table */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-2xl font-bold mb-4 text-center">Nutritional Information (Per 100ml)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4 font-semibold">Energy</td>
                        <td className="py-3 px-4">37.20 kcal</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4 font-semibold">Total Carbohydrates</td>
                        <td className="py-3 px-4">9.30g (of which sugars: 9.30g)</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4 font-semibold">Protein</td>
                        <td className="py-3 px-4">&lt; 0.60g</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4 font-semibold">Total Fat</td>
                        <td className="py-3 px-4">&lt; 0.30g</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4 font-semibold">Taurine</td>
                        <td className="py-3 px-4">400mg</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4 font-semibold">Caffeine</td>
                        <td className="py-3 px-4">30mg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Usage Warnings */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-bold mb-3 text-accent">Important Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-semibold mb-1">Not Recommended For:</p>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                      <li>Children</li>
                      <li>Pregnant or lactating women</li>
                      <li>Individuals sensitive to caffeine</li>
                    </ul>
                  </div>
                  <p><strong>Consumption Limit:</strong> Do not consume more than 500ml per day</p>
                  <div>
                    <p className="font-semibold mb-1">Storage Instructions:</p>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                      <li>Store in a cool, dry place</li>
                      <li>Keep away from direct sunlight</li>
                      <li>Keep out of reach of children</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
