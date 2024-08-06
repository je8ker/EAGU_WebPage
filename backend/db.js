// db.js
const mariadb = require('mariadb');
const dotenv = require('dotenv');

dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 5
});

pool.getConnection()
  .then(conn => {
    console.log('MariaDB 연결 성공!');

    return conn.query('SELECT * FROM community')
      .catch(err => {
        console.error('쿼리 실행 실패:', err);
        conn.release(); // 에러 발생 시에도 연결 해제
      });
  })
  .catch(err => {
    console.error('MariaDB 연결 실패:', err);
  });


module.exports = pool;
