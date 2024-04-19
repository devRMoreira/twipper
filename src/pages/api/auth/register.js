
import { registerNewUser } from "@/backend/services/user/registration"
import { birthDateIsValid } from "@/backend/services/utils/dateUtils"
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

		//TODO Add newUser.name validation (unique or not)


		if (!birthDateIsValid(userReceived.birthDate)) {
			res.send(400).end()
		}

		await registerNewUser(userReceived)

		res.json(userReceived)

	}

}