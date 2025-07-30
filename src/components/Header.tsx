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
            <a href="#polls" className="text-foreground hover:text-primary transition-colors">
              Current Polls
            </a>
            <a href="#trending" className="text-foreground hover:text-primary transition-colors">
              Trending
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button variant="outline" size="sm">
              <Users className="w-4 h-4 mr-2" />
              Submit Poll
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;