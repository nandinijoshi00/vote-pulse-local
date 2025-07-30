import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WardsList from "@/components/WardsList";
import TrendingSection from "@/components/TrendingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WardsList />
      <TrendingSection />
      <Footer />
    </div>
  );
};

export default Index;
