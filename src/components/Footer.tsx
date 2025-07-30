import { BarChart3, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">VotePulse</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your trusted source for municipal election polling data and political insights. 
              We provide accurate, timely, and comprehensive coverage of local elections.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#polls" className="hover:text-primary transition-colors">Current Polls</a></li>
              <li><a href="#trending" className="hover:text-primary transition-colors">Trending</a></li>
              <li><a href="#methodology" className="hover:text-primary transition-colors">Methodology</a></li>
              <li><a href="#archive" className="hover:text-primary transition-colors">Poll Archive</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#api" className="hover:text-primary transition-colors">API Access</a></li>
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 VotePulse. All rights reserved. | Election data updated daily.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;