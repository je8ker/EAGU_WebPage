// routes/notice.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// 클럽 정보 조회 API
router.get('/', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT meetingTime, fee, newMemberfee FROM notice LIMIT 1');
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB query error' });
  } finally {
    if (conn) conn.release();
  }
});

// 클럽 정보 업데이트 API
router.put('/', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const { meetingTime, fee, newMemberfee } = req.body;
    const query = 'UPDATE notice SET meetingTime = ?, fee = ?, newMemberfee = ?';
    await conn.query(query, [meetingTime, fee, newMemberfee]);
    res.json({ message: '공지사항이 업데이트 되었습니다.' });
  } catch (err) {
    console.error('DB 업데이트 에러:', err);
    res.status(500).json({ error: 'DB 업데이트 에러' });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;
