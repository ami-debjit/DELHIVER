// components/Map.tsx
import React, { useEffect, useRef } from 'react';

interface MapProps {
  location: google.maps.places.PlaceResult;
  destination: google.maps.places.PlaceResult;
}


const Map: React.FC<MapProps> = ({ location, destination }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const directionsService = useRef<google.maps.DirectionsService | null>(null);
  const directionsRenderer = useRef<google.maps.DirectionsRenderer | null>(null);
  const markers = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
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
      map.current = new google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 1,
      });

      directionsService.current = new google.maps.DirectionsService();
      directionsRenderer.current = new google.maps.DirectionsRenderer({
        map: map.current,
      });
    }
  };

  useEffect(() => {
    if (map.current && location && destination) {
      markers.current.forEach(marker => marker.setMap(null));
      markers.current = [];

      const locLatLng = getLocationLatLng(location);
      const destLatLng = getLocationLatLng(destination);

      if (locLatLng && destLatLng && directionsService.current && directionsRenderer.current) {
        const locMarker = new google.maps.Marker({
          position: locLatLng,
          map: map.current,
          title: 'Location',
        });

        const destMarker = new google.maps.Marker({
          position: destLatLng,
          map: map.current,
          title: 'Destination',
        });

        markers.current.push(locMarker, destMarker);

        const request: google.maps.DirectionsRequest = {
          origin: locLatLng,
          destination: destLatLng,
          travelMode: google.maps.TravelMode.DRIVING,
        };

        directionsService.current.route(request, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.current?.setDirections(result);
          } else {
            console.error('Directions request failed due to ' + status);
          }
        });
      }
    }
  }, [location, destination]);
  

  const getLocationLatLng = (place: google.maps.places.PlaceResult): google.maps.LatLng | null => {
    if (place.geometry && place.geometry.location) {
      return place.geometry.location instanceof google.maps.LatLng
        ? place.geometry.location
        : new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
    }
    return null;
  };

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
