const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, 'website')));

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'website', 'projects.html'));
});

app.listen(PORT, () => {
  console.log(`Running syslink.dev at port ${PORT}`);
});
