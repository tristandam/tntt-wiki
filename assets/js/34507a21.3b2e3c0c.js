"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[20595],{37769:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),s=["components"],i={description:"Smart contract only allow their creator to withdraw tokens contained in the smart contract. If authorisation conditions are satisfied, the contract calls the transfer_to_address sandbox function to send all iotas, owned by the contract, to the caller's address.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","withdraw","tokens","tangle","send","withdrawIota","transfer_to_address"]},c=void 0,l={unversionedId:"guide/solo/sending-funds-sc",id:"guide/solo/sending-funds-sc",title:"sending-funds-sc",description:"Smart contract only allow their creator to withdraw tokens contained in the smart contract. If authorisation conditions are satisfied, the contract calls the transfer_to_address sandbox function to send all iotas, owned by the contract, to the caller's address.",source:"@site/external/wasp/documentation/docs/guide/solo/sending-funds-sc.md",sourceDirName:"guide/solo",slug:"/guide/solo/sending-funds-sc",permalink:"/smart-contracts/guide/solo/sending-funds-sc",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/solo/sending-funds-sc.md",tags:[],version:"current",frontMatter:{description:"Smart contract only allow their creator to withdraw tokens contained in the smart contract. If authorisation conditions are satisfied, the contract calls the transfer_to_address sandbox function to send all iotas, owned by the contract, to the caller's address.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","withdraw","tokens","tangle","send","withdrawIota","transfer_to_address"]},sidebar:"tutorialSidebar",previous:{title:"reimbursed-funds",permalink:"/smart-contracts/guide/solo/reimbursed-funds"},next:{title:"running-a-node",permalink:"/smart-contracts/guide/chains_and_nodes/running-a-node"}},d={},u=[],h={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sending-tokens-from-iota-smart-contracts-to-the-tangle"},"Sending Tokens From IOTA Smart Contracts to the Tangle"),(0,a.kt)("p",null,"The programmer of the ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," smart contract implemented the entry point\n",(0,a.kt)("inlineCode",{parentName:"p"},"withdrawIota"),". What it is for? The answer is: if not for this method, any tokens sent to the\nsmart contract will be essentially lost: there is no other way to withdraw tokens\nfrom the smart contract."),(0,a.kt)("p",null,"The entry point requires the caller to be an address and to be equal to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"creator")," of the instance of the contract. The ",(0,a.kt)("inlineCode",{parentName:"p"},"creator")," (its ",(0,a.kt)("inlineCode",{parentName:"p"},"agentID"),") is\nstored when a contract is deployed and is always contained in the registry of contracts.\nThe smart contract ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," is programmed to panic if the caller is not the ",(0,a.kt)("inlineCode",{parentName:"p"},"creator"),".\nThis way the smart contract only allows to withdraw tokens contained in the smart contract by its ",(0,a.kt)("inlineCode",{parentName:"p"},"creator"),"."),(0,a.kt)("p",null,"If authorization conditions are satisfied, the contract calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer_to_address"),"\nsandbox function to send all iotas, owned by the contract, to the caller's\naddress."),(0,a.kt)("p",null,"What if you send some other colored tokens, not ordinary iotas, to the smart\ncontract? As in this contract you can only withdraw iotas, those will stay there forever."),(0,a.kt)("p",null,"The following ",(0,a.kt)("em",{parentName:"p"},"Solo")," test demonstrates how it works:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial8(t *testing.T) {\n // create deterministic solo environment\n env := solo.New(t, false, false, seed)\n // deploy new chain\n chain := env.NewChain(nil, "ex8")\n\n // create a user\'s wallet (private key) with address and request iotas from the faucet.\n userWallet, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(5))\n userAgentID := iscp.NewAgentID(userAddress, 0)\n t.Logf("userAgentID: %s", userAgentID)\n\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0) // empty on-chain\n\n // the chain owner (default) send a request to the root contract to grant right to deploy\n // contract on the chain to the use\n req := solo.NewCallParams(root.Contract.Name, root.FuncGrantDeployPermission.Name, root.ParamDeployer, userAgentID).WithIotas(1)\n _, err := chain.PostRequestSync(req, nil)\n require.NoError(t, err)\n\n // user deploys wasm smart contract on the chain under the name "example1"\n // the wasm binary is in the file\n err = chain.DeployWasmContract(userWallet, "example1", "example_tutorial_bg.wasm")\n require.NoError(t, err)\n\n contractAgentID := iscp.NewAgentID(chain.ChainID.AsAddress(), iscp.Hn("example1"))\n\n // the deployment of the smart contract required 1 requests to the root contract:\n // - to submit binary to the on-chain "blob" registry\n // - to deploy contract from the blob\n // Two tokens were taken from the user account to form requests and then were\n // deposited to the user\'s account on the chain\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo-2)\n chain.AssertAccountBalance(contractAgentID, colored.IOTA, 0) // empty on-chain\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0)\n\n // user send a "storeString" request to the smart contract. It attaches 42 iotas to the request\n // It also takes 1 iota for the request token\n // Result is 42 iotas moved to the smart contract\'s account\n req = solo.NewCallParams("example1", "storeString", "paramString", "Hello, world!").\n  WithIotas(42)\n _, err = chain.PostRequestSync(req, userWallet)\n require.NoError(t, err)\n\n chain.AssertAccountBalance(contractAgentID, colored.IOTA, 42)\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0)\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo-44)\n\n // user withdraws all iotas from the smart contract back\n // Out of 42 iotas 41 iota is coming back to the user\'s address, 1 iotas\n // is accrued to the user on chain\n req = solo.NewCallParams("example1", "withdrawIota")\n req.WithIotas(1)\n _, err = chain.PostRequestSync(req, userWallet)\n require.NoError(t, err)\n\n chain.AssertAccountBalance(contractAgentID, colored.IOTA, 0)\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0)\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo-44+42)\n}\n')))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,p=h["".concat(c,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(p,s(s({ref:t},d),{},{components:n})):r.createElement(p,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);