import { b as bootstrapLazy } from './index-3c2796be.js';
export { s as setNonce } from './index-3c2796be.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["rf-switch",[[1,"rf-switch",{"label":[32]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map