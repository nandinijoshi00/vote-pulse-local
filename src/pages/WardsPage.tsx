import Header from "@/components/Header";
import WardsList from "@/components/WardsList";
import Footer from "@/components/Footer";

const WardsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WardsList />
      <Footer />
    </div>
  );
};

export default WardsPage;