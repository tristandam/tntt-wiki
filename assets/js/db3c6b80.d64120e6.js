"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[20420],{50282:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return c}});var r=a(83117),i=a(80102),n=(a(67294),a(3905)),o=["components"],d={},s=void 0,l={unversionedId:"tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial",id:"tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial",title:"zebra-iota-edge-sdk-103-tutorial",description:"Verifying Credentials",source:"@site/external/zebra-iota-edge-sdk/docs/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial.md",sourceDirName:"tutorials/zebra-iota-edge-sdk",slug:"/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial",permalink:"/zebra-iota-edge-sdk/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial",editUrl:"https://github.com/zebradevs/zebra-iota-edge-sdk/edit/main/external/zebra-iota-edge-sdk/docs/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"zebra-iota-edge-sdk-102-tutorial",permalink:"/zebra-iota-edge-sdk/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial"},next:{title:"zebra-iota-edge-sdk-104-tutorial",permalink:"/zebra-iota-edge-sdk/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Introduction",id:"introduction",level:2},{value:"How to run in a browser",id:"how-to-run-in-a-browser",level:2},{value:"How to run on an Android Device",id:"how-to-run-on-an-android-device",level:2},{value:"DataWedge profile",id:"datawedge-profile",level:2},{value:"Verify a Credential",id:"verify-a-credential",level:2},{value:"Show me the code",id:"show-me-the-code",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:c};function g(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"zebra-iota-edge-sdk--identity-enabler--103-tutorial"},"Zebra-IOTA-Edge-SDK : Identity Enabler : 103 Tutorial"),(0,n.kt)("h2",null,"Verifying Credentials"),(0,n.kt)("p",null,"In this tutorial you will learn how to use the ",(0,n.kt)("strong",{parentName:"p"},"Identity Enabler")," of the Zebra-IOTA Edge SDK verify interoperable identities for people, organizations or devices."),(0,n.kt)("p",null,"Before reading this tutorial you should have first read the ",(0,n.kt)("a",{parentName:"p",href:"/zebra-iota-edge-sdk/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial"},"Decentralized Identity introduction tutorial")," and the ",(0,n.kt)("a",{parentName:"p",href:"/zebra-iota-edge-sdk/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial"},"identity management and Holder Application tutorial"),"."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"The prerequisites for running this tutorial are described on ",(0,n.kt)("a",{parentName:"p",href:"/zebra-iota-edge-sdk/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial#prerequisites"},"part 1")," of this series."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"An overview of the structure of the SDK is described on ",(0,n.kt)("a",{parentName:"p",href:"/zebra-iota-edge-sdk/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial#getting-started"},"part 1")," of this series."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Verifier Application")," provides the blueprint of how a user could, in an interoperable way, verify credentials scanned using their Android device. The app guides the user to scan a data matrix using their camera or Zebra scanning device to verify its validity and keep track of previously scanned credentials."),(0,n.kt)("h2",{id:"how-to-run-in-a-browser"},"How to run in a browser"),(0,n.kt)("p",null,"Run the ",(0,n.kt)("em",{parentName:"p"},"Verifier Application")," in your browser with the below commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"# Clone the repository\ngit clone https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK\n\n# Set up the project\ncd Zebra-Iota-Edge-SDK/identity-enabler/verifier-mobile-app\nnpm install\n\n# Build and run\nnpm run build:dev\nnpm run start:dev\n\n# Open http://localhost:5002 in your browser\n")),(0,n.kt)("h2",{id:"how-to-run-on-an-android-device"},"How to run on an Android Device"),(0,n.kt)("p",null,"Before continuing please ensure that you have already installed the Android Studio on your local development machine and is properly configured. Then"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"# Clone the repository\ngit clone https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK\n\n# Set up the project\ncd Zebra-Iota-Edge-SDK/identity-enabler/verifier-mobile-app\nnpm install\n\n# Build and run\nnpm run android\n")),(0,n.kt)("p",null,"Afterwards you need to go to the Android Studio and compile, install and execute the corresponding Android application. After successfully running the application you will be shown a simple wizard that you will need to complete. And finally you will be ready to verify credentials. See below."),(0,n.kt)("h2",{id:"datawedge-profile"},"DataWedge profile"),(0,n.kt)("p",null,"In order to run this application fully integrated with a Zebra Android scanning device you need to set up a DataWedge profile for the ",(0,n.kt)("inlineCode",{parentName:"p"},"\u201corg.iota.zebra.verifier\u201d")," application as follows, or you can import it from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/test/datawedge/datawedge.db"},"here"),"."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{alt:"Data Wedge Profile 1",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/103/image3.png",width:"30%"}),(0,n.kt)("img",{alt:"Data Wedge Profile 2",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/103/image7.png",width:"30%"}),(0,n.kt)("img",{alt:"Data Wedge Profile 3",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/103/image19.png",width:"30%"})),(0,n.kt)("p",null,"Note: On a non DataWedge device you can simulate a DataWedge scanning through the adb command line tool as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"adb shell am startservice -a org.iota.zebra.verifier.intent.action.SCAN -e com.symbol.datawedge.source scanner -e com.symbol.datawedge.data_string <scanned_string>\n")),(0,n.kt)("p",null,"Additional information on how Zebra DataWedge can be integrated is found at the ",(0,n.kt)("a",{parentName:"p",href:"/zebra-iota-edge-sdk/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial#zebra-datawedge-integration"},"introductory tutorial"),"."),(0,n.kt)("h2",{id:"verify-a-credential"},"Verify a Credential"),(0,n.kt)("p",null,"In this step, the IOTA Identity framework performs the main function associated with the role of \u201cverifier\u201d in the SSI model: ",(0,n.kt)("em",{parentName:"p"},"Verifying a verifiable presentation (a data matrix) containing one or more verifiable credentials.")),(0,n.kt)("p",null,"You can see the steps from the application below. After scanning a Verifiable Presentation encoded as a data matrix code (using the embedded scanner capabilities of a Zebra device or the regular device\u2019s camera and the ",(0,n.kt)("inlineCode",{parentName:"p"},"zxing-js")," library), the IOTA Identity framework will check for tampering and authorship of both the presentation and the contained credential(s) using the embedded proof (digital signature). It is expected for the presentation and credential to be authored by the holder and issuer respectively. Remember that in our formerly described ",(0,n.kt)("em",{parentName:"p"},"Holder Application")," the holder issues the credentials to themselves."),(0,n.kt)("p",null,"Once the credential is deemed as valid it is shown and persisted on the inbox of the application (third capture below) for demonstration purposes. When implementing a concrete solution different actions could be taken when scanning a valid credential."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{alt:"Credential Verification 1",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/103/image11.png",width:"30%"}),(0,n.kt)("img",{alt:"Credential Verification 2",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/103/image13.png",width:"30%"}),(0,n.kt)("img",{alt:"Credential Verification 3",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/103/image25.png",width:"30%"})),(0,n.kt)("h3",{id:"show-me-the-code"},"Show me the code"),(0,n.kt)("p",null,"Verifying a credential (presented as a Verifiable Presentation) is quite straightforward using the library functions offered by the IOTA Identity Framework."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"//Create from VP\nconst verifiablePresentation = VerifiablePresentation.fromJSON(presentation);\nconst result = await this.getClient().checkPresentation(JSON.stringify(verifiablePresentation.toJSON()));\nreturn result?.verified;\n")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"If you want to learn how you can onboard supply chain devices with their own decentralized identity go to the ",(0,n.kt)("a",{parentName:"p",href:"/zebra-iota-edge-sdk/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial"},"104 Tutorial"),"."))}g.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(a),g=i,b=p["".concat(s,".").concat(g)]||p[g]||c[g]||n;return a?r.createElement(b,o(o({ref:t},u),{},{components:a})):r.createElement(b,o({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<n;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);