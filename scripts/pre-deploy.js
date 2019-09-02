
const fs = require('fs');
const path = require('path');

if (process.env['GITHUB_ACTIONS']) {
  console.log('Rewrite index.html for github pages...');
  const indexHtml = path.join(__dirname, '../public/index.html');
  const content = fs.readFileSync(indexHtml, { encoding: 'utf8' });
  const output = content.replace(/"\//g, '"');
  console.log(output);
  fs.writeFileSync(indexHtml, output);
} else {
  console.log('Only runs inside github action...');
}
