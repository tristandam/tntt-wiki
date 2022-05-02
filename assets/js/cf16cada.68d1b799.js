"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[21747],{37882:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],l={image:"/img/integration-services/logo/integration_services.png",description:"This section will guide you in installing and deploying the Integration Service API on a Kubernetes cluster.",keywords:["install integration services","deploy integration services","Kubernetes","requirements","configuration","MongoDB","API","minikube"]},s=void 0,u={unversionedId:"getting_started/installation/kubernetes/local_setup",id:"getting_started/installation/kubernetes/local_setup",title:"local_setup",description:"This section will guide you in installing and deploying the Integration Service API on a Kubernetes cluster.",source:"@site/external/integration-services/documentation/docs/getting_started/installation/kubernetes/local_setup.md",sourceDirName:"getting_started/installation/kubernetes",slug:"/getting_started/installation/kubernetes/local_setup",permalink:"/integration-services/getting_started/installation/kubernetes/local_setup",editUrl:"https://github.com/iotaledger/integration-services/edit/develop/external/integration-services/documentation/docs/getting_started/installation/kubernetes/local_setup.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"This section will guide you in installing and deploying the Integration Service API on a Kubernetes cluster.",keywords:["install integration services","deploy integration services","Kubernetes","requirements","configuration","MongoDB","API","minikube"]},sidebar:"docs",previous:{title:"local_setup",permalink:"/integration-services/getting_started/installation/nodejs/local_setup"},next:{title:"configuration",permalink:"/integration-services/getting_started/installation/kubernetes/configuration"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Minikube",id:"minikube",level:2},{value:"Integration Services Deployment",id:"integration-services-deployment",level:2},{value:"Notes",id:"notes",level:2}],g={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-setup"},"Local Setup"),(0,a.kt)("p",null,"This section will guide you in installing and deploying the Integration Service API on a Kubernetes cluster."),(0,a.kt)("p",null,"This installation was tested on ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/releases/_print/#release-v1-21"},"Kubernetes 1.21"),"."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Please make sure to have the following installed before moving forward:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl"))),(0,a.kt)("h2",{id:"minikube"},"Minikube"),(0,a.kt)("p",null,"You can start your cluster by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start\n")),(0,a.kt)("h2",{id:"integration-services-deployment"},"Integration Services Deployment"),(0,a.kt)("p",null,"Please follow these steps to deploy the Integration Services:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone the project:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/integration-services.git\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change directory to your freshly cloned project:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd integration-services\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deploy Kubernetes resources for the Integration Service APIs:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f kubernetes/optional -f kubernetes/\n")))),(0,a.kt)("p",null,"In few minutes, depending on how many resources you allocated, the Integration Service API will be ready to handle\nrequests."),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"The previous commands will create:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A single MongoDB instance with an ephemeral storage (i.e. no persistent bound volume) with ",(0,a.kt)("inlineCode",{parentName:"li"},"admin")," as username and\npassword for administration purpose and ",(0,a.kt)("inlineCode",{parentName:"li"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"password")," as credentials for the\ndatabase ",(0,a.kt)("inlineCode",{parentName:"li"},"integration-service"),"."),(0,a.kt)("li",{parentName:"ul"},"A Kubernetes Job that will create a root identity in the database if there is not one yet."),(0,a.kt)("li",{parentName:"ul"},"A replicated backend service for Integration Service API (5 replicas as default value).")),(0,a.kt)("p",null,"You can find information on how to configure Integration Service with a production-ready database in\nthe ",(0,a.kt)("a",{parentName:"p",href:"/integration-services/getting_started/installation/kubernetes/configuration"},"configuration section"),"."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),d=i,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);