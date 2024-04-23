import { findOneDocument, insertOneDocument } from "@/backend/data/mongo";
const defaultCollection = "user"

export async function findUserByEmail(email) {

    const regexSearch = new RegExp(email, "i")

    const filter = { email: { $regex: regexSearch } }

    return await findOneDocument(filter, defaultCollection)
}

export async function findUserByName(name) {

    const regexSearch = new RegExp(name, "i")

    const filter = { name: { $regex: regexSearch } }

    return await findOneDocument(filter, defaultCollection)
}

export async function addNewUser(user) {

    return await insertOneDocument(user, defaultCollection)
}


export async function findUserByNameOrEmail(string) {

    const regexSearch = new RegExp(`^${string}$`, "i")

    const filter = {
        $or: [
            { name: { $regex: regexSearch } },
            { email: { $regex: regexSearch } }
        ]
    }

    return await findOneDocument(filter, defaultCollection)
}

export async function findUserById(id) {

    const filter = {
        "_id": {
            "$oid": id
        }
    }

    return await findOneDocument(filter, defaultCollection)
}