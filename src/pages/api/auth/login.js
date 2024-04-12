import { connectToMongo, getMongoCollection } from "@/backend/data/mongo";

export default function handler(req, res) {

    if(req.method === "POST"){

        connectToMongo()

        res.end()

        
    }
    
}
