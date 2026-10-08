const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Sajikan file statis dari folder public ini sendiri
app.use(express.static(__dirname));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'WisataBromo.co' });
});

// Catch-all route untuk SPA React
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  console.log('Serving index.html from:', indexPath);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error sending index.html:', err);
      if (!res.headersSent) {
        res.status(500).send('Error loading page: ' + err.message);
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
