
export default async function PostPage({params}:{
     params:Promise<{helloo:string}>
}){

const {helloo}=await params
console.log("123456",await params)
console.log("121212",helloo)
return<>
<p>HELLO</p>
{JSON.stringify(helloo)}
</>
}