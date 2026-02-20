
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
    'index.csr.html': {size: 462, hash: '932446c26370c6fb3cc2d7678c4084779e87dcb1efb4ee2666dc8711eb878cad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 975, hash: '871ff246da177d4862787a16b8971186025dfd35494ca6a3f7db5f37c61e9979', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21591, hash: '9d7143a4d9cc69f645913e96bdfa7d303a113946f3f715322ee482ea28cc3ed5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
