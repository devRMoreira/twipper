import { registerNewUser } from "@/backend/data/user/registration"
import { birthDateIsValid, hashPassword } from "@/backend/services/user/utils"

export default async function handler(req, res) {

	if (req.method === "POST") {

		if (req.body.password !== req.body.passwordConfirmation) {
			res.send(400).end()
		}

		const newUser = {
			name: req.body.name,
			email: req.body.email,
			password: await hashPassword(req.body.password),
			birthDate: req.body.birthDate
		}

		//TODO Add newUser.name validation (unique or not)


		if (!birthDateIsValid(newUser.birthDate)) {
			res.send(400).end()
		}

		await registerNewUser(newUser)

		res.json(newUser)

	}

}