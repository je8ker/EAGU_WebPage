// routes/content.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// 게시물 생성 API
router.post('/', async (req, res) => {
  const { title, name, content } = req.body;
  try {
    const conn = await pool.getConnection();
    const query = 'INSERT INTO community (title, name, content) VALUES (?, ?, ?)';
    await conn.query(query, [title, name, content]);
    conn.release();
    res.sendStatus(200);
  } catch (error) {
    console.error('Error inserting data:', error);
    res.sendStatus(500);
  }
});

// 게시판 데이터 받아오기 API
router.get('/', async (req, res) => {
  try {
    const rows = await pool.query('SELECT * FROM community');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
