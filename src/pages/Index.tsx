import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import VideoSection from "@/components/VideoSection";
import BrandHighlights from "@/components/BrandHighlights";
import DistributorCTA from "@/components/DistributorCTA";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <ProductShowcase />
        <VideoSection />
        <BrandHighlights />
        <DistributorCTA />
      </main>
      <Footer />
    </div>;
};
export default Index;