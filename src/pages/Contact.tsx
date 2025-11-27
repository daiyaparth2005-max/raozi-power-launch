import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const formRef = useScrollAnimation({ threshold: 0.2 });
  const infoRef = useScrollAnimation({ threshold: 0.2 });
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div ref={headerRef.ref} className={`relative text-center mb-20 overflow-hidden transition-all duration-1000 ${headerRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              {/* Animated background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-brand-fire/30 to-transparent rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-br from-brand-purple/30 to-transparent rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
              </div>

              <div className="relative z-10 animate-fade-in">
                <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-foreground via-accent to-brand-fire bg-clip-text text-transparent">
                  Get In Touch
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Have questions or want to learn more about RAOZI? We'd love to hear from you.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div ref={formRef.ref} className={`relative bg-gradient-to-br from-card to-card/50 p-10 rounded-3xl border-2 border-border/50 hover:border-accent/30 shadow-[0_0_40px_rgba(0,0,0,0.1)] hover:shadow-[0_0_60px_rgba(238,91,43,0.2)] transition-all duration-500 backdrop-blur-sm animate-fade-in ${formRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brand-purple/5 rounded-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-black mb-8 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-semibold">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2 bg-background/50 border-border/50 focus:border-accent transition-all" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-semibold">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2 bg-background/50 border-border/50 focus:border-accent transition-all" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground font-semibold">Phone (Optional)</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="mt-2 bg-background/50 border-border/50 focus:border-accent transition-all" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-foreground font-semibold">Message</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="mt-2 bg-background/50 border-border/50 focus:border-accent transition-all" />
                    </div>
                    <Button type="submit" size="lg" className="relative overflow-hidden w-full bg-gradient-to-r from-accent via-brand-fire to-accent bg-[length:200%_100%] hover:bg-[position:right_center] text-white font-black text-lg py-6 rounded-2xl shadow-[0_0_30px_rgba(238,91,43,0.4)] hover:shadow-[0_0_50px_rgba(238,91,43,0.7)] hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700">
                      <span className="relative z-10">SEND MESSAGE</span>
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div ref={infoRef.ref} className={`space-y-8 animate-fade-in transition-all duration-1000 ${infoRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '200ms' }}>
                <div className="relative bg-gradient-to-br from-card to-card/50 p-10 rounded-3xl border-2 border-border/50 hover:border-accent/30 shadow-[0_0_40px_rgba(0,0,0,0.1)] hover:shadow-[0_0_60px_rgba(238,91,43,0.2)] transition-all duration-500 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brand-purple/5 rounded-3xl pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-8 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                      Contact Information
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300">
                        <div className="p-4 bg-gradient-to-br from-accent/20 to-brand-fire/10 rounded-2xl border border-accent/20 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(238,91,43,0.3)] transition-all">
                          <Mail className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="font-black text-lg mb-2 text-foreground">Email</h3>
                          <a href="mailto:support@raozi.com" className="text-muted-foreground hover:text-accent transition-colors text-lg">
                            support@raozi.in
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300">
                        <div className="p-4 bg-gradient-to-br from-accent/20 to-brand-fire/10 rounded-2xl border border-accent/20 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(238,91,43,0.3)] transition-all">
                          <Phone className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="font-black text-lg mb-2 text-foreground">Phone</h3>
                          <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors text-lg">
                            +91 78500                           
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300">
                        <div className="p-4 bg-gradient-to-br from-accent/20 to-brand-fire/10 rounded-2xl border border-accent/20 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(238,91,43,0.3)] transition-all">
                          <MapPin className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="font-black text-lg mb-2 text-foreground">Location</h3>
                          <p className="text-muted-foreground text-lg">
                            Serving distributors nationwide
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-accent via-brand-fire to-accent p-10 rounded-3xl text-white overflow-hidden shadow-[0_0_50px_rgba(238,91,43,0.4)] hover:shadow-[0_0_70px_rgba(238,91,43,0.6)] transition-all duration-500">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-6 drop-shadow-lg">Business Hours</h3>
                    <div className="space-y-3 text-white/95 text-lg font-medium">
                      <p className="flex justify-between"><span>Monday - Friday:</span> <span className="font-bold">9:00 AM - 6:00 PM</span></p>
                      <p className="flex justify-between"><span>Saturday:</span> <span className="font-bold">10:00 AM - 4:00 PM</span></p>
                      <p className="flex justify-between"><span>Sunday:</span> <span className="font-bold">Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Contact;