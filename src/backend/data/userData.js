import { findOneDocument } from "@/backend/data/mongo";
const defaultCollection = "user"

export async function findUserByEmail(email){

    return await findOneDocument({email}, defaultCollection)
}