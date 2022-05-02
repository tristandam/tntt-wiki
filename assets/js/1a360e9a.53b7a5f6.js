"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[1879],{65358:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],s={id:"why-is-iota-feeless",title:"Why is IOTA Feeless?",description:"The unique feature of IOTA is the absence of any Fee's in the protocol. Here we explain how this is achieved."},c=void 0,l={unversionedId:"about-iota/why-is-iota-feeless",id:"about-iota/why-is-iota-feeless",title:"Why is IOTA Feeless?",description:"The unique feature of IOTA is the absence of any Fee's in the protocol. Here we explain how this is achieved.",source:"@site/internal/learn/about-iota/why-is-iota-feeless.md",sourceDirName:"about-iota",slug:"/about-iota/why-is-iota-feeless",permalink:"/learn/about-iota/why-is-iota-feeless",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/about-iota/why-is-iota-feeless.md",tags:[],version:"current",lastUpdatedAt:1651465177,formattedLastUpdatedAt:"5/1/2022",frontMatter:{id:"why-is-iota-feeless",title:"Why is IOTA Feeless?",description:"The unique feature of IOTA is the absence of any Fee's in the protocol. Here we explain how this is achieved."},sidebar:"learn",previous:{title:"Value Transfer",permalink:"/learn/about-iota/value-transfer"},next:{title:"Roadmap to Decentralization",permalink:"/learn/about-iota/roadmap-to-decentralization"}},h={},u=[{value:"Blockchains",id:"blockchains",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"why-is-iota-feeless"},"Why is IOTA Feeless?"),(0,r.kt)("p",null,"Most decentralized cryptocurrencies, including all of the best-known ones \u2013 Bitcoin, Ethereum, Dogecoin, and many others \u2013 require that anyone making a transaction on the network pay a fee for the services provided. This is not merely an add-on feature of those cryptocurrencies that can easily be removed. It is a fundamental aspect of how they work."),(0,r.kt)("p",null,"IOTA was designed to require no fees to process a transaction. In any transaction, the amount deducted from the sender's wallet is exactly the same as the amount added to the recipient's wallet."),(0,r.kt)("h2",{id:"blockchains"},"Blockchains"),(0,r.kt)("p",null,"There are three major types of participants in many blockchain-based cryptocurrencies, including Bitcoin: nodes, miners, and users. To learn more about these participants, we first have to learn a bit more about blockchain itself."),(0,r.kt)("p",null,'A blockchain is a ledger published to and tracked by any number of independent participants. These participants, who track the current state of the ledger, are called "nodes". The structure of the ledger is a series of blocks of information chained together in chronological order, hence the name "blockchain". Every block of information contains a header and a body.'),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"block header")," contains: a four-byte version number, a 32-byte double hash of the previous block's header, a 32-byte Merkle root of the transactions in the current block, the four-byte Unix time when the block was mined, a four-byte rounded off version of the target difficulty in mining that block, and finally a four-byte nonce that can be any value set by the miner in order to meet a specific condition we'll discuss more in a moment."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"block body")," contains a protocol-dependent number of bytes, often 1,000,000 or more, of transaction data."),(0,r.kt)("p",null,"We mentioned mining several times above. Here we look at what that means for cryptocurrencies built on a proof of work model. When a given block has just been added to the blockchain, a race begins. In this race, to mine the next block the participants \u2013 most commonly referred to as miners \u2013 gather as many open transactions as they can into a new block body and calculate the Merkle root from that, and they calculate other information for their new block header as well, all except the four-byte nonce we mentioned above."),(0,r.kt)("p",null,"The miner can set this nonce to any value they like, but the goal in doing so is to make the hash of the block header meet the target difficulty. To slightly oversimplify it, the nonce is changed and the header hashed repeatedly until the resulting hash begins with enough zeros. At the current difficulty, approximately one in every 75,000,000,000,000,000,000,000 possible headers will produce a hash with enough leading zeros to be valid. When one is found, the block is mined and can be sent to the nodes where it is added to the blockchain, and the race begins again for the next block."),(0,r.kt)("p",null,"This race to mine the next block is a key security feature in the blockchain. If one could mine blocks at will, an attacker could make a competing blockchain and, by getting enough nodes to publish it, could create fraudulent transactions, reverse legitimate ones, or any of a number of other actions that would rapidly cause trust in the system and the value of the associated coin to trend to zero."),(0,r.kt)("p",null,"Because each block in the blockchain contains a double hash of the header of the previous block, any change made earlier in the blockchain requires all subsequent blocks to also be changed, and these changes require the newly-changed blocks to be mined again. It is easy to see that this system provides security not only for new transactions, but that the older a transaction in the blockchain is, the more secure it becomes."),(0,r.kt)("p",null,"So miners are critical to the blockchain. But mining is expensive work and must be financially compensated."),(0,r.kt)("p",null,"When a block is mined, the successful miner is allowed to add a number of coins \u2013 the ",(0,r.kt)("strong",{parentName:"p"},"block reward")," \u2013 to his or her own wallet, the number being set by the protocol. These newly minted coins can be sold by the miner and are currently the primary way the miners are paid for their work. Unfortunately for miners, many crypto protocols reduce the size of the block reward over time. But there is another way miners can still get paid. This is where the user comes in."),(0,r.kt)("p",null,"The role of users is simple. They buy, sell, and trade the currency native to their chosen blockchain. If blockchain transactions were feeless, the user needs only use their private key to sign a transaction, putting a set value of crypto under the control of the recipient whose public key is included in the transaction."),(0,r.kt)("p",null,'But there is a problem for the user here. The target difficulty of mining blocks is designed to force new blocks to be mined at a relatively constant rate. And the blocks themselves usually have a fixed size which in turn fixes a limit on the number of transactions that can be included per block. If there are more transactions waiting to be included in a block, the miners will usually select transactions that include payment (a "tip") to whomever mines the block the transaction is included in. The higher the fee, the sooner it is selected.'),(0,r.kt)("p",null,"No solution has been proposed yet that can get miners on blockchain to adequately secure the system but doesn't make users pay for it in some way."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,p=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return n?o.createElement(p,i(i({ref:t},h),{},{components:n})):o.createElement(p,i({ref:t},h))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);