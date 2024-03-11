import{c as X}from"./selection.ecb886b4.js";import{r as B,f as V,L as Q,x as J,J as N,p as _,d as Z,o as Y,k as A,O as ee,y as R,at as P,H as te,a1 as ne,c as H,a as g,h as E,b as j,S as G,U as O,m as le,n as ae,s as ie,E as oe,au as re}from"./index.90ac04dc.js";let se=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,se=e.scrollLeft>=0,e.remove()}const ve={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function ge({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:l,proxy:a,emit:c}=A(),o=B(null);let d=null;function f(i){return o.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const r={};n===void 0&&(Object.assign(r,{hide(i){a.hide(i)},toggle(i){a.toggle(i),i.qAnchorHandled=!0},toggleKey(i){V(i,13)===!0&&r.toggle(i)},contextClick(i){a.hide(i),Q(i),J(()=>{a.show(i),i.qAnchorHandled=!0})},prevent:Q,mobileTouch(i){if(r.mobileCleanup(i),f(i)!==!0)return;a.hide(i),o.value.classList.add("non-selectable");const u=i.target;N(r,"anchor",[[u,"touchmove","mobileCleanup","passive"],[u,"touchend","mobileCleanup","passive"],[u,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,a.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){o.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&i!==void 0&&X()}}),n=function(i=l.contextMenu){if(l.noParentEvent===!0||o.value===null)return;let u;i===!0?a.$q.platform.is.mobile===!0?u=[[o.value,"touchstart","mobileTouch","passive"]]:u=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:u=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],N(r,"anchor",u)});function h(){ee(r,"anchor")}function v(i){for(o.value=i;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function b(){if(l.target===!1||l.target===""||a.$el.parentNode===null)o.value=null;else if(l.target===!0)v(a.$el.parentNode);else{let i=l.target;if(typeof l.target=="string")try{i=document.querySelector(l.target)}catch{i=void 0}i!=null?(o.value=i.$el||i,n()):(o.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return _(()=>l.contextMenu,i=>{o.value!==null&&(h(),n(i))}),_(()=>l.target,()=>{o.value!==null&&h(),b()}),_(()=>l.noParentEvent,i=>{o.value!==null&&(i===!0?h():n())}),Z(()=>{b(),t!==!0&&l.modelValue===!0&&o.value===null&&c("update:modelValue",!1)}),Y(()=>{d!==null&&clearTimeout(d),h()}),{anchorEl:o,canShow:f,anchorEvents:r}}function be(e,t){const n=B(null);let l;function a(d,f){const r=`${f!==void 0?"add":"remove"}EventListener`,h=f!==void 0?f:l;d!==window&&d[r]("scroll",h,R.passive),window[r]("scroll",h,R.passive),l=f}function c(){n.value!==null&&(a(n.value),n.value=null)}const o=_(()=>e.noParentEvent,()=>{n.value!==null&&(c(),t())});return Y(o),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:a}}const{notPassiveCapture:W}=R,y=[];function C(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=P.length-1;for(;n>=0;){const l=P[n].$;if(l.type.name==="QTooltip"){n--;continue}if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;n--}for(let l=y.length-1;l>=0;l--){const a=y[l];if((a.anchorEl.value===null||a.anchorEl.value.contains(t)===!1)&&(t===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(t)===!1))e.qClickOutside=!0,a.onClickOutside(e);else return}}function pe(e){y.push(e),y.length===1&&(document.addEventListener("mousedown",C,W),document.addEventListener("touchstart",C,W))}function xe(e){const t=y.findIndex(n=>n===e);t>-1&&(y.splice(t,1),y.length===0&&(document.removeEventListener("mousedown",C,W),document.removeEventListener("touchstart",C,W)))}let K,D;function ye(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function qe(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{z[`${e}#ltr`]=e,z[`${e}#rtl`]=e});function we(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:z[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function ue(e,t){let{top:n,left:l,right:a,bottom:c,width:o,height:d}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],l-=t[0],c+=t[1],a+=t[0],o+=t[0],d+=t[1]),{top:n,bottom:c,height:d,left:l,right:a,width:o,middle:l+(a-l)/2,center:n+(c-n)/2}}function ce(e,t,n){let{top:l,left:a}=e.getBoundingClientRect();return l+=t.top,a+=t.left,n!==void 0&&(l+=n[1],a+=n[0]),{top:l,bottom:l+1,height:1,left:a,right:a+1,width:1,middle:a,center:l}}function de(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function F(e,t,n,l){return{top:e[n.vertical]-t[l.vertical],left:e[n.horizontal]-t[l.horizontal]}}function fe(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{fe(e,t+1)},10);return}const{targetEl:n,offset:l,anchorEl:a,anchorOrigin:c,selfOrigin:o,absoluteOffset:d,fit:f,cover:r,maxHeight:h,maxWidth:v}=e;if(te.is.ios===!0&&window.visualViewport!==void 0){const S=document.body.style,{offsetLeft:w,offsetTop:x}=window.visualViewport;w!==K&&(S.setProperty("--q-pe-left",w+"px"),K=w),x!==D&&(S.setProperty("--q-pe-top",x+"px"),D=x)}const{scrollLeft:b,scrollTop:i}=n,u=d===void 0?ue(a,r===!0?[0,0]:l):ce(a,d,l);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:v||"100vw",maxHeight:h||"100vh",visibility:"visible"});const{offsetWidth:L,offsetHeight:q}=n,{elWidth:I,elHeight:T}=f===!0||r===!0?{elWidth:Math.max(u.width,L),elHeight:r===!0?Math.max(u.height,q):q}:{elWidth:L,elHeight:q};let s={maxWidth:v,maxHeight:h};(f===!0||r===!0)&&(s.minWidth=u.width+"px",r===!0&&(s.minHeight=u.height+"px")),Object.assign(n.style,s);const p=de(I,T);let m=F(u,p,c,o);if(d===void 0||l===void 0)M(m,u,p,c,o);else{const{top:S,left:w}=m;M(m,u,p,c,o);let x=!1;if(m.top!==S){x=!0;const k=2*l[1];u.center=u.top-=k,u.bottom-=k+2}if(m.left!==w){x=!0;const k=2*l[0];u.middle=u.left-=k,u.right-=k+2}x===!0&&(m=F(u,p,c,o),M(m,u,p,c,o))}s={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(s.maxHeight=m.maxHeight+"px",u.height>m.maxHeight&&(s.minHeight=s.maxHeight)),m.maxWidth!==void 0&&(s.maxWidth=m.maxWidth+"px",u.width>m.maxWidth&&(s.minWidth=s.maxWidth)),Object.assign(n.style,s),n.scrollTop!==i&&(n.scrollTop=i),n.scrollLeft!==b&&(n.scrollLeft=b)}function M(e,t,n,l,a){const c=n.bottom,o=n.right,d=ne(),f=window.innerHeight-d,r=document.body.clientWidth;if(e.top<0||e.top+c>f)if(a.vertical==="center")e.top=t[l.vertical]>f/2?Math.max(0,f-c):0,e.maxHeight=Math.min(c,f);else if(t[l.vertical]>f/2){const h=Math.min(f,l.vertical==="center"?t.center:l.vertical===a.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,h),e.top=Math.max(0,h-c)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===a.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,f-e.top);if(e.left<0||e.left+o>r)if(e.maxWidth=Math.min(o,r),a.horizontal==="middle")e.left=t[l.horizontal]>r/2?Math.max(0,r-o):0;else if(t[l.horizontal]>r/2){const h=Math.min(r,l.horizontal==="middle"?t.middle:l.horizontal===a.horizontal?t.right:t.left);e.maxWidth=Math.min(o,h),e.left=Math.max(0,h-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===a.horizontal?t.left:t.right),e.maxWidth=Math.min(o,r-e.left)}var ke=H({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=g(()=>parseInt(e.lines,10)),l=g(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),a=g(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>E("div",{style:a.value,class:l.value},j(t.default))}}),Ee=H({name:"QList",props:{...G,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=A(),l=O(e,n.proxy.$q),a=g(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>E(e.tag,{class:a.value},j(t.default))}}),Le=H({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=g(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>E("div",{class:n.value},j(t.default))}}),Se=H({name:"QItem",props:{...G,...le,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=A(),a=O(e,l),{hasLink:c,linkAttrs:o,linkClass:d,linkTag:f,navigateOnClick:r}=ae(),h=B(null),v=B(null),b=g(()=>e.clickable===!0||c.value===!0||e.tag==="label"),i=g(()=>e.disable!==!0&&b.value===!0),u=g(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?d.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),L=g(()=>{if(e.insetLevel===void 0)return null;const s=l.lang.rtl===!0?"Right":"Left";return{["padding"+s]:16+e.insetLevel*56+"px"}});function q(s){i.value===!0&&(v.value!==null&&(s.qKeyEvent!==!0&&document.activeElement===h.value?v.value.focus():document.activeElement===v.value&&h.value.focus()),r(s))}function I(s){if(i.value===!0&&V(s,13)===!0){ie(s),s.qKeyEvent=!0;const p=new MouseEvent("click",s);p.qKeyEvent=!0,h.value.dispatchEvent(p)}n("keyup",s)}function T(){const s=oe(t.default,[]);return i.value===!0&&s.unshift(E("div",{class:"q-focus-helper",tabindex:-1,ref:v})),s}return()=>{const s={ref:h,class:u.value,style:L.value,role:"listitem",onClick:q,onKeyup:I};return i.value===!0?(s.tabindex=e.tabindex||"0",Object.assign(s,o.value)):b.value===!0&&(s["aria-disabled"]="true"),E(f.value,s,T())}}});const U=["B","KB","MB","GB","TB","PB"];function _e(e){let t=0;for(;parseInt(e,10)>=1024&&t<U.length-1;)e/=1024,++t;return`${e.toFixed(1)}${U[t]}`}function Be(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function We(e,t,n){if(n<=t)return t;const l=n-t+1;let a=t+(e-t)%l;return a<t&&(a=l+a),a===0?0:a}function $(e){return e.split("").reverse().map(t=>({A:"T",T:"A",G:"C",C:"G",R:"Y",Y:"R",a:"t",t:"a",c:"g",g:"c",r:"y",y:"r"})[t]).join("")}const Ce=re("table",{state:()=>({sampleInfo:[],progress:"not ready"}),actions:{addSample(e){e.group==="None"&&(e.group=e.name),this.sampleInfo.push({...e,targetSeq:"",reads:{}})},removeSample(e){try{const t=this.sampleInfo.indexOf(this.sampleInfo.filter(n=>n.name===e.name)[0]);t>-1&&this.sampleInfo.splice(t,1)}catch(t){console.error(t)}},targetSeq(e){this.sampleInfo.forEach(t=>{t.gene===e.header&&(t.targetSeq=e.seq)})},arrangeReads(e,t=!1){for(const n in e){this.$state.progress!=="success"&&this.status("pending");for(let l=0;l<this.sampleInfo.length;l++){const a=this.sampleInfo[l];if(a.barcode_L==="None"||a.barcode_R==="None"){n in a.reads?a.reads[n]+=e[n]:a.reads[n]=e[n];continue}const c=$(a.barcode_R),o=$(a.barcode_L),d=n.startsWith(a.barcode_L)&&n.endsWith(c),f=n.startsWith(a.barcode_R)&&n.endsWith(o);if(d)n in a.reads?a.reads[n]+=e[n]:a.reads[n]=e[n];else if(f){const r=$(n);r in a.reads?a.reads[r]+=e[n]:a.reads[r]=e[n]}}}t&&this.status("success")},checkSample(){this.sampleInfo.forEach(e=>{if(e.targetSeq==="")throw new Error(`No target sequence found in provided file at sample ${e.name}.`);if(e.barcode_L.length!==e.barcode_R.length)throw new Error(`Barcode length mismatch at sample ${e.name}.`);if(Object.keys(e.reads).length===0)throw new Error(`No reads-barcode matching found at sample ${e.name}.`)})},status(e){this.$state.progress=e}},getters:{count(e){return e.sampleInfo.length},names:e=>e.sampleInfo.map(t=>t.name),groups(e){return[...new Set(e.sampleInfo.map(t=>t.group))]},barcodeLength(e){return e.sampleInfo[0].barcode_L.length},sumUp(e){return e.sampleInfo.reduce((t,n)=>t+Object.values(n.reads).reduce((l,a)=>l+a,0),0)}}});export{Se as Q,Le as a,Be as b,ke as c,Ee as d,ve as e,qe as f,be as g,ge as h,xe as i,pe as j,_e as k,We as n,we as p,se as r,fe as s,Ce as u,ye as v};