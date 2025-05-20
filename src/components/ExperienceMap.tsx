import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface Location {
  lat: number;
  lng: number;
  title: string;
}

interface ExperienceMapProps {
  locations: Location[];
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  height?: string;
}

export function ExperienceMap({ 
  locations, 
  center = { lat: 31.7917, lng: -7.0926 }, // Morocco center
  zoom = 6,
  height = '400px'
}: ExperienceMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      if (mapRef.current && !map) {
        const newMap = new google.maps.Map(mapRef.current, {
          center,
          zoom,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
        });
        setMap(newMap);
      }
    });
  }, [map, center, zoom]);

  useEffect(() => {
    if (map) {
      // Clear existing markers
      markers.forEach(marker => marker.setMap(null));

      // Create new markers
      const newMarkers = locations.map(location => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map,
          title: location.title,
          animation: google.maps.Animation.DROP,
        });

        // Add info window
        const infoWindow = new google.maps.InfoWindow({
          content: `<div class="p-2">
            <h3 class="font-semibold">${location.title}</h3>
          </div>`,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        return marker;
      });

      setMarkers(newMarkers);

      // Fit bounds if there are locations
      if (locations.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        locations.forEach(location => {
          bounds.extend({ lat: location.lat, lng: location.lng });
        });
        map.fitBounds(bounds);
      }
    }
  }, [map, locations]);

  return (
    <div 
      ref={mapRef} 
      style={{ height, width: '100%' }}
      className="rounded-lg overflow-hidden shadow-md"
    />
  );
}