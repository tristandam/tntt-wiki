"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[43119],{3002:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),s=["components"],i={description:"As there is no way for the Wasm code to access any memory outside its own memory space, the WasmLib interface provides a number of proxies to make accessing data within the IOTA Smart Contracts sandbox as seamless as possible.",image:"/img/wasm_vm/Proxies.png",keywords:["proxies","sandbox","wasm","value proxies","container proxies","array proxies","map proxies","explanation"]},c=void 0,p={unversionedId:"guide/wasm_vm/proxies",id:"guide/wasm_vm/proxies",title:"proxies",description:"As there is no way for the Wasm code to access any memory outside its own memory space, the WasmLib interface provides a number of proxies to make accessing data within the IOTA Smart Contracts sandbox as seamless as possible.",source:"@site/external/wasp/documentation/docs/guide/wasm_vm/proxies.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/proxies",permalink:"/smart-contracts/guide/wasm_vm/proxies",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/wasm_vm/proxies.mdx",tags:[],version:"current",frontMatter:{description:"As there is no way for the Wasm code to access any memory outside its own memory space, the WasmLib interface provides a number of proxies to make accessing data within the IOTA Smart Contracts sandbox as seamless as possible.",image:"/img/wasm_vm/Proxies.png",keywords:["proxies","sandbox","wasm","value proxies","container proxies","array proxies","map proxies","explanation"]},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/smart-contracts/guide/wasm_vm/intro"},next:{title:"types",permalink:"/smart-contracts/guide/wasm_vm/types"}},l={},u=[{value:"Value Proxies",id:"value-proxies",level:2},{value:"Container Proxies",id:"container-proxies",level:2},{value:"Map Proxies",id:"map-proxies",level:3},{value:"Array Proxies",id:"array-proxies",level:3},{value:"Example That Shows the Use of Proxies in WasmLib",id:"example-that-shows-the-use-of-proxies-in-wasmlib",level:2}],m={toc:u};function d(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-access-proxies"},"Data Access Proxies"),(0,o.kt)("p",null,"As we cannot call the IOTA Smart Contracts sandbox functions directly, we need a library to access the\nsandbox functionality. There is no way for the Wasm code to access any memory outside\nits own memory space. Therefore, any data that is governed by the IOTA Smart Contracts sandbox has to be\ncopied in and out of that memory space through well-defined protected channels in the Wasm\nruntime system."),(0,o.kt)("p",null,"To make this whole process as seamless as possible the WasmLib interface uses so-called\n",(0,o.kt)("inlineCode",{parentName:"p"},"proxies"),". Proxies are objects that can perform the underlying data transfers between the\nseparate systems. Proxies are like data references in that regard, they refer to the\nactual objects or values stored on the IOTA Smart Contracts host, and know how to manipulate them. Proxies\nprovide a consistent interface to access the smart contract data."),(0,o.kt)("h2",{id:"value-proxies"},"Value Proxies"),(0,o.kt)("p",null,"The most basic proxies are value proxies. They refer to a single value instance stored on\nthe IOTA Smart Contracts host. All values are stored as key/value pairs in container objects on the IOTA Smart Contracts\nhost. Value proxies refer to their values through an object id and key id combination that\nuniquely defines the value's location in the container object."),(0,o.kt)("h2",{id:"container-proxies"},"Container Proxies"),(0,o.kt)("p",null,"To keep things as simple and understandable as possible these are limited to only two\ndifferent kinds. Array proxies and map proxies. Because we allow nesting of container\nobjects, these are enough to be able to define quite complex data structures. The\nunderlying IOTA Smart Contracts sandbox provides access to its data in the form of simple key/value stores\nthat can have arbitrary byte data for both key and value. WasmLib provides an abstraction\non top of this one-dimensional storage system that supports nesting of maps and arrays,\nvery similar to the way objects in YAML or JSON can be nested."),(0,o.kt)("h3",{id:"map-proxies"},"Map Proxies"),(0,o.kt)("p",null,"A map is a key/value store where the key is one of our supported value types. Maps always\nstore elements of the same data type, which can be one of our supported value types, a\nuser-defined data type, or another container object (map or array)."),(0,o.kt)("h3",{id:"array-proxies"},"Array Proxies"),(0,o.kt)("p",null,"An array can be seen as a special kind of map. Its key is an integer value with the\nproperty that keys always form a sequence from 0 to N-1 for an array with N elements.\nArrays always store elements of the same data type, which can be one of our supported\nvalue types, a user-defined type, or a map. We do not support arrays of arrays at this\nmoment."),(0,o.kt)("h2",{id:"example-that-shows-the-use-of-proxies-in-wasmlib"},"Example That Shows the Use of Proxies in WasmLib"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(22388).Z},(0,o.kt)("img",{alt:"Proxies in WasmLib",src:a(84842).Z,width:"862",height:"686"}))),(0,o.kt)("p",null,"In this example we have a single map in the IOTA Smart Contracts state storage that contains a number of\nkey/value combinations (Key 1 through Key 4). One of them (Key 4)\nrefers to an array, which in turn contains indexed values stored at indexes 0 through N.\nNotice how the WasmLib proxies mirror these exactly. There is a container proxy for every\ncontainer, and a value proxy for each value stored. Each container proxy can uniquely\nidentify the container it references through the container's id. Each value proxy uniquely\nidentifies the value it references through the container id of the container it is in, and\nthe key id (or index) that correlates to its position in the container."),(0,o.kt)("p",null,"Note that despite the one-to-one correspondence in the example it is not necessary for a\nsmart contract function to define a proxy for every value or container in the IOTA Smart Contracts state\nstorage. In practice a function will only define proxies to data that it actually needs to\naccess."),(0,o.kt)("p",null,"In the next section we will go into more detail about the supported ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/types"},"data types"),"."))}d.isMDXComponent=!0},22388:function(e,t,a){t.Z=a.p+"assets/files/Proxies-c3cdc1c9d96aa034a93f84a429736db1.png"},84842:function(e,t,a){t.Z=a.p+"assets/images/Proxies-c3cdc1c9d96aa034a93f84a429736db1.png"},3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,s(s({ref:t},l),{},{components:a})):r.createElement(h,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);