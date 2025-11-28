import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Phone } from 'lucide-react';

const Map = () => {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg ring-1 ring-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Static Map Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Location Card */}
        <Card className="relative z-10 max-w-sm mx-4 border-2 border-primary/30 shadow-2xl bg-background/95 backdrop-blur-sm">
          <CardContent className="p-6 text-center space-y-4">
            {/* Pulsing Marker */}
            <div className="relative mx-auto w-16 h-16">
              <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                megahgroupsofcompanies
              </h3>
              <p className="text-muted-foreground text-sm">
                Bonabéri, Douala, Cameroon
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center pt-2">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=3MR6%2BF9W+Douala,+Bonabéri,+Cameroon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Directions
              </a>
              <a 
                href="tel:+237675859441"
                className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />
    </div>
  );
};

export default Map;
