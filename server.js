const express = require('express');
const path = require('path');
const gradeExam = require('./autograde');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/grade', (req, res) => {
  const result = gradeExam(req.body);
  res.json(result);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
