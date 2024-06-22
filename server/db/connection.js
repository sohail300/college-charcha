import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv();

const dbURL = process.env.DB_URL;

export async function connectDB() {
    try {
        const uri = dbURL;
        await mongoose.connect(uri);
        console.log("Database connected");
    } catch (err) {
        console.log("Error connecting to DB: " + err);
    }
}
