// pages/api/submitForm.ts
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI; // Ensure this is defined in .env.local
const DATABASE_NAME = process.env.DATABASE_NAME;

if (!MONGODB_URI || !DATABASE_NAME) {
  throw new Error("Please define the MONGODB_URI and DATABASE_NAME environment variables");
}

// Global variable to store the MongoClient instance
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

// Connect to MongoDB and reuse connection across requests
const connectToDatabase = async (): Promise<Db> => {
  if (cachedDb && cachedClient) {
    // Use cached database and client if available
    return cachedDb;
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(DATABASE_NAME);

  // Cache the client and database for reuse
  cachedClient = client;
  cachedDb = db;

  return db;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      // Connect to the database (reuses existing connection if available)
      const db = await connectToDatabase();
      const collection = db.collection("form_submissions");

      // Get form data from the request body
      const formData = req.body;
      console.log("Form Data Received:", formData);

      // Insert form data into MongoDB
      await collection.insertOne(formData);

      res.status(200).json({ message: "Form data stored successfully!" });
    } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ error: "Failed to store form data" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
