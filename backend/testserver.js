//server.js
const express = require('express')
const app = express()
const path = require('path');
const PORT = process.env.PORT;
const cors = require('cors');
const os = require('os');


app.use(cors());
app.use(express.json());

function getServerIp() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    for (const iface of interfaces[interfaceName]) {
      // IPv4이고 내부(로컬) IP가 아닌 경우 반환
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1'; // 기본적으로 localhost를 반환
}

//불러오는 웹페이지는 항상 아래에
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
  const serverIp = getServerIp();
  console.log(`서버가 http://${serverIp}:3000 에서 실행 중입니다.`);
});
