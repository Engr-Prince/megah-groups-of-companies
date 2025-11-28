import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Phone } from 'lucide-react';

const Map = () => {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg ring-1 ring-primary/20">
      {/* Embedded Google Maps iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8!2d9.68!3d4.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3MR6%2BF9W%20Bonab%C3%A9ri%2C%20Douala%2C%20Cameroon!5e0!3m2!1sen!2scm!4v1700000000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Megah Groups Office Location - Bonabéri, Douala, Cameroon"
        className="absolute inset-0"
      />

      {/* Location Card Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Card className="relative z-10 max-w-sm mx-4 border-2 border-primary/30 shadow-2xl bg-background/95 backdrop-blur-sm pointer-events-auto">
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
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg z-20" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40 rounded-tr-lg z-20" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40 rounded-bl-lg z-20" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg z-20" />
    </div>
  );
};

export default Map;
