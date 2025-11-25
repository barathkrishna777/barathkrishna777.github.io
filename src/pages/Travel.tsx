import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card } from "../components/ui/card";
import TravelList from "../components/Travel"; 

// Define your travel data here. Replace placeholder images with your own.
const travelData: Record<string, { name: string; period: string; description: string; images: string[] }> = {
  japan: {
    name: "Japan",
    period: "May 2024",
    description: "A journey through modern cities and ancient traditions. From the neon lights of Tokyo to the peaceful temples of Kyoto.",
    images: [
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  thailand: {
    name: "Thailand",
    period: "Jan-Feb 2024",
    description: "Exploring the vibrant street life of Bangkok and the serene beaches of Phuket.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  vietnam: {
    name: "Vietnam",
    period: "Aug-Sep 2023",
    description: "Motorbiking through the breathtaking landscapes and experiencing the rich coffee culture.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  india: {
    name: "India",
    period: "Aug 2023",
    description: "A refreshing trip to the hills of Mussoorie and Dehradun.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  }
};

const TravelPage = () => {
  const { id } = useParams();

  // If no ID is provided, show the main travel list
  if (!id) {
    return (
      <div className="min-h-screen pt-20 animate-in fade-in duration-500">
        <div className="container px-6 py-12">
            <div className="max-w-4xl mx-auto text-center mb-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel Adventures</h1>
                <p className="text-xl text-muted-foreground">Exploring the world, one destination at a time.</p>
            </div>
            <TravelList />
        </div>
      </div>
    );
  }

  // If ID is provided, show the detail view
  const destination = travelData[id];

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-20">
        <h1 className="text-2xl font-bold">Destination not found</h1>
        <Link to="/travel">
          <Button>Back to Travel</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 pt-20 animate-in fade-in duration-500">
      {/* Header */}
      <div className="bg-muted/30 py-12 px-6 border-b border-border/50">
        <div className="container max-w-6xl mx-auto">
          <Link to="/travel" className="inline-block mb-6">
            <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
              <ArrowLeft className="w-4 h-4" /> Back to List
            </Button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{destination.name}</h1>
          <p className="text-xl text-muted-foreground">{destination.period}</p>
          <p className="mt-4 max-w-2xl text-foreground/80">{destination.description}</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destination.images.map((src, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0">
              <div className="aspect-[4/3] overflow-hidden bg-secondary/20">
                <img 
                  src={src} 
                  alt={`${destination.name} photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelPage;