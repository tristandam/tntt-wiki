"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[18525],{18633:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={description:"How to use the Dashboard in dev mode and set up hot loading and packaging.",image:"/img/logo/goshimmer_light.png",keywords:["port config","pkger","webpack","build","change","npm","yarn"]},s=void 0,p={unversionedId:"teamresources/analysis_dashboard",id:"teamresources/analysis_dashboard",title:"analysis_dashboard",description:"How to use the Dashboard in dev mode and set up hot loading and packaging.",source:"@site/external/goshimmer/documentation/docs/teamresources/analysis_dashboard.md",sourceDirName:"teamresources",slug:"/teamresources/analysis_dashboard",permalink:"/goshimmer/teamresources/analysis_dashboard",editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/external/goshimmer/documentation/docs/teamresources/analysis_dashboard.md",tags:[],version:"current",frontMatter:{description:"How to use the Dashboard in dev mode and set up hot loading and packaging.",image:"/img/logo/goshimmer_light.png",keywords:["port config","pkger","webpack","build","change","npm","yarn"]},sidebar:"docs",previous:{title:"local_development",permalink:"/goshimmer/teamresources/local_development"}},d={},c=[{value:"Dashboard in Dev Mode",id:"dashboard-in-dev-mode",level:3},{value:"Pack Your Changes",id:"pack-your-changes",level:3}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"goshimmer-analysis-dashboard"},"GoShimmer Analysis Dashboard"),(0,o.kt)("p",null,"Programmed using modern web technologies."),(0,o.kt)("h3",{id:"dashboard-in-dev-mode"},"Dashboard in Dev Mode"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure to set ",(0,o.kt)("inlineCode",{parentName:"li"},"analysis.dashboard.dev")," to true, to enable GoShimmer to serve assets\nfrom the webpack-dev-server."),(0,o.kt)("li",{parentName:"ol"},"Install all needed npm modules via ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn install"),"."),(0,o.kt)("li",{parentName:"ol"},"Run a webpack-dev-server instance by running ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn start")," within the ",(0,o.kt)("inlineCode",{parentName:"li"},"frontend")," directory."),(0,o.kt)("li",{parentName:"ol"},"Using default port config, you should now be able to access the analysis dashboard under ",(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:8000"},"http://127.0.0.1:8000"))),(0,o.kt)("p",null,"The Analysis Dashboard is hot-reload enabled."),(0,o.kt)("h3",{id:"pack-your-changes"},"Pack Your Changes"),(0,o.kt)("p",null,"We are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/markbates/pkger"},"pkger")," to wrap all built frontend files into Go files."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/markbates/pkger"},"Install ",(0,o.kt)("inlineCode",{parentName:"a"},"pkger"))," if not already done.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check that the correct webpack-cli (version v3.3.11) is installed: "),(0,o.kt)("p",{parentName:"li"},"2.1 ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn webpack-cli --version")),(0,o.kt)("p",{parentName:"li"},"2.2 If a newer version is installed use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn remove webpack-cli")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add webpack-cli@3.3.11")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build Analysis Dashboard by running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build")," within the ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the root of the repo.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pkger")," in the root of the repo.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"pkged.go")," should have been modified.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Done. Now you can build GoShimmer and your Analysis Dashboard changes will be included within the binary."))),(0,o.kt)("p",null,"The above steps can also be done by running the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/pkger.sh")," script from the root folder."))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);