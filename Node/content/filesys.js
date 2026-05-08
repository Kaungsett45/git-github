const {readFileSync, writeFileSync, readdirSync} = require('fs');

const first  = readFileSync('./subfolder/first.txt', 'utf8');
console.log(first);