
import MainButton from "@/frontend/components/buttons/MainButton"
import Link from "next/link"

export default function Home() {

	return <div className="flex h-svh">

		<div className="w-1/2 flex items-center justify-center border-r-2">

			<img src="/temp.svg" className="h-1/2" />

		</div>

		<div className="flex flex-col w-1/2 justify-center items-center ">

			<h1 className="text-3xl mb-10 ml-6 self-start">Join what's going on in the world today.</h1>

			{/* <button  className="text-center border w-24 rounded-lg bg-violet-400 border-violet-900 text-white"> asdasd</button> */}

			<Link href="register">
				<MainButton text="Register" color="dark" />
			</Link>

			<br />

			<h2>Already with us?</h2>

			<Link href="login">
				<MainButton text="Login" color="light" />
			</Link>

		</div>

	</div>


}