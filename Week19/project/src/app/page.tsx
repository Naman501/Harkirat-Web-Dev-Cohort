import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="text-lg w-screen h-screen flex items-center justify-center">
        TODO APP
        <div>
          <Link className="m-3 p-3" href="/signin">
            Signin
          </Link>
        </div>
        <div>
          <Link className="m-3 p-3" href="/signup">
            Signup{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
