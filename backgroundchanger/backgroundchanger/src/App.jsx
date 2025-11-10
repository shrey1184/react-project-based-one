import { useState } from 'react'
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-500" style={{backgroundColor: color, minHeight: '100vh'}}>
    
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-sm bg-white px-3 py-2 rounded-xl text-white shadow-sm"><button onClick={() => setColor("red")}className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "red"}}>Red</button></div>
      <div className="flex flex-wrap justify-center gap-3 shadow-sm bg-white px-3 py-2 rounded-xl text-white shadow-sm"><button onClick={() => setColor("green")}className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "green"}}>Green</button></div>
      <div className="flex flex-wrap justify-center gap-3 shadow-sm bg-white px-3 py-2 rounded-xl text-white shadow-sm"><button onClick={() => setColor("blue")}className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "blue"}}>Blue</button></div>
      <div className="flex flex-wrap justify-center gap-3 shadow-sm bg-white px-3 py-2 rounded-xl text-white shadow-sm"><button onClick={() => setColor("purple")}className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "purple"}}>Purple</button></div>
      <div className="flex flex-wrap justify-center gap-3 shadow-sm bg-white px-3 py-2 rounded-xl text-white shadow-sm"><button onClick={() => setColor("olive")}className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "olive"}}>Olive</button></div>


    </div>
    </div>
  )
}

export default App
