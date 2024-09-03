//server.js
const express = require('express')
const app = express()
const path = require('path');
const PORT = 3333;


app.use(express.json());

//불러오는 웹페이지는 항상 아래에
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
