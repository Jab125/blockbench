if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,a)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let c={};const b=e=>i(e,f),d={module:{uri:f},exports:c,require:b};s[f]=Promise.all(r.map((e=>d[e]||b(e)))).then((e=>(a(...e),c)))}}define(["./workbox-14ff3674"],(function(e){"use strict";e.setCacheNameDetails({prefix:"blockbench"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"1c7eedad4050c8e36584c4629f4524b9"},{url:"favicon.png",revision:"bb17c5c284076fc17e3399860df472d7"},{url:"js/animations/animation.js",revision:"69e95b6c826c2f1f6974bd5f50f4b743"},{url:"js/animations/keyframe.js",revision:"9aece3a9fb8034803b5b7ba7fa7e2c9e"},{url:"js/animations/timeline_animators.js",revision:"fbd1e410ea601ee1eb1da633493898ec"},{url:"js/animations/timeline.js",revision:"3664267693b490bc0ef1e26e308d3518"},{url:"js/api.js",revision:"15cdbf4929628bf88920d7288a8830ce"},{url:"js/blockbench.js",revision:"ab0aad07799ef808987f686e60311da6"},{url:"js/boot_loader.js",revision:"7ec7a3b1dc05ad583a2c92ffaca666a9"},{url:"js/copy_paste.js",revision:"70f3534822f7b9af2b33b451ce824ff2"},{url:"js/desktop.js",revision:"e24ea81b98172f6754b4af73c6c65fef"},{url:"js/display_mode.js",revision:"9d87dea7e693dbbb2b340e5fa697a0b6"},{url:"js/edit_sessions.js",revision:"32ab395d580ae0ca2d8faaa74d7e1bab"},{url:"js/file_system.js",revision:"1f2b9e16ecfef3620158f37f5d4c7597"},{url:"js/globals.js",revision:"a8853d895c1861ac12d9bd5024928905"},{url:"js/interface/about.js",revision:"600b41cd4652b45b2663fe19d8180a5c"},{url:"js/interface/action_control.js",revision:"02a90d643c341dc754a1c65e1666db46"},{url:"js/interface/actions.js",revision:"2f642b3242f483005ec35e7b521540f4"},{url:"js/interface/dialog.js",revision:"8673ab32aa36ceb92e96c9504d3d07b5"},{url:"js/interface/interface.js",revision:"6cabe6489c4cdb8e4b1227c6a2f59ac6"},{url:"js/interface/keyboard.js",revision:"cc772d66d162651062118eeeac0b1326"},{url:"js/interface/menu.js",revision:"e0ba0e92a2a294822c269b7ad99e2e14"},{url:"js/interface/panels.js",revision:"366551942f8855af57d7054558013336"},{url:"js/interface/settings.js",revision:"a00213aff53567907357949094cb322b"},{url:"js/interface/start_screen.js",revision:"ba8f998a27686a4ee90c4b932f297083"},{url:"js/interface/themes.js",revision:"ab1584fc8fb4b165a17bb11533cfe285"},{url:"js/io/codec.js",revision:"d4d5aae0f8fe587db38acc89c66e419e"},{url:"js/io/format.js",revision:"cf54ebbb2cbe059c0222e182954d82fd"},{url:"js/io/formats/a.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/io/formats/bbmodel.js",revision:"b40d8a2e616f4bbc2541c034b3437c61"},{url:"js/io/formats/bedrock_old.js",revision:"e6b0fb89afac801ec167e18acbffc58f"},{url:"js/io/formats/bedrock.js",revision:"638ae4075b6481264565cf1ea6bb7fc2"},{url:"js/io/formats/collada.js",revision:"9bfb9151100e4d85b48d4d2530f41cb8"},{url:"js/io/formats/gltf.js",revision:"ecef7c2232b44cef57751d410c607835"},{url:"js/io/formats/java_block.js",revision:"bf6f3b85ff44f63efac60e8d78fb93eb"},{url:"js/io/formats/modded_entity.js",revision:"223f7adbbb64f3682ffb080e3f1b2dae"},{url:"js/io/formats/obj.js",revision:"76698e39e85d9ccb25e266aed8fc73b6"},{url:"js/io/formats/optifine_jem.js",revision:"93229660adece6a73800ad353f46513f"},{url:"js/io/formats/optifine_jpm.js",revision:"90f6b99190d6f70b42929651606c55aa"},{url:"js/io/formats/skin.js",revision:"bf1fed2c3fa2c115552de82d84563bb1"},{url:"js/io/io.js",revision:"64f0965f7d435ddbf9cff3df94478e16"},{url:"js/io/project.js",revision:"c4842f05f9c255bab2f72d77849411c5"},{url:"js/modes.js",revision:"d025f91b188abc083c2f90372619f03d"},{url:"js/outliner/cube.js",revision:"45339f06d39596603ae1540cd250478d"},{url:"js/outliner/group.js",revision:"325887149d14a500281c7075cb07fc04"},{url:"js/outliner/locator.js",revision:"5b122ff05003808594ca2ffa30780824"},{url:"js/outliner/mesh.js",revision:"b908846f3991b8c616f39db09d0457a6"},{url:"js/outliner/null_object.js",revision:"342ac1149ff1ab5643b101d5946ceedb"},{url:"js/outliner/outliner.js",revision:"92ad71492bf885b0895249927c101574"},{url:"js/outliner/texture_mesh.js",revision:"a7d424d9d8a623007ad5cf4039159444"},{url:"js/plugin_loader.js",revision:"d26e2c7bc66238003074ae760ce44df9"},{url:"js/preview/canvas.js",revision:"e191677830f020c51387b073769fbf67"},{url:"js/preview/OrbitControls.js",revision:"e3bb13031678b70db395b94bdc926f27"},{url:"js/preview/preview.js",revision:"ac8732b52b0675713b2734275ec4d1c0"},{url:"js/preview/screenshot.js",revision:"9899994777ab77073cff989d0c75ecd0"},{url:"js/preview/transformer.js",revision:"a122a47f29c37631f7f967094788877a"},{url:"js/property.js",revision:"9fb84967bd3fa909ee16870f82b6051f"},{url:"js/texturing/color.js",revision:"187726db2858364c6fbf1ceb51c60add"},{url:"js/texturing/edit_texture.js",revision:"25fc0725d38d35d01bed94c4abea5221"},{url:"js/texturing/painter.js",revision:"e8ef1b17304ac438eca893a06010915c"},{url:"js/texturing/texture_generator.js",revision:"592aacca1f14d89267b43ab834f8c32c"},{url:"js/texturing/textures.js",revision:"198810dd18b6f34685731370953f5376"},{url:"js/texturing/uv.js",revision:"2783d593d90a233d77b0d0ed56709f8a"},{url:"js/transform.js",revision:"846c85e07bb57ef8e93be6c2307bee35"},{url:"js/undo.js",revision:"3e2b90e83120f9044b50faad534a0c3c"},{url:"js/util.js",revision:"93df73e970157aa7be964ffd2d74db53"},{url:"js/web.js",revision:"61897767526d38810dc7c74530ab0802"},{url:"js/webpack/bundle.js",revision:"5c673ebb24f9bc109dfb61a89202ccae"},{url:"lib/CanvasFrame.js",revision:"1c1beeb4c3b3a988c89d9c483cf55e63"},{url:"lib/color-picker.min.js",revision:"bffb296db303f8e24af837b0da9e86cb"},{url:"lib/fik.min.js",revision:"44bdb7734b8aaa3aab95c31527f1a99d"},{url:"lib/FileSaver.js",revision:"3daea98fde9083b3dd2dad5b9e5a1fdc"},{url:"lib/gif.js",revision:"bad70e3decddb558276a10b812d73318"},{url:"lib/gif.worker.js",revision:"5bbe2423b4329a2ea8e2cbe4cf3e996c"},{url:"lib/GLTFExporter.js",revision:"96eda621645a80e006f7a521838e826a"},{url:"lib/jimp.min.js",revision:"78838d659a3a10be280a3e35e0507849"},{url:"lib/jquery-ui.min.js",revision:"11520c7cf9ca2fa8f5ca7bd3b54f4806"},{url:"lib/jquery.js",revision:"7c14a783dfeb3d238ccd3edd840d82ee"},{url:"lib/jszip.min.js",revision:"9927b911fee8d35162919d3790c7d492"},{url:"lib/lzutf8.js",revision:"37d1ff3b0710ba8961bcdc2c560baa17"},{url:"lib/marked.min.js",revision:"589a61c766b709a5767f76b05176459a"},{url:"lib/molang-prism-syntax.js",revision:"615213880475b525fd5d61a0c1701b75"},{url:"lib/molang.umd.js",revision:"de63d1cd4f5c9bab37eb338f369fe231"},{url:"lib/peer.min.js",revision:"1583c5e728d7103239fc78af7cec26da"},{url:"lib/prism.js",revision:"f60031ca28963cd4f765111f42cbf615"},{url:"lib/spectrum.js",revision:"84454f88b12cbb76ce8ccdec653a2ae8"},{url:"lib/targa.js",revision:"17c5ce65af686baa97294748f929541e"},{url:"lib/three_custom.js",revision:"461c26c501bb7415ed90c370cd09cf43"},{url:"lib/three.min.js",revision:"a57b7b044dafea72f319d2e5f15bcca8"},{url:"lib/vue_sortable.js",revision:"87cfedd91d600fb8d44668a0e83d4101"},{url:"lib/vue.min.js",revision:"b21b8531847604ab5f2f5caaef51ba31"},{url:"lib/VuePrismEditor.min.js",revision:"efef421619d0f374a7a61e1a011cdac9"},{url:"lib/wintersky.umd.js",revision:"bd6bdaaf35e8cc3022ade8cd6c8a10bf"},{url:"css/dialogs.css",revision:"6b6106413e8ffd869fedfce8117a76a6"},{url:"css/fontawesome.css",revision:"7731aad09a83fba53de018c0c71d5e8a"},{url:"css/general.css",revision:"385e52ec6271f54e1330422591ff35e4"},{url:"css/jquery-ui.min.css",revision:"2fedc6428e0606214da247b667d19edb"},{url:"css/panels.css",revision:"a2a2b5046a4ede12cbf26b30bed8a746"},{url:"css/prism.css",revision:"d67816ad66eac995b77611057f3df62f"},{url:"css/setup.css",revision:"79a0a8f0d4636712eff810e6139302e2"},{url:"css/spectrum.css",revision:"0a6aa66000ee92d6d02fdb3aa559f83b"},{url:"css/w3.css",revision:"04db708c100ea3937a3a5bf138cfcbf3"},{url:"css/window.css",revision:"581a62da0c7a342c3d0fdc769f026a6f"},{url:"assets/armor_stand.png",revision:"3df02c489fe7757dab55113d4fc057fd"},{url:"assets/brush.png",revision:"b6a28bb79f9dea063d7a2ac620a3236a"},{url:"assets/hud.png",revision:"049320fa871e4fbe54978dd6043acd8c"},{url:"assets/inventory_full.png",revision:"430fc3c0627f04302d457eead5e1fa16"},{url:"assets/inventory_nine.png",revision:"28cc307e3f2ee4570532fe6ee01a6131"},{url:"assets/item_frame.png",revision:"08eaa797bfb1ceb3784b6fa04ce77387"},{url:"assets/logo_cutout.svg",revision:"1a2b2e5db76846d910af304e87605aee"},{url:"assets/logo_text_white.svg",revision:"4f6a327584c59f915bc0b302de6eab76"},{url:"assets/missing_blend.png",revision:"5d055c1476e74bcdfd987ab62045b8a6"},{url:"assets/missing.png",revision:"462b3d598e49c3bbd453bb01d88ac6aa"},{url:"assets/north.png",revision:"d6c44f75fe7a6dd16927b9b8d8d0e9c2"},{url:"assets/player_skin.png",revision:"bd60891dc6eacb8f038556dfdb1dadcc"},{url:"assets/poses/aiming.svg",revision:"88e040ebed82427401daa4c1ec0b29a9"},{url:"assets/poses/crouching.svg",revision:"4c9304b087532d8dbe853a9baf642946"},{url:"assets/poses/jumping.svg",revision:"b912ecda44f4f6d90dad6b89b23c9238"},{url:"assets/poses/natural.svg",revision:"c5d4ae0d520d2d32c832d43cf0881a83"},{url:"assets/poses/none.svg",revision:"a3d531b9f73e1676b39b162a8a635a53"},{url:"assets/poses/sitting.svg",revision:"a0a43aa643a7f969426ce3d23dcba420"},{url:"assets/poses/walking.svg",revision:"b005089f98c836d3f022d4a778e38cea"},{url:"assets/rotate_cursor.png",revision:"092b9000c5901c27d4bee37236f6407c"},{url:"assets/splash_art.png",revision:"fe6ebfaaff3fedb678f5916ec2ea77a1"},{url:"assets/uv_preview.png",revision:"dc46b13a7544fe5b4381ef8295c72c8b"},{url:"assets/vertex.png",revision:"6b314afc9e5a153db6798cf8c0a93918"},{url:"assets/zombie.png",revision:"648e846e49c7563eb2625f39b76155b2"},{url:"font/Assistant-Bold.ttf",revision:"d582391da9a68daf10a2ed2514c33826"},{url:"font/Assistant-ExtraBold.ttf",revision:"f2bbc6bae2ee3ce641adc1bb1a655371"},{url:"font/Assistant-ExtraLight.ttf",revision:"5e4d348ae3eca48143c0274a3124a9c0"},{url:"font/Assistant-Light.ttf",revision:"5415f395c1567a5c19efc1dc2892927a"},{url:"font/Assistant-Regular.ttf",revision:"e2b46dd69f54e57767ceef1d5fc8e688"},{url:"font/Assistant-SemiBold.ttf",revision:"d6759edb35ac7f29a029caa1192c010d"},{url:"font/fa-brands-400.woff2",revision:"a9afdb72826cde196ddf29eb8f9d0f8f"},{url:"font/fa-regular-400.woff2",revision:"f817938f131b0cabee81e59a96f9c2a6"},{url:"font/fa-solid-900.woff2",revision:"297973a488f688271dd223d542ba2697"},{url:"font/icomoon.ttf",revision:"6c533223c54e6efaff1e3bd2cf997750"},{url:"font/icomoon.woff",revision:"edb58213d61e108e1c28f396aec82691"},{url:"font/MaterialIcons-Regular.ttf",revision:"548cdd0e4a7d21c2a9c3bc8580254239"}],{})}));
