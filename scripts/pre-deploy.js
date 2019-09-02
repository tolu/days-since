
const fs = require('fs');
const path = require('path');

console.log('Rewrite index.html for github pages...');
const indexHtml = path.join(__dirname, '../public/index.html');
const content = fs.readFileSync(indexHtml, { encoding: 'utf8' });
const output = content.replace(/'\//g, `'/days-since/`);
console.log(output);

if (process.env['GITHUB_ACTIONS']) {
  fs.writeFileSync(indexHtml, output);
} else {
  console.log('\nFile not written outside github action...');
}
