import { findOneDocument, insertOneDocument } from "@/backend/data/mongo";
const defaultCollection = "user"

export async function findUserByEmail(email) {

    const filter = { email: email }

    return await findOneDocument(filter, defaultCollection)
}

export async function findUserByName(name) {

    const filter = { name: name }

    return await findOneDocument(filter, defaultCollection)
}

export async function addNewUser(user) {

    return await insertOneDocument(user, defaultCollection)
}