// lib/mongodb.ts
import { MongoClient } from "mongodb";

declare global {
  // allow global to have a custom property
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI!;
const options = {};

let client; 
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to persist across reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client every time
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;


// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }

// /** 
//  * Cached connection for MongoDB.
//  */
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect('mongodb+srv://07meallo:5Zm8hocijtZzdIGW@cluster0.uh3jrsl.mongodb.net/iqca').then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;