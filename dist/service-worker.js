/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "928a9aeb346ea6677d884e421cb7fc71"
  },
  {
    "url": "about/index.html",
    "revision": "21f67a0032106d5d0aacbd3db0ca3455"
  },
  {
    "url": "assets/css/0.styles.7b3c9bf7.css",
    "revision": "92182f2db1f3f75ce4a349dd2287008a"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.f5aa0c26.js",
    "revision": "7146b4286c64892f46aeaad808869110"
  },
  {
    "url": "assets/js/10.60f934fb.js",
    "revision": "e7ceddcce4b1313105fa6cd9d6aeb0e3"
  },
  {
    "url": "assets/js/11.414d7ac7.js",
    "revision": "30a7eb1cc77e2f7b2150f29ffc401276"
  },
  {
    "url": "assets/js/12.00a4a65d.js",
    "revision": "bd69181b3e2e07f5ad34aaf83f27e41e"
  },
  {
    "url": "assets/js/13.2fba0e9c.js",
    "revision": "1142909e376e6ada768341b253227ef3"
  },
  {
    "url": "assets/js/14.b7e7a1a5.js",
    "revision": "9c3e078ae600fe106df4b7e2bc7afea5"
  },
  {
    "url": "assets/js/15.4dd18489.js",
    "revision": "1dda84b5b59e3e0175e6dfdfe76aa056"
  },
  {
    "url": "assets/js/16.047e35f0.js",
    "revision": "0c445b1d3ef4d7ef620b94d6de2294de"
  },
  {
    "url": "assets/js/17.e7e9335c.js",
    "revision": "3d47449326af02bee9f12f4f0e59c836"
  },
  {
    "url": "assets/js/18.a9450a4a.js",
    "revision": "ddb22cce3f9170fd86d93bc15b738a3c"
  },
  {
    "url": "assets/js/19.238409c5.js",
    "revision": "376ac9e4b4dc94b4de8b83d5cf31b808"
  },
  {
    "url": "assets/js/20.3bb599a3.js",
    "revision": "3274d8399a17b0418a2c63a7ab1b86a6"
  },
  {
    "url": "assets/js/21.5a6c29ed.js",
    "revision": "747650b3df85007648a90b8c44ff9488"
  },
  {
    "url": "assets/js/22.57215378.js",
    "revision": "656a6d2f96f18fa72aab894d251b0b27"
  },
  {
    "url": "assets/js/23.f879bd26.js",
    "revision": "d0f6f3ab6f1fad01101d799f4e1f0f60"
  },
  {
    "url": "assets/js/24.75970f93.js",
    "revision": "ffd54ea883efb14920bc0edc071d8fbc"
  },
  {
    "url": "assets/js/25.264530f1.js",
    "revision": "3b119c7d6c10fa85b31b8192fe7c79c9"
  },
  {
    "url": "assets/js/26.992619fe.js",
    "revision": "3ee77cd4a0b2958898b83292883d192a"
  },
  {
    "url": "assets/js/27.bb3bcb24.js",
    "revision": "4cebc4990d017935042ea429419e9dbb"
  },
  {
    "url": "assets/js/28.95632960.js",
    "revision": "c305b0caea95326addb278957a11d361"
  },
  {
    "url": "assets/js/29.41dbce2e.js",
    "revision": "d111edcac58d82a1b9dc5529b1f64ddd"
  },
  {
    "url": "assets/js/3.844649fe.js",
    "revision": "f53308c5850e411d1a769ad7f40e7a6c"
  },
  {
    "url": "assets/js/30.db68b876.js",
    "revision": "81d29471ce9306327832209667c580be"
  },
  {
    "url": "assets/js/31.5b456e7c.js",
    "revision": "8f339ab40a293bf8a6cc068fd6047272"
  },
  {
    "url": "assets/js/32.7242c2c6.js",
    "revision": "d5a65b38fbe2b0736df52c7b8e154d0f"
  },
  {
    "url": "assets/js/33.793888cc.js",
    "revision": "86a593971d36c9aec329ebc6871848f9"
  },
  {
    "url": "assets/js/34.cdc6927a.js",
    "revision": "4097e2b609f26515fa840bb691cd65bb"
  },
  {
    "url": "assets/js/35.b205ab69.js",
    "revision": "ca8c9827dc6be3e7d793e47903f169ef"
  },
  {
    "url": "assets/js/36.42a2a895.js",
    "revision": "da4d301b12224a44cdb143e0851a7eff"
  },
  {
    "url": "assets/js/37.1dcf20a5.js",
    "revision": "2740bdf142c3572d4cd57001cdf7c3c8"
  },
  {
    "url": "assets/js/38.401c6a60.js",
    "revision": "10abfa2b8d7f298ea71d80a892c17d2e"
  },
  {
    "url": "assets/js/39.affc9e58.js",
    "revision": "f2bd6fbc954a65b6aef352f403a2b742"
  },
  {
    "url": "assets/js/4.3fe8c0d1.js",
    "revision": "54e5b8191e6070236b2fce7a0f46123c"
  },
  {
    "url": "assets/js/40.6621aa54.js",
    "revision": "b9ac9f895c01b4b0f454aad18c4a4600"
  },
  {
    "url": "assets/js/41.3169fa9b.js",
    "revision": "e5210161183b29d74545e728c3db8aca"
  },
  {
    "url": "assets/js/42.2c9ef42a.js",
    "revision": "41efaad871c8aa1be5b4b28dfe82944a"
  },
  {
    "url": "assets/js/43.3354b2c4.js",
    "revision": "53d5e7617e61a059ffea1688f8b59322"
  },
  {
    "url": "assets/js/44.64cc20e4.js",
    "revision": "23875276e48832181bdd70bbcd601e5c"
  },
  {
    "url": "assets/js/45.b8ed1d67.js",
    "revision": "b871ef31881a8af9c478cb1f15afc676"
  },
  {
    "url": "assets/js/46.2e6c6fd0.js",
    "revision": "8a32419d202fb3b53b8d2d8e6710132a"
  },
  {
    "url": "assets/js/5.513e8b05.js",
    "revision": "18b0a97e14a52ecd5c4c6db30a8c0708"
  },
  {
    "url": "assets/js/6.935c6e85.js",
    "revision": "942006bc21c75e9995476e1f2c33f35d"
  },
  {
    "url": "assets/js/7.0547d91b.js",
    "revision": "2457afde5d06b7019fd2f433837bf6a6"
  },
  {
    "url": "assets/js/8.fee8daab.js",
    "revision": "3d9c46cf8f79b14f36f51c23f3f4b932"
  },
  {
    "url": "assets/js/9.4536fd5e.js",
    "revision": "7d674d656d2e817a62707f14b9fa5268"
  },
  {
    "url": "assets/js/app.08500171.js",
    "revision": "9d5fa04425c6f8571f768dd8c85e92c3"
  },
  {
    "url": "avatar.jpg",
    "revision": "6cbd4f84e96eb4bdf0f28a0df173aba4"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "84e5ae9f7d28b9424e9b6fd4d5d21a70"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "470230bf78f94ebb14d99e55d8403437"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "240255da31e32c891f9a7e78a7071013"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "c0f6f56ea0c868a852ad3a5b1df2a46f"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "efcb1de4e1517881ec6571ad4fcbbc23"
  },
  {
    "url": "categories/DRL/index.html",
    "revision": "a0aff86e5f956a52ebb5c77bf0f1e9dd"
  },
  {
    "url": "categories/index.html",
    "revision": "cc0afa1903469c30d559935e81458e8e"
  },
  {
    "url": "categories/ROS/index.html",
    "revision": "0aef1e9288b17c108e444ce12c009acd"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "index.html",
    "revision": "e212b4b79cc14614b944e9b6a3b669d4"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "4030cb1b7430f6a43931b36e2bdf5f79"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "3d11f1970add70d5af084a7fede505d5"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "903462acbf03601b87e38425a5b887e1"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "53ad3198153e97af21fc1bf11000e049"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "f9f0af628cd255fca93fb124b212f3f6"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "0721ae4e298e6c9efcec8a68df14f338"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "1340b49e0ca429f35469fdaebcc537e3"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "22b0f985b20eaffba442b42c33114fce"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "d89caa12960f0bf4ab8046add30fcc18"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "f836b3bc17908f542f3125ef08ccc123"
  },
  {
    "url": "note/index.html",
    "revision": "6c719e1c6c0f735f5bc3b6c11b0e66ea"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "076ffa19635e915c6005d0d4bcd2fb94"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "4e1dc6160190ef6ad77e9e297e0d984a"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "98fefa0ef19009f40d046e930accabaf"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "ced1c362471127a68bed8348ef549ba0"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "db0be5795aaa961a12a5614cc8133c71"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "bf9b0a643a17eb01f03cbcf648ce0719"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "d4c0535b41d24ddd18fabb8c7790173e"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "ddc9988cc0efdaa4c8588fa1331800a0"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "2168558287ebefde400052851a0ffce4"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "52bac9e8a3ecb8371325c0e6c61d3923"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "272b3122b1e5660f4f938277c7b68dcb"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "7b6cf56d66419178429ac12ab5afb067"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "94e442aae518c0589f25354303773a91"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "9ceb31f7381677a7a8e49ae3bce0a8ed"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "6930e9be2797c892f2526420f074863e"
  },
  {
    "url": "tag/DRL/index.html",
    "revision": "6863fae28b8990e24fb0313e46b507d3"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "c10c5d8a69144d1e8c9653311872e733"
  },
  {
    "url": "tag/index.html",
    "revision": "80e8f058f27cea44cb9347f149ce5a1b"
  },
  {
    "url": "tag/js/index.html",
    "revision": "204872f94d2328a7a417d53b8602840b"
  },
  {
    "url": "tag/ROS/index.html",
    "revision": "ce72afd31c6a827d5f1a5839e84b2dbc"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "0b6d7511c2f3a6f34a383ecc385626d3"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "70a583b40481d4b9896cc6e5d5744815"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ddf4a7597c8535b20417b59488686320"
  },
  {
    "url": "timeline/index.html",
    "revision": "f6c9036cdf260c4f3fdab373d53fa41b"
  },
  {
    "url": "views/drl/2022/spinningup.html",
    "revision": "e5ca2d1d0f623e98e4a5e4ca568d7d92"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "18ac365dc8aaaacd5b7c6443478221b4"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "5e148f7108223cfc251caa2d629ba12c"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "11a8a27f06415f19cdcd3bb86d9923c9"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-reco-1.xxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "802a695f4df41e12843435a0a3613acb"
  },
  {
    "url": "views/ros/rosan-zhuang-bi-lei.html",
    "revision": "61106ea2f8c724479b5510fd202090b8"
  },
  {
    "url": "views/ros/roschu-ji-jiao-cheng.html",
    "revision": "477a26bff505ed34e1f93caccfae9fae"
  },
  {
    "url": "views/ros/roszhong-ji-jiao-cheng.html",
    "revision": "d4ea137b7818433e27e4a13227416b33"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "90656bafd3d346ec7affc5eacbdb516b"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "659a7bcc89f918d1a8a9bced22c863da"
  },
  {
    "url": "views/sui-bi/2020/ji-wo-de-da-xue.html",
    "revision": "17ef4da6f1df4129dc780933449ac711"
  },
  {
    "url": "views/sui-bi/2021/the-fire-in-your-eyes-keeps-me-warm.html",
    "revision": "376ebb686f7ead0bd2751d5a5e6480aa"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "b86c18c2c0365108a18048ea76f21bef"
  },
  {
    "url": "views/zhai-ji/yue-guang-luo-zai-zuo-shou-shang.html",
    "revision": "8de29b5b6448cec0302fa5e727688200"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
