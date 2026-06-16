import { ReactNode } from "react";



export default function layout({children}:{children:ReactNode}){
    return <>
    <div>header</div>
    {children}
    <div>footer</div>
    </>
}