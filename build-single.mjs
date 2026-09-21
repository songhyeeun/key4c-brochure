// Run: node build-single.mjs. Rebuilds the portable, single-file HTML after edits.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace('<link rel="stylesheet" href="styles.css">', () => `<style>\n${fs.readFileSync(path.join(root,'styles.css'),'utf8')}\n</style>`);
html = html.replace('<script src="script.js"></script>', () => `<script>\n${fs.readFileSync(path.join(root,'script.js'),'utf8')}\n</script>`);
html = html.replace(/src="(assets\/[^\"]+)"/g, (_, asset) => `src="data:image/png;base64,${fs.readFileSync(path.join(root,asset)).toString('base64')}"`);
fs.writeFileSync(path.join(root,'KSMARTECH-mobile-brochure.html'),html);
console.log('Standalone HTML created. No installation or internet connection required.');
