import { Card } from "./ui/card";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TravelDestination {
  country: string;
  cities: string[];
  period: string;
  flag: string;
}

const TravelCard = ({ country, cities, period, flag }: TravelDestination) => (
  <Link to={`/travel/${country.toLowerCase()}`}>
    <Card className="p-6 h-full hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50 group cursor-pointer relative overflow-hidden">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{flag}</span>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {country}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
        <div className="flex flex-wrap gap-2">
          {cities.map((city, index) => (
            <div key={index} className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
              <MapPin className="w-3 h-3" />
              <span>{city}</span>
            </div>
          ))}
        </div>
        <div className="pt-4 mt-2 border-t border-border/50">
            <p className="text-sm text-primary font-medium text-center">View Gallery</p>
        </div>
      </div>
    </Card>
  </Link>
);

const Travel = () => {
  const destinations: TravelDestination[] = [
    {
      country: "Japan",
      cities: ["Tokyo", "Nikko", "Takayama", "Nagoya", "Kyoto", "Osaka", "Himeji", "Hiroshima"],
      period: "May 2024",
      flag: "🇯🇵"
    },
    {
      country: "Thailand",
      cities: ["Bangkok", "Phuket", "Chiang Mai"],
      period: "Jan-Feb 2024",
      flag: "🇹🇭"
    },
    {
      country: "Vietnam",
      cities: ["Ho Chi Minh", "Hoi An", "Da Nang", "Hanoi"],
      period: "Aug-Sep 2023",
      flag: "🇻🇳"
    },
    {
      country: "India",
      cities: ["Mussoorie", "Dehradun"],
      period: "Aug 2023",
      flag: "🇮🇳"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-6">
        {destinations.map((destination, index) => (
          <TravelCard key={index} {...destination} />
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-muted-foreground">
          Currently based in Pittsburgh, PA • Next destination: Mountain View, CA
        </p>
      </div>
    </div>
  );
};

export default Travel;