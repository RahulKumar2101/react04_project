import { useState } from 'react'


function App(){
  const [color ,setColor]=useState("olive");
 let red=()=>{
  setColor("red");
 }
 let green=()=>{
  setColor("green");
 }
  return(
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className=" fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 py-3 px-3 bg-white rounded-2xl'>
          <button onClick={red} className='outline-none px-4 py-1 rounded-full text-white shadow-large ' style={{backgroundColor:"red"}}>red</button>
          <button onClick={green} className='outline-none px-4 py-1 rounded-full text-white shadow-large ' style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full text-black shadow-large ' style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-large ' style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-large ' style={{backgroundColor:"blue"}}>blue</button>

        </div>
      </div>
    </div>

  )
}

export default App

