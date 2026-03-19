let todoindex=1;



const addTodo= ()=>{
//    alert("YO")

   const elem=document.getElementById("todoInput")
   const todo= elem.value
   if(todo===""){return;}
   console.log(todo)
   elem.value=""


   // Step 1 define/ create element
   const newDiv=document.createElement("div")
    newDiv.setAttribute("id","todo"+todoindex)

   const todoSpan=document.createElement("span")
   todoSpan.innerHTML=todo

   newDiv.appendChild(todoSpan)

   const delBtn=document.createElement("button")
   delBtn.innerHTML="Delete"
  
   newDiv.appendChild(delBtn)

delBtn.setAttribute("onclick","deleteTodo(" +  todoindex +   ")");
todoindex+=1;

   // Step 2  call where to add the element
    const parentDiv=document.getElementById("todos")
    parentDiv.appendChild(newDiv)
}


   const deleteTodo=(index)=>{
    alert("Delete " + index)
    const divElement=document.getElementById("todo"+index)
    divElement.parentElement.removeChild(divElement)
   }


