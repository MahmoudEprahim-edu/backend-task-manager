// Configuration file for environment variables
const config = {
    MONGODB_URI:
      process.env.MONGODB_URI ||
      "mongodb+srv://ahmedwalidfasseh2002:helloagent000@task.9q31pd3.mongodb.net/?retryWrites=true&w=majority&appName=task",
    JWT_SECRET: process.env.JWT_SECRET || "your_default_jwt_secret",
    PORT: process.env.PORT || 5000,
  }
  
  module.exports = {
    mongoURI: process.env.MONGO_URI || "mongodb+srv://ahmedwalidfasseh2002:helloagent000@task.9q31pd3.mongodb.net/?retryWrites=true&w=majority&appName=task",
    jwtSecret: process.env.JWT_SECRET || "mysecrettoken",
    port: process.env.PORT || 5000,
  }
  