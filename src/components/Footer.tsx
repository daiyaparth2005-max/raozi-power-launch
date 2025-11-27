import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import logoEmblem from "@/assets/logo-emblem.png";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logoEmblem} alt="RAOZI" className="h-16 mb-4" />
            <p className="text-white/80 leading-relaxed">
              Premium energy drink designed for leaders, movers, and achievers. 
              Fuel your ambitions with RAOZI.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:support@raozi.com" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>support@raozi.in</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 9119144242</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center">Follow Us</h3>
            <div className="gap-4 items-start justify-center flex flex-row">
              <a href="https://www.instagram.com/raozienergy/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-accent rounded-lg transition-all hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-accent rounded-lg transition-all hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} RAOZI Energy Drink. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;