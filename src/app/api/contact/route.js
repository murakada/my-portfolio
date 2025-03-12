import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Ensure this is set in .env.local

export async function POST(request) {
  console.log("API Route Hit"); // Debugging log

  try {
    const { name, email, subject, message } = await request.json();
    console.log("Form Data:", { name, email, subject, message }); // Debugging log

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ message: 'All fields are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    await client.connect();
    console.log("Connected to MongoDB"); // Debugging log

    const db = client.db('vijayDbProfile');
    const collection = db.collection('contacts');
    console.log("Using database and collection"); // Debugging log

    const result = await collection.insertOne({
      name,
      email,
      subject,
      message,
      date: new Date(),
    });
    console.log("Insert result:", result); // Debugging log

    return new Response(JSON.stringify({ message: 'Message sent successfully!', result }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ message: 'An error occurred. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await client.close();
  }
}