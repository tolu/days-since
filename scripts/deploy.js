
const fs = require('fs');
const path = require('path');

console.log(process.env);

const indexHtml = path.join(__dirname, '../public/index.html');
const content = fs.readFileSync(indexHtml, { encoding: 'utf8' });
fs.writeFileSync(indexHtml, content.replace(/"\//g, '"'));
