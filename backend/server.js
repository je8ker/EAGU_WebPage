// server.js
const express = require('express');
const app = express();
// const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT || 3333;
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

// 기존의 다른 API 라우터들도 마찬가지로 분리 후 불러옵니다.
const authRouter = require('./routes/auth');
const contentRouter = require('./routes/content');
const noticeRouter = require('./routes/notice');

// 분리한 about와 activities 라우터 불러오기
const aboutRouter = require('./routes/about');
const activitiesRouter = require('./routes/activities');

// 라우터 미들웨어 등록
app.use('/api', authRouter);
app.use('/api/content', contentRouter);
app.use('/api/notice', noticeRouter);
app.use('/api/about', aboutRouter);
app.use('/api/activities', activitiesRouter);

// static 파일 서빙
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
