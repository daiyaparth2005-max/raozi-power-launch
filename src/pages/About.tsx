import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, Zap } from "lucide-react";
import productDark from "@/assets/product-dark.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const heroRef = useScrollAnimation({ threshold: 0.2 });
  const valuesRef = useScrollAnimation({ threshold: 0.2 });
  const ingredientsRef = useScrollAnimation({ threshold: 0.2 });
  const values = [{
    icon: Target,
    title: "Mission",
    description: "To empower leaders and achievers with premium energy solutions that fuel success."
  }, {
    icon: Users,
    title: "Community",
    description: "Building a network of ambitious individuals who strive for excellence."
  }, {
    icon: Award,
    title: "Quality",
    description: "Uncompromising standards in every can we produce."
  }, {
    icon: Zap,
    title: "Innovation",
    description: "Constantly evolving to deliver the best energy experience."
  }];
  return <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section ref={heroRef.ref} className={`relative container mx-auto px-4 mb-24 overflow-hidden transition-all duration-1000 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-fire/30 to-transparent rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-purple/30 to-transparent rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative z-10">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-foreground via-accent to-brand-fire bg-clip-text text-transparent">
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
            <div style={{
            animationDelay: '200ms'
          }} className="relative animate-fade-in px-0 mx-0 py-[74px] my-0">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-brand-fire/20 to-brand-electric/30 blur-3xl rounded-full animate-pulse-glow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 blur-2xl rounded-full animate-rotate-slow" />
              <img src={productDark} alt="RAOZI Energy Drink" className="relative z-10 w-full max-w-md mx-auto animate-float drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-3xl object-fill" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef.ref} className={`relative py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30 overflow-hidden transition-all duration-1000 ${valuesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-br from-brand-electric/30 to-transparent rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-br from-brand-cyan/30 to-transparent rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-foreground via-accent to-brand-fire bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that drive everything we do
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => <div key={index} className="group p-8 bg-gradient-to-br from-card to-card/50 rounded-3xl border-2 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(238,91,43,0.3)] hover:scale-105 backdrop-blur-sm animate-fade-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-brand-electric/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <value.icon className="w-14 h-14 text-accent group-hover:text-brand-fire relative z-10 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(238,91,43,0.5)]" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-foreground group-hover:text-accent transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section ref={ingredientsRef.ref} className={`container mx-auto px-4 mt-24 transition-all duration-1000 ${ingredientsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-foreground via-accent to-brand-electric bg-clip-text text-transparent">
                What Makes RAOZI Powerful
              </h2>
              <p className="text-xl text-muted-foreground">
                Premium ingredients for peak performance
              </p>
            </div>
            <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 p-10 md:p-12 rounded-3xl border-2 border-border/50 hover:border-accent/30 shadow-[0_0_40px_rgba(0,0,0,0.1)] hover:shadow-[0_0_60px_rgba(238,91,43,0.2)] transition-all duration-500 backdrop-blur-sm space-y-8">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brand-purple/5 rounded-3xl pointer-events-none" />

              <div className="space-y-8 relative z-10">
                <div className="group p-6 rounded-2xl hover:bg-muted/30 transition-all duration-300">
                  <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-accent to-brand-fire bg-clip-text text-transparent group-hover:from-brand-fire group-hover:to-brand-electric transition-all">
                    Taurine (0.40%)
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    An amino acid that supports hydration, maintains electrolyte balance, and supports cardiovascular and muscular health. Enhances mental alertness and physical endurance.
                  </p>
                </div>
                <div className="group p-6 rounded-2xl hover:bg-muted/30 transition-all duration-300">
                  <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-accent to-brand-fire bg-clip-text text-transparent group-hover:from-brand-fire group-hover:to-brand-electric transition-all">
                    Caffeine (0.03%)
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A natural stimulant at 30mg per 100ml, carefully calibrated to improve focus and increase energy levels without overwhelming your system.
                  </p>
                </div>
                <div className="group p-6 rounded-2xl hover:bg-muted/30 transition-all duration-300">
                  <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-accent to-brand-fire bg-clip-text text-transparent group-hover:from-brand-fire group-hover:to-brand-electric transition-all">
                    B-Vitamin Complex
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    <strong>Vitamin B3 (2.40mg)</strong> - Helps convert food into energy and supports the nervous system<br />
                    <strong>Vitamin B2 (0.20mg)</strong> - Essential for energy production and cellular function<br />
                    <strong>Vitamin B6 (0.40mg)</strong> - Vital for protein metabolism and neurotransmitter synthesis<br />
                    <strong>Vitamin B12 (0.20mcg)</strong> - Supports red blood cell production and nervous system health
                  </p>
                </div>
                <div className="group p-6 rounded-2xl hover:bg-muted/30 transition-all duration-300">
                  <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-accent to-brand-fire bg-clip-text text-transparent group-hover:from-brand-fire group-hover:to-brand-electric transition-all">
                    Natural Ingredients
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Carbonated water base with natural and nature-identical flavoring agents for a refreshing, invigorating experience.
                  </p>
                </div>
              </div>

              {/* Nutritional Information Table */}
              <div className="pt-8 border-t-2 border-gradient-to-r from-transparent via-border to-transparent">
                <h3 className="text-3xl font-black mb-6 text-center bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                  Nutritional Information (Per 100ml)
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-border/50">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-border/50">
                      <tr className="hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent transition-all">
                        <td className="py-4 px-6 font-bold text-foreground">Energy</td>
                        <td className="py-4 px-6 text-muted-foreground">37.20 kcal</td>
                      </tr>
                      <tr className="hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent transition-all">
                        <td className="py-4 px-6 font-bold text-foreground">Total Carbohydrates</td>
                        <td className="py-4 px-6 text-muted-foreground">9.30g (of which sugars: 9.30g)</td>
                      </tr>
                      <tr className="hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent transition-all">
                        <td className="py-4 px-6 font-bold text-foreground">Protein</td>
                        <td className="py-4 px-6 text-muted-foreground">&lt; 0.60g</td>
                      </tr>
                      <tr className="hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent transition-all">
                        <td className="py-4 px-6 font-bold text-foreground">Total Fat</td>
                        <td className="py-4 px-6 text-muted-foreground">&lt; 0.30g</td>
                      </tr>
                      <tr className="hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent transition-all">
                        <td className="py-4 px-6 font-bold text-foreground">Taurine</td>
                        <td className="py-4 px-6 text-muted-foreground">400mg</td>
                      </tr>
                      <tr className="hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent transition-all">
                        <td className="py-4 px-6 font-bold text-foreground">Caffeine</td>
                        <td className="py-4 px-6 text-muted-foreground">30mg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Usage Warnings */}
              <div className="pt-8 border-t-2 border-gradient-to-r from-transparent via-border to-transparent">
                <h3 className="text-2xl font-black mb-6 bg-gradient-to-r from-accent to-brand-fire bg-clip-text text-transparent">
                  Important Information
                </h3>
                <div className="space-y-6 text-muted-foreground">
                  <div className="p-6 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-all">
                    <p className="font-bold text-foreground mb-3 text-lg">Not Recommended For:</p>
                    <ul className="list-disc list-inside ml-2 space-y-2 text-lg">
                      <li>Children</li>
                      <li>Pregnant or lactating women</li>
                      <li>Individuals sensitive to caffeine</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-all">
                    <p className="font-bold text-foreground text-lg"><strong>Consumption Limit:</strong> Do not consume more than 500ml per day</p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-all">
                    <p className="font-bold text-foreground mb-3 text-lg">Storage Instructions:</p>
                    <ul className="list-disc list-inside ml-2 space-y-2 text-lg">
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
    </div>;
};
export default About;