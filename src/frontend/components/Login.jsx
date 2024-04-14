import Link from "next/link"
import { useState } from "react"
import MainButton from "./buttons/MainButton"

export default function Login() {

    const [state, setState] = useState({})

    function handleClick() {
        //send login details
    }

    function handleChange(type, e) {
        setState((ps) => ({ ...ps, [type]: e.target.value }))
    }

    return <div className="flex flex-col w-1/2 justify-center items-center">

        <h2 className="m-4"> Please fill in your details.</h2>

        <input type="text" onChange={(e) => handleChange("user", e)} placeholder=" Input username or email" className="border rounded-lg border-violet-400" autoComplete="username" />
        <br />
        <input type="password" onChange={(e) => handleChange("pw", e)} placeholder=" Input your password" className="border rounded-lg border-violet-400" autoComplete="current-password" />
        <br />

        <MainButton onClick={() => handleClick()} text="Sign in" color="dark" />
        <br />

        <Link href="passwordReset"><MainButton onClick={() => handleClick()} text="forgor 💀 ?" color="light" /></Link>

        
    </div>

} 