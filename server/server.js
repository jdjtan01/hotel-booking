import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from './controllers/clerkWebhooks.js';

connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); //Enable Cross Origin Resource Sharing
app.use(express.json())
app.use(clerkMiddleware()) //Clerk middleware



// API to listen to Clerk Webhook
app.use("/api/clerk", clerkWebhooks)

app.get("/", (req, res) => res.send("API is working"));



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

