import axios from "axios"
import { useEffect, useState } from "react";
const Users =() => {

    const [users,setUsers]=useState([])
 
   useEffect(() =>{
     const fetchUsers=async()=>{

    const res=await axios.get("http://localhost:4000/api/v1/user/fetch",{
 
    })
  console.log(res.data.users)
  setUsers(res.data.users)
  }
    fetchUsers()
    }, [])

    const handleAccount = async (id)=>{
console.log("UserId:",id)
    }
  return (

    <>
    <h1 className="text-center m-5">Users</h1>

 <div  >
     {users.map((u,index)=>{
      return   <div className="w-2/4 border p-2 m-2 cursor-pointer hover:text-blue-800 rounded-2xl" onClick={()=>handleAccount(u._id)} key={index}>
            <h2>{u.username}</h2>
         <p>My name is {u.firstName } {u.lastName}</p>
        </div>    
    })}
 </div>
   
    </>

  )
}

export default Users