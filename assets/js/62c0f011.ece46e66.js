"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[79131],{43379:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],s={title:"Post",sidebar_label:"Post"},l=void 0,p={unversionedId:"specs/didcomm/protocols/post",id:"specs/didcomm/protocols/post",title:"Post",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/external/identity.rs/documentation/docs/specs/didcomm/protocols/post.md",sourceDirName:"specs/didcomm/protocols",slug:"/specs/didcomm/protocols/post",permalink:"/identity.rs/specs/didcomm/protocols/post",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/specs/didcomm/protocols/post.md",tags:[],version:"current",frontMatter:{title:"Post",sidebar_label:"Post"},sidebar:"docs",previous:{title:"Revocation Options",permalink:"/identity.rs/specs/didcomm/protocols/revocation-options"},next:{title:"Termination",permalink:"/identity.rs/specs/didcomm/protocols/termination"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Relationships",id:"relationships",level:3},{value:"Example Use-Cases",id:"example-use-cases",level:3},{value:"Roles",id:"roles",level:3},{value:"Interaction",id:"interaction",level:3},{value:"Messages",id:"messages",level:2},{value:"1. post",id:"post-message",level:3},{value:"Structure",id:"structure",level:4},{value:"Examples",id:"examples",level:4},{value:"Problem Reports",id:"problem-reports",level:3},{value:"Considerations",id:"considerations",level:2},{value:"Related Work",id:"related-work",level:2}],c={toc:m};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),"."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,i.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Allows the sending of a single message with arbitrary data. Multiple ",(0,i.kt)("a",{parentName:"p",href:"#post-message"},"post")," messages MAY be chained together in the same ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#threads"},"DIDComm thread")," to achieve bi-directional communication."),(0,i.kt)("h3",{id:"relationships"},"Relationships"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./authentication"},"Authentication"),": can be used to authenticate both parties and establish ",(0,i.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),".")),(0,i.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instant messaging between two parties, where the text payload is displayed in a chat."),(0,i.kt)("li",{parentName:"ul"},"IoT devices transmit sensor data to be aggregated in a central hub for processing.")),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sender: sends the message."),(0,i.kt)("li",{parentName:"ul"},"Receiver: receives the message.")),(0,i.kt)("h3",{id:"interaction"},"Interaction"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PostDiagram",src:a(58866).Z,width:"515",height:"322"})),(0,i.kt)("sub",null,"For guidance on diagrams see the ",(0,i.kt)("a",{href:"../overview#diagrams"},"corresponding section in the overview"),".")),(0,i.kt)("h2",{id:"messages"},"Messages"),(0,i.kt)("h3",{id:"post-message"},"1. post"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"iota/post/0.1/post")),(0,i.kt)("li",{parentName:"ul"},"Role: ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"sender"))),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"sender")," transmits a JSON ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," to the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"receiver"),". This MAY take advantage of ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," or be a ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message")," or both."),(0,i.kt)("h4",{id:"structure"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": JSON // REQUIRED\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"payload")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Any valid ",(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc7159"},"JSON")," text."),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Send a single string:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": "Hello, world"\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Send a single number:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": 42\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Send a JSON object:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": {\n    "status_code": 100,\n    "status": "Okay",\n  }\n}\n')),(0,i.kt)("h3",{id:"problem-reports"},"Problem Reports"),(0,i.kt)("p",null,"The following problem-report codes may be raised in the course of this protocol and are expected to be recognised and handled in addition to any general problem-reports. Implementers may also introduce their own application-specific problem-reports."),(0,i.kt)("p",null,"For guidance on problem-reports and a list of general codes see ",(0,i.kt)("a",{parentName:"p",href:"../resources/problem-reports"},"problem reports"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.post.reject-post")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#post-message"},"post")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#roles"},"Receiver")," rejects a ",(0,i.kt)("a",{parentName:"td",href:"#post-message"},"post")," message for any reason.")))),(0,i.kt)("h2",{id:"considerations"},"Considerations"),(0,i.kt)("p",null,"Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," JSON structure is unrestricted, a ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"sender")," cannot make assumptions about ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"receivers")," being able to understand the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," in any meaningful way unless both parties have a shared implementation or pre-negotiate the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," structure."),(0,i.kt)("p",null,"If complex and repeatable behaviour between parties is needed, implementors SHOULD define their own protocols with well-defined messages and interactions rather than using generic ",(0,i.kt)("a",{parentName:"p",href:"#post-message"},"post")," messages."),(0,i.kt)("h2",{id:"related-work"},"Related Work"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aries Hyperledger: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0095-basic-message/README.md"},"https://github.com/hyperledger/aries-rfcs/blob/main/features/0095-basic-message/README.md"))))}u.isMDXComponent=!0},58866:function(e,t,a){t.Z=a.p+"assets/images/post.drawio-ebe2994b34148eda4d1e726450d1db59.svg"},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);