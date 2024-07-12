// // pages/api/drivers.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import Prisma



// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   // const {  locationLng, destinationLat, destinationLng } = req.query;

// // const locationLat=req.query.locationLat;
// // const destinationLat=req.query.destinationLat;
// // const locationLng=req.query.locationLng;
// // const destinationLng=req.query.destinationLng;

// //   if (!locationLat || !locationLng || !destinationLat || !destinationLng) {
// //     return res.status(400).json({ error: 'Missing query parameters' });
// //   }

//   // try {
//     const drivers = await prisma.driver.findMany();
//     return res.status(200).json(drivers);
//   // } catch (error) {
//   //   return res.status(500).json({ error: 'Failed to load drivers' });
//   // }
// }


// async function getdriver() {
 
//   const driver = await prisma.driver.findMany();
//   return{
//     name: driver?.name ,
//     rating: driver.rating,
// }
//   }
// }




import { PrismaClient } from "@/db/prisma";

const prisma = new PrismaClient();

 export default async function getUser(username: string) {
  const user = await prisma.driver.findFirst({
    where: {
        name: username
    }
  })
  console.log(user);
}

getUser("Shakib");