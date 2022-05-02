"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[17314],{46788:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return g}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),l=["components"],o=[{value:"API Reference",id:"api-reference",level:2},{value:"Account Examples",id:"account-examples",level:2},{value:"Low-Level Examples",id:"low-level-examples",level:2},{value:"Install the library:",id:"install-the-library",level:2},{value:"Build",id:"build",level:2},{value:"Minimum Requirements",id:"minimum-requirements",level:2},{value:"NodeJS Usage",id:"nodejs-usage",level:2},{value:"Web Setup",id:"web-setup",level:2},{value:"Rollup",id:"rollup",level:3},{value:"Webpack",id:"webpack",level:3},{value:"Web Usage",id:"web-usage",level:3},{value:"Examples in the Wild",id:"examples-in-the-wild",level:2}],s={toc:o};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iota-identity-wasm"},"IOTA Identity WASM"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is the beta version of the official WASM bindings for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs"},"IOTA Identity"),".")),(0,r.kt)("h2",{id:"api-reference"},(0,r.kt)("a",{parentName:"h2",href:"https://wiki.iota.org/identity.rs/libraries/wasm/api_reference"},"API Reference")),(0,r.kt)("h2",{id:"account-examples"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/iotaledger/identity.rs/blob/main/bindings/wasm/examples-account/README.md"},"Account Examples")),(0,r.kt)("h2",{id:"low-level-examples"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/iotaledger/identity.rs/blob/main/bindings/wasm/examples/README.md"},"Low-Level Examples")),(0,r.kt)("h2",{id:"install-the-library"},"Install the library:"),(0,r.kt)("p",null,"Latest Release: this version matches the main branch of this repository, is stable and will have changelogs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/identity-wasm\n")),(0,r.kt)("p",null,"Development Release: this version matches the dev branch of this repository, may see frequent breaking changes and has the latest code changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/identity-wasm@dev\n")),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("p",null,"Alternatively, you can build the bindings if you have Rust installed. If not, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://rustup.rs"},"rustup.rs")," for the installation. "),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rustwasm/wasm-bindgen"},(0,r.kt)("inlineCode",{parentName:"a"},"wasm-bindgen-cli")),". A manual installation is required because we use the ",(0,r.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/wasm-bindgen/reference/weak-references.html"},"Weak References")," feature, which ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rustwasm/wasm-pack/issues/930"},(0,r.kt)("inlineCode",{parentName:"a"},"wasm-pack")," does not expose"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install --force wasm-bindgen-cli\n")),(0,r.kt)("p",null,"Then, install the necessary dependencies using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("p",null,"and build the bindings for ",(0,r.kt)("inlineCode",{parentName:"p"},"node.js")," with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:nodejs\n")),(0,r.kt)("p",null,"or for the ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:web\n")),(0,r.kt)("h2",{id:"minimum-requirements"},"Minimum Requirements"),(0,r.kt)("p",null,"The minimum supported version for node is: ",(0,r.kt)("inlineCode",{parentName:"p"},"v16.0.0")),(0,r.kt)("h2",{id:"nodejs-usage"},"NodeJS Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const identity = require('@iota/identity-wasm/node')\n\nasync function main() {\n\n    // The creation step generates a keypair, builds an identity\n    // and publishes it to the IOTA mainnet.\n    const builder = new identity.AccountBuilder();\n    const account = await builder.createIdentity();\n\n    // Retrieve the DID of the newly created identity.\n    const did = account.did();\n\n    // Print the DID of the created Identity.\n    console.log(did.toString())\n\n    // Print the local state of the DID Document\n    console.log(account.document());\n\n    // Print the Explorer URL for the DID.\n    console.log(`Explorer Url:`, identity.ExplorerUrl.mainnet().resolverUrl(did));\n}\n\nmain()\n")),(0,r.kt)("h2",{id:"web-setup"},"Web Setup"),(0,r.kt)("p",null,"The library loads the WASM file with an HTTP GET request, so the .wasm file must be copied to the root of the dist folder."),(0,r.kt)("h3",{id:"rollup"},"Rollup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"rollup-plugin-copy"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install rollup-plugin-copy --save-dev\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the copy plugin usage to the ",(0,r.kt)("inlineCode",{parentName:"li"},"plugins")," array under ",(0,r.kt)("inlineCode",{parentName:"li"},"rollup.config.js"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Include the copy plugin\nimport copy from 'rollup-plugin-copy'\n\n// Add the copy plugin to the `plugins` array of your rollup config:\ncopy({\n  targets: [{\n    src: 'node_modules/@iota/identity-wasm/web/identity_wasm_bg.wasm',\n    dest: 'public',\n    rename: 'identity_wasm_bg.wasm'\n  }]\n})\n")),(0,r.kt)("h3",{id:"webpack"},"Webpack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"copy-webpack-plugin"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install copy-webpack-plugin --save-dev\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Include the copy plugin\nconst CopyWebPlugin= require('copy-webpack-plugin');\n\n// Add the copy plugin to the `plugins` array of your webpack config:\n\nnew CopyWebPlugin({\n  patterns: [\n    {\n      from: 'node_modules/@iota/identity-wasm/web/identity_wasm_bg.wasm',\n      to: 'identity_wasm_bg.wasm'\n    }\n  ]\n}),\n")),(0,r.kt)("h3",{id:"web-usage"},"Web Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as identity from "@iota/identity-wasm/web";\n\nidentity.init().then(() => {\n\n  // The creation step generates a keypair, builds an identity\n  // and publishes it to the IOTA mainnet.\n  let builder = new identity.AccountBuilder();\n  let account = await builder.createIdentity();\n\n  // Retrieve the DID of the newly created identity.\n  const did = account.did();\n\n  // Print the DID of the created Identity.\n  console.log(did.toString())\n\n  // Print the local state of the DID Document\n  console.log(account.document());\n\n});\n\n// or\n\n(async () => {\n  \n  await identity.init()\n    \n  // The creation step generates a keypair, builds an identity\n  // and publishes it to the IOTA mainnet.\n  let builder = new identity.AccountBuilder();\n  let account = await builder.createIdentity();\n\n  // Retrieve the DID of the newly created identity.\n  const did = account.did();\n\n  // Print the DID of the created Identity.\n  console.log(did.toString())\n\n  // Print the local state of the DID Document\n  console.log(account.document());\n  \n})()\n\n// Default path is "identity_wasm_bg.wasm", but you can override it like this\nawait identity.init("./static/identity_wasm_bg.wasm");\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"identity.init().then(<callback>)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"await identity.init()")," is required to load the wasm file (from the server if not available, because of that it will only be slow for the first time)"),(0,r.kt)("h2",{id:"examples-in-the-wild"},"Examples in the Wild"),(0,r.kt)("p",null,"You may find it useful to see how the WASM bindings are being used in existing applications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK"},"Zebra IOTA Edge SDK")," (mobile apps using Capacitor.js + Svelte)")))}u.isMDXComponent=!0;var d=["components"],p={title:"Getting Started with WASM",sidebar_label:"Getting Started",description:"Getting started with the IOTA Identity WASM Library.",image:"/img/Identity_icon.png",keywords:["WASM","install","npm","yarn","build","nodejs","webpack"]},c=void 0,m={unversionedId:"libraries/wasm/getting_started",id:"libraries/wasm/getting_started",title:"Getting Started with WASM",description:"Getting started with the IOTA Identity WASM Library.",source:"@site/external/identity.rs/documentation/docs/libraries/wasm/getting_started.md",sourceDirName:"libraries/wasm",slug:"/libraries/wasm/getting_started",permalink:"/identity.rs/libraries/wasm/getting_started",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/libraries/wasm/getting_started.md",tags:[],version:"current",frontMatter:{title:"Getting Started with WASM",sidebar_label:"Getting Started",description:"Getting started with the IOTA Identity WASM Library.",image:"/img/Identity_icon.png",keywords:["WASM","install","npm","yarn","build","nodejs","webpack"]},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/identity.rs/libraries/rust/troubleshooting"},next:{title:"Cheat Sheet",permalink:"/identity.rs/libraries/wasm/cheat_sheet"}},h={},g=o,b={toc:g};function y(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u,{mdxType:"GettingStarted"}))}y.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);