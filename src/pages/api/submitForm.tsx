import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

// Ensure that MongoDB URI and database name are loaded from .env.local
const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not defined");
}
if (!DATABASE_NAME) {
  throw new Error("DATABASE_NAME environment variable is not defined");
}

let cachedDb: any = null;

// Connect to MongoDB
const connectToDatabase = async () => {
  if (cachedDb) {
    return cachedDb;
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  cachedDb = client.db(DATABASE_NAME); // Store the connection in a cache for reuse
  return cachedDb;
};

// Create the API handler function
const submitForm = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const db = await connectToDatabase();
      const collection = db.collection("form_submissions");

      // Get form data from the request body
      const formData = req.body;

      console.log("Received form data:", formData);

      // Insert form data into MongoDB
      await collection.insertOne(formData);

      res.status(200).json({ message: "Form data stored successfully!" });
    } catch (error) {
      console.error("Error while inserting form data:", error);
      res.status(500).json({ error: "Failed to store form data", details: error });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

// Export the handler
export default submitForm;
