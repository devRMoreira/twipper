import Link from "next/link"
import { useState } from "react"
import MainButton from "@/frontend/components/buttons/MainButton"

export default function Login() {

    const [state, setState] = useState({})

    function handleClick() {
        //send login details
    }

    function handleChange(field, e) {
        setState((ps) => ({ ...ps, [field]: e.target.value }))
    }

    return <div className="flex h-svh">

        <div className="w-1/2 flex items-center justify-center border-r-2">

            <img src="/temp.svg" className="h-1/2" />

        </div>

        <div className="flex flex-col w-1/2 justify-center items-center">

            <h2 className="m-4"> Please fill in your details.</h2>

            <input type="text" onChange={(e) => handleChange("user", e)} placeholder=" Input username or email" className="border rounded-lg border-violet-400" autoComplete="username" />
            <br />
            
            <input type="password" onChange={(e) => handleChange("pw", e)} placeholder=" Input your password" className="border rounded-lg border-violet-400" autoComplete="current-password" />
            <br />
 
            <MainButton text="Sign in" color="dark" onClick={() => handleClick()} />
            <br />

            <Link href="passwordReset">
                <MainButton text="forgor 💀 ?" color="light" onClick={() => handleClick()}/>
            </Link>

        </div>
    </div>

} 