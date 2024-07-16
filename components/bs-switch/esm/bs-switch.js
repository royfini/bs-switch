import { p as promiseResolve, b as bootstrapLazy } from './index-3c2796be.js';
export { s as setNonce } from './index-3c2796be.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.19.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["rf-switch",[[1,"rf-switch",{"label":[32]}]]]], options);
});

//# sourceMappingURL=bs-switch.js.map