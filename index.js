const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Serve static files (e.g., index.html, dashboard.html) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Simulated user data (in a real app, this should come from a database)
const users = {
  "user1": { password: "password1" }
};

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate credentials
  if (users[username] && users[username].password === password) {
    // If credentials are correct, redirect to the dashboard
    res.json({ success: true, redirectUrl: '/dashboard.html' });
  } else {
    // If credentials are incorrect, return an error message
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
