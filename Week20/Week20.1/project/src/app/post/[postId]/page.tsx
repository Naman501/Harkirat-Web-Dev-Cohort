export default async function BlogPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  const data = await res.json()
  console.log("Hello", postId)
  return (
    <>
      <p className="text-pink-800">TITLE - {data.title}</p>
      <p className="text-pink-800">BODY - {data.body}</p>
    </>
  )
}

