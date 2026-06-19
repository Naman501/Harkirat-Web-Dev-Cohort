"use client";

import axios from "axios";

export default function SignIn() {
  const handleSignin = async () => {
    console.log("hello");
    const res = await axios.post("http://localhost:3000/api/signin", {
      username: "Naman",
      password: "123",
    });
    console.log("RES", res.data.token);
    const token = res.data.token;
    localStorage.setItem("token", token);

  };
  return (
    <>
      <div>Sign in</div>
      <div>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button onClick={handleSignin}>SignIn</button>
      </div>
    </>
  );
}
