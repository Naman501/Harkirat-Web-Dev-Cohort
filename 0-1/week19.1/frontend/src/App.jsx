import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);


  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    setSocket(newSocket);

    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
    }
    
    return () => newSocket.close();
  }, [])

if(!socket){
  return <div>Loading...</div>
}

  return (
    <>
     <h1 style={{color:"red"}}>Hello</h1>
    </>
  )
}

export default App