"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[47826],{69441:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(76018),s=n(71871),u=["components"],c={keywords:["function descriptor","return values","request","post","smart contract chain","Asynchronous function"],description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle. They allow you to invoke any smart contract function that is not a View on any smart contract chain.",image:"/img/logo/WASP_logo_dark.png"},l=void 0,p={unversionedId:"guide/schema/post",id:"guide/schema/post",title:"post",description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle. They allow you to invoke any smart contract function that is not a View on any smart contract chain.",source:"@site/external/wasp/documentation/docs/guide/schema/post.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/post",permalink:"/smart-contracts/guide/schema/post",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/schema/post.mdx",tags:[],version:"current",frontMatter:{keywords:["function descriptor","return values","request","post","smart contract chain","Asynchronous function"],description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle. They allow you to invoke any smart contract function that is not a View on any smart contract chain.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"call",permalink:"/smart-contracts/guide/schema/call"},next:{title:"test",permalink:"/smart-contracts/guide/schema/test"}},d={},m=[],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"posting-asynchronous-requests"},"Posting Asynchronous Requests"),(0,o.kt)("p",null,"Asynchronous function calls between smart contracts are posted as requests on the Tangle.\nThey allow you to invoke any smart contract function that is not a View on any smart\ncontract chain. You will notice that the behavior is very similar to a normal function\ncall, but instead of using the ",(0,o.kt)("inlineCode",{parentName:"p"},"call()")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"func")," member in the function\ndescriptor, you will now use the ",(0,o.kt)("inlineCode",{parentName:"p"},"post()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"postToChain()")," methods. ",(0,o.kt)("inlineCode",{parentName:"p"},"post()")," posts the\nrequest within the current chain, while ",(0,o.kt)("inlineCode",{parentName:"p"},"postToChain()")," takes the chain ID of the\ndesired chain as parameter."),(0,o.kt)("p",null,"In addition to the previously discussed ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/call"},"transferIotas()")," and\n",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/call"},"ofContract()")," methods, you can modify the behavior further by providing a\ndelay() in seconds, which enables delayed execution of the request. This is of particular\ninterest to smart contracts that need a delayed action like betting contracts with a timed\nbetting round, or to create time-lock functionality in a smart contract.\nHere's how that works:"),(0,o.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"eor := ScFuncs.EndOfRound(ctx)\neor.Func.Delay(3600).TransferIotas(1).Post()\n"))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let eor = ScFuncs::end_of_round(ctx);\neor.func.delay(3600).transfer_iotas(1).post();\n"))),(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let eor = sc.ScFuncs.endOfRound(ctx);\neor.func.delay(3600).transferIotas(1).post();\n")))),(0,o.kt)("p",null,"Because it is posted as a request on the Tangle, and it is not possible to have a request\nwithout a transfer, ",(0,o.kt)("em",{parentName:"p"},"an asynchronous request always needs to send at least 1 token"),". So,\nif you post to a function that expects tokens you just specify the amount of tokens\nrequired, but if you post to a function that does not expect any tokens then you still\nhave to provide 1 iota."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Providing a delay() before a call() will result in a run-time error"),". We do not know\nthe intention of the user until the actual call() or post() is encountered, so we cannot\ncheck for this at compile-time unless we are willing to accept a lot of extra overhead.\nIt should not really be a problem because using delay() is rare and using it with call()\ncannot have been the intention."),(0,o.kt)("p",null,"The function that posts the request through the function descriptor will immediately\ncontinue execution and does not wait for its completion. Therefore, it is not possible to\ndirectly retrieve the return values from such a call."),(0,o.kt)("p",null,"If you need some return values, you will have to create a mechanism that can do so, for\nexample by providing a callback chain/contract/function combination as part of the input\nparameters of the requested function, so that upon completion that function can\nasynchronously post the results to the indicated function. It will require a certain\ndegree of cooperation between both smart contracts. In the future we will probably be\nlooking at providing a generic mechanism for this."),(0,o.kt)("p",null,"In the next section we will look at how we can use the function descriptors when\n",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/test"},"testing smart contracts with Solo"),"."))}f.isMDXComponent=!0},71871:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(83117),r=n(67294),o=n(5730),i=n(37559),s=n(86010),u="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),w=g.tabGroupChoices,k=g.setTabGroupChoices,T=(0,r.useState)(b),x=T[0],O=T[1],N=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=w[m];null!=I&&I!==x&&y.some((function(e){return e.value===I}))&&O(I)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=y[n].value;a!==x&&(E(t),O(a),null!=m&&k(m,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.currentTarget)+1;n=N[a]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.currentTarget)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},h)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:C,onClick:C},o,{className:(0,s.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function l(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);