import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">VotePulse</h1>
              <p className="text-sm text-muted-foreground">Municipal Election Tracking</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/category" className="text-foreground hover:text-primary transition-colors font-medium">
              Category
            </a>
            <a href="/e-paper" className="text-foreground hover:text-primary transition-colors font-medium">
              E-Paper
            </a>
            <a href="/opinions" className="text-foreground hover:text-primary transition-colors font-medium">
              Opinions
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;