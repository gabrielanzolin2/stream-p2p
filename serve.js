const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Erro ao carregar index.html');
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('\n======================================================');
  console.log(`🚀 SERVIDOR LOCAL STREAM-P2P INICIADO!`);
  console.log(`👉 Abra no seu navegador: http://localhost:${PORT}`);
  console.log('======================================================\n');
});
