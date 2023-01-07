import{i as Y,g as b,w as X,p as Z,h as v,d as N,o as u,c as p,j as S,n as k,e as t,k as ee,l as _,m as te,q as se,T as ae,s as oe,b as o,v as ne,x as ie,y as R,t as M,a as h,z as le,A as re,B as de,F as T,C as O,D as K,E,G as ce,f as me,H as ue,r as he,I as pe}from"./app.dfa00629.js";import{i as fe,b as j,d as L,m as ge,U,C as q,u as $,_ as B,a as ye,E as ve,w as _e,c as be,e as we,f as xe,g as Pe}from"./el-collapse-item.812c5efd.js";function V(){if(!arguments.length)return[];var a=arguments[0];return fe(a)?a:[a]}const z=()=>Math.floor(Math.random()*1e4),G=Symbol("collapseContextKey"),W=a=>typeof Y(a),Te=j({accordion:Boolean,modelValue:{type:L([Array,String,Number]),default:()=>ge([])}}),Ne={[U]:W,[q]:W},Ce=(a,l)=>{const n=b(V(a.modelValue)),e=r=>{n.value=r;const d=a.accordion?n.value[0]:n.value;l(U,d),l(q,d)},i=r=>{if(a.accordion)e([n.value[0]===r?"":r]);else{const d=[...n.value],m=d.indexOf(r);m>-1?d.splice(m,1):d.push(r),e(d)}};return X(()=>a.modelValue,()=>n.value=V(a.modelValue),{deep:!0}),Z(G,{activeNames:n,handleItemClick:i}),{activeNames:n,setActiveNames:e}},ke=()=>{const a=$("collapse");return{rootKls:v(()=>a.b())}},Me=N({name:"ElCollapse"}),Fe=N({...Me,props:Te,emits:Ne,setup(a,{expose:l,emit:n}){const e=a,{activeNames:i,setActiveNames:r}=Ce(e,n),{rootKls:d}=ke();return l({activeNames:i,setActiveNames:r}),(m,f)=>(u(),p("div",{class:k(t(d)),role:"tablist","aria-multiselectable":"true"},[S(m.$slots,"default")],2))}});var Oe=B(Fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const Ae=N({name:"ElCollapseTransition"}),Ee=N({...Ae,setup(a){const l=$("collapse-transition"),n={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,e.scrollHeight!==0?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){e.scrollHeight!==0&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}};return(e,i)=>(u(),ee(ae,te({name:t(l).b()},se(n)),{default:_(()=>[S(e.$slots,"default")]),_:3},16,["name"]))}});var H=B(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);H.install=a=>{a.component(H.name,H)};const He=H,Se=j({title:{type:String,default:""},name:{type:L([String,Number]),default:()=>z()},disabled:Boolean}),Ie=a=>{const l=oe(G),n=b(!1),e=b(!1),i=b(z()),r=v(()=>l==null?void 0:l.activeNames.value.includes(a.name));return{focusing:n,id:i,isActive:r,handleFocus:()=>{setTimeout(()=>{e.value?e.value=!1:n.value=!0},50)},handleHeaderClick:()=>{a.disabled||(l==null||l.handleItemClick(a.name),n.value=!1,e.value=!0)},handleEnterClick:()=>{l==null||l.handleItemClick(a.name)}}},$e=(a,{focusing:l,isActive:n,id:e})=>{const i=$("collapse"),r=v(()=>[i.b("item"),i.is("active",t(n)),i.is("disabled",a.disabled)]),d=v(()=>[i.be("item","header"),i.is("active",t(n)),{focusing:t(l)&&!a.disabled}]),m=v(()=>[i.be("item","arrow"),i.is("active",t(n))]),f=v(()=>i.be("item","wrap")),g=v(()=>i.be("item","content")),w=v(()=>i.b(`content-${t(e)}`)),x=v(()=>i.b(`head-${t(e)}`));return{arrowKls:m,headKls:d,rootKls:r,itemWrapperKls:f,itemContentKls:g,scopedContentId:w,scopedHeadId:x}},Be=["aria-expanded","aria-controls","aria-describedby"],Ke=["id","tabindex"],Ve=["id","aria-hidden","aria-labelledby"],We=N({name:"ElCollapseItem"}),De=N({...We,props:Se,setup(a,{expose:l}){const n=a,{focusing:e,id:i,isActive:r,handleFocus:d,handleHeaderClick:m,handleEnterClick:f}=Ie(n),{arrowKls:g,headKls:w,rootKls:x,itemWrapperKls:A,itemContentKls:C,scopedContentId:c,scopedHeadId:F}=$e(n,{focusing:e,isActive:r,id:i});return l({isActive:r}),(P,y)=>(u(),p("div",{class:k(t(x))},[o("div",{role:"tab","aria-expanded":t(r),"aria-controls":t(c),"aria-describedby":t(c)},[o("div",{id:t(F),class:k(t(w)),role:"button",tabindex:P.disabled?-1:0,onClick:y[0]||(y[0]=(...s)=>t(m)&&t(m)(...s)),onKeypress:y[1]||(y[1]=ne(ie((...s)=>t(f)&&t(f)(...s),["stop","prevent"]),["space","enter"])),onFocus:y[2]||(y[2]=(...s)=>t(d)&&t(d)(...s)),onBlur:y[3]||(y[3]=s=>e.value=!1)},[S(P.$slots,"title",{},()=>[R(M(P.title),1)]),h(t(ve),{class:k(t(g))},{default:_(()=>[h(t(ye))]),_:1},8,["class"])],42,Ke)],8,Be),h(t(He),null,{default:_(()=>[le(o("div",{id:t(c),class:k(t(A)),role:"tabpanel","aria-hidden":!t(r),"aria-labelledby":t(F)},[o("div",{class:k(t(C))},[S(P.$slots,"default")],2)],10,Ve),[[re,t(r)]])]),_:3})],2))}});var Q=B(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);const Re=_e(Oe,{CollapseItem:Q}),je=be(Q),D="/assets/logo.b18bf2fb.png",Le={flex:"","justify-between":"","items-center":"","px-5":"","md:px-32":"","py-4":"","bg-black":"","text-primary":""},Ue={flex:"","items-center":""},qe=["width","src"],ze={hidden:"","md:flex":""},Ge=["onClick"],Qe={href:"javascript:void(0)"},Je={key:0,"font-montserrat":"","text-12":""},Ye={key:0,hidden:"","md:block":""},Xe={class:"dialog","px-4":"","py-4":""},Ze=o("div",{"text-center":"","text-28":"","my-10":"","text-primary":""}," FAQ ",-1),et={"max-h-sm":"","md:max-h-2xl":"","overflow-y-scroll":"","md:overflow-y-auto":"",clas:"faq"},tt={"text-desc":"","text-12":"","my-3":"","leading-6":""},st={class:"dialog","px-4":"","py-4":""},at=o("div",{"text-center":"","text-28":"","mb-10":"","mt-10":"","text-primary":""}," TEAM ",-1),ot={"max-h-sm":"","md:max-h-2xl":"","overflow-y-scroll":"","md:overflow-y-auto":"","md:px-10":""},nt={"text-primary":"","text-15":"","leading-8":"",flex:"","items-center":"",relative:""},it=o("div",{style:{position:"absolute",left:"-24px",width:"8px",height:"8px","background-color":"#CFB56A","border-radius":"100%","margin-right":"10px"}},null,-1),lt={"text-desc":"","text-12":"","my-6":"","leading-6":""},rt={class:"popup-example-block"},dt={flex:"","justify-center":"","items-center":"","mt-5":""},ct=["src"],mt={"text-12":"","text-primary":"","mt-6":""},ut=["onClick"],ht={href:"#"},pt=o("div",{class:"test-border-line"},null,-1),ft=N({__name:"TheHeader",setup(a){const n=[{title:"Litepaper"},{title:"Team"},{title:"FAQ"}],e=[{title:"What is MOPN?",desc:["MOPN, Map Of PFP NFTs, is a dynamic map recording all the stories of the NFTverse. It is also a fully on-chain game, all logic and status are deployed on Ethereum Mainnet.","Players can interact with MOPN contract with ethereum wallet. NFTs from the same collection are treated as one alliance. The core gameplay is to occupy more blocks on the map for the alliance.","Occupied blocks are the region of the alliance. Regions generate tradable $ENERGY (ERC-20), which can also buy POM (ERC-1155, props in MOPN). The POM will gain advantages for avatars in the war of occupying more blocks."]},{title:"Why we build MOPN?",desc:["Inspired by r/place, we came up with the idea of MOPN. The idea is to build an open map with simple rules. The map is 100% deployed on Ethereum, cannot be upgraded and any NFT holder is free to play.","The map is the battlefield of NFT collections. It is also a graphical ranking list of the heat level of all PFP NFT collections. The region changing on the map collections is not only about benefits but also the position of the collection in the NFTverse . All the changes will be recorded on ethereum being a part of NFTverse history."]},{title:"How can I get involved with MOPN?",desc:["MOPN is still under development. You can now join our discord, and get whitelisted to mint our PASS NFT."]},{title:"What is the MOPN PASS NFT?",desc:["MOPN is a community project from the first day. Pass Holders are the owners of MOPN.","Holding MOPN Pass means deep involvement with MOPN building and operation. Also, holding MOPN Pass means owning 91 blocks of the map, having permanent power of taxation."]},{title:"What will the funds from minting PASS NFT be used for?",desc:["All the funds from the minting of PASS NFTs will be used for the development of MOPN. We will announce our expenditure to the community at a fixed period of time. "]},{title:"How can I mint PASS NFT?",desc:["The first phase of PASS Mint will be by invite-only whitelist, you can join our discord to get more information."]},{title:"What is the cost of minting a PASS NFT during the current phase?",desc:["0.05 ETH."]},{title:"What is the MOPN roadmap?",desc:["2022-11\uFF1AStartup MOPN","2022-12\uFF1APass Mint Phase One","2023-1\uFF1ASnapshot Open","2023-2\uFF1AEthereum Testnet Launch ","2023-3\uFF1APass Mint Phase Two","2023-4\uFF1AEthereum Mainnet Launch","2023-5\uFF1APass Mint Phase Three"]}],i=[{title:"Chaos",desc:"The earliest concept prototype of MOPN is from Chaos. As his name, Chaos is obsessed with building chaotic systems with intrinsic vitality by simple orders. From text MUDs and social networks in early days to  MMO games and mobile networks, He has been doing it repeatedly in every period, and the products he has built have been used by millions of users. In 2017, the first time Chaos encountered the programmable blockchain network - Ethereum, he immediately fell soul bound with this technology. It is such a strong feeling for him that the door to a new world has opened."},{title:"Wisp",desc:"Over a decade of game design experience, covering SLG,MOBA,TCG,FPS and many other multiple types of games. Experience of cross- type design brings MOPN with various gameplay and strategy depth. He is not only a pro game designer,but also a core hard player with a sensitive smell of creative gameplay. He is the first person addicted to battle royale,ccg, merge and rouguelike games within the team. He believes Web3.0 is a fitting place for creative gameplays and will give players unbelievable game experience."},{title:"0xbing",desc:"After discovering the Bitcoin white paper in 2012, they became interested in blockchain and crypto technology, and are now crypto enthusiast and crypto degen. With over 10 years of coding experience and a passion for product creation, they have gained experience with and have researched over 100+ web3 products and games. They strive to create valuable and exceptional products that provide a great user experience, and have a particular interest in researching and building gaming and gamified applications. They have successfully created game products with millions of users."},{title:"Cyanface",desc:"Before turning into a blockchain builder in 2017, he worked as an architect in server side for a decade. With 6 years of experience in web3, MOPN gives him fresh thought about how to build an on-chain game, especially on how the contract structure design considers efficiency, security and less gas costs for the players. MOPN gives him quite a wide space to bring his technique reserve and coding experience superiority into full play."},{title:"Sprite",desc:"6 years of chief game design, he is capable of designing almost all kinds of game types and modules. This greatly guarantees the balance and strategy playbility of MOPN. He has been a fan of Sid Meier\u2018s Civilization for many years. In MOPN, he thinks, with a much more open economic system of blockchain, the core gameplay will have a greater degree of freedom with more trading flexibility of game items. MOPN could be the Civilization in Web3.0, he believes, as a Civil fan."},{title:"Jeffery",desc:"With more than 500+ games in his game(both steam and epic) library and more than 5000 game hours, Jeff is a super game enthusiast. Rather than the most popular shooting and moba games, he prefers strategy and simulation games. His greatest fun of games is the different designs of game economic system. The economic system of MOPN is the combination of open market and game relations between players. This will bring so much fun and unpredictionary to the system. As community manager, he is very excited for NFT communities with multicultural backgrounds to join MOPN.  "}],r=ce(),d=me(),m=b(!1),f=b(!1),g=b(!1),w=b(0),x=de("(max-width: 700px)"),A=C=>{C==="FAQ"&&(m.value=!0),C==="Team"&&(f.value=!0),C==="Litepaper"&&window.open("https://litepaper.mopn.xyz/"),g.value=!1};return(C,c)=>{const F=we,P=xe,y=Pe;return u(),p(T,null,[o("header",Le,[o("div",Ue,[o("img",{width:t(x)?28:40,"cursor-pointer":"","mr-5":"",src:t(D),onClick:c[0]||(c[0]=s=>t(d).push("/"))},null,8,qe),o("ul",ze,[(u(),p(T,null,O(n,s=>o("li",{key:s.title,"mx-5":"","text-12":"",onClick:I=>A(s.title)},[o("a",Qe,M(s.title),1)],8,Ge)),64))]),t(!1)?(u(),p("div",Je," v0.0.6 ")):K("",!0)]),t(r).path==="/pass"?(u(),p("div",Ye,[h(F)])):K("",!0),o("div",{"text-18":"","md:hidden":"","i-carbon:menu":"",onClick:c[1]||(c[1]=s=>g.value=!t(g))}),h(P,{show:t(m),"onUpdate:show":c[3]||(c[3]=s=>E(m)?m.value=s:null),"confirm-button":!1,"cancel-button":!1,title:"",width:t(x)?320:720},{default:_(()=>[o("div",Xe,[Ze,o("div",et,[h(t(Re),{modelValue:t(w),"onUpdate:modelValue":c[2]||(c[2]=s=>E(w)?w.value=s:null)},{default:_(()=>[(u(),p(T,null,O(e,(s,I)=>h(t(je),{key:s.title,title:s.title,name:I},{default:_(()=>[(u(!0),p(T,null,O(s.desc,J=>(u(),p("div",tt,M(J),1))),256))]),_:2},1032,["title","name"])),64))]),_:1},8,["modelValue"])])])]),_:1},8,["show","width"]),h(P,{show:t(f),"onUpdate:show":c[4]||(c[4]=s=>E(f)?f.value=s:null),"confirm-button":!1,"cancel-button":!1,title:"",width:t(x)?320:720},{default:_(()=>[o("div",st,[at,o("ul",ot,[(u(),p(T,null,O(i,s=>o("li",{key:s.title,"mb-10":""},[o("div",nt,[it,R(M(s.title),1)]),o("div",lt,M(s.desc),1)])),64))])])]),_:1},8,["show","width"]),h(y,{show:t(g),"onUpdate:show":c[5]||(c[5]=s=>E(g)?g.value=s:null),position:"right"},{default:_(()=>[o("div",rt,[o("div",dt,[o("img",{width:"42",src:t(D)},null,8,ct)]),o("ul",mt,[o("li",null,[h(F)]),(u(),p(T,null,O(n,s=>o("li",{"mt-5":"","pt-5":"","px-10":"","text-center":"",onClick:I=>A(s.title)},[o("a",ht,M(s.title),1)],8,ut)),64))])])]),_:1},8,["show"])]),pt],64)}}});const gt={};function yt(a,l){const n=ft,e=he("RouterView"),i=pe;return u(),p(T,null,[h(n),o("main",null,[h(e)]),h(i)],64)}const bt=ue(gt,[["render",yt]]);export{bt as default};
