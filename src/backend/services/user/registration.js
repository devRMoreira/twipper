import { addNewUser, findUserByEmail, findUserByName } from "@/backend/data/userData"
import { isValidBirthdate } from "@/frontend/services/user/registration"
import moment from "moment"


export async function registerNewUser(userReceived) {

    if(!isValidBirthdate(userReceived.birthDate)){
        return {error: "Invalid birthdate."}
    }
    

    if (await findUserByEmail(userReceived.email)) {

        return { error: "Email already exists." }
    }

    if(await findUserByName(userReceived.name)){
        
        return {error: "Handle is not unique."}
    }

    const newUser = createNewUser(userReceived)

    const success = await addNewUser(newUser)

    if (!success) {
        return { error: "Failed to add user to the database." }
    }

    return success


}

function createNewUser(user) {

    // * Received
    // {
    //     name: 'Abcd',
    //     email: 'abcd@abcd.ef',
    //     password: '$2b$10$sxELPc4/dPaZwsS8yfE1E.XaFUs0/L8XoH32GzzkD7NrNzN9VZD2e',
    //     birthDate: 123091230102312
    //   }

    return {
        ...user,
        birthDate: moment(user.birthDate).valueOf(),
        joinDate: moment.now(),
        displayName: user.name,
        avatar: undefined,
        banner: undefined,
        bio: undefined,
        location: undefined,
        totalPosts: 0,
        following: [],
        followers: [],
        tweeps: [],
        replies: [],
        likes: []
    }
}