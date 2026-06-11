"use client"
import axios from "axios";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Page = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const handleSubmit=async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log("name:",username,"password: ",password)
    const res=await axios.post("/api/v1/users/details",{
      username,password
    })
    // console.log("yo",res.data)
    setUsername("")
    setPassword("")
    if(res){
      toast.success(res.data.mesg)
      await new Promise((resolve)=>
      setTimeout(resolve, 2000))
    }
  }


  return (
    <>
    <div className="text-center mt-4">SIGN IN PAGE</div>
  <div>
                    <div><Toaster/></div>

      <div className="m-3">
    <form action="" onSubmit={handleSubmit}>
     <div className="flex">
       <label htmlFor="username">Username</label>
        <input className="border rounded-lg" type="text" placeholder="username"
           value={username}
         onChange={(e)=>{
      setUsername(e.target.value)
      }} />
     </div>

     <div>
       <label htmlFor="password">Password</label>
      <input className="border rounded-lg" type="password" placeholder="password"
      value={password}
       onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
     </div>
     <button type="submit" className="border  rounded-lg" >SUBMIT</button>
    </form>
    </div>
  </div>
    </>
  )
}

export default Page