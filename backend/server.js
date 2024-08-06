//server.js
const express = require('express')
const app = express()
const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT;
const cors = require('cors');


app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true}));

// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'application/json');
//   next();
// });
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



// 게시물 생성 API
app.post('/api/content', async (req, res) => {
  const {title, name, content} = req.body;

  try {
    const conn = await pool.getConnection();
    const query = 'INSERT INTO community (title, name, content) VALUES (?, ?, ?)';
    await conn.query(query, [title, name, content]);
    conn.release();
    res.sendStatus(200);
    console.log('게시글 작성 성공!:', req.body)
  } catch (error) {
    console.error('Error inserting data:', error);
    res.sendStatus(500);
  }
});
//게시판 데이터 받아오기
app.get('/api/content', async (req, res) => {
  try {
    const rows = await pool.query('SELECT * FROM community');
    res.json(rows);
    console.log("게시글 불러오기 성공")
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({error: 'Internal server error'});
  }
});



app.post('/api/join_us', async (req, res) => {
  const {name, email, major, student_id_number, phone_number} = req.body;

  try {
    const conn = await pool.getConnection();
    const query = 'INSERT INTO Join_us (name, email, major, student_id_number, phone_number) VALUES (?, ?, ?, ?, ?)';
    await conn.query(query, [name, email, major, student_id_number, phone_number]);
    conn.release();
    res.sendStatus(200);
    console.log('가입신청 성공!:\n', req.body)
  } catch (error) {
    console.error('Error inserting data:', error);
    res.sendStatus(500);
  }
});



//불러오는 웹페이지는 항상 아래에
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
