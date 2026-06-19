// "use client"
import axios from "axios";

export default async function Profile() {
  const res =
    "https://miro.medium.com/v2/resize:fit:1400/1*iGB13LuY2aQ9XHewsXI3IA@2x.jpeg";
  console.log(res);
  return (
    <>
      <div>Profile Page</div>
      <div>
        <img src={res} width={200} alt="" />
      </div>
    </>
  );
}
