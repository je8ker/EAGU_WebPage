//server.js
const express = require('express')
const app = express()
const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT;
// const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const  someOtherPlaintextPassword  =  'not_bacon' ;

const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

//쿠키 검증
app.get('/api/auth-check', (req, res) => {
  const token = req.cookies.authToken;
  // console.log("클라이언트토큰값:",token);
  if (!token) {
    return res.status(401).send({success: false, message: '인증 토큰이 없음'});
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({success: false, message: "토큰 유효하지 않음"});
    }
    res.json({success: true, user: decoded})
  })
})
//회원가입
// app.post('/api/register', async (req, res) => {
//   const {userId, password} = req.body;
//   try {
//     const hashPW = bcrypt.hash(password, 10);
//     await pool.query("INSERT INTO user(id,pw) VALUES (?,?)", [userId, hashPW]);
//     res.json({register: true, message: "User registered successfully."});
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({success: false, message: "Registration failed."});
//   }
// })

//관리자 로그인
app.post('/api/login', async (req, res) => {
  const {userId, userPw} = req.body;
  try {
    const [rows] = await pool.query("SELECT * FROM user WHERE id = ?", [userId]);
    if (rows.length === 0) {
      return res.status(401).json({message: 'Invalid credentials', success: false});
    }
    const user = rows;
    const validPw = await bcrypt.compare(userPw, user.pw);
    if (!validPw) {
      return res.status(401).json({message: 'Invalid credentials', success: false});
    } else {
      const token = jwt.sign({id: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
      res.cookie('authToken', token, {
        httpOnly: false, //test==false
        secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 60 * 60 * 1000,
      });
      res.json({message: "Login successfully.", success: validPw, username: user.id});
      console.log("로그인검증(bcrypt):", validPw)
      console.log("token:", token);
      console.log("user:", user);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({message: 'Internal server error', success: false});
  }
})

//로그아웃
app.post('/api/logout', (req, res) => {
  res.clearCookie('authToken', {
    httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict',
  });
  res.json({message: "로그아웃 완료"})
})

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

app.get('/api/join-us', async (req, res) => {
  try {
    const rows = await pool.query('SELECT * FROM Join_us');
    res.json(rows);
    console.log("가입리스트 불러오기 성공")
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({error: 'Internal server error'});
  }
})

app.post('/api/join-us', async (req, res) => {
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
