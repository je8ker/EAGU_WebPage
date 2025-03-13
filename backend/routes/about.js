// routes/about.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET: about 섹션 데이터 가져오기
router.get('/', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT id, title FROM About');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching about data:', err);
    res.status(500).json({ error: 'DB query error' });
  } finally {
    if (conn) conn.release();
  }
});

// PUT: about 섹션 데이터 업데이트 (제목 배열)
router.put('/', async (req, res) => {
  let conn;
  try {
    const { titles } = req.body;
    if (!Array.isArray(titles)) {
      return res.status(400).json({ error: 'Invalid data format. Expected an array of titles.' });
    }
    conn = await pool.getConnection();
    await conn.beginTransaction();
    // 기존 데이터 모두 삭제
    await conn.query(`DELETE FROM About`);
    // 제목 배열의 각 항목 삽입
    for (const title of titles) {
      await conn.query(`INSERT INTO About (title) VALUES (?)`, [title]);
    }
    await conn.commit();
    res.json({ message: 'about updated successfully!' });
  } catch (err) {
    if (conn) await conn.rollback();
    console.error('Error updating about data:', err);
    res.status(500).json({ error: 'DB update error' });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;
