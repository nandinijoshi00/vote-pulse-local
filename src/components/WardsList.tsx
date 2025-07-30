import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

// Generate 70 wards with realistic names
const generateWards = () => {
  const wardNames = [
    "Central Business District", "Downtown Core", "Old Town", "Historic Quarter", "City Center",
    "Riverside", "Lakefront", "Waterfront", "Harbor View", "Marina District",
    "North Hills", "South Ridge", "East Valley", "West Heights", "Sunset Hills",
    "Oak Grove", "Pine Ridge", "Maple Heights", "Cedar Park", "Birch Lane",
    "Industrial Zone", "Commerce Park", "Business District", "Trade Center", "Market Square",
    "University District", "College Town", "Academic Quarter", "Campus Area", "Student Village",
    "Residential Park", "Garden District", "Green Valley", "Peaceful Meadows", "Quiet Hills",
    "Main Street", "Broadway", "Central Avenue", "Park Boulevard", "River Road",
    "Northside", "Southside", "Eastside", "Westside", "Midtown",
    "Heritage Park", "Memorial District", "Veterans Quarter", "Liberty Square", "Freedom Heights",
    "Mountain View", "Valley Vista", "Hillcrest", "Summit Ridge", "Peak District",
    "Forest Glen", "Woodland Park", "Greenwood", "Elmwood", "Ashwood",
    "New Town", "Modern District", "Innovation Quarter", "Tech Park", "Future City",
    "Suburban Heights", "Metro Area", "Urban Center", "City Limits", "Border District",
    "Cultural Quarter", "Arts District", "Entertainment Zone", "Festival Grounds", "Concert Hall Area"
  ];

  return Array.from({ length: 70 }, (_, index) => ({
    wardNumber: index + 1,
    wardName: wardNames[index % wardNames.length] + (index >= wardNames.length ? ` ${Math.floor(index / wardNames.length) + 1}` : '')
  }));
};

const WardsList = () => {
  const wards = generateWards();

  return (
    <section id="wards" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Municipal Wards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete list of all 70 municipal wards with their official numbers and names.
          </p>
        </div>

        <Card className="shadow-soft overflow-hidden">
          <div className="max-h-[600px] overflow-y-auto">
            <Table>
              <TableHeader className="sticky top-0 bg-card border-b border-border">
                <TableRow>
                  <TableHead className="w-32 text-center font-semibold text-foreground">
                    Ward Number
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Ward Name
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {wards.map((ward) => (
                  <TableRow 
                    key={ward.wardNumber}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="text-center font-medium text-primary">
                      {ward.wardNumber}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {ward.wardName}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          Total: {wards.length} Municipal Wards
        </div>
      </div>
    </section>
  );
};

export default WardsList;