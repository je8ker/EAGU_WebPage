// routes/image.js
const express = require('express');
const router = express.Router();
const pool = require('../db');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// multer 스토리지 설정: image 폴더에 파일 저장
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../image');
    fs.mkdirSync(uploadPath, {recursive: true});
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  }
});
const upload = multer({storage: storage});

// 이미지 받아오기 API
router.get('/', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query('SELECT id, image_url FROM image');
    // console.log("DB 조회 결과:", result);

    res.json(result);
  } catch (err) {
    res.status(400).send({error: err});
  } finally {
    if (conn) conn.release();
  }
});

// 이미지 저장 API
router.post('/upload', upload.single('image'), async (req, res) => {
  let conn;
  try {
    if (!req.file) {
      return res.status(400).json({error: '업로드할 이미지 파일이 없습니다.'});
    }
    const filePath = '/image/' + req.file.filename;
    conn = await pool.getConnection();
    const sql = "INSERT INTO image (image_url) VALUES (?)";

    // 구조 분해 대신 반환값 전체를 확인
    const result = await conn.query(sql, [filePath]);
    // 만약 result.insertId가 제대로 존재한다면 그대로 사용합니다.
    res.json({message: '이미지 업로드 성공', id: result.insertId.toString(), filePath});
  } catch (err) {
    console.error(err);
    res.status(500).json({error: err.toString()});
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;
