/* eslint-disable no-restricted-globals */
import RefreshRuntime from 'react-refresh/runtime';
// import RefreshRuntime from '@react-refresh';


// if (typeof WorkerGlobalScope !== 'undefined') {
  self.global = self;
  self.window = self;
  // window.global = window;
  // window.window = window;
// }
// console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  RefreshRuntime.injectIntoGlobalHook(window);
  window.$RefreshReg$ = () => {};
  window.$RefreshSig$ = () => (type) => type;

}

