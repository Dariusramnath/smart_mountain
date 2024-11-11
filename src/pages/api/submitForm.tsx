// pages/api/submitForm.ts
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI; // Store this in .env.local

// Connect to MongoDB
const connectToDatabase = async () => {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not defined");
  }
  const client = new MongoClient(MONGODB_URI);

  await client.connect();

  // Return the database connection
  return client.db(process.env.DATABASE_NAME);
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const db = await connectToDatabase();
    const collection = db.collection("form_submissions");

    try {
      // Get form data from the request body
      const formData = req.body;
      console.log("Hello");
      console.log(formData);

      // Insert form data into MongoDB
      await collection.insertOne(formData);

      res.status(200).json({ message: "Form data stored successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to store form data" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
