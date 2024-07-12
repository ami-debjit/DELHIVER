// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';

// interface Driver {
//   id: number;
//   name: string;
//   rating: number;
//   price: number;
// }

// const Prices: React.FC = () => {
//   const [drivers, setDrivers] = useState<Driver[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const searchParams = useSearchParams();
//   const locationLat = searchParams.get('locationLat');
//   const locationLng = searchParams.get('locationLng');
//   const destinationLat = searchParams.get('destinationLat');
//   const destinationLng = searchParams.get('destinationLng');

//   useEffect(() => {
//     const fetchDrivers = async () => {
//       try {
//         console.log('Fetching drivers with params:', { locationLat, locationLng, destinationLat, destinationLng });

//         const res = await fetch(
//           `/api/drivers?locationLat=${locationLat}&locationLng=${locationLng}&destinationLat=${destinationLat}&destinationLng=${destinationLng}`
//         );
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await res.json();
//         setDrivers(data);
//       } catch (error) {
//         console.error('Error fetching drivers:', error);
//         setError('Failed to load drivers. Please try again later.');
//       }
//     };

//     if (locationLat && locationLng && destinationLat && destinationLng) {
//       fetchDrivers();
//     } else {
//       setError('Invalid location or destination data.');
//     }
//   }, [locationLat, locationLng, destinationLat, destinationLng]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-white text-black p-4">
//       <h1 className="text-4xl font-bold mb-4">Available Drivers</h1>
//       {drivers.length === 0 ? (
//         <p>No drivers available for the selected route.</p>
//       ) : (
//         <ul>
//           {drivers.map(driver => (
//             <li key={driver.id} className="mb-2">
//               <div className="border p-4 rounded">
//                 <h2 className="text-2xl font-bold">{driver.name}</h2>
//                 <p>Rating: {driver.rating}</p>
//                 <p>Price: ${driver.price}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Prices;




export default function(){
    return <div>
        <h1 className="text-center text-xl font-sans">Driver list and price</h1>
    </div>
    
}