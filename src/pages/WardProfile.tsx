import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Calendar, TrendingUp, Users, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock candidate data - in a real app this would come from an API
const getCandidateData = (wardNumber: string) => {
  const candidates = [
    {
      name: "Sarah Johnson",
      party: "Progressive Alliance",
      age: 42,
      occupation: "Community Organizer",
      experience: "8 years City Council",
      phone: "(555) 123-4567",
      email: "sarah.johnson@email.com",
      address: "123 Main St, Ward " + wardNumber,
      platform: [
        "Affordable Housing Initiative",
        "Green Transportation",
        "Small Business Support",
        "Community Safety Programs"
      ],
      polls: {
        percentage: 45,
        trend: "up",
        margin: 8
      },
      bio: "Sarah has been a dedicated community advocate for over a decade, focusing on sustainable development and inclusive growth policies."
    },
    {
      name: "Michael Chen",
      party: "Citizens First",
      age: 38,
      occupation: "Local Business Owner",
      experience: "5 years School Board",
      phone: "(555) 234-5678",
      email: "m.chen@email.com",
      address: "456 Oak Ave, Ward " + wardNumber,
      platform: [
        "Economic Development",
        "Infrastructure Improvement",
        "Public Safety",
        "Youth Programs"
      ],
      polls: {
        percentage: 37,
        trend: "stable",
        margin: -8
      },
      bio: "Michael brings business experience and fiscal responsibility to local governance, with a focus on practical solutions."
    }
  ];
  
  return candidates;
};

const WardProfile = () => {
  const { wardNumber } = useParams<{ wardNumber: string }>();
  const candidates = getCandidateData(wardNumber || "1");
  const leadingCandidate = candidates[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Wards List
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Ward {wardNumber}</h1>
              <p className="text-lg text-muted-foreground">Current Candidate Profile</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-soft">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {leadingCandidate.name}
                  </h2>
                  <Badge variant="secondary" className="mb-2">
                    {leadingCandidate.party}
                  </Badge>
                  <p className="text-muted-foreground">
                    {leadingCandidate.occupation} • Age {leadingCandidate.age}
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {leadingCandidate.polls.percentage}%
                  </div>
                  <div className="flex items-center gap-1 text-sm text-accent">
                    <TrendingUp className="w-4 h-4" />
                    +{leadingCandidate.polls.margin}%
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Biography</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {leadingCandidate.bio}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Platform & Priorities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {leadingCandidate.platform.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gradient-secondary rounded-lg">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{leadingCandidate.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{leadingCandidate.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{leadingCandidate.address}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Polling Data */}
            <Card className="p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Latest Polling
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Leading</span>
                  <span className="font-semibold text-foreground">{leadingCandidate.polls.percentage}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Margin</span>
                  <span className="font-semibold text-accent">+{leadingCandidate.polls.margin}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Trend</span>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Rising
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Experience */}
            <Card className="p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Experience
              </h3>
              
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-foreground">{leadingCandidate.experience}</div>
                  <div className="text-sm text-muted-foreground">Previous Public Service</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">{leadingCandidate.occupation}</div>
                  <div className="text-sm text-muted-foreground">Current Profession</div>
                </div>
              </div>
            </Card>

            {/* Other Candidates */}
            <Card className="p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Other Candidates
              </h3>
              
              <div className="space-y-3">
                {candidates.slice(1).map((candidate, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium text-foreground text-sm">{candidate.name}</div>
                      <div className="text-xs text-muted-foreground">{candidate.party}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">{candidate.polls.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WardProfile;
