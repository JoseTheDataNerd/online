
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 544, hash: '180baa0fe7d3596da4fd7deab896c9757911140a81cde3fca83ef836b3a810d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: 'c6a6ed3591d87d474903cd602edf28d55645b14a71a63fb3ee7e69dc96130b87', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16494, hash: '352128e464277ab4355eacf8945c37f73f604cdbf6c70b5785107eaf197aff62', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
