import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Calendar, MapPin } from "lucide-react";

const trendingData = [
  {
    id: "1",
    title: "Springfield Mayor Race Tightens",
    description: "Johnson's lead narrows to 8 points as campaign enters final stretch",
    change: "+5%",
    trend: "up",
    category: "Mayor",
    location: "Springfield",
    timeAgo: "2 hours ago"
  },
  {
    id: "2",
    title: "Riverside Council District Upset Brewing",
    description: "Challenger Rodriguez gains significant ground in recent polling",
    change: "+12%",
    trend: "up",
    category: "City Council",
    location: "Riverside",
    timeAgo: "4 hours ago"
  },
  {
    id: "3",
    title: "Millbrook Incumbent Loses Ground",
    description: "Mayor Thompson's approval drops amid budget controversy",
    change: "-7%",
    trend: "down",
    category: "Mayor",
    location: "Millbrook",
    timeAgo: "6 hours ago"
  },
  {
    id: "4",
    title: "Cedar Heights Shows Strong Leadership",
    description: "Park maintains commanding lead with broad coalition support",
    change: "+3%",
    trend: "up",
    category: "Mayor",
    location: "Cedar Heights",
    timeAgo: "8 hours ago"
  }
];

const TrendingSection = () => {
  return (
    <section id="trending" className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Trending Now</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Breaking developments and significant shifts in municipal election polling data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trendingData.map((item) => (
            <Card key={item.id} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <Badge variant="secondary" className="text-xs">
                  {item.category}
                </Badge>
                <div className="flex items-center gap-2">
                  {item.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-accent" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-destructive" />
                  )}
                  <span className={`text-sm font-medium ${
                    item.trend === "up" ? "text-accent" : "text-destructive"
                  }`}>
                    {item.change}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {item.description}
              </p>

              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{item.timeAgo}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary-glow transition-colors font-medium">
            View All Trends →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;