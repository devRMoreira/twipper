import { findUserByEmail, findUserByName } from "@/backend/data/userData"

export async function signInUser(user) {

    if (isEmail(user.name)) {

        const res = await findUserByEmail(user.name)
        
        return res


    } else {

        const res = await findUserByName(user.name)

    }






}


function isEmail(string) {

    return string.includes("@")

}