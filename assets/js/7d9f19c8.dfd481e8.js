"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[82631],{2104:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return h}});var o=n(83117),s=n(80102),a=(n(67294),n(3905)),r=["components"],i={description:"IOTA Smart Contracts Consensus",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","consensus","explanation"]},c=void 0,l={unversionedId:"guide/core_concepts/consensus",id:"guide/core_concepts/consensus",title:"consensus",description:"IOTA Smart Contracts Consensus",source:"@site/external/wasp/documentation/docs/guide/core_concepts/consensus.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/consensus",permalink:"/smart-contracts/guide/core_concepts/consensus",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/consensus.md",tags:[],version:"current",frontMatter:{description:"IOTA Smart Contracts Consensus",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","consensus","explanation"]},sidebar:"tutorialSidebar",previous:{title:"validators",permalink:"/smart-contracts/guide/core_concepts/validators"},next:{title:"states",permalink:"/smart-contracts/guide/core_concepts/states"}},u={},h=[{value:"Consensus on computations",id:"consensus-on-computations",level:2},{value:"Proof of consensus",id:"proof-of-consensus",level:2},{value:"The Consensus Algorithm",id:"the-consensus-algorithm",level:2}],d={toc:h};function p(e){var t=e.components,n=(0,s.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"consensus"},"Consensus"),(0,a.kt)("h2",{id:"consensus-on-computations"},"Consensus on computations"),(0,a.kt)("p",null,"Even if all committee nodes are honest (i.e. they have no malicious intent), there are factors which may make each node see things differently. This can lead to different inputs to the same program on different nodes and, consequently, to different results."),(0,a.kt)("p",null,"There are several possible reasons for such an apparently non-deterministic outcome."),(0,a.kt)("p",null,"Each committee node has its own access to the UTXO ledger, i.e. committee nodes are usually connected to different IOTA nodes. The reason for this is to not make access to the UTXO ledger a single point of failure, i.e. we also want access to the Tangle to be distributed. This may often lead to a slightly different perception of some aspects of the ledger, for example of the token balance in a particular address. Also, each node has its own local clock and those clocks may be slightly skewed, so there isn\u2019t an objective time for nodes."),(0,a.kt)("p",null,"The requests (UTXOs) may reach Wasp nodes in an arbitrary order and with arbitrary delays (even if these are usually close to the network latency)."),(0,a.kt)("p",null,"Before starting calculations, nodes are required to have consensus on the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The current state of the chain i.e. on the state output"),(0,a.kt)("li",{parentName:"ul"},"Timestamp to be used for the next state transaction"),(0,a.kt)("li",{parentName:"ul"},"Ordered batch of requests to be processed"),(0,a.kt)("li",{parentName:"ul"},"Address where node fees for processing the request must be sent (if enabled)"),(0,a.kt)("li",{parentName:"ul"},"Mana pledge targets")),(0,a.kt)("p",null,"In order to achieve a bigger throughput, the committee picks requests from the on-ledger backlog and processes requests in batches, not one by one. This means the committee has to have a consensus on the batch of the requests and the order of the requests in the batch. After at least a quorum of committee nodes have a consensus on the above, honest committee members will always produce identical results of calculations."),(0,a.kt)("h2",{id:"proof-of-consensus"},"Proof of consensus"),(0,a.kt)("p",null,"Suppose a quorum of committee nodes has reached consensus on inputs and produced identical results, these being the block of state updates and the anchor transaction."),(0,a.kt)("p",null,"The anchor transaction contains chain state transition, the AliasOutput and token transfers, so it must be signed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"It is only possible to produce valid signatures of inputs of the anchor transaction by the quorum")," of nodes. In this case, a confirmed anchor transaction becomes a cryptographical ",(0,a.kt)("strong",{parentName:"p"},"proof of consensus")," in the committee.  "),(0,a.kt)("p",null,"To achieve this, IOTA Smart Contracts uses ",(0,a.kt)("strong",{parentName:"p"},"BLS threshold signatures in combination with polynomial (Shamir) secret sharing")," to identify the address controlling the chain state. In order for the secret keys to be distributed across the chain validators, a DKG (Distributed Key Generation) procedure is executed when starting a chain (using the Rabin-Gennaro algorithm)."),(0,a.kt)("h2",{id:"the-consensus-algorithm"},"The Consensus Algorithm"),(0,a.kt)("p",null,"The committee is of fixed size, thus we use a Byzantine Fault Tolerant (BFT) Algorithm, which guarantees consistency and byzantine fault tolerance if less than \u2153 of nodes are malicious."),(0,a.kt)("p",null,"As a basis for the IOTA Smart Contracts consensus, the Asynchronous Common Subset (ACS) part of the HoneyBadgerBFT algorithm is used, with the exception of how the proposals are combined."),(0,a.kt)("p",null,"The rest of the consensus algorithm is built on top of the ACS. Each node supplies to the ACS its batch proposal which indicates a set of Request IDs, a timestamp, consensus and access mana pledge addresses, fee destination and a partial signature for generating non-forgeable entropy. Upon termination of the ACS, each honest node gets the same set of such proposals and aggregates them into the final batch in a deterministic way."),(0,a.kt)("p",null,"It is ensured that all honest nodes have the same input for the VM. After running the selected batch, the VM results are then collectively signed using the threshold signature. The signed transaction can be published by any node at this point. In order to minimize the load on the IOTA network, the nodes calculate a delay for posting the transaction to the network based on a deterministic permutation of the nodes relative to the local perception of time."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The comprehensive overview of architectural design decisions of IOTA Smart Contracts can be found in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/raw/master/documentation/ISC_WP_Nov_10_2021.pdf"},"whitepaper"),".  "))))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),p=s,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);