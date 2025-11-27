import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, MapPin } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeMap = async () => {
      if (!mapContainer.current) return;

      try {
        // Fetch token from edge function
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
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [9.7047, 4.0511], // Douala, Cameroon coordinates
          zoom: 12,
        });

        // Add a marker for MEGAH office
        new mapboxgl.Marker({ color: '#10B981' })
          .setLngLat([9.7047, 4.0511])
          .setPopup(new mapboxgl.Popup().setHTML('<h3 class="font-semibold">MEGAH Group of Companies</h3><p>Douala, Cameroon</p>'))
          .addTo(map.current);

        // Add navigation controls
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

  return (
    <div className="relative w-full h-[400px]">
      {isLoading && (
        <Card className="absolute inset-0 z-10 flex items-center justify-center">
          <CardContent className="text-center space-y-4 p-8">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
            <p className="text-muted-foreground">Loading map...</p>
          </CardContent>
        </Card>
      )}
      
      {error && (
        <Card className="absolute inset-0 z-10 flex items-center justify-center">
          <CardContent className="text-center space-y-4 p-8">
            <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
            <h3 className="text-xl font-semibold">MEGAH Group of Companies</h3>
            <p className="text-muted-foreground">Douala, Cameroon</p>
            <p className="text-sm text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}
      
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
      
      {!isLoading && !error && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          © 2025 MEGAH Group
        </div>
      )}
    </div>
  );
};

export default Map;
