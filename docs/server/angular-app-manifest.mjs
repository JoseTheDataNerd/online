
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
    'index.csr.html': {size: 463, hash: '11ac28fd21bc95819fd7e9e4fa78e7d16fb4ade3b77caa012051ffa71c7353fc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 976, hash: 'd51e41240da5610e0a2387f14e76918d327815ecb0af873050b790c3ac7c0b04', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21588, hash: '8cc5214cf286a9242d041dc84e27c110e2cd8b275e66e7f78d42ba561c813897', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
