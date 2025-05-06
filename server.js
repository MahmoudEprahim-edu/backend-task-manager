const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...")
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connected successfully")
  } catch (error) {
    console.error("MongoDB connection error:", error.message)
    process.exit(1)
  }
}

connectDB()

// Define routes
const taskRoutes = require("./routes/tasks")
const userRoutes = require("./routes/users")

app.use("/api/tasks", taskRoutes)
app.use("/api/users", userRoutes)

// Root API route for testing
app.get("/api", (req, res) => {
  res.json({ message: "API is running" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`API available at http://localhost:${PORT}/api`)
})
