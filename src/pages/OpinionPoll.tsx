import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Vote, CheckCircle, Users, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// Mock candidates data
const getCandidatesForWard = (wardNumber: string) => {
  return [
    {
      id: 1,
      name: "Sarah Johnson",
      party: "Progressive Alliance",
      currentVotes: 1250,
      percentage: 45
    },
    {
      id: 2,
      name: "Michael Chen",
      party: "Citizens First",
      currentVotes: 1025,
      percentage: 37
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      party: "Green Future",
      currentVotes: 500,
      percentage: 18
    }
  ];
};

const OpinionPoll = () => {
  const { wardNumber } = useParams<{ wardNumber: string }>();
  const { toast } = useToast();
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [candidates, setCandidates] = useState(getCandidatesForWard(wardNumber || "1"));
  
  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.currentVotes, 0);

  const handleVote = () => {
    if (selectedCandidate === null) return;
    
    // Update vote counts
    const updatedCandidates = candidates.map(candidate => {
      if (candidate.id === selectedCandidate) {
        const newVotes = candidate.currentVotes + 1;
        return {
          ...candidate,
          currentVotes: newVotes,
          percentage: Math.round((newVotes / (totalVotes + 1)) * 100)
        };
      } else {
        return {
          ...candidate,
          percentage: Math.round((candidate.currentVotes / (totalVotes + 1)) * 100)
        };
      }
    });
    
    setCandidates(updatedCandidates);
    setHasVoted(true);
    
    const votedCandidate = candidates.find(c => c.id === selectedCandidate);
    toast({
      title: "Vote Recorded!",
      description: `Your vote for ${votedCandidate?.name} has been recorded successfully.`,
    });
  };

  const wardName = `Ward ${wardNumber}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Wards List
              </Button>
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Vote className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground">Opinion Poll</h1>
                <p className="text-lg text-muted-foreground">{wardName} Municipal Election</p>
              </div>
            </div>
          </div>

          {!hasVoted ? (
            <Card className="p-8 shadow-soft">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Cast Your Vote for {wardName}
                </h2>
                <p className="text-muted-foreground">
                  Select your preferred candidate for the municipal election
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {candidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedCandidate === candidate.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedCandidate(candidate.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {candidate.name}
                        </h3>
                        <Badge variant="secondary" className="mt-1">
                          {candidate.party}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Current</div>
                          <div className="font-semibold text-primary">{candidate.percentage}%</div>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedCandidate === candidate.id
                              ? "border-primary bg-primary"
                              : "border-muted"
                          }`}
                        >
                          {selectedCandidate === candidate.id && (
                            <CheckCircle className="w-4 h-4 text-primary-foreground" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  onClick={handleVote}
                  disabled={selectedCandidate === null}
                  className="px-8"
                >
                  <Vote className="w-5 h-5 mr-2" />
                  Submit Your Vote
                </Button>
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card className="p-8 shadow-soft text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Thank You for Voting!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Your vote has been recorded and added to the poll results below.
                </p>
                <Link to={`/ward/${wardNumber}`}>
                  <Button variant="outline">
                    View Candidate Profiles
                  </Button>
                </Link>
              </Card>

              <Card className="p-8 shadow-soft">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Updated Poll Results
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {candidates
                    .sort((a, b) => b.percentage - a.percentage)
                    .map((candidate, index) => (
                    <div key={candidate.id}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            index === 0 ? "bg-primary text-primary-foreground" :
                            index === 1 ? "bg-accent text-accent-foreground" :
                            "bg-muted text-muted-foreground"
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{candidate.name}</div>
                            <div className="text-sm text-muted-foreground">{candidate.party}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-foreground">{candidate.percentage}%</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {candidate.currentVotes.toLocaleString()} votes
                          </div>
                        </div>
                      </div>
                      <Progress value={candidate.percentage} className="h-3" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-muted/30 rounded-lg text-center">
                  <div className="text-sm text-muted-foreground">
                    Total Votes: <span className="font-semibold">{(totalVotes + 1).toLocaleString()}</span>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OpinionPoll;