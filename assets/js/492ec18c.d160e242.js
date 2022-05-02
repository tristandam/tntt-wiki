"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[34497],{26244:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={description:"Learn how to install and run a Hornet node using Docker. It is recommended for macOS and Windows.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","Docker","Install","Run","macOS","Windows","how to"]},s=void 0,p={unversionedId:"getting_started/using_docker",id:"getting_started/using_docker",title:"using_docker",description:"Learn how to install and run a Hornet node using Docker. It is recommended for macOS and Windows.",source:"@site/external/hornet/documentation/docs/getting_started/using_docker.md",sourceDirName:"getting_started",slug:"/getting_started/using_docker",permalink:"/hornet/getting_started/using_docker",editUrl:"https://github.com/gohornet/hornet/edit/mainnet/external/hornet/documentation/docs/getting_started/using_docker.md",tags:[],version:"current",frontMatter:{description:"Learn how to install and run a Hornet node using Docker. It is recommended for macOS and Windows.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","Docker","Install","Run","macOS","Windows","how to"]},sidebar:"mySidebar",previous:{title:"hornet_apt_repository",permalink:"/hornet/getting_started/hornet_apt_repository"},next:{title:"using_docker_compose",permalink:"/hornet/getting_started/using_docker_compose"}},d={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:2},{value:"Prepare",id:"prepare",level:2},{value:"Run",id:"run",level:2},{value:"Create Username and Password for the Hornet Dashboard",id:"create-username-and-password-for-the-hornet-dashboard",level:2},{value:"Build Your Own Hornet Image",id:"build-your-own-hornet-image",level:2},{value:"Managing a Node",id:"managing-a-node",level:2},{value:"Starting an Existing Hornet",id:"starting-an-existing-hornet",level:3},{value:"Restarting Hornet",id:"restarting-hornet",level:3},{value:"Stopping Hornet",id:"stopping-hornet",level:3},{value:"Displaying Log Output",id:"displaying-log-output",level:3},{value:"Removing a Container",id:"removing-a-container",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-docker"},"Using Docker"),(0,o.kt)("p",null,"Hornet Docker images (amd64/x86_64 architecture) are available at the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/gohornet/hornet"},"gohornet/hornet")," Docker hub."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A recent release of Docker enterprise or community edition. You can find installation instructions in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"official Docker documentation"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"GIT"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://curl.se/"},"CURL"),"."),(0,o.kt)("li",{parentName:"ol"},"At least 1GB available RAM.")),(0,o.kt)("h2",{id:"clone-the-repository"},"Clone the Repository"),(0,o.kt)("p",null,"Once you have completed all the installation ",(0,o.kt)("a",{parentName:"p",href:"#requirements"},"requirements"),", you can clone the repository by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/gohornet/hornet && cd hornet && git checkout mainnet\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The next portion of the guide assumes you are executing commands from the root directory of the repository."))),(0,o.kt)("h2",{id:"prepare"},"Prepare"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you want to use alternative ports, edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add your neighbors addresses to the ",(0,o.kt)("inlineCode",{parentName:"p"},"peering.json")," file."))),(0,o.kt)("p",null,"The Docker image runs under user with user id 65532 and group id 65532. To make sure there are no permission issues, you will need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the directory for the database by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mkdir mainnetdb && sudo chown 65532:65532 mainnetdb\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the directory for the peer database by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mkdir p2pstore && sudo chown 65532:65532 p2pstore\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the directory for the snapshots by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mkdir -p snapshots/mainnet && sudo chown -R 65532:65532 snapshots\n")))),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"You can pull the latest image from ",(0,o.kt)("inlineCode",{parentName:"p"},"gohornet/hornet")," public Docker hub registry by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull gohornet/hornet:latest && docker tag gohornet/hornet:latest hornet:latest\n")),(0,o.kt)("p",null,"We recommend that you run on host network to improve performance. Otherwise, you will have to publish ports using iptables NAT which is slower."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run \\\n  -v $(pwd)/config.json:/app/config.json:ro \\\n  -v $(pwd)/peering.json:/app/peering.json \\\n  -v $(pwd)/profiles.json:/app/profiles.json:ro \\\n  -v $(pwd)/mainnetdb:/app/mainnetdb \\\n  -v $(pwd)/p2pstore:/app/p2pstore \\\n  -v $(pwd)/snapshots/mainnet:/app/snapshots/mainnet \\\n  --restart always \\\n  --name hornet\\\n  --net=host \\\n  --ulimit nofile=8192:8192 \\\n  -d \\\n  hornet:latest\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$(pwd)")," Stands for the present working directory. All mentioned directories are mapped to the container, so the Hornet in the container persists the data directly to those directories."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/config.json:/app/config.json:ro")," Maps the local ",(0,o.kt)("inlineCode",{parentName:"li"},"config.json")," file into the container in ",(0,o.kt)("inlineCode",{parentName:"li"},"readonly")," mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/peering.json:/app/peering.json")," Maps the local ",(0,o.kt)("inlineCode",{parentName:"li"},"peering.json")," file into the container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/profiles.json:/app/profiles.json:ro")," Maps the local ",(0,o.kt)("inlineCode",{parentName:"li"},"profiles.json")," file into the container in ",(0,o.kt)("inlineCode",{parentName:"li"},"readonly")," mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/mainnetdb:/app/mainnetdb")," Maps the local ",(0,o.kt)("inlineCode",{parentName:"li"},"mainnetdb")," directory into the container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/p2pstore:/app/p2pstore")," Maps the local ",(0,o.kt)("inlineCode",{parentName:"li"},"p2pstore")," directory into the container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/snapshots/mainnet:/app/snapshots/mainnet")," Maps the local ",(0,o.kt)("inlineCode",{parentName:"li"},"snapshots")," directory into the container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--restart always")," Instructs Docker to restart the container after Docker reboots."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--name hornet")," Name of the running container instance. You can refer to the given container by this name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--net=host")," Instructs Docker to use the host's network, so the network is not isolated. We recommend that you run on host network for better performance. This way, the container will also open any ports it needs on the host network, so you will not need to specify any ports."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--ulimit nofile=8192:8192")," increases the ulimits inside the container. This is important when running with large databases."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-d")," Instructs Docker to run the container instance in a detached mode (daemon).")),(0,o.kt)("p",null,"You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker stop -t 300 hornet")," to gracefully end the process."),(0,o.kt)("h2",{id:"create-username-and-password-for-the-hornet-dashboard"},"Create Username and Password for the Hornet Dashboard"),(0,o.kt)("p",null,"If you use the Hornet dashboard, you need to create a secure password. You can start your Hornet container and execute the following command when the container is running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec -it hornet /app/hornet tool pwd-hash\n\n")),(0,o.kt)("p",null,"Expected output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Enter a password:\nRe-enter your password:\nSuccess!\nYour hash: [YOUR_HASH_HERE]\nYour salt: [YOUR_SALT_HERE]\n")),(0,o.kt)("p",null,"You can edit ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," and customize the ",(0,o.kt)("em",{parentName:"p"},"dashboard")," section to your needs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'  "dashboard": {\n    "bindAddress": "0.0.0.0:8081",\n    "auth": {\n      "sessionTimeout": "72h",\n      "username": "admin",\n      "passwordHash": "[YOUR_HASH_HERE]",\n      "passwordSalt": "[YOUR_SALT_HERE]"\n    }\n  },\n')),(0,o.kt)("h2",{id:"build-your-own-hornet-image"},"Build Your Own Hornet Image"),(0,o.kt)("p",null,"You can build your own Docker image by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker build -f docker/Dockerfile -t hornet:latest .\n")),(0,o.kt)("p",null,"Or pull it from Docker hub (only available for amd64/x86_64):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull gohornet/hornet:latest && docker tag gohornet/hornet:latest hornet:latest\n")),(0,o.kt)("h2",{id:"managing-a-node"},"Managing a Node"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hornet uses an in-memory cache so to save all data to the underlying persistent storage, a grace period of at least 200 seconds for a shutdown is necessary."))),(0,o.kt)("h3",{id:"starting-an-existing-hornet"},"Starting an Existing Hornet"),(0,o.kt)("p",null,"You can start an existing Hornet container by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker start hornet\n")),(0,o.kt)("h3",{id:"restarting-hornet"},"Restarting Hornet"),(0,o.kt)("p",null,"You can restart an existing Hornet container by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker restart -t 300 hornet\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-t 300")," Instructs Docker to wait for a grace period before shutting down.")),(0,o.kt)("h3",{id:"stopping-hornet"},"Stopping Hornet"),(0,o.kt)("p",null,"You can stop an existing Hornet container by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop -t 300 hornet\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-t 300")," Instructs Docker to wait for a grace period before shutting down.")),(0,o.kt)("h3",{id:"displaying-log-output"},"Displaying Log Output"),(0,o.kt)("p",null,"You can display existing Hornet container logs by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f hornet\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-f"),"\nInstructs Docker to continue displaying the log to ",(0,o.kt)("inlineCode",{parentName:"li"},"stdout")," until CTRL+C is pressed.")),(0,o.kt)("h2",{id:"removing-a-container"},"Removing a Container"),(0,o.kt)("p",null,"You can remove an existing Hornet container by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker container rm hornet\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);