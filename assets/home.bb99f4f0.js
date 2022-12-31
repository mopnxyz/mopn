import{i as X,g as b,w as Y,p as Z,h as v,d as T,o as h,c as p,j as I,n as k,f as t,k as ee,l as _,m as te,q as se,T as ae,s as oe,e as o,v as ne,x as ie,y as L,t as M,b as m,z as le,A as re,u as de,B as ce,F as C,C as F,D as S,E as H,G as ue,H as he,r as me,I as pe}from"./app.5ae0f635.js";import{i as fe,b as R,d as U,m as ge,U as j,C as q,u as B,_ as K,a as ye,E as ve,w as _e,c as be,e as we,f as xe}from"./el-collapse-item.d883af13.js";import{_ as Pe}from"./connectWallet.vue_vue_type_style_index_0_lang.970c5073.js";function V(){if(!arguments.length)return[];var a=arguments[0];return fe(a)?a:[a]}const z=()=>Math.floor(Math.random()*1e4),G=Symbol("collapseContextKey"),W=a=>typeof X(a),Ce=R({accordion:Boolean,modelValue:{type:U([Array,String,Number]),default:()=>ge([])}}),Te={[j]:W,[q]:W},Ne=(a,l)=>{const n=b(V(a.modelValue)),e=r=>{n.value=r;const d=a.accordion?n.value[0]:n.value;l(j,d),l(q,d)},i=r=>{if(a.accordion)e([n.value[0]===r?"":r]);else{const d=[...n.value],u=d.indexOf(r);u>-1?d.splice(u,1):d.push(r),e(d)}};return Y(()=>a.modelValue,()=>n.value=V(a.modelValue),{deep:!0}),Z(G,{activeNames:n,handleItemClick:i}),{activeNames:n,setActiveNames:e}},ke=()=>{const a=B("collapse");return{rootKls:v(()=>a.b())}},Me=T({name:"ElCollapse"}),Oe=T({...Me,props:Ce,emits:Te,setup(a,{expose:l,emit:n}){const e=a,{activeNames:i,setActiveNames:r}=Ne(e,n),{rootKls:d}=ke();return l({activeNames:i,setActiveNames:r}),(u,f)=>(h(),p("div",{class:k(t(d)),role:"tablist","aria-multiselectable":"true"},[I(u.$slots,"default")],2))}});var Fe=K(Oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const Ee=T({name:"ElCollapseTransition"}),He=T({...Ee,setup(a){const l=B("collapse-transition"),n={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,e.scrollHeight!==0?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){e.scrollHeight!==0&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}};return(e,i)=>(h(),ee(ae,te({name:t(l).b()},se(n)),{default:_(()=>[I(e.$slots,"default")]),_:3},16,["name"]))}});var A=K(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);A.install=a=>{a.component(A.name,A)};const Ae=A,Ie=R({title:{type:String,default:""},name:{type:U([String,Number]),default:()=>z()},disabled:Boolean}),$e=a=>{const l=oe(G),n=b(!1),e=b(!1),i=b(z()),r=v(()=>l==null?void 0:l.activeNames.value.includes(a.name));return{focusing:n,id:i,isActive:r,handleFocus:()=>{setTimeout(()=>{e.value?e.value=!1:n.value=!0},50)},handleHeaderClick:()=>{a.disabled||(l==null||l.handleItemClick(a.name),n.value=!1,e.value=!0)},handleEnterClick:()=>{l==null||l.handleItemClick(a.name)}}},Be=(a,{focusing:l,isActive:n,id:e})=>{const i=B("collapse"),r=v(()=>[i.b("item"),i.is("active",t(n)),i.is("disabled",a.disabled)]),d=v(()=>[i.be("item","header"),i.is("active",t(n)),{focusing:t(l)&&!a.disabled}]),u=v(()=>[i.be("item","arrow"),i.is("active",t(n))]),f=v(()=>i.be("item","wrap")),g=v(()=>i.be("item","content")),w=v(()=>i.b(`content-${t(e)}`)),x=v(()=>i.b(`head-${t(e)}`));return{arrowKls:u,headKls:d,rootKls:r,itemWrapperKls:f,itemContentKls:g,scopedContentId:w,scopedHeadId:x}},Ke=["aria-expanded","aria-controls","aria-describedby"],Se=["id","tabindex"],Ve=["id","aria-hidden","aria-labelledby"],We=T({name:"ElCollapseItem"}),De=T({...We,props:Ie,setup(a,{expose:l}){const n=a,{focusing:e,id:i,isActive:r,handleFocus:d,handleHeaderClick:u,handleEnterClick:f}=$e(n),{arrowKls:g,headKls:w,rootKls:x,itemWrapperKls:E,itemContentKls:N,scopedContentId:c,scopedHeadId:O}=Be(n,{focusing:e,isActive:r,id:i});return l({isActive:r}),(P,y)=>(h(),p("div",{class:k(t(x))},[o("div",{role:"tab","aria-expanded":t(r),"aria-controls":t(c),"aria-describedby":t(c)},[o("div",{id:t(O),class:k(t(w)),role:"button",tabindex:P.disabled?-1:0,onClick:y[0]||(y[0]=(...s)=>t(u)&&t(u)(...s)),onKeypress:y[1]||(y[1]=ne(ie((...s)=>t(f)&&t(f)(...s),["stop","prevent"]),["space","enter"])),onFocus:y[2]||(y[2]=(...s)=>t(d)&&t(d)(...s)),onBlur:y[3]||(y[3]=s=>e.value=!1)},[I(P.$slots,"title",{},()=>[L(M(P.title),1)]),m(t(ve),{class:k(t(g))},{default:_(()=>[m(t(ye))]),_:1},8,["class"])],42,Se)],8,Ke),m(t(Ae),null,{default:_(()=>[le(o("div",{id:t(c),class:k(t(E)),role:"tabpanel","aria-hidden":!t(r),"aria-labelledby":t(O)},[o("div",{class:k(t(N))},[I(P.$slots,"default")],2)],10,Ve),[[re,t(r)]])]),_:3})],2))}});var Q=K(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);const Le=_e(Fe,{CollapseItem:Q}),Re=be(Q),D="/assets/logo.b18bf2fb.png",Ue={flex:"","justify-between":"","items-center":"","px-5":"","md:px-32":"","py-4":"","bg-black":"","text-primary":""},je={flex:"","items-center":""},qe=["width","src"],ze={hidden:"","md:flex":""},Ge=["onClick"],Qe={href:"#"},Je={key:0,"font-montserrat":"","text-12":""},Xe={key:0,hidden:"","md:block":""},Ye={class:"dialog","px-4":"","py-4":""},Ze=o("div",{"text-center":"","text-28":"","my-10":"","text-primary":""}," FAQ ",-1),et={"max-h-sm":"","md:max-h-2xl":"","overflow-y-scroll":"","md:overflow-y-auto":"",clas:"faq"},tt={"text-desc":"","text-12":"","my-3":"","leading-6":""},st={class:"dialog","px-4":"","py-4":""},at=o("div",{"text-center":"","text-28":"","mb-10":"","mt-10":"","text-primary":""}," TEAM ",-1),ot={"max-h-sm":"","md:max-h-2xl":"","overflow-y-scroll":"","md:overflow-y-auto":"","px-10":""},nt={"text-primary":"","text-15":"","leading-8":"",flex:"","items-center":"",relative:""},it=o("div",{style:{position:"absolute",left:"-24px",width:"8px",height:"8px","background-color":"#CFB56A","border-radius":"100%","margin-right":"10px"}},null,-1),lt={"text-desc":"","text-12":"","my-6":"","leading-6":""},rt={class:"popup-example-block"},dt={flex:"","justify-center":"","items-center":"","mt-5":""},ct=["src"],ut={"text-12":"","text-primary":"","mt-6":""},ht=["onClick"],mt={href:"#"},pt=o("div",{class:"test-border-line"},null,-1),ft=T({__name:"TheHeader",setup(a){const n=[{title:"Litepaper"},{title:"Team"},{title:"FAQ"}],e=[{title:"What is MOPN?",desc:["MOPN is a dynamic map recording all the history of the NFT industry. It is fully on chain, all logic and status are deployed on Ethereum Mainnet.",'In MOPN, users can choose NFTs from their wallet and place them on the world map to claim region. Their region will continue to earn $Energy generated by the system. $Energy can be used to participate in daily auctions for in-game props, which can give users an advantage in battles with other users."']},{title:"What is the MOPN roadmap?",desc:["2022-11\uFF1AStartup MOPN","2022-12\uFF1APass Mint Phase One","2023-1\uFF1ASnapshot Open","2023-2\uFF1AEthereum Testnet Launch ","2023-3\uFF1APass Mint Phase Two","2023-4\uFF1AEthereum Mainnet Launch","2023-5\uFF1APass Mint Phase Three"]},{title:"How can I participate and try MOPN? ",desc:["To participate MOPN, connect your wallet, and follow the guide to choose an available NFT from your wallet and place it on the map to begin."]},{title:"Why can't I use the NFT in my wallet on MOPN?",desc:["Only NFT collections on the whitelist can participate in MOPN. If you want the NFT collection to join to the MOPN whitelist, you can go to snapshot to initiate or participate in a vote."]},{title:"What is the MOPN Pass?",desc:["Pass is a very important role in the MOPN ecosystem. We want MOPN to be built on the community, and we also want to give back most of the profits generated by MOPN to the community after it is recognized by players. Therefore, we have issued Pass, and Pass holders can share the profits generated by the growth of MOPN products."]},{title:"What will the funds from selling Pass NFT be used for?",desc:["All funds from the sale of Pass will be used for the team's ongoing product, R&D and operation in the MOPN ecosystem, as well as market-related expenses. This part of the funds will be managed by a treasury, and there will be open and transparent financial records that will be released to the community in the future."]},{title:"How long is the term of Pass?",desc:["Permanent. MOPN is a fully chain and perpetual product running on the Ethereum mainnet. The rights of Pass are permanently written on the MOPN contract and cannot be modified."]},{title:"How can I mint Pass?",desc:["The first phase of PASS Mint will be by invite-only whitelist, you can go to discord to learn how to get a whitelist invitation."]}],i=[{title:"Chaos",desc:"The earliest concept prototype of MOPN is from Chaos. As his name, Chaos is obsessed with building chaotic systems with intrinsic vitality by simple orders. From text MUDs and social networks in early days to  MMO games and mobile networks, He has been doing it repeatedly in every period, and the products he has built have been used by millions of users. In 2017, the first time Chaos encountered the programmable blockchain network - Ethereum, he immediately fell soul bound with this technology. It is such a strong feeling for him that the door to a new world has opened."},{title:"Wisp",desc:"Over a decade of game design experience, covering SLG,MOBA,TCG,FPS and many other multiple types of games. Experience of cross- type design brings MOPN with various gameplay and strategy depth. He is not only a pro game designer,but also a core hard player with a sensitive smell of creative gameplay. He is the first person addicted to battle royale,ccg, merge and rouguelike games within the team. He believes Web3.0 is a fitting place for creative gameplays and will give players unbelievable game experience."},{title:"0xbing",desc:"After discovering the Bitcoin white paper in 2012, they became interested in blockchain and crypto technology, and are now crypto enthusiast and crypto degen. With over 10 years of coding experience and a passion for product creation, they have gained experience with and have researched over 100+ web3 products and games. They strive to create valuable and exceptional products that provide a great user experience, and have a particular interest in researching and building gaming and gamified applications. They have successfully created game products with millions of users."},{title:"Cyanface",desc:"Before turning into a blockchain builder in 2017, he worked as an architect in server side for a decade. With 6 years of experience in web3, MOPN gives him fresh thought about how to build an on-chain game, especially on how the contract structure design considers efficiency, security and less gas costs for the players. MOPN gives him quite a wide space to bring his technique reserve and coding experience superiority into full play."},{title:"Sprite",desc:"6 years of chief game design, he is capable of designing almost all kinds of game types and modules. This greatly guarantees the balance and strategy playbility of MOPN. He has been a fan of Sid Meier\u2018s Civilization for many years. In MOPN, he thinks, with a much more open economic system of blockchain, the core gameplay will have a greater degree of freedom with more trading flexibility of game items. MOPN could be the Civilization in Web3.0, he believes, as a Civil fan."},{title:"Jeffery",desc:"With more than 500+ games in his game(both steam and epic) library and more than 5000 game hours, Jeff is a super game enthusiast. Rather than the most popular shooting and moba games, he prefers strategy and simulation games. His greatest fun of games is the different designs of game economic system. The economic system of MOPN is the combination of open market and game relations between players. This will bring so much fun and unpredictionary to the system. As community manager, he is very excited for NFT communities with multicultural backgrounds to join MOPN.  "}],r=ue(),d=de(),u=b(!1),f=b(!1),g=b(!1),w=b(0),x=ce("(max-width: 700px)"),E=N=>{N==="FAQ"&&(u.value=!0),N==="Team"&&(f.value=!0),N==="Litepaper"&&window.open("https://mopn.gitbook.io/litepaper/ "),g.value=!1};return(N,c)=>{const O=Pe,P=we,y=xe;return h(),p(C,null,[o("header",Ue,[o("div",je,[o("img",{width:t(x)?28:40,"cursor-pointer":"","mr-5":"",src:t(D),onClick:c[0]||(c[0]=s=>t(d).push("/"))},null,8,qe),o("ul",ze,[(h(),p(C,null,F(n,s=>o("li",{key:s.title,"mx-5":"","text-12":"",onClick:$=>E(s.title)},[o("a",Qe,M(s.title),1)],8,Ge)),64))]),t(!1)?(h(),p("div",Je,"v0.0.6")):S("",!0)]),t(r).path==="/pass"?(h(),p("div",Xe,[m(O)])):S("",!0),o("div",{"text-18":"","md:hidden":"","i-carbon:menu":"",onClick:c[1]||(c[1]=s=>g.value=!t(g))}),m(P,{show:t(u),"onUpdate:show":c[3]||(c[3]=s=>H(u)?u.value=s:null),"confirm-button":!1,"cancel-button":!1,title:"",width:t(x)?320:720},{default:_(()=>[o("div",Ye,[Ze,o("div",et,[m(t(Le),{modelValue:t(w),"onUpdate:modelValue":c[2]||(c[2]=s=>H(w)?w.value=s:null)},{default:_(()=>[(h(),p(C,null,F(e,(s,$)=>m(t(Re),{key:s.title,title:s.title,name:$},{default:_(()=>[(h(!0),p(C,null,F(s.desc,J=>(h(),p("div",tt,M(J),1))),256))]),_:2},1032,["title","name"])),64))]),_:1},8,["modelValue"])])])]),_:1},8,["show","width"]),m(P,{show:t(f),"onUpdate:show":c[4]||(c[4]=s=>H(f)?f.value=s:null),"confirm-button":!1,"cancel-button":!1,title:"",width:t(x)?320:720},{default:_(()=>[o("div",st,[at,o("ul",ot,[(h(),p(C,null,F(i,s=>o("li",{key:s.title,"mb-10":""},[o("div",nt,[it,L(M(s.title),1)]),o("div",lt,M(s.desc),1)])),64))])])]),_:1},8,["show","width"]),m(y,{show:t(g),"onUpdate:show":c[5]||(c[5]=s=>H(g)?g.value=s:null),position:"right"},{default:_(()=>[o("div",rt,[o("div",dt,[o("img",{width:"42",src:t(D)},null,8,ct)]),o("ul",ut,[o("li",null,[m(O)]),(h(),p(C,null,F(n,s=>o("li",{"mt-5":"","pt-5":"","px-10":"","text-center":"",onClick:$=>E(s.title)},[o("a",mt,M(s.title),1)],8,ht)),64))])])]),_:1},8,["show"])]),pt],64)}}});const gt={};function yt(a,l){const n=ft,e=me("RouterView"),i=pe;return h(),p(C,null,[m(n),o("main",null,[m(e)]),m(i)],64)}const wt=he(gt,[["render",yt]]);export{wt as default};
