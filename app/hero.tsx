// pages/index.tsx
"use client"
import React, { useState } from 'react';
import Map from '@/components/Map';
import LocationInput from '@/components/LocationInput';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function LocateIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function WaypointsIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="4.5" r="2.5" />
      <path d="m10.2 6.3-3.9 3.9" />
      <circle cx="4.5" cy="12" r="2.5" />
      <path d="M7 12h10" />
      <circle cx="19.5" cy="12" r="2.5" />
      <path d="m13.8 17.7 3.9-3.9" />
      <circle cx="12" cy="19.5" r="2.5" />
    </svg>
  );
}

const Hero: React.FC = () => {
  const [location, setLocation] = useState<google.maps.places.PlaceResult | null>(null);
  const [destination, setDestination] = useState<google.maps.places.PlaceResult | null>(null);

  const handleLocationSelected = (place: google.maps.places.PlaceResult) => {
    setLocation(place);
  };

  const handleDestinationSelected = (place: google.maps.places.PlaceResult) => {
    setDestination(place);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="Logo" className="h-6" />
          <nav className="flex space-x-4">
            <a href="#" className="text-white">
              Ridee
            </a>
            <a href="#" className="text-white">
              Drive
            </a>
            <a href="#" className="text-white">
              Business
            </a>
            <a href="#" className="text-white">
              About
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white">EN</button>
          <button className="text-white">Help</button>
          <button className="text-white">Log in</button>
          <button className="px-4 py-2 text-black bg-white rounded-full">Sign up</button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen p-4 md:flex-row">
        <div className="flex flex-col items-start justify-center space-y-4 md:w-1/2">
          <h1 className="text-4xl font-bold">Deliver your package</h1>
          <p className="text-lg">Place a request and find our partners.</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <LocationInput onPlaceSelected={handleLocationSelected} placeholder="Enter location" />
              <button className="p-2 text-black bg-white rounded-md">
                <LocateIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <LocationInput onPlaceSelected={handleDestinationSelected} placeholder="Enter destination" />
              <button className="p-2 text-black bg-white rounded-md">
                <WaypointsIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          <button className="px-4 py-2 mt-4 text-black bg-white rounded-md">See prices</button>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/3">
          {location && destination && <Map />}
        </div>
      </main>
    </div>
  );
};

export default Hero;
