import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;

    const result = await meetupsCollection.insertOne(data);

    await client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
