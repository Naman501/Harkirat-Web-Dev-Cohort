import axios from "axios";
import { PrismaClient } from "@/generated/prisma/client";
// import { NextRequest, NextResponse } from "next/server";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL!;

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString,
  }),
});
// const getData = async () => {
// try {
//     const res = await axios.get(
//     "http://localhost:3000/api/v1/users/details",
//     // "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details",  
//   );
//   console.log(res.data)
//   return res.data;
// } catch (error) {
//   console.log("ERR",error)
// }
// };


const getData=async ()=>{
  const user=await prisma.user.findFirst()
console.log(user)
	  return {
      name: user?.username,
      email: user?.username
    }
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <h1 className="text-center mt-4 ">Week 19</h1>
      <div className="flex flex-col  justify-center items-center h-screen">
        <div className=" w-1/4 border p-6 rounded-lg">
          {/* <div className="flex justify-center">{JSON.stringify(data)}</div> */}
          {/* <div className="flex justify-center">{}</div> */}
          <div className="flex justify-center">{data.email}</div>
          {/* <div className="flex justify-center">{data.address.houseNumber},{data.address.city}</div> */}
        </div>
      </div>
    </>
  );
}