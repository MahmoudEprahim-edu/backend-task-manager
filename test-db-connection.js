// Simple script to test MongoDB connection
require("dotenv").config()
const mongoose = require("mongoose")

// Use a direct connection string for testing
// Replace with your actual MongoDB Atlas connection string
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://ahmedwalidfasseh2002:helloagent000@task.9q31pd3.mongodb.net/?retryWrites=true&w=majority&appName=task"

console.log("Attempting to connect to MongoDB...")
console.log("MongoDB URI exists:", MONGODB_URI ? "Yes" : "No")

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!")
    console.log("Connection test passed!")
    process.exit(0)
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err)
    console.error("Connection test failed!")
    process.exit(1)
  })
