// Simple script to test API routes
const axios = require("axios")

const API_URL = "http://localhost:5000/api"

const testRoutes = async () => {
  try {
    console.log("Testing API routes...")

    // Test root route
    try {
      const rootResponse = await axios.get("http://localhost:5000/")
      console.log("Root route:", rootResponse.status, rootResponse.data)
    } catch (error) {
      console.error("Root route error:", error.message)
    }

    // Test API test route
    try {
      const testResponse = await axios.get(`${API_URL}/test`)
      console.log("Test route:", testResponse.status, testResponse.data)
    } catch (error) {
      console.error("Test route error:", error.message)
    }

    // Test users debug route
    try {
      const usersDebugResponse = await axios.get(`${API_URL}/users/debug`)
      console.log("Users debug route:", usersDebugResponse.status, usersDebugResponse.data)
    } catch (error) {
      console.error("Users debug route error:", error.message)
    }

    // Test tasks debug route
    try {
      const tasksDebugResponse = await axios.get(`${API_URL}/tasks/debug`)
      console.log("Tasks debug route:", tasksDebugResponse.status, tasksDebugResponse.data)
    } catch (error) {
      console.error("Tasks debug route error:", error.message)
    }

    // Test routes list
    try {
      const routesResponse = await axios.get(`${API_URL}/routes`)
      console.log("Routes list:", routesResponse.status)
      console.log("Available routes:", routesResponse.data)
    } catch (error) {
      console.error("Routes list error:", error.message)
    }

    console.log("API route testing completed")
  } catch (error) {
    console.error("Error testing API routes:", error.message)
  }
}

testRoutes()
