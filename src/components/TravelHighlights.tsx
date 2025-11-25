import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin } from "lucide-react";

const japanImages = [
  { src: "/japan_1.jpg", alt: "Traditional Temple Roof", loc: "Asakusa, Tokyo" },
  { src: "/japan_2.jpg", alt: "Senso-ji Temple", loc: "Tokyo" },
  { src: "/japan_3.jpg", alt: "Five Story Pagoda", loc: "Asakusa" },
  { src: "/japan_10.jpg", alt: "Shinkyo Bridge", loc: "Nikko" },
  { src: "/japan_4.jpg", alt: "Street Food Chef", loc: "Tsukiji Market" },
  { src: "/japan_5.jpg", alt: "Seafood Preparation", loc: "Tsukiji Market" },
  { src: "/japan_6.jpg", alt: "Lantern Festival", loc: "Tokyo" },
  { src: "/japan_7.jpg", alt: "Traditional Shop Front", loc: "Kyoto" },
  { src: "/japan_8.jpg", alt: "Rickshaw Ride", loc: "Arashiyama" },
  { src: "/japan_9.jpg", alt: "Knife Shop", loc: "Kappabashi" },
  { src: "/japan_11.jpg", alt: "Night Street", loc: "Shinjuku" },
  { src: "/japan_12.jpg", alt: "Vintage Car on Street", loc: "Omotesando" },
];

export function TravelHighlights() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Travel Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing moments from my journey across Japan. From the neon lights of Tokyo to the serene temples of Kyoto.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {japanImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-0 overflow-hidden bg-transparent shadow-none">
                      <CardContent className="p-0 relative aspect-[3/4] group rounded-xl overflow-hidden cursor-pointer">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {image.alt}
                          </p>
                          <div className="flex items-center gap-2 text-white/80 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                            <MapPin className="w-3 h-3" />
                            {image.loc}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}