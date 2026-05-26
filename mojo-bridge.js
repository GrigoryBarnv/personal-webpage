import { mojo } from './mojo.js';
window.mojo = mojo;
window.dispatchEvent(new CustomEvent('mojo:ready', { detail: { mojo } }));
console.log('[mojo] connected:', !!window.mojo);
