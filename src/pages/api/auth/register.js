
import { registerNewUser } from "@/backend/services/user/registration"
import { hashPassword } from "@/backend/services/utils/passwordUtils"

export default async function handler(req, res) {

	if (req.method === "POST") {

		if (req.body.password !== req.body.passwordConfirmation) {
			res.send(400).end()
		}

		const userReceived = {
			name: req.body.name,
			email: req.body.email,
			password: await hashPassword(req.body.password),
			birthDate: req.body.birthDate
		}


		const success = await registerNewUser(userReceived)

		if (success.error) {
			res.status(409).json(success)
		}

		res.json(success)

	}

}