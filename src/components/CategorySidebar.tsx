import { Button } from "@/components/ui/button";
import { MapPin, Globe, Vote, Clapperboard } from "lucide-react";

const categories = [
  { name: "Bhiwara", icon: MapPin, href: "/category/bhiwara" },
  { name: "National", icon: Globe, href: "/category/national" },
  { name: "Political", icon: Vote, href: "/category/political" },
  { name: "Entertainment", icon: Clapperboard, href: "/category/entertainment" },
];

const CategorySidebar = () => {
  return (
    <aside className="w-64 bg-card border-r border-border p-4">
      <h2 className="text-lg font-bold text-foreground mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="ghost"
            className="w-full justify-start text-left hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a href={category.href} className="flex items-center space-x-3">
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </a>
          </Button>
        ))}
      </div>
    </aside>
  );
};

export default CategorySidebar;