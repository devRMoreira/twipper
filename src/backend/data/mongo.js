const { MongoClient } = require('mongodb')

const URL = process.env.MONGO_URI
const defaultDB = process.env.DEFAULT_DB_NAME

let client

export async function connectToMongo() {

    try {
        if (!client) {
            client = new MongoClient(URL)
        }
    } catch (err) {
        console.log(err)
    }
    return client;

}

export async function getMongoCollection(collectionName, dbName = defaultDB) {
    const client = await connectToMongo()
    const database = await client.db(dbName)
    return await database.collection(collectionName)
}

export async function insertOneDocument(document, collectionName, dbName = defaultDB) {
    const client = await connectToMongo()
    const database = await client.db(dbName)
    return await database.collection(collectionName).insertOne(document)
}

export async function replaceDocument(filter, document, collectionName, dbName = defaultDB) {
    const client = await connectToMongo()
    const database = await client.db(dbName)
    return await database.collection(collectionName).replaceOne(filter, document)
}

export async function updateOneDocument(filter, update, collectionName, dbName = defaultDB) {
    const client = await connectToMongo()
    const database = await client.db(dbName)
    return await database.collection(collectionName).updateOne(filter, update)
}

export async function findOneDocument(filter, collectionName) {
    const collection = await getMongoCollection(collectionName)
    return await collection?.findOne(filter)
}

export async function findDocuments(filter, collectionName) {
    const collection = await getMongoCollection(collectionName)
    return await collection?.find(filter).toArray()
}