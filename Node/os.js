const os = require('os');
const path = require('path');

//info current user
const user = os.userInfo()
// console.log(user)

console.log(`system uptime is ${os.uptime()}`);

console.log(path.sep)
