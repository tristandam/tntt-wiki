"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[65510],{16007:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={description:"Each chain is run by a network of validator nodes which run a consensus on the chain state update.",image:"/img/logo/WASP_logo_dark.png",keywords:["validators","validator nodes","consensus","state update","explanation"]},s=void 0,u={unversionedId:"guide/core_concepts/validators",id:"guide/core_concepts/validators",title:"validators",description:"Each chain is run by a network of validator nodes which run a consensus on the chain state update.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/validators.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/validators",permalink:"/smart-contracts/guide/core_concepts/validators",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/validators.md",tags:[],version:"current",frontMatter:{description:"Each chain is run by a network of validator nodes which run a consensus on the chain state update.",image:"/img/logo/WASP_logo_dark.png",keywords:["validators","validator nodes","consensus","state update","explanation"]},sidebar:"tutorialSidebar",previous:{title:"iscp-architecture",permalink:"/smart-contracts/guide/core_concepts/iscp-architecture"},next:{title:"consensus",permalink:"/smart-contracts/guide/core_concepts/consensus"}},l={},d=[],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"validators"},"Validators"),(0,a.kt)("p",null,"Each chain is run by a network of validator nodes, which run a consensus on the chain state updates. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp"},"Wasp")," node is an implementation of the validator node. The validators of the chain form a committee, a bound together closed set of nodes. The committee of the chain may change, allowing new validators and validator nodes to be added or replaced. This also makes the chain itself agnostic to its validators (the committee)."),(0,a.kt)("p",null,"Only when a supermajority of the validators (the quorum) of a chain reaches ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/consensus"},"consensus"),", a new state update can be signed, which unlocks the AliasOutput for the chain and produces the next state UTXO."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);