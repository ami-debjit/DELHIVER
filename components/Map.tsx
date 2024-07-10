// components/Map.tsx
import React, { useEffect, useRef } from 'react';

interface MapProps {
  defaultCenter?: { lat: number; lng: number };
  defaultZoom?: number;
}

const Map: React.FC<MapProps> = ({ defaultCenter = { lat: 40.7128, lng: -74.006 }, defaultZoom = 12 }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC23Auc2zbrnX3vSoKu95GgauiZKzEFEMw&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initializeMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    if (mapRef.current) {
      new google.maps.Map(mapRef.current, {
        center: defaultCenter,
        zoom: defaultZoom,
      });
    }
  };

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
