// "use client";
// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";


// export default function App() {
//   return (
//     <SessionProvider>
//       <Home />
//     </SessionProvider>
//   );
// }

// export function Home() {
//   const session = useSession();
//   return (
//     <>
//       <h3 className="text-4xl mt-8 text-center">Hello User</h3>
//       {session && session.status === "unauthenticated" ? (
//         <button className="border" onClick={() => signIn()}>SignIn</button>
//       ) : (
//        <p> Logout</p>
//       )}
//       {session && session.status === "authenticated" ? (
//         <button className="border" onClick={() => signOut()}>Signout</button>
//       ) : (
// <p>
//        LogIn
// </p>
// )}

// <div>
//   <p>
//     {JSON.stringify(session.data?.user?.name)}
//   </p>

//   <p>
//     <div>
//     {JSON.stringify(session)}

//     </div>
//   </p>
// </div>
//     </>
//   );
// }


import { getServerSession } from "next-auth";


export default async function Home(){
  const session=await getServerSession()
  return<>
  <div>
  <h1>Hello</h1>
  <p>yo:
  {JSON.stringify(session)}
  </p>
  </div>
  </>
}