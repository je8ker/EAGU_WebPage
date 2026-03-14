// routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../db'); // db 모듈 경로에 맞게 수정

// 쿠키 검증 API
router.get('/api/auth-check', (req, res) => {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(401).send({ success: false, message: '인증 토큰이 없음' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: '토큰 유효하지 않음' });
    }
    res.json({ success: true, user: decoded });
  });
});

// 관리자 로그인 API
router.post('/api/login', async (req, res) => {
  const { userId, userPw } = req.body;
  try {
    const [rows] = await pool.query("SELECT * FROM user WHERE id = ?", [userId]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials', success: false });
    }
    const user = rows[0]; // 단일 사용자 객체로 변경
    const validPw = await bcrypt.compare(userPw, user.pw);
    if (!validPw) {
      return res.status(401).json({ message: 'Invalid credentials', success: false });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('authToken', token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000,
    });
    res.json({ message: "Login successfully.", success: true, username: user.id });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error', success: false });
  }
});

// 로그아웃 API
router.post('/api/logout', (req, res) => {
  res.clearCookie('authToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  res.json({ message: "로그아웃 완료" });
});

module.exports = router;
