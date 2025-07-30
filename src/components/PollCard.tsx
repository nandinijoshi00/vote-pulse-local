import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Calendar, Users } from "lucide-react";

interface PollData {
  id: string;
  city: string;
  office: string;
  leader: string;
  percentage: number;
  margin: number;
  trend: "up" | "down" | "stable";
  sampleSize: number;
  dateReleased: string;
  pollster: string;
}

interface PollCardProps {
  poll: PollData;
}

const PollCard = ({ poll }: PollCardProps) => {
  const getTrendIcon = () => {
    if (poll.trend === "up") return <TrendingUp className="w-4 h-4 text-accent" />;
    if (poll.trend === "down") return <TrendingDown className="w-4 h-4 text-destructive" />;
    return null;
  };

  const getTrendColor = () => {
    if (poll.trend === "up") return "bg-accent/10 text-accent";
    if (poll.trend === "down") return "bg-destructive/10 text-destructive";
    return "bg-muted text-muted-foreground";
  };

  return (
    <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{poll.city}</h3>
          <p className="text-sm text-muted-foreground">{poll.office}</p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-1">
          {getTrendIcon()}
          {poll.margin > 0 ? '+' : ''}{poll.margin}%
        </Badge>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">{poll.leader}</span>
          <span className="text-xl font-bold text-primary">{poll.percentage}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${poll.percentage}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          <span>{poll.sampleSize.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{poll.dateReleased}</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Conducted by {poll.pollster}
        </p>
      </div>
    </Card>
  );
};

export default PollCard;