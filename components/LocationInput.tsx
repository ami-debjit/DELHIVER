import React, { useEffect, useRef, useState } from 'react';

interface LocationInputProps {
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
  placeholder: string;
}

const LocationInput: React.FC<LocationInputProps> = ({ onPlaceSelected, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (scriptLoaded && inputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(inputRef.current!);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        onPlaceSelected(place);
      });
    }
  }, [scriptLoaded, onPlaceSelected]);

  return <input ref={inputRef} type="text" className="w-full px-4 py-2 text-black rounded-md" placeholder={placeholder} />;
};

export default LocationInput;
