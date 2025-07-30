import PollCard from "./PollCard";

const mockPolls = [
  {
    id: "1",
    city: "Springfield",
    office: "Mayor",
    leader: "Sarah Johnson",
    percentage: 42,
    margin: 8,
    trend: "up" as const,
    sampleSize: 1250,
    dateReleased: "Nov 15, 2024",
    pollster: "Regional Research Group"
  },
  {
    id: "2",
    city: "Riverside",
    office: "Mayor",
    leader: "Michael Chen",
    percentage: 38,
    margin: 3,
    trend: "stable" as const,
    sampleSize: 980,
    dateReleased: "Nov 12, 2024",
    pollster: "City Polling Institute"
  },
  {
    id: "3",
    city: "Oak Valley",
    office: "City Council District 3",
    leader: "Elena Rodriguez",
    percentage: 45,
    margin: 12,
    trend: "up" as const,
    sampleSize: 756,
    dateReleased: "Nov 10, 2024",
    pollster: "Valley Survey Co."
  },
  {
    id: "4",
    city: "Millbrook",
    office: "Mayor",
    leader: "David Thompson",
    percentage: 35,
    margin: -2,
    trend: "down" as const,
    sampleSize: 1100,
    dateReleased: "Nov 8, 2024",
    pollster: "Independent Polling"
  },
  {
    id: "5",
    city: "Cedar Heights",
    office: "Mayor",
    leader: "Jennifer Park",
    percentage: 51,
    margin: 15,
    trend: "up" as const,
    sampleSize: 892,
    dateReleased: "Nov 7, 2024",
    pollster: "Heights Research"
  },
  {
    id: "6",
    city: "Brookfield",
    office: "City Council At-Large",
    leader: "Robert Martinez",
    percentage: 29,
    margin: 4,
    trend: "stable" as const,
    sampleSize: 1350,
    dateReleased: "Nov 5, 2024",
    pollster: "Metro Analytics"
  }
];

const CurrentPolls = () => {
  return (
    <section id="polls" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Current Polling Data</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The latest polling results from municipal elections across the region, updated regularly with new data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPolls.map((poll) => (
            <PollCard key={poll.id} poll={poll} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary-glow transition-colors font-medium">
            View All Polls →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrentPolls;