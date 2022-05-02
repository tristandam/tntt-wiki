"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[73732],{51397:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={description:"Official IOTA Wallet Library Software which can be used to easily integrate an IOTA Wallet into your application",image:"/img/logo/wallet_light.png",keywords:["requirements","wallet","software","library","rust","python","nodejs","java"]},s=void 0,c={unversionedId:"welcome",id:"welcome",title:"welcome",description:"Official IOTA Wallet Library Software which can be used to easily integrate an IOTA Wallet into your application",source:"@site/external/wallet.rs/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/wallet.rs/welcome",editUrl:"https://github.com/iotaledger/wallet.rs/edit/mainnet/external/wallet.rs/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{description:"Official IOTA Wallet Library Software which can be used to easily integrate an IOTA Wallet into your application",image:"/img/logo/wallet_light.png",keywords:["requirements","wallet","software","library","rust","python","nodejs","java"]},sidebar:"docs",next:{title:"overview",permalink:"/wallet.rs/overview"}},p={},u=[{value:"IOTA 1.5 (Chrysalis) in a Nutshell",id:"iota-15-chrysalis-in-a-nutshell",level:2},{value:"Testnet",id:"testnet",level:2},{value:"Joining the Discussion",id:"joining-the-discussion",level:2},{value:"What You Will Find Here",id:"what-you-will-find-here",level:2}],d={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welcome"},"Welcome"),(0,i.kt)("p",null,"This is the documentation for the official IOTA Wallet Library Software. The documentation can be used to easily integrate an IOTA Wallet into your applications. You can read more about core principles behind IOTA client libraries in the following ",(0,i.kt)("a",{parentName:"p",href:"https://blog.iota.org/the-new-iota-client-libraries-harder-better-faster-stronger/"},"blog post"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," is a general wallet library written in Rust. It is being utilized by our wallet software ",(0,i.kt)("inlineCode",{parentName:"p"},"Firefly")," and other software components across IOTA ecosystem. ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," contains all the logic to safely build wallets or integrations that require value-based transfers (such as exchanges, pay-as-you-go systems, etc.). ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," includes account state management and backup, account creation, transferring tokens and much more. Needless to say, it is also based on our official ",(0,i.kt)("em",{parentName:"p"},"one-source-code-of-truth")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs"},"IOTA Rust library")," and can be integrated with the ",(0,i.kt)("a",{parentName:"p",href:"https://blog.iota.org/iota-stronghold-6ce55d311d7c/"},"Stronghold enclave")," to achieve a maximum level of security."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use Stronghold to store account data of the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs"),". It integrates the best security practices and is open-source."))),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, developers do not need to use a self-generated seed anymore. By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"Stronghold")," will create and store the encrypted seed at rest. It is not possible to extract the seed from ",(0,i.kt)("inlineCode",{parentName:"p"},"Stronghold")," for security purposes. ",(0,i.kt)("inlineCode",{parentName:"p"},"Stronghold")," uses encrypted snapshots that can easily be backed up and securely shared between devices. These snapshots are further secured with a password."),(0,i.kt)("h2",{id:"iota-15-chrysalis-in-a-nutshell"},"IOTA 1.5 (Chrysalis) in a Nutshell"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/introduction/what_is_chrysalis"},"Developer Guide to Chrysalis")," explains all the main concepts behind the IOTA Chrysalis in detail."),(0,i.kt)("p",null,"Please, see a summary of changes in comparison to IOTA 1.0 at ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/overview"},"Chrysalis documentation"),"."),(0,i.kt)("h2",{id:"testnet"},"Testnet"),(0,i.kt)("p",null,"To join the Chrysalis public testnet checkout this ",(0,i.kt)("a",{parentName:"p",href:"https://blog.iota.org/chrysalis-phase-2-testnet-out-now/"},"blog post"),". More information about Chrysalis components is available at the ",(0,i.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/"},"Chrysalis documentation portal"),"."),(0,i.kt)("h2",{id:"joining-the-discussion"},"Joining the Discussion"),(0,i.kt)("p",null,"If you want to get involved in discussions about this library, or you're looking for support, go to the #clients-discussion channel on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.iota.org"},"Discord"),"."),(0,i.kt)("h2",{id:"what-you-will-find-here"},"What You Will Find Here"),(0,i.kt)("p",null,"This documentation has four paths:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"/wallet.rs/overview"},"Overview"),": a detailed overview of the wallet library. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/wallet.rs/libraries/overview"},"Libraries"),": all available programming languages and their resources."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"/wallet.rs/specification"},"Specification"),": a detailed explanation requirements and functionality."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/wallet.rs/contribute"},"Contribute"),": how you can work on the wallet software, get in touch, join the community and become part of the X-Team!")))}h.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);