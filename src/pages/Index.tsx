import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Vote, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Municipal Wards Button */}
      <section className="py-12 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Municipal News & Elections</h1>
          <p className="text-xl mb-8 opacity-90">
            Stay informed with the latest municipal news and election updates
          </p>
          
          {/* Highlighted Municipal Wards Button */}
          <Link to="/wards">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 shadow-elegant animate-pulse"
            >
              <Vote className="w-6 h-6 mr-3" />
              View Municipal Wards & Vote
              <TrendingUp className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
