const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    // Validate or sanitize userId
    if (!userId || isNaN(parseInt(userId))) {
      return res.status(400).send({ error: 'Invalid user ID' });
    }
    // ... database query or other operations using userId ...
    res.send({ userId });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send({ error: 'Failed to fetch user' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));