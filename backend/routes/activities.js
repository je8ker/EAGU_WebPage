// routes/activities.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// 활동 데이터 받아오기 API
router.get('/', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM activities');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching activities:', err);
    res.status(500).json({ error: 'DB query error' });
  } finally {
    if (conn) conn.release();
  }
});

// activities 데이터 업데이트 API (업데이트, 삽입, 삭제 방식)
router.put('/', async (req, res) => {
  let conn;
  try {
    const { activities } = req.body;
    if (!Array.isArray(activities)) {
      return res.status(400).json({ error: 'Invalid activities.' });
    }
    conn = await pool.getConnection();
    await conn.beginTransaction();

    // 쿼리 결과를 확인하고, 배열로 변환
    const result = await conn.query('SELECT id FROM activities');
    // result가 [rows, fields] 형태라면 rows는 result[0]
    const existingRows = Array.isArray(result) && Array.isArray(result[0]) ? result[0] : result;

    // existingRows가 객체라면 Object.values를 사용해서 배열로 변환
    const rowsArray = Array.isArray(existingRows) ? existingRows : Object.values(existingRows);
    const existingIds = rowsArray.map(row => row.id);

    // 클라이언트에서 전달받은 id들 (id가 있을 경우만)
    const clientIds = activities
      .filter(item => item.id && item.id > 0)
      .map(item => item.id);

    // 삭제할 id: DB에는 있지만 클라이언트에 없는 id
    const idsToDelete = existingIds.filter(id => !clientIds.includes(id));
    if (idsToDelete.length > 0) {
      await conn.query('DELETE FROM activities WHERE id IN (?)', [idsToDelete]);
    }

    // 업데이트 및 삽입 처리
    for (const item of activities) {
      const { id, year, activity } = item;
      if (id && id > 0) {
        // 기존 항목이면 업데이트
        await conn.query(
          'UPDATE activities SET year = ?, activity = ? WHERE id = ?',
          [year, activity, id]
        );
      } else {
        // id가 없거나 0 이하이면 새 항목으로 삽입
        await conn.query(
          'INSERT INTO activities (year, activity) VALUES (?, ?)',
          [year, activity]
        );
      }
    }

    await conn.commit();
    res.json({ message: 'activities updated successfully!' });
  } catch (err) {
    if (conn) await conn.rollback();
    console.error('Error updating activities:', err);
    res.status(500).json({ error: 'DB update error' });
  } finally {
    if (conn) conn.release();
  }
});

// 개별 항목 삭제 API (예: DELETE /api/activities/:id)
router.delete('/:id', async (req, res) => {
  let conn;
  try {
    const { id } = req.params;
    conn = await pool.getConnection();
    await conn.query(`DELETE FROM activities WHERE id = ?`, [id]);
    res.json({ message: `Record with id ${id} deleted successfully.` });
  } catch (err) {
    console.error('Error deleting activity:', err);
    res.status(500).json({ error: 'DB deletion error' });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;
