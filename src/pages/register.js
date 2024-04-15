import MainButton from "@/frontend/components/buttons/MainButton"
import { useState } from "react"

export default function Register() {

    const [state, setState] = useState({})

    function handleChange(field, e) {
        setState((ps) => ({ ...ps, [field]: e.target.value }))
        console.log(state)
    }


    return <div className="flex h-svh">

        <div className="w-1/2 flex items-center justify-center border-r-2">

            <img src="/temp.svg" className="h-1/2" />

        </div>

        <div className="flex flex-col w-1/2 justify-center items-center">

            <h2 className="m-4"> Please fill in your details.</h2>
            <form action="/api/auth/register" method="POST">

                <h3>Name</h3>
                <input onChange={(e) => handleChange("name", e)} type="text" className="border rounded-lg border-violet-400 pl-1" />
                <p className="text-xs text-nowrap">Your name cannot contain any special characters excluding underscores.</p>
                <br />

                <h3>Email</h3>
                <input onChange={(e) => handleChange("email", e)} type="email" className="border rounded-lg border-violet-400 pl-1" />
                <br />
                <br />

                <h3>Password</h3>
                <input onChange={(e) => handleChange("password", e)} type="password" className="border rounded-lg border-violet-400 pl-1" autoComplete="new-password" />
                <p className="text-sm">Should contain 1 number.</p>
                <p className="text-sm">Should contain 1 letter.</p>
                <p className="text-sm">Should be at least 6 characters long.</p>
                <br />

                <h3>Password confirmation</h3>
                <input onChange={(e) => handleChange("passwordConfirmation", e)} type="password" className="border rounded-lg border-violet-400 pl-1" autoComplete="new-password" />
                <br />
                <br />

                <h3>Date of birth</h3>
                <input onChange={(e) => handleChange("birthDate", e)} type="date" className="border rounded-lg border-violet-400 pl-1" />
                <p>This info is used merely for verification purposes.</p>
                <br />


                <MainButton text="Sign up!" color="dark" />

            </form>


        </div>
    </div>
}