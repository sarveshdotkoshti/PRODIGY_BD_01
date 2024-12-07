const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// In-memory storage for users
const users = new Map();

// Utility function to validate email
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Create a new user
app.post("/users", (req, res) => {
  const { name, email, age } = req.body;

  // Validation
  if (!name || !email || !age) {
    return res.status(400).json({ error: "Name, email, and age are required." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }
  if (typeof age !== "number" || age <= 0) {
    return res.status(400).json({ error: "Age must be a positive number." });
  }

  const id = uuidv4();
  const user = { id, name, email, age };

  users.set(id, user);
  res.status(201).json(user);
});

// Read all users
app.get("/users", (req, res) => {
  res.json(Array.from(users.values()));
});

// Read a single user by ID
app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.get(id);
  if (!user) {
    return res.status(404).json({ error: "User not found." });
  }

  res.json(user);
});

// Update a user by ID
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const user = users.get(id);
  if (!user) {
    return res.status(404).json({ error: "User not found." });
  }

  if (name) user.name = name;
  if (email) {
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }
    user.email = email;
  }
  if (age) {
    if (typeof age !== "number" || age <= 0) {
      return res.status(400).json({ error: "Age must be a positive number." });
    }
    user.age = age;
  }

  users.set(id, user);
  res.json(user);
});

// Delete a user by ID
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  if (!users.has(id)) {
    return res.status(404).json({ error: "User not found." });
  }

  users.delete(id);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
