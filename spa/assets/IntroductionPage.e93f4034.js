import{a as _,c as Y,r as g,p as $,o as D,h as u,as as E,b as H,aw as L,a5 as O,ai as V,a8 as i,ah as a,ae as T,a7 as l,ax as x,ay as s,aa as m}from"./index.90ac04dc.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";const M={ratio:[String,Number]};function W(e,c){return _(()=>{const d=Number(e.ratio||(c!==void 0?c.value:void 0));return isNaN(d)!==!0&&d>0?{paddingBottom:`${100/d}%`}:null})}const Z=16/9;var G=Y({name:"QImg",props:{...M,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Z},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:c,emit:d}){const p=g(e.initialRatio),C=W(e,p);let n=null,v=!1;const o=[g(null),g(b())],r=g(0),f=g(!1),h=g(!1),B=_(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),N=_(()=>({width:e.width,height:e.height})),j=_(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),k=_(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));$(()=>q(),w);function q(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function b(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function w(t){n!==null&&(clearTimeout(n),n=null),h.value=!1,t===null?(f.value=!1,o[r.value^1].value=b()):f.value=!0,o[r.value].value=t}function I({target:t}){v!==!0&&(n!==null&&(clearTimeout(n),n=null),p.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,z(t,1))}function z(t,y){v===!0||y===1e3||(t.complete===!0?P(t):n=setTimeout(()=>{n=null,z(t,y+1)},50))}function P(t){v!==!0&&(r.value=r.value^1,o[r.value].value=null,f.value=!1,h.value=!1,d("load",t.currentSrc||t.src))}function Q(t){n!==null&&(clearTimeout(n),n=null),f.value=!1,h.value=!0,o[r.value].value=null,o[r.value^1].value=b(),d("error",t)}function R(t){const y=o[t].value,S={key:"img_"+t,class:j.value,style:k.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...y};return r.value===t?(S.class+=" q-img__image--waiting",Object.assign(S,{onLoad:I,onError:Q})):S.class+=" q-img__image--loaded",u("div",{class:"q-img__container absolute-full",key:"img"+t},u("img",S))}function F(){return f.value!==!0?u("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},H(c[h.value===!0?"error":"default"])):u("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},c.loading!==void 0?c.loading():e.noSpinner===!0?void 0:[u(L,{color:e.spinnerColor,size:e.spinnerSize})])}return w(q()),D(()=>{v=!0,n!==null&&(clearTimeout(n),n=null)}),()=>{const t=[];return C.value!==null&&t.push(u("div",{key:"filler",style:C.value})),h.value!==!0&&(o[0].value!==null&&t.push(R(0)),o[1].value!==null&&t.push(R(1))),t.push(u(E,{name:"q-transition--fade"},F)),u("div",{class:B.value,style:N.value,role:"img","aria-label":e.alt},t)}}}),U="/assets/2023-05-2211.44.36.f159fab8.png",J="/assets/stitching.f8575d20.jpeg",K="/assets/2023-05-2200.08.08.6679af58.png",X="/assets/2022-11-0209.20.22.627e6d5e.png";const ee={},te={class:"main",style:{"text-align":"center"}},ae={class:"row justify-center"},ie=a("br",null,null,-1),ne={style:{"text-align":"left"}},le={class:"row q-gutter-md justify-center"},se=a("img",{src:J},null,-1),oe=a("div",{class:"text-h6"},"Purpose",-1),re=a("img",{src:K},null,-1),ue=a("img",{src:X},null,-1),ce=a("div",{class:"text-h6"},"Result",-1),de=a("div",{class:"text-h6"},"Requirements",-1),ge=a("p",null," 1.Sample information: sample name, target gene, group name, gRNA sequence, barcodes. ",-1),fe=a("p",null,"2.Sequencing data in Fastq.",-1),he=a("p",null,"3.Target gene sequence in Fasta.",-1),me=a("div",{class:"text-h6"},"Contact",-1),_e=a("div",{class:"text-h6"},"Citation",-1),ve=a("a",{href:"https://doi.org/10.1016/j.xplc.2023.100783"},"CrisprStitch: Fast evaluation of the efficiency of CRISPR editing systems.",-1);function ye(e,c){return O(),V("div",te,[i(G,{src:U,style:{"max-width":"1000px"}}),a("div",ae,[i(T,{color:"primary",to:"/input",label:"start",size:"xl",icon:"directions",flat:""})]),ie,a("div",ne,[a("div",le,[i(x,{class:"my-card col-xl-2 col-lg-3 col-auto col-md-8 col-xs-10"},{default:l(()=>[se,i(s,null,{default:l(()=>[oe]),_:1}),i(s,{class:"q-pt-none"},{default:l(()=>[m(" CrisprStitch processes the high-throughput genome-editing data of CRISPR nuclease transformed protoplasts with integrated analysis steps, including mapping reads and normalizing reads count, calculating mutation frequency (deletion and insertion), evaluating efficiency and accuracy of genome-editing, and visualizing the results (tables and histograms). ")]),_:1})]),_:1}),i(x,{class:"my-card col-xl-2 col-lg-3 col-auto col-md-8 col-xs-10"},{default:l(()=>[re,ue,i(s,null,{default:l(()=>[ce]),_:1}),i(s,null,{default:l(()=>[m(" After data processing, the application provides an overview of different mutation results in tables and plots. Deletion, deletion size, insertion, insertion size, and substitution are included. ")]),_:1})]),_:1}),i(x,{class:"my-card col-xl-2 col-lg-3 col-auto col-md-8 col-xs-10"},{default:l(()=>[i(s,null,{default:l(()=>[de]),_:1}),i(s,{class:"q-pt-none"},{default:l(()=>[ge,fe,he]),_:1}),i(s,null,{default:l(()=>[me]),_:1}),i(s,null,{default:l(()=>[i(T,{flat:"",color:"secondary",href:"mailto:hanyangshuo@zhangtaolab.org"},{default:l(()=>[m("hanyangshuo@zhangtaolab.org")]),_:1})]),_:1}),i(s,null,{default:l(()=>[_e,m(" Han YS\u2020, Liu GQ\u2020, Wu YC, Bao Y, Zhang Y*, Zhang T*. "),ve,m(" Plant Communications DOI: https://doi.org/10.1016/j.xplc.2023.100783 ")]),_:1})]),_:1})])])])}var xe=A(ee,[["render",ye]]);export{xe as default};