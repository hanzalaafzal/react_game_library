import { Client, Databases, ID, Query } from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_APPWRITE_ID;
const DB_ID = import.meta.env.VITE_APPWRITE_DB_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_METRICS_ID;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, game) => {


    try {
        // Use Appwrite to check if the search term exists in the database 
        const result = await database.listDocuments(DB_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm)
        ]);

        if (result.documents.length == 0) {
            await database.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                gameID: game.id,
                poster_url: `${game.background_image}`
            })
        } else {
            const doc = result.documents[0]
            await database.updateDocument(DB_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1
            })
        }


    } catch (error) {
        console.log(error)
    }
}

export const getSearchedGames = async () => {
    try {

        const results = await database.listDocuments(DB_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc("count")
        ])

        return results.documents

    } catch (error) {
        console.log(error)
    }
}