const {readFileSync, writeFileSync, readdirSync} = require('fs');

const first  = readFileSync('.git /subfolder/first.txt', 'utf8');
console.log(first);