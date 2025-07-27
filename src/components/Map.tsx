import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { validateMapboxToken } from '@/lib/security';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');
  const [mapInitialized, setMapInitialized] = useState(false);
  const [tokenError, setTokenError] = useState('');

  const initializeMap = (accessToken: string) => {
    if (!mapContainer.current || mapInitialized) return;

    try {
      mapboxgl.accessToken = accessToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [9.7047, 4.0511], // Douala, Cameroon coordinates
        zoom: 12,
      });

      // Add a marker for MEGAH office
      new mapboxgl.Marker({ color: '#10B981' })
        .setLngLat([9.7047, 4.0511])
        .setPopup(new mapboxgl.Popup().setHTML('<h3>MEGAH Group of Companies</h3><p>Douala, Cameroon</p>'))
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      setMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const handleTokenSubmit = () => {
    const trimmedToken = token.trim();
    const validation = validateMapboxToken(trimmedToken);
    
    if (!validation.isValid) {
      setTokenError(validation.errors[0]);
      return;
    }
    
    setTokenError('');
    initializeMap(trimmedToken);
  };

  const handleTokenChange = (value: string) => {
    setToken(value);
    if (tokenError) {
      setTokenError('');
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px]">
      {!mapInitialized && (
        <Card className="absolute inset-0 z-10 flex items-center justify-center">
          <CardContent className="text-center space-y-4 p-8">
            <h3 className="text-xl font-semibold">Enter Mapbox Token</h3>
            <p className="text-muted-foreground text-sm">
              Get your free token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
            </p>
            <div className="space-y-2 max-w-md">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="pk.eyJ1..."
                  value={token}
                  onChange={(e) => handleTokenChange(e.target.value)}
                  className={`flex-1 ${tokenError ? 'border-destructive' : ''}`}
                  maxLength={200}
                />
                <Button onClick={handleTokenSubmit} disabled={!token.trim()}>
                  Load Map
                </Button>
              </div>
              {tokenError && (
                <p className="text-sm text-destructive flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {tokenError}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
      
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
      
      {mapInitialized && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          © 2025 MEGAH Group
        </div>
      )}
    </div>
  );
};

export default Map;