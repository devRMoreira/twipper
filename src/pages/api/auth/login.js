import { signInUser } from "@/backend/services/user/login"

export default async function handler(req, res) {

    if(req.method === "POST"){

        const userReceived = req.body

        const success = await signInUser(userReceived)

        res.json(success)

        
    }
    
}
