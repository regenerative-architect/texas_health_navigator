(function(){
'use strict';
let pkg=null,engine=null,currentModel='';
async function loadPackage(){if(pkg)return pkg;const url=window.TXH_CONFIG?.webllmModuleUrl||'https://esm.run/@mlc-ai/web-llm';pkg=await import(url);return pkg}
function capability(){return {webgpu:!!navigator.gpu,secureContext:self.isSecureContext,online:navigator.onLine,userAgent:navigator.userAgent}}
async function models(){const w=await loadPackage();return (w.prebuiltAppConfig?.model_list||[]).map(x=>({id:x.model_id||x.model||'',model:x})).filter(x=>x.id)}
async function load(modelId,onProgress){if(!navigator.gpu)throw new Error('WebGPU is not available in this browser.');const w=await loadPackage();const appConfig={...w.prebuiltAppConfig,cacheBackend:'indexeddb'};engine=await w.CreateMLCEngine(modelId,{appConfig,initProgressCallback:p=>onProgress?.(p)});currentModel=modelId;return modelId}
async function chat(userText,context=''){if(!engine)throw new Error('Load a local model first.');const system=`You are a local planning assistant inside the Texas Health Navigator OS. Support healthcare access, public-health planning, multidisciplinary coordination and evidence literacy. Never diagnose, prescribe, change medication doses, or present uncertain claims as facts. Separate FACT, INFERENCE, MODEL, SCENARIO and HYPOTHESIS. Prefer official Texas HHS/DSHS, HRSA, CMS, CDC, TCEQ, TxDOT and peer-reviewed evidence. Do not infer eligibility. Keep personal health information out of shared-workspace suggestions. ${context}`;const r=await engine.chat.completions.create({messages:[{role:'system',content:system},{role:'user',content:userText}],temperature:.2});return r?.choices?.[0]?.message?.content||''}
function unload(){engine=null;currentModel=''}
window.TXHWebLLM={capability,models,load,chat,unload,get model(){return currentModel}};
})();
