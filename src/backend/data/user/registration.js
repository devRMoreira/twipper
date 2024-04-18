import { createNewUser } from "@/backend/services/user/registration";

export async function registerNewUser(user){

    const newUser = createNewUser(user)

}