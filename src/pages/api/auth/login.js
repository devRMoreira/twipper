import { signInUser } from "@/backend/services/user/login"

export default async function handler(req, res) {

    if (req.method === "POST") {

        const userReceived = req.body


        const success = await signInUser(userReceived)

        if (success.error) {
            res.status(401).json(success.error)
        }

        res.json(success)


    }

}
