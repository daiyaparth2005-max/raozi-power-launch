import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TrendingUp, Users, Target, Package, Handshake, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import productSplash from "@/assets/product-splash.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Distributor = () => {
  const heroRef = useScrollAnimation({ threshold: 0.2 });
  const benefitsRef = useScrollAnimation({ threshold: 0.2 });
  const formRef = useScrollAnimation({ threshold: 0.2 });
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. Our team will contact you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      location: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const benefits = [{
    icon: TrendingUp,
    title: "High Growth Potential",
    description: "Join a rapidly expanding brand in the premium energy drink market."
  }, {
    icon: Users,
    title: "Marketing Support",
    description: "Comprehensive marketing materials and promotional campaigns."
  }, {
    icon: Target,
    title: "Exclusive Territories",
    description: "Protected distribution areas to maximize your market potential."
  }, {
    icon: Package,
    title: "Flexible Ordering",
    description: "Customized order quantities to match your business needs."
  }, {
    icon: Handshake,
    title: "Partnership Approach",
    description: "We work together as partners to ensure mutual success."
  }, {
    icon: BarChart,
    title: "Competitive Margins",
    description: "Attractive pricing structure with strong profit opportunities."
  }];
  return <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section ref={heroRef.ref} className={`relative bg-gradient-to-br from-primary via-accent to-brand-fire text-white py-24 mb-24 overflow-hidden transition-all duration-1000 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-white to-brand-electric rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-brand-purple to-brand-cyan rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-brand-electric/30 to-transparent rounded-full blur-3xl animate-rotate-slow" />
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-white rounded-full animate-float" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }} />)}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <h1 className="text-6xl md:text-7xl font-black mb-8 drop-shadow-lg">
                  Become a <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-electric via-white to-brand-electric animate-shimmer bg-[length:200%_100%]">RAOZI</span> Distributor
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed opacity-95 drop-shadow-md">
                  Partner with a premium energy drink brand that's designed for success. 
                  Build your business with RAOZI and join our network of ambitious distributors.
                </p>
              </div>
              <div className="relative animate-fade-in" style={{
              animationDelay: '200ms'
            }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-brand-electric/30 to-brand-cyan/30 blur-3xl rounded-full animate-pulse-glow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-brand-purple/40 to-transparent blur-2xl rounded-full animate-rotate-slow" />
                <img src={productSplash} alt="Join RAOZI" className="relative z-10 w-full max-w-md mx-auto animate-float drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-full shadow-2xl opacity-95 border-4 border-solid border-muted-foreground object-fill" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef.ref} className={`relative container mx-auto px-4 mb-24 overflow-hidden transition-all duration-1000 ${benefitsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-fire/30 to-transparent rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-purple/30 to-transparent rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
          </div>

          <div className="text-center mb-16 animate-fade-in relative z-10">
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-foreground via-accent to-brand-fire bg-clip-text text-transparent">
              Why Partner With RAOZI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a winning team with unmatched support and opportunities
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
            {benefits.map((benefit, index) => <div key={index} className="group p-8 bg-gradient-to-br from-card to-card/50 rounded-3xl border-2 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(238,91,43,0.3)] hover:scale-105 backdrop-blur-sm animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-brand-electric/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <benefit.icon className="w-14 h-14 text-accent group-hover:text-brand-fire relative z-10 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(238,91,43,0.5)]" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black mb-3 text-foreground group-hover:text-accent transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>)}
          </div>
        </section>

        {/* Application Form */}
        <section ref={formRef.ref} className={`container mx-auto px-4 transition-all duration-1000 ${formRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 p-10 md:p-14 rounded-3xl border-2 border-border/50 hover:border-accent/30 shadow-[0_0_50px_rgba(0,0,0,0.1)] hover:shadow-[0_0_70px_rgba(238,91,43,0.2)] transition-all duration-500 backdrop-blur-sm animate-fade-in">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brand-purple/5 rounded-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-center bg-gradient-to-r from-foreground via-accent to-brand-fire bg-clip-text text-transparent">
                  Apply Now
                </h2>
                <p className="text-center text-muted-foreground text-lg mb-10">
                  Fill out the form below and our team will get in touch with you to discuss partnership opportunities.
                </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="location">Location/Territory of Interest *</Label>
                  <Input id="location" name="location" value={formData.location} onChange={handleChange} required className="mt-2" placeholder="City, State, or Region" />
                </div>
                <div>
                  <Label htmlFor="message">Tell Us About Your Distribution Experience</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className="mt-2" placeholder="Share your background, experience, and why you want to distribute RAOZI..." />
                </div>
                <Button type="submit" size="lg" className="relative overflow-hidden w-full bg-gradient-to-r from-accent via-brand-fire to-accent bg-[length:200%_100%] hover:bg-[position:right_center] text-white font-black text-xl py-7 rounded-2xl shadow-[0_0_40px_rgba(238,91,43,0.4)] hover:shadow-[0_0_60px_rgba(238,91,43,0.7)] hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700">
                  <span className="relative z-10">Submit Application</span>
                </Button>
              </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Distributor;