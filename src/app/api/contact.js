import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Ensure this is set in .env.local

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ message: 'All fields are required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db('vijayDbProfile'); // Replace with your database name
    const collection = db.collection('contacts'); // Replace with your collection name

    // Insert the form data into the collection
    const result = await collection.insertOne({
      name,
      email,
      subject,
      message,
      date: new Date(),
    });

    // Return success response
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