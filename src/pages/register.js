import MainButton from "@/frontend/components/buttons/MainButton"
import { isValidName, isValidPassword, checkPasswordsMatch, sendNewRegistration, isValidEmail, isValidBirthdate, validateAllFields } from "@/frontend/services/user/registration"
import { useState } from "react"

export default function Register() {

    const [state, setState] = useState({
        "user": {
            "name": "Abcd",
            "email": "abcd@abcd.ef",
            "password": "123abc",
            "passwordConfirmation": "123abc",
            "birthDate": "2010-05-04"
        },
        "checks": {
            "name": {
                "special": true,
                "length": true
            },
            "email": true,
            "password": {
                "number": true,
                "letter": true,
                "length": true
            },
            "passwordConfirmation": true,
            "birthDate": true,
            "allFields":true
        }
    })

    function handleChange(field, e) {

        const value = e.target.value

        setState((ps) => ({ ...ps, user: { ...ps.user, [field]: value } }))

        if (field === "name") {
            const nameOk = isValidName(value)
            setState((ps) => ({ ...ps, checks: { ...ps.checks, [field]: nameOk } }))
        }

        if (field === "email") {
            const emailOk = isValidEmail(value)
            setState((ps) => ({ ...ps, checks: { ...ps.checks, [field]: emailOk } }))
        }

        if (field === "password") {
            const pwOk = isValidPassword(value)
            setState((ps) => ({ ...ps, checks: { ...ps.checks, [field]: pwOk } }))
        }

        if (field === "passwordConfirmation") {
            if (state.user?.password) {
                const pwMatch = checkPasswordsMatch(state.user.password, value)
                setState((ps) => ({ ...ps, checks: { ...ps.checks, [field]: pwMatch } }))
            }
        }

        if (field === "birthDate") {
            const dateOk = isValidBirthdate(value)
            setState((ps) => ({ ...ps, checks: { ...ps.checks, [field]: dateOk } }))
        }


    }

    async function handleRegistration() {

        const validData = validateAllFields(state.checks ?? 0)

        if (!validData) {

            return setState((ps) => ({ ...ps, checks: { ...ps.checks, allFields: false } }))

        }

        setState((ps) => ({ ...ps, checks: { ...ps.checks, allFields: true } }))


        const res = await sendNewRegistration(state.user)

        if (res.ok) {

        }
    }



    return <div className="flex h-svh">

        <div className="w-1/2 flex items-center justify-center border-r-2">

            <img src="/temp.svg" className="h-1/2" />

        </div>

        <div className="flex flex-col w-1/2 justify-center items-center">

            <h2 className="m-4"> Please fill in your details.</h2>

            <div>

                <h3>Name</h3>
                <input onChange={(e) => handleChange("name", e)} type="text" className="border rounded-lg border-violet-400 pl-1" />

                {(state.checks?.name?.special && state.checks?.name?.length) === true ? "✔" : "❌"}

                <p className="text-sm text-nowrap">Your name cannot contain any special characters excluding underscores.</p>
                <p className="text-sm">Should be at least 4 characters long.</p>
                <br />

                <h3>Email</h3>
                <input onChange={(e) => handleChange("email", e)} type="email" className="border rounded-lg border-violet-400 pl-1" />

                {state.checks?.email === true ? "✔" : "❌"}

                <br />
                <br />

                <h3>Password</h3>
                <input onChange={(e) => handleChange("password", e)} type="password" className="border rounded-lg border-violet-400 pl-1" autoComplete="new-password" />
                {((state.checks?.password?.letter && state.checks?.password?.number) && state.checks?.password?.length) === true ? "✔" : "❌"}


                <p className="text-sm">Should contain 1 number.</p>
                <p className="text-sm">Should contain 1 letter.</p>
                <p className="text-sm">Should be at least 6 characters long.</p>
                <br />

                <h3>Password confirmation</h3>
                <input onChange={(e) => handleChange("passwordConfirmation", e)} type="password" className="border rounded-lg border-violet-400 pl-1" autoComplete="new-password" />

                {state.checks?.passwordConfirmation === true ? "✔" : "❌"}

                <br />
                <br />

                <h3>Date of birth</h3>
                <input onChange={(e) => handleChange("birthDate", e)} type="date" className="border rounded-lg border-violet-400 pl-1" />

                {state.checks?.birthDate === true ? "✔" : "❌"}

                <p className="text-sm">You must be at least 13 years old.</p>
                <p className="text-sm">This info won't be shown publicly.</p>
                <br />

                <MainButton text="Sign up!" color="dark" onClick={() => handleRegistration()} />
                <p className="text-red-600 text-lg">{state.checks?.allFields === false && "Please correctly fill in all details."}⠀</p>

            </div>


        </div>
    </div>
}