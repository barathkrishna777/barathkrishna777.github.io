import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

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

const Travel = () => {
  const { id } = useParams();
  // Ensure safe access if id is undefined, though router should prevent that for this route
  const destination = id ? travelData[id] : null;

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Destination not found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-muted/30 py-12 px-6 border-b border-border/50">
        <div className="container max-w-6xl mx-auto">
          <Link to="/" className="inline-block mb-6">
            <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
              <ArrowLeft className="w-4 h-4" /> Back to Home
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

export default Travel;