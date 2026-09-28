import {readFile,stat} from 'node:fs/promises';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const required=['index.html','manifest.webmanifest','sw.js','offline.html','config.js','assets/suite.css','modules/collab-client.js','modules/webllm-adapter.js','modules/suite-enhancements.js','server/server.mjs','data/source-registry.json'];
let failed=false;
for(const f of required){try{await stat(join(root,f));console.log('OK file',f)}catch{console.error('MISSING',f);failed=true}}
try{const m=JSON.parse(await readFile(join(root,'manifest.webmanifest'),'utf8'));for(const k of ['name','short_name','start_url','icons'])if(!m[k])throw new Error('manifest missing '+k);console.log('OK manifest JSON')}catch(e){console.error('FAIL manifest',e.message);failed=true}
const html=await readFile(join(root,'index.html'),'utf8');for(const s of ['manifest.webmanifest','sw.js','modules/suite-enhancements.js','Texas Health Access Navigator OS'])if(!html.includes(s)){console.error('FAIL index reference',s);failed=true}else console.log('OK index reference',s);
const sw=await readFile(join(root,'sw.js'),'utf8');if(!sw.includes('tx-health-os-v3.0.0')){console.error('FAIL service worker version');failed=true}else console.log('OK service worker version');
if(failed)process.exit(1);console.log('Static validation complete.');
