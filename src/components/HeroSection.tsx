import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Calendar, Users, BarChart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Track Municipal Election
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Polls</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with real-time polling data, trends, and insights from municipal elections across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slide-up">
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">24</h3>
            <p className="text-muted-foreground">Active Polls</p>
          </Card>

          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">15,429</h3>
            <p className="text-muted-foreground">Total Responses</p>
          </Card>

          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-12 h-12 bg-warning rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-warning-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">12</h3>
            <p className="text-muted-foreground">Cities Covered</p>
          </Card>

          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-destructive-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">3.2%</h3>
            <p className="text-muted-foreground">Avg. Margin</p>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4">
            View Latest Polls
          </Button>
          <Button variant="outline" size="lg">
            Election Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;