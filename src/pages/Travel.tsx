import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

// Using available images for Japan, and gradients for others as fallback
const destinations = [
  {
    id: "japan",
    name: "Japan",
    period: "May 2024",
    description: "Neon nights in Tokyo, zen gardens in Kyoto, and the historic streets of Takayama.",
    image: "/japan_1.jpg", // Using one of your uploaded images
    cities: ["Tokyo", "Kyoto", "Osaka", "Nikko", "Takayama"]
  },
  {
    id: "thailand",
    name: "Thailand",
    period: "Jan-Feb 2024",
    description: "Island hopping in Phuket and street food adventures in Bangkok.",
    image: null, // Will fallback to gradient
    cities: ["Bangkok", "Phuket", "Pattaya"]
  },
  {
    id: "vietnam",
    name: "Vietnam",
    period: "Aug-Sep 2023",
    description: "Motorbiking the Ha Giang loop and exploring the lantern-lit streets of Hoi An.",
    image: null,
    cities: ["Hanoi", "Ho Chi Minh", "Da Nang", "Hoi An"]
  },
  {
    id: "india",
    name: "India",
    period: "Aug 2023",
    description: "Home turf adventures in the misty hills of Mussoorie.",
    image: null,
    cities: ["Mussoorie", "Dehradun"]
  }
];

const TravelPage = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 animate-in fade-in duration-500">
      <div className="container px-6">
        <Link to="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Button>
        </Link>

        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Travel Log</h1>
          <p className="text-xl text-muted-foreground">
            Exploring the world, capturing moments, and experiencing new cultures. 
            Currently based in Pittsburgh, moving to Mountain View.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {destinations.map((dest, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-none bg-transparent">
              {/* Image Container */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                {dest.image ? (
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  // Fallback gradient if no image
                  <div className={`w-full h-full bg-gradient-to-br ${
                    index % 2 === 0 ? 'from-primary/20 to-accent/20' : 'from-accent/20 to-primary/20'
                  }`} />
                )}
                
                <div className="absolute bottom-0 left-0 z-20 p-6">
                   <h2 className="text-3xl font-bold text-white mb-1 drop-shadow-lg">{dest.name}</h2>
                   <div className="flex items-center gap-2 text-white/90 font-medium text-sm drop-shadow-md">
                     <Calendar className="w-4 h-4" />
                     {dest.period}
                   </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 px-1">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {dest.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {dest.cities.map((city, i) => (
                    <span key={i} className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-md">
                      <MapPin className="w-3 h-3" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelPage;