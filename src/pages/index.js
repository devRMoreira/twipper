import Login from "@/frontend/components/Login"
import Register from "@/frontend/components/Register"
import { useState } from "react"

export default function Home() {

  const [state, setState] = useState("")

  function handleClick(display) {
    setState(display)
  }

  return <div className="flex">

    <div className="w-1/2">


    </div>
    {state === "" ? <div className="flex flex-col h-svh w-1/2 justify-center items-center ">
      
      <h1>Join what's going on in the world today.</h1>

      <button className="text-center border mb-10 w-24 rounded-lg bg-violet-400 border-violet-900 text-white"
        onClick={() => handleClick("reg")}> Register </button>

      <h2>Already with us?</h2>
      <button className="text-center border w-24 rounded-lg border-violet-400"
        onClick={() => handleClick("log")}> Login </button>

    </div> : state === "log" ? <Login /> : state === "reg" ? <Register /> : undefined}

  </div> 


}