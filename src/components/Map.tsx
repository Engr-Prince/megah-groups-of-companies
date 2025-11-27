import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, MapPin, Navigation, Phone } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useTheme } from '@/components/ThemeProvider';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  // Determine actual theme (resolve "system" to actual value)
  const resolvedTheme = theme === 'system' 
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;

  const mapStyle = resolvedTheme === 'dark' 
    ? 'mapbox://styles/mapbox/dark-v11' 
    : 'mapbox://styles/mapbox/light-v11';

  useEffect(() => {
    const initializeMap = async () => {
      if (!mapContainer.current) return;

      try {
        const { data, error: fetchError } = await supabase.functions.invoke('get-mapbox-token');
        
        if (fetchError || !data?.token) {
          console.error('Failed to fetch Mapbox token:', fetchError);
          setError('Unable to load map. Please try again later.');
          setIsLoading(false);
          return;
        }

        mapboxgl.accessToken = data.token;
        
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: mapStyle,
          center: [9.7047, 4.0511],
          zoom: 14,
          pitch: 45,
        });

        // Custom popup with MEGAH branding
        const popupContent = `
          <div style="font-family: 'Inter', sans-serif; padding: 8px; min-width: 200px;">
            <div style="border-left: 3px solid #22c55e; padding-left: 12px;">
              <h3 style="margin: 0 0 4px 0; font-weight: 600; font-size: 14px; color: ${resolvedTheme === 'dark' ? '#fff' : '#1a1a1a'};">
                MEGAH Group of Companies
              </h3>
              <p style="margin: 0 0 8px 0; font-size: 12px; color: ${resolvedTheme === 'dark' ? '#a1a1aa' : '#71717a'};">
                Douala, Cameroon
              </p>
            </div>
            <div style="display: flex; gap: 8px; margin-top: 12px;">
              <a href="https://www.google.com/maps/dir/?api=1&destination=4.0511,9.7047" 
                 target="_blank" 
                 style="display: flex; align-items: center; gap: 4px; padding: 6px 12px; background: #22c55e; color: white; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: 500;">
                Directions
              </a>
              <a href="tel:+237000000000" 
                 style="display: flex; align-items: center; gap: 4px; padding: 6px 12px; background: ${resolvedTheme === 'dark' ? '#27272a' : '#f4f4f5'}; color: ${resolvedTheme === 'dark' ? '#fff' : '#1a1a1a'}; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: 500;">
                Call
              </a>
            </div>
          </div>
        `;

        const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
          .setHTML(popupContent);

        // Create custom marker element with pulsing effect
        const markerEl = document.createElement('div');
        markerEl.innerHTML = `
          <div style="position: relative;">
            <div style="position: absolute; width: 40px; height: 40px; background: rgba(34, 197, 94, 0.3); border-radius: 50%; animation: pulse 2s infinite; top: -8px; left: -8px;"></div>
            <div style="width: 24px; height: 24px; background: #22c55e; border: 3px solid white; border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>
          </div>
          <style>
            @keyframes pulse {
              0% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.5); opacity: 0; }
              100% { transform: scale(1); opacity: 0; }
            }
          </style>
        `;

        marker.current = new mapboxgl.Marker(markerEl)
          .setLngLat([9.7047, 4.0511])
          .setPopup(popup)
          .addTo(map.current);

        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        map.current.on('load', () => {
          setIsLoading(false);
        });

      } catch (err) {
        console.error('Error initializing map:', err);
        setError('Unable to load map. Please try again later.');
        setIsLoading(false);
      }
    };

    initializeMap();

    return () => {
      map.current?.remove();
    };
  }, []);

  // Update map style when theme changes
  useEffect(() => {
    if (map.current && !isLoading && !error) {
      map.current.setStyle(mapStyle);
    }
  }, [mapStyle, isLoading, error]);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg ring-1 ring-primary/20">
      {isLoading && (
        <Card className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <CardContent className="text-center space-y-4 p-8">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
            <p className="text-muted-foreground">Loading map...</p>
          </CardContent>
        </Card>
      )}
      
      {error && (
        <Card className="absolute inset-0 z-10 flex items-center justify-center">
          <CardContent className="text-center space-y-4 p-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">MEGAH Group of Companies</h3>
            <p className="text-muted-foreground">Douala, Cameroon</p>
            <p className="text-sm text-destructive">{error}</p>
            <div className="flex gap-2 justify-center mt-4">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=4.0511,9.7047"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
