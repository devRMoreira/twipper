
import Login from "@/frontend/components/Login"
import Register from "@/frontend/components/Register"
import MainButton from "@/frontend/components/buttons/MainButton"

import { useState } from "react"

export default function Home() {

	const [state, setState] = useState("")

	function handleClick(display) {
		setState((ps) => ps = display)
	}

	return <div className="flex h-svh">

		<div className="w-1/2 flex items-center justify-center border-r-2">

			<img src="/temp.svg" className="h-1/2" />

		</div>

		{state === "" ? <div className="flex flex-col w-1/2 justify-center items-center ">

			<h1 className="text-3xl mb-10 ml-6 self-start">Join what's going on in the world today.</h1>


			<MainButton text="Register" onClick={() => handleClick("reg")} color="dark" />
			<br />

			<h2>Already with us?</h2>

			<MainButton text="Login" onClick={() => handleClick("log")} color="light" />

		</div> : state === "log" ? <Login /> : state === "reg" ? <Register /> : undefined}

	</div>


}