import Link from "next/link"
import { useState } from "react"
import MainButton from "@/frontend/components/buttons/MainButton"
import { isValidUser, sendLoginInfo } from "@/frontend/services/user/login"

export default function Login() {

    const [state, setState] = useState({})

    async function handleClick() {

        if (isValidUser(state.user)) {

            setState((ps) => ({ ...ps, invalid: false }))

            const res = await sendLoginInfo(state.user)

        } else {
            setState((ps) => ({ ...ps, invalid: true }))
        }
    }

    function handleChange(field, value) {
        setState((ps) => ({ ...ps, user: { ...ps.user, [field]: value } }))
    }

    return <div className="flex h-svh">

        <div className="w-1/2 flex items-center justify-center border-r-2">

            <img src="/temp.svg" className="h-1/2" />

        </div>

        <div className="flex flex-col w-1/2 justify-center items-center">

            <h2 className="m-4"> Please fill in your details.</h2>

            <input type="text" onChange={(e) => handleChange("user", e)} placeholder=" Input username or email" className="border rounded-lg border-violet-400" autoComplete="username" />
            <br />

            <input type="password" onChange={(e) => handleChange("password", e)} placeholder=" Input your password" className="border rounded-lg border-violet-400" autoComplete="current-password" />
            <br />
            <p className="text-red-600 ">{state.invalid == true && "Please fill all fields."}⠀</p>

            <MainButton text="Sign in" color="dark" onClick={() => handleClick()} />
            <br />

            <Link href="passwordReset">
                <MainButton text="forgor 💀 ?" color="light" onClick={() => handleClick()} />
            </Link>

        </div>
    </div>

} 