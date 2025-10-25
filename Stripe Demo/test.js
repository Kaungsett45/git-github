const http = require('http');

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/customers',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  res.on('data', (data) => {
    console.log('Response:', data.toString());
  });
});

req.on('error', (err) => {
  console.error('Connection error:', err.message);
  console.log('Make sure server is running with: node index.js');
});

req.end();