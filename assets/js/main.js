// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fqk6z":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 39153;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "133b8fb1afdf7c2c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bQ8XH":[function(require,module,exports) {
var _lightenseImages = require("lightense-images");
function setThemeVariant(mode) {
    localStorage.setItem("theme-variant", mode);
    let htmlElement = document.querySelector("body");
    if (mode === "dark") {
        htmlElement?.classList.remove("light");
        htmlElement?.classList.add("dark");
        document.getElementById("sun-icon").style.display = "inline-block";
        document.getElementById("moon-icon").style.display = "none";
    } else if (mode === "light") {
        htmlElement?.classList.remove("dark");
        htmlElement?.classList.add("light");
        document.getElementById("sun-icon").style.display = "none";
        document.getElementById("moon-icon").style.display = "inline-block";
    }
// setGiscusTheme(theme);
}
function toggleThemeVariant() {
    if (localStorage.getItem("theme-variant") === "light") setThemeVariant("dark");
    else if (localStorage.getItem("theme-variant") === "dark") setThemeVariant("light");
}
function getSavedThemeVariant() {
    let currentTheme = localStorage.getItem("theme-variant");
    if (!currentTheme) {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) currentTheme = "dark";
        else currentTheme = "light";
    }
    return currentTheme;
}
// function toggleGiscusTheme(theme) {
//     const iframe = document.querySelector('iframe.giscus-frame');
//     if (iframe) iframe.contentWindow.postMessage({ giscus: { setConfig: { theme: `${location.origin}/giscus_${theme}.css` } } }, 'https://giscus.app');
// }
// function initGiscusTheme(evt) {
//     if (evt.origin !== 'https://giscus.app') return;
//     if (!(typeof evt.data === 'object' && evt.data.giscus)) return;
//     toggleGiscusTheme(sessionStorage.getItem("theme-variant") || (preferDark.matches ? "dark" : "light"));
//     window.removeEventListener('message', initGiscusTheme);
// }
function enableThemeVariantToggle() {
    const themeToggle = document.querySelector("#theme-variant-toggle");
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)");
    // window.addEventListener('message', initGiscusTheme);
    if (themeToggle) themeToggle.addEventListener("click", toggleThemeVariant);
    preferDark.addEventListener("change", (e)=>setThemeVariant(e.matches ? "dark" : "light"));
    setThemeVariant(getSavedThemeVariant());
}
function addBackToTopBtn() {
    const backBtn = document.querySelector("#back-to-top");
    if (!backBtn) return;
    const toTop = ()=>window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    const toggle = ()=>{
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 200 && !backBtn.classList.contains("shown")) {
            backBtn.classList.add("shown");
            backBtn.addEventListener("click", toTop);
        } else if (scrollTop <= 200 && backBtn.classList.contains("shown")) {
            backBtn.classList.remove("shown");
            backBtn.removeEventListener("click", toTop);
        }
    };
    window.addEventListener("scroll", toggle);
    toggle();
}
function enableOutdateCallout() {
    const callout = document.querySelector("#outdate_callout");
    if (!callout) return;
    const publish = document.querySelector("#publish");
    const updated = document.querySelector("#updated");
    if (!publish) return;
    const updateDate = new Date(updated?.textContent || publish.textContent);
    const intervalDays = Math.floor((Date.now() - updateDate.getTime()) / 86400000);
    const calloutDays = parseInt(callout.dataset.outdateDays || "-1");
    if (calloutDays >= 0 && intervalDays >= calloutDays) {
        const msg = callout.dataset.outdateTextBefore + intervalDays + callout.dataset.outdateTextAfter;
        callout.querySelector(".message").textContent = msg;
        callout.classList.remove("hidden");
    }
}
function main() {
    if (_lightenseImages) _lightenseImages(".prose img", {
        background: "rgba(43, 43, 43, 0.19)"
    });
    enableThemeVariantToggle();
    // enablePrerender();
    // enableNavFold();
    // enableRssMask();
    enableOutdateCallout();
    document.body.classList.contains("post");
}
document.addEventListener("DOMContentLoaded", main, false);

},{"lightense-images":"7jt3b"}],"7jt3b":[function(require,module,exports) {
/*! lightense-images v1.0.17 | © Tunghsiao Liu | MIT */ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ (()=>{
        /******/ var __webpack_modules__ = {
            /***/ 352: /***/ (module1)=>{
                function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(object);
                        if (enumerableOnly) symbols = symbols.filter(function(sym) {
                            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                        });
                        keys.push.apply(keys, symbols);
                    }
                    return keys;
                }
                function _objectSpread(target) {
                    for(var i = 1; i < arguments.length; i++){
                        var source = arguments[i] != null ? arguments[i] : {};
                        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
                            _defineProperty(target, key, source[key]);
                        });
                        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                        else ownKeys(Object(source)).forEach(function(key) {
                            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                        });
                    }
                    return target;
                }
                function _defineProperty(obj, key, value) {
                    if (key in obj) Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                    else obj[key] = value;
                    return obj;
                }
                function _typeof(obj) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                    else _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return _typeof(obj);
                }
                var Lightense = function Lightense() {
                    "use strict"; // default options
                    var defaults = {
                        time: 300,
                        padding: 40,
                        offset: 40,
                        keyboard: true,
                        cubicBezier: "cubic-bezier(.2, 0, .1, 1)",
                        background: "var(--bg-color-80, rgba(255, 255, 255, .98))",
                        zIndex: 1000000,
                        /* eslint-disable no-undefined */ beforeShow: undefined,
                        afterShow: undefined,
                        beforeHide: undefined,
                        afterHide: undefined
                    }; // Init user options
                    var config = {};
                    function invokeCustomHook(methodName) {
                        var method = config[methodName];
                        if (!method) return;
                        if (typeof method !== "function") throw "config.".concat(methodName, " must be a function!");
                        Reflect.apply(method, config, [
                            config
                        ]);
                    } // Init target elements
                    var elements;
                    function getElements(elements) {
                        switch(_typeof(elements)){
                            case "undefined":
                                throw "You need to pass an element!";
                            case "string":
                                return document.querySelectorAll(elements);
                            case "object":
                                return elements;
                        }
                    }
                    function startTracking(passedElements) {
                        // If passed an array of elements, assign tracking to all
                        var len = passedElements.length;
                        if (len) // Loop and assign
                        for(var i = 0; i < len; i++)track(passedElements[i]);
                        else track(passedElements);
                    }
                    function track(element) {
                        if (element.src && !element.classList.contains("lightense-target")) {
                            element.classList.add("lightense-target");
                            element.addEventListener("click", function(event) {
                                if (config.keyboard) {
                                    // If Command (macOS) or Ctrl (Windows) key pressed, stop processing
                                    // and open the image in a new tab
                                    if (event.metaKey || event.ctrlKey) return window.open(element.src, "_blank");
                                } // Init instance
                                init(this);
                            }, false);
                        }
                    }
                    function insertCss(styleId, styleContent) {
                        var head = document.head || document.getElementsByTagName("head")[0]; // Remove existing instance
                        if (document.getElementById(styleId)) document.getElementById(styleId).remove();
                         // Create new instance
                        var styleEl = document.createElement("style");
                        styleEl.id = styleId; // Check if content exists
                        if (styleEl.styleSheet) styleEl.styleSheet.cssText = styleContent;
                        else styleEl.appendChild(document.createTextNode(styleContent));
                        head.appendChild(styleEl);
                    }
                    function createDefaultCss() {
                        var css = "\n:root {\n  --lightense-z-index: ".concat(config.zIndex - 1, ";\n  --lightense-backdrop: ").concat(config.background, ";\n  --lightense-duration: ").concat(config.time, "ms;\n  --lightense-timing-func: ").concat(config.cubicBezier, ";\n}\n\n.lightense-backdrop {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: calc(var(--lightense-z-index) - 1);\n  padding: 0;\n  margin: 0;\n  transition: opacity var(--lightense-duration) ease;\n  cursor: zoom-out;\n  opacity: 0;\n  background-color: var(--lightense-backdrop);\n  visibility: hidden;\n}\n\n@supports (-webkit-backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    -webkit-backdrop-filter: blur(30px);\n  }\n}\n\n@supports (backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    backdrop-filter: blur(30px);\n  }\n}\n\n.lightense-wrap {\n  position: relative;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  z-index: var(--lightense-z-index);\n  pointer-events: none;\n}\n\n.lightense-target {\n  cursor: zoom-in;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  pointer-events: auto;\n}\n\n.lightense-open {\n  cursor: zoom-out;\n}\n\n.lightense-transitioning {\n  pointer-events: none;\n}");
                        insertCss("lightense-images-css", css);
                    }
                    function createBackdrop() {
                        if (document.querySelector(".lightense-backdrop") === null) {
                            config.container = document.createElement("div");
                            config.container.className = "lightense-backdrop";
                            document.body.appendChild(config.container);
                        } else config.container = document.querySelector(".lightense-backdrop");
                    }
                    function createTransform(img) {
                        // Get original image size
                        var naturalWidth = img.width;
                        var naturalHeight = img.height; // Calc zoom ratio
                        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
                        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || 0;
                        var targetImage = config.target.getBoundingClientRect();
                        var maxScaleFactor = naturalWidth / targetImage.width;
                        var viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
                        var viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
                        var viewportPadding = config.target.getAttribute("data-lightense-padding") || config.target.getAttribute("data-padding") || config.padding;
                        var viewportWidthOffset = viewportWidth > viewportPadding ? viewportWidth - viewportPadding : viewportWidth - defaults.padding;
                        var viewportHeightOffset = viewportHeight > viewportPadding ? viewportHeight - viewportPadding : viewportHeight - defaults.padding;
                        var imageRatio = naturalWidth / naturalHeight;
                        var viewportRatio = viewportWidthOffset / viewportHeightOffset;
                        if (naturalWidth < viewportWidthOffset && naturalHeight < viewportHeightOffset) config.scaleFactor = maxScaleFactor;
                        else if (imageRatio < viewportRatio) config.scaleFactor = viewportHeightOffset / naturalHeight * maxScaleFactor;
                        else config.scaleFactor = viewportWidthOffset / naturalWidth * maxScaleFactor;
                         // Calc animation
                        var viewportX = viewportWidth / 2;
                        var viewportY = scrollTop + viewportHeight / 2;
                        var imageCenterX = targetImage.left + scrollLeft + targetImage.width / 2;
                        var imageCenterY = targetImage.top + scrollTop + targetImage.height / 2;
                        config.translateX = Math.round(viewportX - imageCenterX);
                        config.translateY = Math.round(viewportY - imageCenterY);
                    }
                    function createViewer() {
                        config.target.classList.add("lightense-open"); // Create wrapper element
                        config.wrap = document.createElement("div");
                        config.wrap.className = "lightense-wrap"; // Apply zoom ratio to target image
                        setTimeout(function() {
                            config.target.style.transform = "scale(" + config.scaleFactor + ")";
                        }, 20); // Apply animation to outer wrapper
                        config.target.parentNode.insertBefore(config.wrap, config.target);
                        config.wrap.appendChild(config.target);
                        setTimeout(function() {
                            config.wrap.style.transform = "translate3d(" + config.translateX + "px, " + config.translateY + "px, 0)";
                        }, 20); // Show backdrop
                        var item_options = {
                            cubicBezier: config.target.getAttribute("data-lightense-cubic-bezier") || config.cubicBezier,
                            background: config.target.getAttribute("data-lightense-background") || config.target.getAttribute("data-background") || config.background,
                            zIndex: config.target.getAttribute("data-lightense-z-index") || config.zIndex
                        }; // Create new config for item-specified styles
                        var config_computed = _objectSpread(_objectSpread({}, config), item_options);
                        var css = "\n    :root {\n      --lightense-z-index: ".concat(config_computed.zIndex - 1, ";\n      --lightense-backdrop: ").concat(config_computed.background, ";\n      --lightense-duration: ").concat(config_computed.time, "ms;\n      --lightense-timing-func: ").concat(config_computed.cubicBezier, ";\n    }");
                        insertCss("lightense-images-css-computed", css);
                        config.container.style.visibility = "visible";
                        setTimeout(function() {
                            config.container.style.opacity = "1";
                        }, 20);
                    }
                    function removeViewer() {
                        invokeCustomHook("beforeHide");
                        unbindEvents();
                        config.target.classList.remove("lightense-open"); // Remove transform styles
                        config.wrap.style.transform = "";
                        config.target.style.transform = "";
                        config.target.classList.add("lightense-transitioning"); // Fadeout backdrop
                        config.container.style.opacity = ""; // Hide backdrop and remove target element wrapper
                        setTimeout(function() {
                            invokeCustomHook("afterHide");
                            config.container.style.visibility = "";
                            config.container.style.backgroundColor = "";
                            config.wrap.parentNode.replaceChild(config.target, config.wrap);
                            config.target.classList.remove("lightense-transitioning");
                        }, config.time);
                    }
                    function checkViewer() {
                        var scrollOffset = Math.abs(config.scrollY - window.scrollY);
                        if (scrollOffset >= config.offset) removeViewer();
                    }
                    function once(target, event, handler) {
                        target.addEventListener(event, function fn(args) {
                            Reflect.apply(handler, this, args);
                            target.removeEventListener(event, fn);
                        });
                    }
                    function init(element) {
                        config.target = element; // TODO: need refine
                        // If element already openned, close it
                        if (config.target.classList.contains("lightense-open")) return removeViewer();
                        invokeCustomHook("beforeShow"); // Save current window scroll position for later use
                        config.scrollY = window.scrollY;
                        once(config.target, "transitionend", function() {
                            invokeCustomHook("afterShow");
                        });
                        var img = new Image();
                        img.onload = function() {
                            createTransform(this);
                            createViewer();
                            bindEvents();
                        };
                        img.src = config.target.src;
                    }
                    function bindEvents() {
                        window.addEventListener("keyup", onKeyUp, false);
                        window.addEventListener("scroll", checkViewer, false);
                        config.container.addEventListener("click", removeViewer, false);
                    }
                    function unbindEvents() {
                        window.removeEventListener("keyup", onKeyUp, false);
                        window.removeEventListener("scroll", checkViewer, false);
                        config.container.removeEventListener("click", removeViewer, false);
                    } // Exit on excape (esc) key pressed
                    function onKeyUp(event) {
                        event.preventDefault();
                        if (event.keyCode === 27) removeViewer();
                    }
                    function main(target) {
                        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        // Parse elements
                        elements = getElements(target); // Parse user options
                        config = _objectSpread(_objectSpread({}, defaults), options); // Prepare stylesheets
                        createDefaultCss(); // Prepare backdrop element
                        createBackdrop(); // Pass and prepare elements
                        startTracking(elements);
                    }
                    return main;
                };
                var singleton = Lightense();
                module1.exports = singleton;
            /***/ }
        };
        /************************************************************************/ /******/ // The module cache
        /******/ var __webpack_module_cache__ = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId];
            /******/ if (cachedModule !== undefined) /******/ return cachedModule.exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__);
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /************************************************************************/ /******/ /******/ // startup
        /******/ // Load entry module and return exports
        /******/ // This entry module is referenced by other modules so it can't be inlined
        /******/ var __webpack_exports__ = __webpack_require__(352);
        /******/ /******/ return __webpack_exports__;
    /******/ })();
});

},{}]},["fqk6z","bQ8XH"], "bQ8XH", "parcelRequire829d")

//# sourceMappingURL=main.js.map
