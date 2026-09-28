/* Texas Health Navigator OS runtime configuration. No secrets belong here. */
window.TXH_CONFIG = Object.freeze({
  version: '3.0.0',
  collaborationApi: (location.protocol === 'http:' || location.protocol === 'https:') ? location.origin : '',
  syncIntervalMs: 5000,
  webllmModuleUrl: 'https://esm.run/@mlc-ai/web-llm',
  maxSharedPayloadBytes: 1000000,
  languageCoverage: {en:'full core UI', es:'core navigation and safety; technical modules partially translated'}
});
