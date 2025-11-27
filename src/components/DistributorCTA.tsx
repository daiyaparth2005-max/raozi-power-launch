import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import productSpotlight from "@/assets/product-spotlight.png";
const DistributorCTA = () => {
  const benefits = [{
    icon: TrendingUp,
    title: "High Growth Market",
    description: "Join a rapidly expanding energy drink brand"
  }, {
    icon: Users,
    title: "Strong Support",
    description: "Comprehensive training and marketing support"
  }, {
    icon: Target,
    title: "Premium Margins",
    description: "Competitive pricing and profit opportunities"
  }];
  return <section className="relative py-24 bg-gradient-to-br from-primary via-accent to-brand-fire overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-white to-brand-electric rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-brand-purple to-brand-cyan rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-brand-electric/30 to-transparent rounded-full blur-3xl animate-rotate-slow" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-white rounded-full animate-float" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }} />)}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-6 drop-shadow-lg">
              Start Your Journey <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-electric via-white to-brand-electric animate-shimmer bg-[length:200%_100%]">With Us</span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed drop-shadow-md">
              Join the RAOZI family and become part of an energetic, ambitious network of 
              distributors. Build your business with a premium brand that stands out.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-5 group animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{
              animationDelay: `${index * 150}ms`
            }}>
                  <div className="p-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-xl border border-white/30 group-hover:border-white/60 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                    <benefit.icon className="w-7 h-7 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2 group-hover:text-brand-electric transition-colors">{benefit.title}</h3>
                    <p className="opacity-90 text-lg leading-relaxed">{benefit.description}</p>
                  </div>
                </div>)}
            </div>

            <Link to="/distributor" className="inline-block animate-fade-in" style={{
            animationDelay: '450ms'
          }}>
              <Button size="lg" className="relative overflow-hidden bg-white text-primary hover:text-accent font-black text-xl px-10 py-7 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.7)] hover:scale-110 transition-all duration-300 group border-2 border-white/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-brand-electric/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700">
                <span className="relative z-10 flex items-center gap-3">
                  Become a Distributor
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                </span>
              </Button>
            </Link>
          </div>

          {/* Product Image */}
          <div style={{
          animationDelay: '300ms'
        }} className="relative animate-fade-in mx-0 my-0 px-0 py-12">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-brand-electric/30 to-brand-cyan/30 blur-3xl rounded-full animate-pulse-glow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-brand-purple/40 to-transparent blur-2xl rounded-full animate-rotate-slow" />
            <img src={productSpotlight} alt="Join RAOZI" className="relative z-10 w-full max-w-3xl mx-auto animate-float drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl border-none object-fill" />
          </div>
        </div>
      </div>
    </section>;
};
export default DistributorCTA;