"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99164],{90503:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return h}});var i=n(83117),a=n(80102),o=(n(67294),n(3905)),s=["components"],r={description:"FPC is a binary voting protocol which takes a series of initial boolean values, and outputs a final value. This specification describes how to set this initial Boolean value.",image:"/img/research-specifications/opinions.png",slug:"6.2OpinionSetting",keywords:["initial boolean value","initial opinion","node","transactions","fast probabilistic consensus","fcob"]},l=void 0,c={unversionedId:"6.2 Opinion Setting",id:"6.2 Opinion Setting",title:"6.2 Opinion Setting",description:"FPC is a binary voting protocol which takes a series of initial boolean values, and outputs a final value. This specification describes how to set this initial Boolean value.",source:"@site/external/IOTA-2.0-Research-Specifications/6.2 Opinion Setting.md",sourceDirName:".",slug:"/6.2OpinionSetting",permalink:"/IOTA-2.0-Research-Specifications/6.2OpinionSetting",editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/external/IOTA-2.0-Research-Specifications/6.2 Opinion Setting.md",tags:[],version:"current",frontMatter:{description:"FPC is a binary voting protocol which takes a series of initial boolean values, and outputs a final value. This specification describes how to set this initial Boolean value.",image:"/img/research-specifications/opinions.png",slug:"6.2OpinionSetting",keywords:["initial boolean value","initial opinion","node","transactions","fast probabilistic consensus","fcob"]},sidebar:"tutorialSidebar",previous:{title:"6.1 Objects of Consensus",permalink:"/IOTA-2.0-Research-Specifications/6.1ObjectsOfConsensus"},next:{title:"6.3 Fast Probabilistic Consensus",permalink:"/IOTA-2.0-Research-Specifications/6.3FastProbabilisticConsensus"}},p={},h=[{value:"6.2.1 Preliminaries",id:"621-preliminaries",level:2},{value:"6.2.1.2 Motivation",id:"6212-motivation",level:3},{value:"6.2.1.3 Summary",id:"6213-summary",level:3},{value:"6.2.1.4 Dependencies",id:"6214-dependencies",level:3},{value:"6.2.1.4 Parameters and Lists",id:"6214-parameters-and-lists",level:3},{value:"6.2.2 Timestamps",id:"622-timestamps",level:2},{value:"6.2.2.1 Setting the Initial Opinion",id:"6221-setting-the-initial-opinion",level:3},{value:"6.2.3 Transactions and FCoB",id:"623-transactions-and-fcob",level:2},{value:"6.2.3.1 FCoB function",id:"6231-fcob-function",level:3},{value:"6.2.3.2 When to Set the Opinion",id:"6232-when-to-set-the-opinion",level:3}],d={toc:h};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"62-opinion-setting"},"6.2 Opinion Setting"),(0,o.kt)("h2",{id:"621-preliminaries"},"6.2.1 Preliminaries"),(0,o.kt)("h3",{id:"6212-motivation"},"6.2.1.2 Motivation"),(0,o.kt)("p",null,"FPC is a binary voting protocol which takes a series of initial boolean values, and outputs a final value: see ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.3FastProbabilisticConsensus"},"Section 6.3 - Fast Probabilistic Consensus"),".  This specification describes how to set this initial Boolean value. Specification ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.1ObjectsOfConsensus"},"6.1 - Object of Consensus")," describes how FPC interacts with other modules in the protocol, specifically how the functions ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryStatus")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AnswerStatus")," react to the metadata ",(0,o.kt)("inlineCode",{parentName:"p"},"opinionField"),". Moreover, the FPC specification, ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.3FastProbabilisticConsensus"},"Section 6.3 - Fast Probabilistic Consensus"),", describes how the ",(0,o.kt)("inlineCode",{parentName:"p"},"opinionField")," is updated when FPC terminates."),(0,o.kt)("p",null,"We need to describe how to set the initial opinion and how to trigger FPC voting. Specifically, we need to describe how the metadata ",(0,o.kt)("inlineCode",{parentName:"p"},"opinionField")," is initially set.  Since the outcome of FPC respects a supermajority of initial opinions, it is important that the initial opinion is set correctly.  For example, if 90% of nodes (weighted by active consensus mana) initially want to accept a transaction, the transaction is accepted with very high probablity.  "),(0,o.kt)("p",null,"Recall from specification ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.1ObjectsOfConsensus"},"Section 6.1 - Object of Consensus"),", that ",(0,o.kt)("inlineCode",{parentName:"p"},"opinionField")," consists of fields, ",(0,o.kt)("inlineCode",{parentName:"p"},"opinion")," which is a boolean, ",(0,o.kt)("inlineCode",{parentName:"p"},"level")," which is either 1,2, or 3, and ",(0,o.kt)("inlineCode",{parentName:"p"},"timeFormed")," which is a time.  In this specification, we describe how these three fields are set for both messages and transactions.  "),(0,o.kt)("h3",{id:"6213-summary"},"6.2.1.3 Summary"),(0,o.kt)("p",null,"In this specification, we describe how the Opinion Setter, see ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/2.4DataFlow"},"Section 2.4 - Data Flow"),", initially sets ",(0,o.kt)("inlineCode",{parentName:"p"},"opinionField")," metadata for every object being voted upon. Specifically, the opinion setter writes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The initial opinion, i.e. the initial boolean value."),(0,o.kt)("li",{parentName:"ul"},"The level of knowledge which dictates when FPC will be triggered."),(0,o.kt)("li",{parentName:"ul"},"The time the opinion was formed. ")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.1ObjectsOfConsensus"},"Section 6.1 - Object of Consensus")," for a detailed explanation of these fields. "),(0,o.kt)("p",null,"As discussed in ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.1ObjectsOfConsensus"},"Section 6.1 - Object of Consensus"),", FPC can potentially vote on two main object types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"transactions in order to resolve conflicts"),(0,o.kt)("li",{parentName:"ul"},"timestamps in order to judge timestamps")),(0,o.kt)("p",null,"We split this specification into two main sections: the first dealing with setting the opinion on messages and their timestamps, and the second on setting the opinion on transactions.  "),(0,o.kt)("p",null,'With regards to timestamps, we vote on whether or not the timestamp is "too old" when the message arrives to the node. As with voting on transactions, we can reset this opinion using the approval weight even if the node is out of sync.  '),(0,o.kt)("p",null,"We judge transactions based on the FCoB rule, which stands for Fast Consensus of Barcelona, in honor of the research summit where the rule was first defined.  A transaction ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," satisfied the FCoB rule if the node has not received any transactions conflicting with ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," before ",(0,o.kt)("inlineCode",{parentName:"p"},"arrivalTime(X)+C")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," is the FCoB parameter.  Recall from ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.4Finalization"},"Section 6.4 - Finalization")," that two transactions conflict if they consume the same UTXO outputs. "),(0,o.kt)("p",null,"Intuitively, the FCoB rule only accepts a transaction if it has arrived significantly before any other conflict.  The FCoB rule guarantees that if one transaction is liked by a significant number of nodes (weighted by consensus mana), that all other conflicting transactions will be initially disliked by a supermajority of nodes, and thus rejected by FPC, guaranteeing that no two conflicting messages will be approved by FPC. "),(0,o.kt)("h3",{id:"6214-dependencies"},"6.2.1.4 Dependencies"),(0,o.kt)("p",null,"This part of the specification depends on the following specifications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/IOTA-2.0-Research-Specifications/4.2Timestamps"},"Section 4.2 - Timestamps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/IOTA-2.0-Research-Specifications/5.2LedgerState"},"Section 5.2 - Ledger State")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/IOTA-2.0-Research-Specifications/6.1ObjectsOfConsensus"},"Section 6.1 - Object of Consensus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/IOTA-2.0-Research-Specifications/6.4Finalization"},"Section 6.4 - Finalization"))),(0,o.kt)("h3",{id:"6214-parameters-and-lists"},"6.2.1.4 Parameters and Lists"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"DLARGE")),(0,o.kt)("td",{parentName:"tr",align:null},"duration"),(0,o.kt)("td",{parentName:"tr",align:null},"Gratuitous network delay estimate; set to 15 seconds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"W")),(0,o.kt)("td",{parentName:"tr",align:null},"duration"),(0,o.kt)("td",{parentName:"tr",align:null},"Time window, set to 1 minute. Require W>2DLARGE")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"DSMALL")),(0,o.kt)("td",{parentName:"tr",align:null},"duration"),(0,o.kt)("td",{parentName:"tr",align:null},"Small estimated network delay, set to 5 seconds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"C")),(0,o.kt)("td",{parentName:"tr",align:null},"duration"),(0,o.kt)("td",{parentName:"tr",align:null},"FCoB parameter=DSMALL")))),(0,o.kt)("h2",{id:"622-timestamps"},"6.2.2 Timestamps"),(0,o.kt)("p",null,"The timestamp defines the time when the message was created. Voting on timestamps ensures that nodes are issuing messages with correct timestamps, where correct means that the offset with current time is lower than a certain parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"W"),".  This time window is large to account for the network delay. In order to have consensus on the accuracy of the timestamp, and hence the eligibility of the message, we use ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.3FastProbabilisticConsensus"},"FPC")," voting, along with the levels of knowledge.  "),(0,o.kt)("p",null,"Clearly, in order to have a correct perception of the timestamp quality, ",(0,o.kt)("strong",{parentName:"p"},"we assume the node is in sync")," (see section ",(0,o.kt)("a",{parentName:"p",href:"#Not_in_Sync"},"Not in Sync")," otherwise).\nVoting on timestamps should not occur for every message. Specifically, only for those that arrive with an offset close to ",(0,o.kt)("inlineCode",{parentName:"p"},"W"),", i.e. within ",(0,o.kt)("inlineCode",{parentName:"p"},"DLARGE"),"."),(0,o.kt)("h3",{id:"6221-setting-the-initial-opinion"},"6.2.2.1 Setting the Initial Opinion"),(0,o.kt)("p",null,"In this section, we describe how the ",(0,o.kt)("inlineCode",{parentName:"p"},"opinionField")," is set for messages, and how we achieve consensus on the correctness of timestamps. "),(0,o.kt)("p",null,"The opinion of timestamp is stored according to the rules laid out in the ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.1ObjectsOfConsensus"},"Object of Consensus")," specification.  The opinion is set by the module called the ",(0,o.kt)("inlineCode",{parentName:"p"},"OpinionManager"),": see ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/2.4DataFlow"},"Section 2.4 - Data Flow"),".  Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.3FastProbabilisticConsensus"},"FPC")," specification to see how the voting actually takes place.  "),(0,o.kt)("p",null,"The node shall set ",(0,o.kt)("inlineCode",{parentName:"p"},"messageID.opinionField=timestampOpinion(messageID)"),", using the function defined below."),(0,o.kt)("p",null,"The initial opinion and level of knowledge are set according to the following rule:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vbnet"},"FUNCTION (bool,level,time) = timestampOpinion(messageID)\ntime = CurrentTime()\nIF messageID.arrivalTime+w >= CurrentTime()  \n    opinion = TRUE\nELSE \n    opinion = DISLIKE\nIF |messageID.arrivalTime +W - CurrentTime() | >= DLARGE\n    level = 2\nELSE IF |messageID.arrivalTime +W - CurrentTime() | >= 2*DLARGE\n    level = 3\nELSE \n    level = 1\n")),(0,o.kt)("p",null,"Recall that the ",(0,o.kt)("inlineCode",{parentName:"p"},"arrivalTime.messageID")," is the time that the message was received by the node: see ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/2.2MessageLayout"},"Section 2.2 - Message Layout"),'.\nThe initial opinion is set based on the question "did the transaction arrive before ',(0,o.kt)("inlineCode",{parentName:"p"},"currentTime - W"),'?".  The level of knowledge is then set by the margin as a factor of the delay time.  Specifically, under the assumption that all messages are delivered to all nodes within time ',(0,o.kt)("inlineCode",{parentName:"p"},"DLARGE")," after the arrive (with high probability), then: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"|arrivalTime +W - currentTime | < DLARGE"),", then the node can make any conclusions about the arrival times of the message, and hence it has only level of knowledge 1."),(0,o.kt)("li",{parentName:"ul"},"If one node has ",(0,o.kt)("inlineCode",{parentName:"li"},"|arrivalTime +W - currentTime | >= DLARGE "),", then all nodes must have the same opinion, and hence that node has level of knowledge at least 2."),(0,o.kt)("li",{parentName:"ul"},"If one node has ",(0,o.kt)("inlineCode",{parentName:"li"},"|arrivalTime +W - currentTime | >= 2*DLARGE"),", then all nodes must have ",(0,o.kt)("inlineCode",{parentName:"li"},"|arrivalTime +W - currentTime | => DLARGE")," guaranteeing level of knowledge 3.\n",(0,o.kt)("img",{parentName:"li",src:"https://i.imgur.com/a5or78c.png",alt:null}))),(0,o.kt)("p",null,"For example, let us set ",(0,o.kt)("inlineCode",{parentName:"p"},"w")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"D")," to 1 minute and 15 seconds respectively. Let's assume that the current time is 12:00:00 and we have to evaluate a new message with timestamp set at 11:59:45. Since 11:59:45 +1 minute>12:00:00, the node will set the opinion to ",(0,o.kt)("inlineCode",{parentName:"p"},"LIKE"),". Moreover, since |11:59:45+1 minute-12:00:00| is greater than 15 seconds, and also grater than 2*15 seconds, the node will set the level of knowledge for this opinion to 3 (i.e., the supermajority of the network should already have the same opinion)."),(0,o.kt)("p",null,"Consider now a new message with timestamp 11:59:10. Since 11:59:10+1 minute>12:00:00, the node will set the opinion to ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUE"),". However, since |11:59:10+1 minute-12:00:00| is lower than 15 seconds, the node will set the level of knowledge for to 1, meaning that this message  will be voted upon by FPC. "),(0,o.kt)("p",null,"In general, timestamps with level of knowledge 1 will be input into FPC, that will eventually trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"finalized")," event, after which we may set a message as eligible or as discarded, depending on the outcome. If instead, the timestamp the node is considering has already level of knowledge larger or equal than 2, the node does not need to vote, but has to reply to queries. Either it is eligible (marked as liked) or it is marked as disliked. If the timestamp has level of knowledge 3, the node does not reply to FPC queries."),(0,o.kt)("p",null,"With high probability, we can be sure that for any time ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),", no node can issue a message with timestamp ",(0,o.kt)("inlineCode",{parentName:"p"},"t")," after ",(0,o.kt)("inlineCode",{parentName:"p"},"t + W + 2*DLARGE"),", because after this time, the message would be considered to be bad with level of knowledge 3.  Thus, assuming the node is in sync",", after approximately 1.5 minutes, the number of messages of a particular timestamp cannot be altered. "),(0,o.kt)("h2",{id:"623-transactions-and-fcob"},"6.2.3 Transactions and FCoB"),(0,o.kt)("p",null,"In this section, we discuss how to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"opinionField")," on transactions through the so-called FCoB rule.  Recall that a transaction ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," satisfies the FCoB rule if the node has not received any transactions conflicting with ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," before ",(0,o.kt)("inlineCode",{parentName:"p"},"arrivalTime(X)+C"),"."),(0,o.kt)("h3",{id:"6231-fcob-function"},"6.2.3.1 FCoB function"),(0,o.kt)("p",null,"We now define the function ",(0,o.kt)("inlineCode",{parentName:"p"},"FCOB")," which decides the opinion of the transaction.  When setting the opinion, the node simply sets ",(0,o.kt)("inlineCode",{parentName:"p"},"opinionField=FCOB(transactionID)"),".  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vbnet"},"FUNCTION (bool,level,time) = FCOB(transactionID)\ntime = currentTime\nIF transactionID IS NOT a conflict\n    bool = TRUE\n    IF currentTime <= transactionID.arrivalTime + C + DSMALL\n        level = 1\n    ELSE IF currentTime <= transactionID.arrivalTime + C + 2 * DSMALL\n        level = 2\n    ELSE \n        level = 3\nELSE\n    FOR x IN conflict with transactionID\n        IF x.arrivalTime >= transactionID.arrivalTime + C OR ( x.opinionField.opinion == FALSE AND x.opinionField.level == 2 OR 3)\n        bool = TRUE\n        level = 1\nELSE \n    conflictTime= MIN(x.arrivalTime FORALL x conflicting with transactionID)\n    IF transaction.arrivalTime + C <= conflictTime \n        bool = TRUE\n    ELSE\n        bool = FALSE\n    If |transaction.arrivalTime + C - conflictTime| <= DSMALL\n        level = 1\n    ELSE IF |transaction.arrivalTime + C - conflictTime| <= 2DSMALL\n        level = 2\n    ELSE\n        level = 3\nRETURN (bool,level,timeFormed)\n")),(0,o.kt)("p",null,"We now will explain the logical behind this function.  There are three cases which are treated:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"No conflicts have been detected"),(0,o.kt)("li",{parentName:"ol"},"Conflicts have been detected but have been rejected"),(0,o.kt)("li",{parentName:"ol"},"Conflicts have been detected are either pending or have been confirmed")),(0,o.kt)("p",null,"Case 3 is the simplest case: since conflicts have been detected, we set the opinion according to the FCOB rule.  Then level is set according to the difference of ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction.arrivalTime + C")," and  ",(0,o.kt)("inlineCode",{parentName:"p"},"conflictTime"),", the oldest arrival time of a conflicting transaction.  Essentially, the level measures how many network delays there are between these two values.   "),(0,o.kt)("p",null,"In Case 1 is the most common because conflicts will never arrive for most transactions. Without conflicts, the opinion can be only set provisionally since it might change if a conflict arrives later. The opinion is set to true, but the level is set as if a conflict arrived at that time.   For example, after  ",(0,o.kt)("inlineCode",{parentName:"p"},"C + DSMALL")," time has elapsed since arrival time, if a conflict does arrive the opinion will remain true with level at least 2.  "),(0,o.kt)("p",null,"Lastly, Case 2 is an important special case of the FCoB rule. To see the need for this modification consider the following example.  Suppose someone issues a pair of conflicting transactions where both transactions are rejected by FPC.  Then, if someone ever issues a new transaction consuming those funds, FCoB, strictly speaking would reject the new transaction, since it would conflict with a previous transaction.  Thus, if a pair of double spends are rejected, the funds would be locked.  This is undesirable and impractical behavior: an honest but malfunctioning wallet can issue double spends.  Moreover, tracking the locked funds would be onerous. "),(0,o.kt)("p",null,"To prevent the FCoB rule from locking funds, we modify it to the following: a transaction ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," satisfied the FCoB rule if all transactions ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," conflicting with ",(0,o.kt)("inlineCode",{parentName:"p"},"X"),"  before ",(0,o.kt)("inlineCode",{parentName:"p"},"arrivalTime(X)+C")," has been rejected, i.e. has has opinion false and level 2 or 3.  With this rule, any conflicts which are rejected will not affect the opinion on future conflicts.  For simplicity case, all transactions falling under this case are treated as level 1."),(0,o.kt)("h3",{id:"6232-when-to-set-the-opinion"},"6.2.3.2 When to Set the Opinion"),(0,o.kt)("p",null,"The protocol is actually flexible on when the opinion field of a transaction is set.  However, the node must do the following. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The opinion of a transaction must be set after it is booked.  When the transaction is booked, the node searches for conflicts, and if a conflict exists the node either creates a new conflict set or else it adds the transaction to an old conflict sets.  If the ",(0,o.kt)("inlineCode",{parentName:"li"},"FCoB")," function is called before the transaction is booked, it will be impossible to tell what conflicts exist."),(0,o.kt)("li",{parentName:"ul"},"The opinion field is ",(0,o.kt)("inlineCode",{parentName:"li"},"NULL")," only if no conflicts have been detected"),(0,o.kt)("li",{parentName:"ul"},"Fore very valid ",(0,o.kt)("inlineCode",{parentName:"li"},"transactionID"),", the ",(0,o.kt)("inlineCode",{parentName:"li"},"transactionID.opinionField"),' is either NULL or "correct" at the  times ',(0,o.kt)("inlineCode",{parentName:"li"},"transactionID.arrivalTime + C + DSMALL")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"transactionID.arrivalTime + C + 2DSMALL"),", i.e. the opinion field would be unchanged if reset at that those two times. ")),(0,o.kt)("p",null,"There are a plethora of ways this could be implemented. We give two examples.  "),(0,o.kt)("p",null,"First, after a message is booked, its transaction, say ",(0,o.kt)("inlineCode",{parentName:"p"},"transactionID")," is added to a timed queue.  At ",(0,o.kt)("inlineCode",{parentName:"p"},"transactionID.arrivalTime + C + DSMall")," the opinion is set, and then either the transaction is rejected (i.e. bad with level 2 or 3), voted upon (level 1), or goes to tip selection (good level 2). If no conflict has been detected, the transaction (i.e. the transaction is good level 2), the transaction is put in another timed queue.  At time ",(0,o.kt)("inlineCode",{parentName:"p"},"transactionID.arrivalTime + C + 2DSMall")," the opinion is reset.  Note, once a conflict is detected the opinion field would not change, and so only transactions which are not part of conflict sets need to enter the second timed queue."),(0,o.kt)("p",null,"Second, while a transaction is being booked, conflict detection can immediately trigger setting the opinion field for all the new conflicts. This would include the transaction itself and any members of its conflict set which previously had a ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," opinion field. This implementation has a few caveats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Any transaction with a ",(0,o.kt)("inlineCode",{parentName:"li"},"NULL"),' opinion field must be treated as a "good" transaction.  At any time, the appropriate level of knowledge could be computed by looking at the arrival time.'),(0,o.kt)("li",{parentName:"ul"},"Before the monotonically liked flag is set, the transaction must be at least ",(0,o.kt)("inlineCode",{parentName:"li"},"transactionID.arrivalTime + C + DSMall")," and have either opinion field ",(0,o.kt)("inlineCode",{parentName:"li"},"NULL")," or (good, level 2 or 3). ")),(0,o.kt)("p",null,"Although this is an implementation detail, we remark that after a transaction is booked, it is easy to see if a message is a conflict or not. Indeed, when a conflict is detected, a new branch is created, and the ID of that new branch is the same as the ",(0,o.kt)("inlineCode",{parentName:"p"},"transactionID"),". Thus a transaction is a conflict if and only if ",(0,o.kt)("inlineCode",{parentName:"p"},"transactionID = transactionID.branchID"),".  See ",(0,o.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/5.2LedgerState"},"Section 5.2 - Ledger State"),"."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return n?i.createElement(u,s(s({ref:t},p),{},{components:n})):i.createElement(u,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);