"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45054],{61561:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var t=r(83117),a=r(80102),s=(r(67294),r(3905)),i=r(85317),o=["components"],l={title:"Examples",description:"Official IOTA Client Library Software Rust examples.",image:"/img/logo/iota_mark_light.png",keywords:["account","Rust","seed","generate","message"]},d=void 0,u={unversionedId:"libraries/rust/examples",id:"libraries/rust/examples",title:"Examples",description:"Official IOTA Client Library Software Rust examples.",source:"@site/external/iota.rs/documentation/docs/libraries/rust/examples.mdx",sourceDirName:"libraries/rust",slug:"/libraries/rust/examples",permalink:"/iota.rs/libraries/rust/examples",editUrl:"https://github.com/iotaledger/iota.rs/edit/mainnet/external/iota.rs/documentation/docs/libraries/rust/examples.mdx",tags:[],version:"current",frontMatter:{title:"Examples",description:"Official IOTA Client Library Software Rust examples.",image:"/img/logo/iota_mark_light.png",keywords:["account","Rust","seed","generate","message"]},sidebar:"docs",previous:{title:"getting_started",permalink:"/iota.rs/libraries/rust/getting_started"},next:{title:"api_reference",permalink:"/iota.rs/libraries/rust/api_reference"}},c={},p=[],m={toc:p};function h(e){var n=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"It's possible to send transactions with iota.rs, but we strongly recommend to use official ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library together with ",(0,s.kt)("inlineCode",{parentName:"p"},"stronghold.rs")," enclave for value-based transfers. This combination incorporates the best security practices while dealing with seeds, related addresses and ",(0,s.kt)("inlineCode",{parentName:"p"},"UTXO"),". See more information on ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet docs"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/iota.rs\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd iota.rs\n")),(0,s.kt)("p",null,"Rename the ",(0,s.kt)("inlineCode",{parentName:"p"},".env.example")," file to ",(0,s.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,s.kt)("p",null,"Run the examples like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example 01_get_info --release\n")),(0,s.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\r\n// SPDX-License-Identifier: Apache-2.0\r\n\r\n//! cargo run --example 01_get_info --release\r\n\r\nuse iota_client::Client;\r\n\r\n/// In this example we will get information about the node\r\n\r\n#[tokio::main]\r\nasync fn main() {\r\n    // Create a client instance\r\n    let iota = Client::builder()\r\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe") // Insert your node URL here\r\n        // Node with optional authentication\r\n        // .with_node_auth(\r\n        //     "https://somechrysalisiotanode.com",\r\n        //     Some("Some JWT"),\r\n        //     Some(("name", "password")),\r\n        // )\r\n        .unwrap()\r\n        .finish()\r\n        .await\r\n        .unwrap();\r\n\r\n    let info = iota.get_info().await.unwrap();\r\n    println!("Node Info: {:?}", info);\r\n}\r\n'),(0,s.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\r\n// SPDX-License-Identifier: Apache-2.0\r\n\r\n//! cargo run --example 02_generate_seed --release\r\n\r\nuse iota_client::crypto::signatures::ed25519::SecretKey;\r\n\r\n/// In this example we will generate a seed\r\n\r\n#[tokio::main]\r\nasync fn main() {\r\n    let secret_key = SecretKey::generate().unwrap();\r\n    println!("{}", hex::encode(&secret_key.to_bytes()));\r\n}\r\n'),(0,s.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\r\n// SPDX-License-Identifier: Apache-2.0\r\n\r\n//! cargo run --example 03_generate_addresses --release\r\n\r\nuse iota_client::{api::GetAddressesBuilder, Client, Seed};\r\nextern crate dotenv;\r\nuse dotenv::dotenv;\r\nuse std::env;\r\n\r\n/// In this example we will create addresses from a seed defined in .env\r\n\r\n#[tokio::main]\r\nasync fn main() {\r\n    // Create a client instance\r\n    let iota = Client::builder()\r\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe") // Insert your node URL here\r\n        .unwrap()\r\n        .finish()\r\n        .await\r\n        .unwrap();\r\n\r\n    // This example uses dotenv, which is not safe for use in production\r\n    dotenv().ok();\r\n\r\n    let seed = Seed::from_bytes(&hex::decode(env::var("NONSECURE_USE_OF_DEVELOPMENT_SEED_1").unwrap()).unwrap());\r\n\r\n    // Generate addresses with default account index and range\r\n    let addresses = iota.get_addresses(&seed).finish().await.unwrap();\r\n    println!("List of generated public addresses:\\n{:?}\\n", addresses);\r\n\r\n    // Generate addresses with custom account index and range\r\n    let addresses = iota\r\n        .get_addresses(&seed)\r\n        .with_account_index(0)\r\n        .with_range(0..4)\r\n        .finish()\r\n        .await\r\n        .unwrap();\r\n\r\n    println!("List of generated public addresses:\\n{:?}\\n", addresses);\r\n\r\n    // Generate public (false) & internal (true) addresses\r\n    let addresses = iota.get_addresses(&seed).with_range(0..4).get_all().await.unwrap();\r\n    println!("List of generated public and internal addresses:\\n{:?}\\n", addresses);\r\n\r\n    // Generate public addresses offline with the bech32_hrp defined\r\n    let addresses = GetAddressesBuilder::new(&seed)\r\n        .with_bech32_hrp("atoi".into())\r\n        .with_account_index(0)\r\n        .with_range(0..4)\r\n        .finish()\r\n        .await\r\n        .unwrap();\r\n\r\n    println!("List of offline generated public addresses:\\n{:?}\\n", addresses);\r\n}\r\n'),(0,s.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\r\n// SPDX-License-Identifier: Apache-2.0\r\n\r\n//! cargo run --example 04_get_balance --release\r\n\r\nuse iota_client::{Client, Seed};\r\nextern crate dotenv;\r\nuse dotenv::dotenv;\r\nuse std::env;\r\n\r\n/// In this example we will get the account balance of a known seed and the balance and outputs of a known address\r\n\r\n#[tokio::main]\r\nasync fn main() {\r\n    // Create a client instance\r\n    let iota = Client::builder()\r\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe") // Insert your node URL here\r\n        .unwrap()\r\n        .with_node_sync_disabled()\r\n        .finish()\r\n        .await\r\n        .unwrap();\r\n\r\n    // This example uses dotenv, which is not safe for use in production\r\n    dotenv().ok();\r\n\r\n    let seed = Seed::from_bytes(&hex::decode(env::var("NONSECURE_USE_OF_DEVELOPMENT_SEED_1").unwrap()).unwrap());\r\n\r\n    let seed_balance = iota.get_balance(&seed).finish().await.unwrap();\r\n    println!("Account balance: {:?}i\\n", seed_balance);\r\n\r\n    let address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\r\n\r\n    let response = iota.get_address().balance(address).await.unwrap();\r\n    println!("The balance of {:?} is {:?}i\\n", address, response.balance);\r\n\r\n    let outputs = iota.get_address().outputs(address, Default::default()).await.unwrap();\r\n\r\n    println!("The outputs of address {:?} are: {:?}", address, outputs);\r\n}\r\n'),(0,s.kt)(i.Z,{className:"languag-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\r\n// SPDX-License-Identifier: Apache-2.0\r\n\r\n//! cargo run --example 05_get_address_outputs --release\r\n\r\nuse iota_client::{Client, Result};\r\n\r\n/// In this example we will get the outputs of a known address\r\n\r\n#[tokio::main]\r\nasync fn main() -> Result<()> {\r\n    let iota = Client::builder()\r\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\r\n        .finish()\r\n        .await?;\r\n\r\n    let address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\r\n\r\n    let outputs = iota.get_address().outputs(address, Default::default()).await.unwrap();\r\n\r\n    println!("The outputs of address {:?} are: {:?}", address, outputs);\r\n    Ok(())\r\n}\r\n'),(0,s.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\r\n// SPDX-License-Identifier: Apache-2.0\r\n\r\n//! cargo run --example 06_simple_message --release\r\n\r\nuse iota_client::{Client, Result};\r\n\r\n/// In this example we will send a message without a payload\r\n\r\n#[tokio::main]\r\nasync fn main() -> Result<()> {\r\n    let iota = Client::builder()\r\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\r\n        .finish()\r\n        .await?;\r\n\r\n    let message = iota.message().finish().await?;\r\n\r\n    println!(\r\n        "Empty message sent: https://explorer.iota.org/devnet/message/{}",\r\n        message.id().0\r\n    );\r\n    Ok(())\r\n}\r\n'),(0,s.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\r\n// SPDX-License-Identifier: Apache-2.0\r\n\r\n//! cargo run --example 07_get_message_metadata --release\r\n\r\nuse iota_client::{Client, Result};\r\n\r\n/// In this example we will send a message and get the metadata for it\r\n\r\n#[tokio::main]\r\nasync fn main() -> Result<()> {\r\n    let iota = Client::builder()\r\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\r\n        .finish()\r\n        .await?;\r\n\r\n    let message = iota.message().finish().await?;\r\n\r\n    let metadata = iota.get_message().metadata(&message.id().0).await?;\r\n    println!("Message metadata: {:?}", metadata);\r\n    Ok(())\r\n}\r\n'),(0,s.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\r\n// SPDX-License-Identifier: Apache-2.0\r\n\r\n//! cargo run --example 08_data_message --release\r\n\r\nuse iota_client::{Client, Result};\r\n\r\n/// In this example we will send a message without a payload\r\n\r\n#[tokio::main]\r\nasync fn main() -> Result<()> {\r\n    let iota = Client::builder()\r\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\r\n        // .with_permanode("http://18.196.167.57:8000/api/permanode/", None, None)?\r\n        .finish()\r\n        .await?;\r\n\r\n    let message = iota\r\n        .message()\r\n        .with_index("Hello")\r\n        .with_data("Tangle".as_bytes().to_vec())\r\n        .finish()\r\n        .await?;\r\n\r\n    println!(\r\n        "Message sent https://explorer.iota.org/devnet/message/{}\\n",\r\n        message.id().0\r\n    );\r\n\r\n    let fetched_message_ids = iota.get_message().index("Hello").await.unwrap();\r\n    println!("Messages with Hello index: {:?}", fetched_message_ids);\r\n    Ok(())\r\n}\r\n'),(0,s.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\r\n// SPDX-License-Identifier: Apache-2.0\r\n\r\n//! cargo run --example 09_transaction --release\r\n\r\nuse iota_client::{Client, Result, Seed};\r\nextern crate dotenv;\r\nuse dotenv::dotenv;\r\nuse std::env;\r\n\r\n/// In this example we will send a transaction\r\n\r\n#[tokio::main]\r\nasync fn main() -> Result<()> {\r\n    let iota = Client::builder()\r\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\r\n        .finish()\r\n        .await?;\r\n\r\n    // This example uses dotenv, which is not safe for use in production\r\n    // Configure your own seed in ".env". Since the output amount cannot be zero, the seed must contain non-zero balance\r\n    dotenv().ok();\r\n    let seed_1 = Seed::from_bytes(&hex::decode(env::var("NONSECURE_USE_OF_DEVELOPMENT_SEED_1").unwrap())?);\r\n\r\n    let message = iota\r\n        .message()\r\n        .with_seed(&seed_1)\r\n        // Insert the output address and amount to spent. The amount cannot be zero.\r\n        .with_output(\r\n            // We generate an address from our seed so that we send the funds to ourselves\r\n            &iota.get_addresses(&seed_1).with_range(1..2).finish().await?[0],\r\n            1_000_000,\r\n        )?\r\n        .finish()\r\n        .await?;\r\n\r\n    println!(\r\n        "Transaction sent: https://explorer.iota.org/devnet/message/{}",\r\n        message.id().0\r\n    );\r\n    Ok(())\r\n}\r\n'),(0,s.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\r\n// SPDX-License-Identifier: Apache-2.0\r\n\r\n//! cargo run --example 10_mqtt --features=mqtt --release\r\n\r\nuse iota_client::{bee_message::Message, Client, MqttEvent, Result, Topic};\r\nuse std::sync::{mpsc::channel, Arc, Mutex};\r\n\r\n// Connecting to a MQTT broker using raw ip doesn\'t work with TCP. This is a limitation of rustls.\r\n#[tokio::main]\r\nasync fn main() -> Result<()> {\r\n    // Create a client instance\r\n    let mut iota = Client::builder()\r\n        .with_node("https://api.thin-hornet-0.h.chrysalis-devnet.iota.cafe")?\r\n        .finish()\r\n        .await?;\r\n\r\n    let (tx, rx) = channel();\r\n    let tx = Arc::new(Mutex::new(tx));\r\n\r\n    let mut event_rx = iota.mqtt_event_receiver();\r\n    tokio::spawn(async move {\r\n        while event_rx.changed().await.is_ok() {\r\n            let event = event_rx.borrow();\r\n            if *event == MqttEvent::Disconnected {\r\n                println!("mqtt disconnected");\r\n                std::process::exit(1);\r\n            }\r\n        }\r\n    });\r\n\r\n    iota.subscriber()\r\n        .with_topics(vec![Topic::new("milestones/latest")?, Topic::new("messages")?])\r\n        .subscribe(move |event| {\r\n            match event.topic.as_str() {\r\n                "messages" => {\r\n                    let message: Message = serde_json::from_str(&event.payload).unwrap();\r\n                    println!("{:?}", event);\r\n                    println!("{:?}", message);\r\n                }\r\n                _ => println!("{:?}", event),\r\n            }\r\n            tx.lock().unwrap().send(()).unwrap();\r\n        })\r\n        .await\r\n        .unwrap();\r\n\r\n    for i in 0..10 {\r\n        rx.recv().unwrap();\r\n        if i == 7 {\r\n            // unsubscribe from topic "messages", will continue to receive events for "milestones/latest"\r\n            iota.subscriber()\r\n                .with_topics(vec![Topic::new("messages")?])\r\n                .unsubscribe()\r\n                .await?;\r\n        }\r\n    }\r\n\r\n    iota.subscriber().disconnect().await?;\r\n    // alternatively\r\n    // iota.subscriber().unsubscribe().await?;\r\n    Ok(())\r\n}\r\n'),(0,s.kt)("p",null,"You can find more advanced examples in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/dev/examples"},"examples")," folder."))}h.isMDXComponent=!0}}]);