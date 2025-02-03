'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"version.json": "6a0e69daf7522fba270cce1a00bdbded",
"README.md": "bc48c79e16391e79114e5d37d0db8a31",
"main.dart.js": "eec39d65dee1eeea4639ba52a05b0847",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
".git/FETCH_HEAD": "10e7230d41ee6e4bab7e2abf173626c1",
".git/ORIG_HEAD": "b5aa50107549179eda739eac180bc861",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/refs/heads/main": "40cac78fc78b403b370072875388276b",
".git/refs/remotes/origin/main": "3391a346d7e864b1ddd4faf54783e441",
".git/logs/refs/heads/main": "da7b1ed0e8af20d3b36884240cc7c1e7",
".git/logs/refs/remotes/origin/main": "a0b193a03172b34d0a64b7fdfb76fa1a",
".git/logs/HEAD": "867b015d86310319d9cede2ccfd983ad",
".git/config": "167de8af73b00b0ae84f92f9cd473c81",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "5753d70f8c5614bad3c44c0f643672f8",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/2b/d0b56117f92866d9e94e5878bda1bef9b90707": "2689a69f8fd066804913b1b4dd5b8c3b",
".git/objects/44/f15e28c2fd006d706686f0c5aed8dd7bda4209": "bee9f6fad300c356fb63aab4e25f53d9",
".git/objects/40/fb2e2a56602709dc3762bba82b7a390e578f79": "9aa1efb13964167a1c8b411ed849509c",
".git/objects/c8/1ad7e1683e0336b7addd5602571ff4a56a4f07": "9cd65340137fad56f6f427153ce174a1",
".git/objects/ad/313d5065f853f7530ca6ea57c6e1108b7a59ff": "63b1a3a56712ecfd72160e5b0c4f839f",
".git/objects/54/4ae9b1812662d862bdc40aaeefd147dbd98a6c": "4465f1718c6b6fcc22ad3ee8cc39a7b5",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/75/405315b189c10bc76730d200219bc6dfab532b": "17d4e8b734744d71a4bd9fe597666323",
".git/objects/96/7dbab3a7ca77dd1133bc0543b5190ab4a37698": "4b60f55fc993cc5ea80989990434793c",
".git/objects/fe/c454fa01bec0ba60abf702615aa45667cf88fa": "6846e070de55c006327b0df81dd5799a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/66/547402f6edf3b1ca7398a9e78788e79211a4f6": "9c12fe783b74f93d03a59eba0c21eaa6",
".git/objects/a3/e3e8500a7d928be0e6fc785d5b21ea975dc497": "2df729477f445204d830f1a1504b438a",
".git/objects/87/18e722ee6be29404d63ea5b9394b12e70b9fbe": "52191ee668587f6c2f00bf372cd67334",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/35/7a4b3bf899c0da81c6104e5307628b8adaedd8": "02370cb5f939c192f260d2a69f7c51b8",
".git/objects/72/63d8e43ab967a3c4465eb03d231a888f4b9ecd": "e87362bce3fd94c6c64a479e909f566e",
".git/objects/72/b7e5795fc1c0b38f588b6422532dc92e74ade7": "7dfb129eab8801f9e2d6a65a15e12913",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/d2/d0ecc7ac8fdf516b5abb2d6e2c9eefa4a851d8": "0a3c02a21b065522616738c7361d2230",
".git/objects/14/11493ede3fa66135c0e4bca73efb22fe008186": "1cfa652918d7a1dce836d1c9dec72bd3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/2bf4bad1eb21627115337a0b0d027d53dd9d67": "8edb856c839ef9302479973c804d3836",
".git/objects/c4/1845f3815b534b93a31920000f0812f6a42682": "001030c4ae7733fc6c469dfddfec15ed",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/91/45b3b1e2b4693d0cd3b217f71392097d72bb08": "88bd129cf08b609f6516ba2f1625252c",
".git/objects/c7/71b2300a6db87338ff0ef470c052303a4c80fc": "6473da426a94f03551563cc069e41849",
".git/objects/f9/60700d282dd6987d80545ed82e2437b6aa6a16": "8fbbe2bd59534777362271816cc5ff7b",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/bd/b1dcae5345ae11f8ab612fcfdb40c501892ce2": "e8545d7ddbda26ad4ea427a2987779db",
".git/objects/3f/d11d472648cb2ee33da5887b80c2ae419ed407": "6474d2aaa4dad74bd86a3f11b6d6fcff",
".git/objects/3f/e04ddb3cd90ae1d6206571acdf07871f2adb33": "78af4c14a725ab76d4617302c7eb5348",
".git/objects/76/1933f0f9b7d21bc4e9f7f3b928c2ad60ef44c9": "02c66e2213cd2d644c75ddc2c9799734",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/3c/e3675492efef4e7d8119cc92fde72d1b2688b3": "bcc45bf9439f1ad1c1c8359b8604c777",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/93eaf607209551943236d9154c5fe9942588fd": "181b8f2f2d73fc9d7778d4b1fee669cd",
".git/objects/51/daf753cee47d91bbcbdd7ed1905d86d04a2f40": "10527ac7975356a6ccd217d104e5d4b0",
".git/objects/65/b1b6c75db77e12969dd64b2bc63ec147e48362": "34fed290a0b82edeec9cbb3aa7821bba",
".git/objects/65/74277623e58d63b56b18a2e362b776d212b947": "dd3ed04aaf848adf89061197b8ac7496",
".git/objects/cd/a665b9680c76b0fe7bdede9b8be025c2306c05": "9d11e5cf8f16a85ba769fecd4279d6fe",
".git/objects/97/47c3425e1682db50c74727ee9152253310a70b": "3b6513688b74f96070f414dd303d910e",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/ab/0a04e88ead6d4682df33f4f5c2e80d896d47b3": "6f44278784558e4a7236405cd93fa17e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/e7/b008f8bd19cc2dd34f3cb4511c357ed93100eb": "be8e3d4ce8f5599ca7725eef81fdebef",
".git/objects/e7/19662bf655b80d0a153bbd272f40a75be8cfbe": "84ffec63b117c211ea9c37b9d1fb69c2",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/7c/ff0949fa19972e46b52a6137edba404b1fd569": "da84a1d6b8dba51f1061c6d94ce5f8e6",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/1a/eec4bf41763feead37a85b6c241375f3b373f9": "ebed7c9f6c51c0acb4d1150705eef63b",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/1b/d5141e7bc2f7f4780fb73552b70e66b0374d30": "d4319d7e69c6c5ed650c8170ee4c484f",
".git/objects/f0/a7bc3aa8732bc3bc30742a778b2fc9d0a8f867": "3acefea7495f235d82b95a2dad01cbaf",
".git/objects/f0/648b7a02c88ebcd3d1f3477f82890b45eb8d66": "a417ebaec278b76887b84722a0d771af",
".git/objects/0a/43f821b5c58109c0e0e7685861b1b9d8234aca": "98e081dc6ccf09a353bf5c54a79dbabf",
".git/objects/25/fb4083da3a192ef7546d8d372510b8fa4b7faf": "50c832992ea246ef7d5e70e1f419cd11",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/50/d0734b1e46e1247e9e47645176b64c690a3187": "e7196246734bdadd585a78cfa65d43a8",
".git/objects/73/1d9693676e8cd38ff1a8e9b34b52f2f37ab662": "bb045b7a0e29a96696af4a2961b0918a",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/b8/8acd270f51ffca76bce11d4d518946f36c87e0": "f5d7a3fc391596844a08cb6ed6387a13",
".git/objects/11/0e42e37b3f91b1559d56ed73d1bd14ed219a7a": "8e65c99493b8ac5fc60e326a82d2efe5",
".git/objects/fd/e8e5f5095d6b156e0bbf3788e4e1f8d7e33ba9": "b57efe282133eed56d67a47c0b3092c1",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5e/00e822a20d0891fce902f240397f0c9e598aa5": "d512a702dffa2843a1f5ee9c0f67cda2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/d7/1514a01ea13e6b9e64a3bc28c136e0bd9fd5a0": "7bd26da0281cbcfc63cf1cc1021ef42c",
".git/objects/e0/3a901637152ba9f04053b1e4293b2160c86091": "f86923c813657acead585662a69991b0",
".git/objects/a1/a23080bca69cacc28e9b277e1d19b982f53793": "3fb09992dcc55a65a521d741bf56fb16",
".git/objects/9a/791d981d6ff66ce412fd41d77973b51a72c548": "0257a7fe3122427cd532476ce91c0520",
".git/objects/bf/f500afacdcf1d9e6b1a2a4d60a76db0fa938b1": "a166dae70c4397c3b1410399ff50d178",
".git/objects/bf/5001fee6bec450fd6cea15522797ad50373d42": "2778abb89fc21135c1c49345ac533a6b",
".git/objects/bf/c3f553a08cae694772923b46c748e8aba3cb0d": "2810a777ffd3ce4a2ca4e6010365d9a0",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/2d/d42d2edd52bfcefb4d82271f5c26006b9cb21a": "194958761ec494eb8d0309b349360b0b",
".git/objects/98/9535a92379249cd98ca7ffe33b200fa27cb26c": "1f36fe77a3e902591a27df9b0b4efc24",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/95/eae8b11cc0df701f224f3acbfd2bcf37a4a0aa": "e1be854f1b4514a85b77e9caca623259",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/06/81fca30d022df28155fa452bc3448fd02ff6d3": "1aba95bd1afb97646343d91679fddff7",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/b6/3699688d1ae62420d3aada0d01ab1318101421": "fea71b5f2faf576da317cd2796f1a42c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "fc03dc94643f5dc153a4b0b1457a92a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"flutter_bootstrap.js": "25d0d16810bc64410d15ce699413ec29",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "12a12a5931146504c93a588817c63c7b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/AssetManifest.bin": "1e83dc4c8dc6793f9c0aba007bad96bb",
"assets/AssetManifest.json": "ce2f0f6025d0d36b15a2537d24d15c64",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "3324ed651a1ed3c6af879519db8c6ed6",
"assets/fonts/MaterialIcons-Regular.otf": "968d90f1a5fc1766aaced82fcbb01f1a",
"assets/NOTICES": "35095baf6747aac8e2da0d10a7556f2c",
"assets/assets/CV/Mustafa%20.pdf": "3143df3dd6f8795ba925347024fed4b2",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/images/Group%252024.png": "8f8d2a55a95b6a0999f640dc5d335fbb",
"assets/assets/images/comments.png": "b4dd05674d3d0043e5c07589616e37d6",
"assets/assets/images/linkedin.png": "dbce0cfd7ae44f852e206c24bb8c4318",
"assets/assets/images/pencil.png": "00756fa05d5e1918ab4d827648a35979",
"assets/assets/images/world.png": "c0b2145ebc84e8b75a2c481301e214af",
"assets/assets/images/home.png": "56f8205850dc6a2e92c791a67e91da6f",
"assets/assets/images/services.png": "89e163334556cc602a2e10c64e8bb28d",
"assets/assets/images/Mustafa%2520.pdf": "3143df3dd6f8795ba925347024fed4b2",
"assets/assets/images/Aboutme.png": "d6eb58226fad3de6dc7fc39d71effde3",
"assets/assets/images/Projects.png": "e7657e5e02493d1b820d9ceed68ce904",
"assets/assets/images/Ellipse.png": "8cd6ca3038d9aa60cba0b47bd0bdb720",
"assets/assets/images/github.png": "6967b8ba4d348420a0198fe489e52fb3",
"assets/assets/images/contact.png": "8e43588d3d3c4f757d971ed39d9589fd",
"assets/AssetManifest.bin.json": "8fa035fb946c468f207dc850f65e55b1",
"index.html": "09e644593892ac2d84861e5c44dcb483",
"/": "09e644593892ac2d84861e5c44dcb483"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
