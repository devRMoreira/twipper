import { findUserByNameOrEmail } from "@/backend/data/userData"
import { isSameHashedPassword } from "../utils/passwordUtils"
import { filterUserLogin } from "../utils/userUtils"

export async function signInUser(userReceived) {

    const registeredUser = await findUserByNameOrEmail(userReceived.name)

    if (!registeredUser) {
        return { error: "Invalid credentials." }
    }

    const validPassword = await isSameHashedPassword(userReceived.password, registeredUser.password)

    if (!validPassword) {

        return { error: "Invalid credentials." }

    }

    return filterUserLogin(registeredUser)
}
