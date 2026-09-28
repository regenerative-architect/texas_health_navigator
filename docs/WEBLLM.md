# WebLLM Integration

The app includes an optional adapter for MLC AI WebLLM. It follows the documented CDN import pattern:

```js
await import('https://esm.run/@mlc-ai/web-llm')
```

Reference: https://webllm.mlc.ai/docs/

## Behavior

- Nothing is downloaded until the user opens the local-AI module and requests model discovery/loading.
- WebGPU is required.
- The adapter reads the current WebLLM model registry instead of assuming a permanently valid model ID.
- It configures WebLLM to use IndexedDB as its model cache backend.
- After a model is loaded, inference is performed in the browser.
- The app service worker does not intercept/copy WebLLM model artifacts; WebLLM manages its own caching.

## Safety prompt

The local assistant is instructed to support access/public-health planning, distinguish facts from models/hypotheses, avoid diagnosis/prescribing and prefer official Texas/federal evidence.

This system prompt is a behavioral aid, not a guarantee. Users must verify AI-generated claims.

## Privacy caveat

Local inference reduces server-side prompt exposure but does not make every device/context appropriate for PHI. Browser extensions, device administrators, screenshots, exported text and shared terminals can still expose information. Use de-identified planning prompts.

## Offline caveat

A model that has already been fully cached may continue to work without network access depending on browser/WebLLM cache state. The application does not claim offline model availability until the model is actually present in the browser cache.
