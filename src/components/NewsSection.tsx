import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, ExternalLink } from "lucide-react";

const newsArticles = [
  {
    id: "1",
    title: "Municipal Election Turnout Reaches Record High",
    summary: "Voter participation increases by 23% compared to previous election cycle, indicating growing civic engagement.",
    category: "Elections",
    timeAgo: "2 hours ago",
    views: "1.2k",
    image: "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?w=400&h=250&fit=crop",
    source: "Municipal Times"
  },
  {
    id: "2",
    title: "City Council Approves New Infrastructure Budget",
    summary: "$50M allocated for road improvements, public transit expansion, and green energy initiatives.",
    category: "City Council",
    timeAgo: "4 hours ago",
    views: "856",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
    source: "Local Government Today"
  },
  {
    id: "3",
    title: "New Parks Initiative Gains Community Support",
    summary: "Residents rally behind proposal to create 15 new recreational spaces across municipal districts.",
    category: "Community",
    timeAgo: "6 hours ago",
    views: "623",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
    source: "Community Voice"
  },
  {
    id: "4",
    title: "Digital Voting System Successfully Tested",
    summary: "Pilot program shows promising results for future implementation in municipal elections.",
    category: "Technology",
    timeAgo: "8 hours ago",
    views: "445",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    source: "Tech Municipal"
  },
  {
    id: "5",
    title: "Local Business Development Program Launched",
    summary: "New initiative provides grants and support for small businesses in municipal areas.",
    category: "Business",
    timeAgo: "12 hours ago",
    views: "789",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    source: "Business Municipal"
  },
  {
    id: "6",
    title: "Environmental Protection Measures Announced",
    summary: "Comprehensive plan to reduce carbon emissions and protect local waterways unveiled.",
    category: "Environment",
    timeAgo: "1 day ago",
    views: "567",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    source: "Green Municipal"
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest Municipal News</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the most recent developments in municipal government, elections, and community affairs.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={newsArticles[0].image} 
                  alt={newsArticles[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="default" className="bg-primary">Featured</Badge>
                  <Badge variant="secondary">{newsArticles[0].category}</Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {newsArticles[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {newsArticles[0].summary}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{newsArticles[0].timeAgo}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{newsArticles[0].views} views</span>
                    </div>
                  </div>
                  <span className="font-medium">{newsArticles[0].source}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.slice(1).map((article) => (
            <Card key={article.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  {article.summary}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.timeAgo}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{article.source}</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary-glow transition-colors font-medium">
            Load More News →
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;