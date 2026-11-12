import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(rootDir, 'dist');
const htmlPath = join(distDir, 'index.html');
const writingPath = join(distDir, 'blog', 'index.html');
const description = 'Selected technical writing by Ashley Broussard on accessibility, full-stack development, workflow automation, reliability, and business applications.';

let html = await readFile(htmlPath, 'utf8');
html = html
  .replace('<title>Ashley Broussard | Software Engineer</title>', '<title>Technical Writing | Ashley Broussard</title>')
  .replace(/(<meta name="description" content=")[^"]*("\s*\/>)/, `$1${description}$2`)
  .replace(/(<meta property="og:title" content=")[^"]*("\s*\/>)/, '$1Technical Writing | Ashley Broussard$2')
  .replace(/(<meta property="og:description" content=")[^"]*("\s*\/>)/, `$1${description}$2`)
  .replace(/(<meta property="og:url" content=")[^"]*("\s*\/>)/, '$1https://ashb4.github.io/blog/$2')
  .replace(/(<link rel="canonical" href=")[^"]*("\s*\/>)/, '$1https://ashb4.github.io/blog/$2');

await mkdir(dirname(writingPath), { recursive: true });
await writeFile(writingPath, html, 'utf8');
console.log(`Generated Technical Writing entry page at ${writingPath}`);
