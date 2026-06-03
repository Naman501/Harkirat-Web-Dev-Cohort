import axios from "axios";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getBlogs(): Promise<Todo[]> {
  const res = await axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return res.data;
}

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <>
      <h2 className="text-blue-600 m-2">
        Learning MERN, backend,frontend and DB.
      </h2>

      <div>
        {blogs.map((b: Todo, index: number) => {
          return (
            <>
              <div key={index}>
                <div className="text-red-400 mx-auto">{b.id}</div>
                <div className="border border-amber-400 text-pink-400 m-4 w-2/5 p-2">
                  TITLE: {b.title}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
