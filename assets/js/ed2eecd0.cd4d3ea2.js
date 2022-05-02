"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29177],{92033:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={id:"smart-contracts-validators",title:"Validators",description:"In this article you will learn how the IOTA Smart Contract validators works.",keywords:["Validator","Smart Contracts","wasp","ISCP","Node"]},c=void 0,l={unversionedId:"future/smart-contracts/smart-contracts-validators",id:"future/smart-contracts/smart-contracts-validators",title:"Validators",description:"In this article you will learn how the IOTA Smart Contract validators works.",source:"@site/internal/learn/future/smart-contracts/03_validators.md",sourceDirName:"future/smart-contracts",slug:"/future/smart-contracts/smart-contracts-validators",permalink:"/learn/future/smart-contracts/smart-contracts-validators",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/future/smart-contracts/03_validators.md",tags:[],version:"current",lastUpdatedAt:1651465177,formattedLastUpdatedAt:"5/1/2022",sidebarPosition:3,frontMatter:{id:"smart-contracts-validators",title:"Validators",description:"In this article you will learn how the IOTA Smart Contract validators works.",keywords:["Validator","Smart Contracts","wasp","ISCP","Node"]},sidebar:"learn",previous:{title:"Smart Contract VM & Languages",permalink:"/learn/future/smart-contracts/smart-contracts-VM-and-languages"},next:{title:"Chains",permalink:"/learn/future/smart-contracts/smart-contracts-chains"}},u={},d=[{value:"The Committee",id:"the-committee",level:2},{value:"Selection and Rotation of Committees",id:"selection-and-rotation-of-committees",level:2},{value:"Further Readings",id:"further-readings",level:2}],m={toc:d};function f(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"validators"},"Validators"),(0,o.kt)("p",null,"In this article, you will learn how the IOTA Smart Contract validators work."),(0,o.kt)("p",null,"A validator is an IOTA Smart Contracts Node, which verifies the correctness of incoming messages from other nodes. The current node implementation is called Wasp and is written in Go. Each validator contains a copy of the whole chain. This redundancy makes the contract chain also a distributed database."),(0,o.kt)("p",null,"Each contract chain is run by a fixed committee of validator nodes. For this reason, each contract chain is a distributed and redundant structure - ",(0,o.kt)("strong",{parentName:"p"},"a distributed processor"),"."),(0,o.kt)("h2",{id:"the-committee"},"The Committee"),(0,o.kt)("p",null,"A committee is a Smart Contracts chain's main element of security. One of the most significant characteristics of a committee is the number of participants, the ",(0,o.kt)("inlineCode",{parentName:"p"},"quorum")," factor."),(0,o.kt)("p",null,'"Off-chain" smart contracts, like in IOTA Smart Contracts, are executed outside of the core protocol. That means that only a subset of validators, the committee, needs to execute the Smart Contracts and a consensus can be reached outside of the core protocol, which results in a scalable and efficient system.'),(0,o.kt)("p",null,"Each IOTA Smart Contract chain is run under the consensus of its committee, so each chain is a distributed system without a single point of failure."),(0,o.kt)("p",null,"Only when a supermajority of the validators of a committee reaches consensus, the result gets added to the chain. The amount of the validators to reach a consensus is configurable for each chain."),(0,o.kt)("p",null,"The committee itself can also be variable in size - from a few nodes up to hundreds of nodes, and each node can be part of many different committees."),(0,o.kt)("h2",{id:"selection-and-rotation-of-committees"},"Selection and Rotation of Committees"),(0,o.kt)("p",null,"The process of selecting nodes to form a committee must be approached manually. This flexibility allows for different models suited to different use cases: selection can be based on an open market of nodes, it can be the decision of a consortium of interested parties, or indeed of a single entity."),(0,o.kt)("p",null,"The committee running the contract chain can be changed (rotated) to a new committee with another set of private keys and another address."),(0,o.kt)("h2",{id:"further-readings"},"Further Readings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can learn how to set up a Smart Contracts node in the ",(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/guide/chains_and_nodes/running-a-node"},"Build section"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/guide/chains_and_nodes/wasp-cli#configuration"},"Learn how to configure a committee")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/guide/chains_and_nodes/running-a-node"},"Participate in the network running a Smart Contracts node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/guide/chains_and_nodes/setting-up-a-chain#trust-setup"},"Build a network with trusted Smart Contract nodes"))),(0,o.kt)("p",null,"In the next article, you will learn everything about the chain, where you can deploy Smart Contracts."))}f.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=l(n),f=r,h=m["".concat(c,".").concat(f)]||m[f]||d[f]||o;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);