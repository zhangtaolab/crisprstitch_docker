var ot=Object.defineProperty;var st=(t,e,a)=>e in t?ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var S=(t,e,a)=>(st(t,typeof e!="symbol"?e+"":e,a),a);import{r as G,a as I,k as qe,M as it,s as Ae,H as ut,h as Q,c as Oe,ay as ct,az as dt,aA as ft,aB as mt,aC as pt,aD as vt,aE as je,aF as ht,aG as gt,L as bt,a4 as pe,a5 as U,a6 as me,a7 as C,a8 as f,Q as Y,aa as ce,ab as re,aH as Ie,aI as $,am as _t,B as yt,C as At,d as xt,b as St,aJ as Ct,x as ze,aK as wt,D as Tt,aL as Pt,a2 as _e,ai as K,ah as P,ag as N,aM as L,ax as ae,ak as de,aj as De,aN as Rt,aw as Qe,ae as H,aO as We,aP as Ye,aQ as kt,a9 as we,aR as Vt}from"./index.8ae906f5.js";import{Q as Te,a as Nt}from"./QTooltip.8580e54d.js";import{k as Ft,u as oe,c as Pe}from"./sampleinfo.73b2943e.js";import{Q as Gt,a as qt,b as It,e as zt,c as $t}from"./export-file.72400f84.js";import{_ as He}from"./plugin-vue_export-helper.21dcd24c.js";import{r as Bt,u as Fe,w as Mt}from"./xlsx.db07aefa.js";import"./selection.91d8b482.js";function te(t,e,a,l){const r=[];return t.forEach(s=>{l(s)===!0?r.push(s):e.push({failedPropValidation:a,file:s})}),r}function be(t){t&&t.dataTransfer&&(t.dataTransfer.dropEffect="copy"),Ae(t)}const Lt={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ut=["rejected"];function Et({editable:t,dnd:e,getFileInput:a,addFilesToQueue:l}){const{props:r,emit:s,proxy:u}=qe(),p=G(null),o=I(()=>r.accept!==void 0?r.accept.split(",").map(d=>(d=d.trim(),d==="*"?"*/":(d.endsWith("/*")&&(d=d.slice(0,d.length-1)),d.toUpperCase()))):null),m=I(()=>parseInt(r.maxFiles,10)),n=I(()=>parseInt(r.maxTotalSize,10));function i(d){if(t.value)if(d!==Object(d)&&(d={target:null}),d.target!==null&&d.target.matches('input[type="file"]')===!0)d.clientX===0&&d.clientY===0&&it(d);else{const _=a();_&&_!==d.target&&_.click(d)}}function h(d){t.value&&d&&l(null,d)}function c(d,_,R,k){let y=Array.from(_||d.target.files);const V=[],q=()=>{V.length!==0&&s("rejected",V)};if(r.accept!==void 0&&o.value.indexOf("*/")===-1&&(y=te(y,V,"accept",x=>o.value.some(A=>x.type.toUpperCase().startsWith(A)||x.name.toUpperCase().endsWith(A))),y.length===0))return q();if(r.maxFileSize!==void 0){const x=parseInt(r.maxFileSize,10);if(y=te(y,V,"max-file-size",A=>A.size<=x),y.length===0)return q()}if(r.multiple!==!0&&y.length!==0&&(y=[y[0]]),y.forEach(x=>{x.__key=x.webkitRelativePath+x.lastModified+x.name+x.size}),k===!0){const x=R.map(A=>A.__key);y=te(y,V,"duplicate",A=>x.includes(A.__key)===!1)}if(y.length===0)return q();if(r.maxTotalSize!==void 0){let x=k===!0?R.reduce((A,J)=>A+J.size,0):0;if(y=te(y,V,"max-total-size",A=>(x+=A.size,x<=n.value)),y.length===0)return q()}if(typeof r.filter=="function"){const x=r.filter(y);y=te(y,V,"filter",A=>x.includes(A))}if(r.maxFiles!==void 0){let x=k===!0?R.length:0;if(y=te(y,V,"max-files",()=>(x++,x<=m.value)),y.length===0)return q()}if(q(),y.length!==0)return y}function v(d){be(d),e.value!==!0&&(e.value=!0)}function g(d){Ae(d),(d.relatedTarget!==null||ut.is.safari!==!0?d.relatedTarget!==p.value:document.elementsFromPoint(d.clientX,d.clientY).includes(p.value)===!1)===!0&&(e.value=!1)}function z(d){be(d);const _=d.dataTransfer.files;_.length!==0&&l(null,_),e.value=!1}function j(d){if(e.value===!0)return Q("div",{ref:p,class:`q-${d}__dnd absolute-full`,onDragenter:be,onDragover:be,onDragleave:g,onDrop:z})}return Object.assign(u,{pickFiles:i,addFiles:h}),{pickFiles:i,addFiles:h,onDragover:v,onDragleave:g,processFiles:c,getDndNode:j,maxFilesNumber:m,maxTotalSizeNumber:n}}var jt=Oe({name:"QFile",inheritAttrs:!1,props:{...ct,...dt,...Lt,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ft,...Ut],setup(t,{slots:e,emit:a,attrs:l}){const{proxy:r}=qe(),s=mt(),u=G(null),p=G(!1),o=pt(t),{pickFiles:m,onDragover:n,onDragleave:i,processFiles:h,getDndNode:c}=Et({editable:s.editable,dnd:p,getFileInput:he,addFilesToQueue:ge}),v=vt(t),g=I(()=>Object(t.modelValue)===t.modelValue?"length"in t.modelValue?Array.from(t.modelValue):[t.modelValue]:[]),z=I(()=>je(g.value)),j=I(()=>g.value.map(b=>b.name).join(", ")),d=I(()=>Ft(g.value.reduce((b,w)=>b+w.size,0))),_=I(()=>({totalSize:d.value,filesNumber:g.value.length,maxFiles:t.maxFiles})),R=I(()=>({tabindex:-1,type:"file",title:"",accept:t.accept,capture:t.capture,name:o.value,...l,id:s.targetUid.value,disabled:s.editable.value!==!0})),k=I(()=>"q-file q-field--auto-height"+(p.value===!0?" q-file--dnd":"")),y=I(()=>t.multiple===!0&&t.append===!0);function V(b){const w=g.value.slice();w.splice(b,1),x(w)}function q(b){const w=g.value.indexOf(b);w>-1&&V(w)}function x(b){a("update:modelValue",t.multiple===!0?b:b[0])}function A(b){b.keyCode===13&&bt(b)}function J(b){(b.keyCode===13||b.keyCode===32)&&m(b)}function he(){return u.value}function ge(b,w){const B=h(b,w,g.value,y.value),se=he();se!=null&&(se.value=""),B!==void 0&&((t.multiple===!0?t.modelValue&&B.every(ie=>g.value.includes(ie)):t.modelValue===B[0])||x(y.value===!0?g.value.concat(B):B))}function X(){return[Q("input",{class:[t.inputClass,"q-file__filler"],style:t.inputStyle})]}function D(){if(e.file!==void 0)return g.value.length===0?X():g.value.map((w,B)=>e.file({index:B,file:w,ref:this}));if(e.selected!==void 0)return g.value.length===0?X():e.selected({files:g.value,ref:this});if(t.useChips===!0)return g.value.length===0?X():g.value.map((w,B)=>Q(Gt,{key:"file-"+B,removable:s.editable.value,dense:!0,textColor:t.color,tabindex:t.tabindex,onRemove:()=>{V(B)}},()=>Q("span",{class:"ellipsis",textContent:w.name})));const b=t.displayValue!==void 0?t.displayValue:j.value;return b.length!==0?[Q("div",{class:t.inputClass,style:t.inputStyle,textContent:b})]:X()}function Z(){const b={ref:u,...R.value,...v.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:ge};return t.multiple===!0&&(b.multiple=!0),Q("input",b)}return Object.assign(s,{fieldClass:k,emitValue:x,hasValue:z,inputRef:u,innerValue:g,floatingLabel:I(()=>z.value===!0||je(t.displayValue)),computedCounter:I(()=>{if(t.counterLabel!==void 0)return t.counterLabel(_.value);const b=t.maxFiles;return`${g.value.length}${b!==void 0?" / "+b:""} (${d.value})`}),getControlChild:()=>c("file"),getControl:()=>{const b={ref:s.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:t.tabindex};return s.editable.value===!0&&Object.assign(b,{onDragover:n,onDragleave:i,onKeydown:A,onKeyup:J}),Q("div",b,[Z()].concat(D()))}}),Object.assign(r,{removeAtIndex:V,removeFile:q,getNativeElement:()=>u.value}),ht(r,"nativeEl",()=>u.value),gt(s)}}),F=Uint8Array,le=Uint16Array,Dt=Int32Array,Xe=new F([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ke=new F([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ot=new F([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Je=function(t,e){for(var a=new le(31),l=0;l<31;++l)a[l]=e+=1<<t[l-1];for(var r=new Dt(a[30]),l=1;l<30;++l)for(var s=a[l];s<a[l+1];++s)r[s]=s-a[l]<<5|l;return{b:a,r}},Ze=Je(Xe,2),et=Ze.b,Qt=Ze.r;et[28]=258,Qt[258]=28;var Wt=Je(Ke,0),Yt=Wt.b,Ge=new le(32768);for(var T=0;T<32768;++T){var O=(T&43690)>>1|(T&21845)<<1;O=(O&52428)>>2|(O&13107)<<2,O=(O&61680)>>4|(O&3855)<<4,Ge[T]=((O&65280)>>8|(O&255)<<8)>>1}var fe=function(t,e,a){for(var l=t.length,r=0,s=new le(e);r<l;++r)t[r]&&++s[t[r]-1];var u=new le(e);for(r=1;r<e;++r)u[r]=u[r-1]+s[r-1]<<1;var p;if(a){p=new le(1<<e);var o=15-e;for(r=0;r<l;++r)if(t[r])for(var m=r<<4|t[r],n=e-t[r],i=u[t[r]-1]++<<n,h=i|(1<<n)-1;i<=h;++i)p[Ge[i]>>o]=m}else for(p=new le(l),r=0;r<l;++r)t[r]&&(p[r]=Ge[u[t[r]-1]++]>>15-t[r]);return p},ve=new F(288);for(var T=0;T<144;++T)ve[T]=8;for(var T=144;T<256;++T)ve[T]=9;for(var T=256;T<280;++T)ve[T]=7;for(var T=280;T<288;++T)ve[T]=8;var tt=new F(32);for(var T=0;T<32;++T)tt[T]=5;var Ht=fe(ve,9,1),Xt=fe(tt,5,1),Re=function(t){for(var e=t[0],a=1;a<t.length;++a)t[a]>e&&(e=t[a]);return e},E=function(t,e,a){var l=e/8|0;return(t[l]|t[l+1]<<8)>>(e&7)&a},ke=function(t,e){var a=e/8|0;return(t[a]|t[a+1]<<8|t[a+2]<<16)>>(e&7)},at=function(t){return(t+7)/8|0},ye=function(t,e,a){(e==null||e<0)&&(e=0),(a==null||a>t.length)&&(a=t.length);var l=new F(a-e);return l.set(t.subarray(e,a)),l},Kt=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],M=function(t,e,a){var l=new Error(e||Kt[t]);if(l.code=t,Error.captureStackTrace&&Error.captureStackTrace(l,M),!a)throw l;return l},Jt=function(t,e,a,l){var r=t.length,s=l?l.length:0;if(!r||e.f&&!e.l)return a||new F(0);var u=!a||e.i!=2,p=e.i;a||(a=new F(r*3));var o=function(Le){var Ue=a.length;if(Le>Ue){var Ee=new F(Math.max(Ue*2,Le));Ee.set(a),a=Ee}},m=e.f||0,n=e.p||0,i=e.b||0,h=e.l,c=e.d,v=e.m,g=e.n,z=r*8;do{if(!h){m=E(t,n,1);var j=E(t,n+1,3);if(n+=3,j)if(j==1)h=Ht,c=Xt,v=9,g=5;else if(j==2){var k=E(t,n,31)+257,y=E(t,n+10,15)+4,V=k+E(t,n+5,31)+1;n+=14;for(var q=new F(V),x=new F(19),A=0;A<y;++A)x[Ot[A]]=E(t,n+A*3,7);n+=y*3;for(var J=Re(x),he=(1<<J)-1,ge=fe(x,J,1),A=0;A<V;){var X=ge[E(t,n,he)];n+=X&15;var d=X>>4;if(d<16)q[A++]=d;else{var D=0,Z=0;for(d==16?(Z=3+E(t,n,3),n+=2,D=q[A-1]):d==17?(Z=3+E(t,n,7),n+=3):d==18&&(Z=11+E(t,n,127),n+=7);Z--;)q[A++]=D}}var b=q.subarray(0,k),w=q.subarray(k);v=Re(b),g=Re(w),h=fe(b,v,1),c=fe(w,g,1)}else M(1);else{var d=at(n)+4,_=t[d-4]|t[d-3]<<8,R=d+_;if(R>r){p&&M(0);break}u&&o(i+_),a.set(t.subarray(d,R),i),e.b=i+=_,e.p=n=R*8,e.f=m;continue}if(n>z){p&&M(0);break}}u&&o(i+131072);for(var B=(1<<v)-1,se=(1<<g)-1,ie=n;;ie=n){var D=h[ke(t,n)&B],ee=D>>4;if(n+=D&15,n>z){p&&M(0);break}if(D||M(2),ee<256)a[i++]=ee;else if(ee==256){ie=n,h=null;break}else{var Be=ee-254;if(ee>264){var A=ee-257,ue=Xe[A];Be=E(t,n,(1<<ue)-1)+et[A],n+=ue}var xe=c[ke(t,n)&se],Se=xe>>4;xe||M(3),n+=xe&15;var w=Yt[Se];if(Se>3){var ue=Ke[Se];w+=ke(t,n)&(1<<ue)-1,n+=ue}if(n>z){p&&M(0);break}u&&o(i+131072);var Ce=i+Be;if(i<w){var Me=s-w,nt=Math.min(w,Ce);for(Me+i<0&&M(3);i<nt;++i)a[i]=l[Me+i]}for(;i<Ce;i+=4)a[i]=a[i-w],a[i+1]=a[i+1-w],a[i+2]=a[i+2-w],a[i+3]=a[i+3-w];i=Ce}}e.l=h,e.p=ie,e.b=i,e.f=m,h&&(m=1,e.m=v,e.d=c,e.n=g)}while(!m);return i==a.length?a:ye(a,0,i)},Zt=new F(0),ea=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&M(6,"invalid gzip data");var e=t[3],a=10;e&4&&(a+=(t[10]|t[11]<<8)+2);for(var l=(e>>3&1)+(e>>4&1);l>0;l-=!t[a++]);return a+(e&2)},Ve=function(){function t(e,a){typeof e=="function"&&(a=e,e={}),this.ondata=a;var l=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:l?l.length:0},this.o=new F(32768),this.p=new F(0),l&&this.o.set(l)}return t.prototype.e=function(e){if(this.ondata||M(5),this.d&&M(4),!this.p.length)this.p=e;else if(e.length){var a=new F(this.p.length+e.length);a.set(this.p),a.set(e,this.p.length),this.p=a}},t.prototype.c=function(e){this.s.i=+(this.d=e||!1);var a=this.s.b,l=Jt(this.p,this.s,this.o);this.ondata(ye(l,a,this.s.b),this.d),this.o=ye(l,this.s.b-32768),this.s.b=this.o.length,this.p=ye(this.p,this.s.p/8|0),this.s.p&=7},t.prototype.push=function(e,a){this.e(e),this.c(a)},t}(),ta=function(){function t(e,a){this.v=1,this.r=0,Ve.call(this,e,a)}return t.prototype.push=function(e,a){if(Ve.prototype.e.call(this,e),this.r+=e.length,this.v){var l=this.p.subarray(this.v-1),r=l.length>3?ea(l):4;if(r>l.length){if(!a)return}else this.v>1&&this.onmember&&this.onmember(this.r-l.length);this.p=l.subarray(r),this.v=0}Ve.prototype.c.call(this,a),this.s.f&&!this.s.l&&(this.v=at(this.s.p)+9,this.s={i:0},this.o=new F(0),this.p.length&&this.push(new F(0),a))},t}(),aa=typeof TextDecoder!="undefined"&&new TextDecoder,la=0;try{aa.decode(Zt,{stream:!0}),la=1}catch{}class lt{constructor(e,a){S(this,"file");S(this,"reader");S(this,"buffer");S(this,"eof");S(this,"gzipped");S(this,"filesize");S(this,"fpos");S(this,"lines");S(this,"gzip");this.file=e,this.reader=e.stream().getReader(),this.filesize=e.size,this.fpos=0,this.buffer="",this.eof=!1,this.gzipped=a,this.lines=0,this.gzip=new ta}readline(e){const a=this.buffer.indexOf(`
`);if(a===-1)if(this.eof){const l=this.buffer;this.buffer="",e(l)}else this._getchunk().then(()=>this.readline(e));else{let l;this.buffer[a-1]==="\r"?l=this.buffer.slice(0,a-1):l=this.buffer.slice(0,a),this.lines+=1,this.buffer=this.buffer.slice(a+1),e(l)}}async _getchunk(){var l;const{done:e,value:a}=await this.reader.read();return this.fpos+=(l=a==null?void 0:a.length)!=null?l:0,new Promise(r=>{e&&(this.eof=!0,r()),this.gzipped?(this.gzip.ondata=s=>{this.buffer+=new TextDecoder().decode(s),r()},this.gzip.push(a)):(this.buffer+=new TextDecoder().decode(a),r())})}}class ra{constructor(e){S(this,"file");S(this,"filereader");S(this,"gzipped");this.file=e,this.gzipped=!!this.file.name.match(/(\.gz)$/),this.filereader=new lt(this.file,this.gzipped)}async*[Symbol.asyncIterator](){let e=0;const a={0:"",1:""};for(;!this.filereader.eof;){const l=await new Promise(r=>this.filereader.readline(s=>r(s)));l!=`
`&&(e<1?(a[e]=l.trim(),e+=1):e===1&&(a[e]=l.trim().toUpperCase(),e=0,yield new na(a[0],a[1])))}}}class na{constructor(e,a,l){S(this,"header");S(this,"seq");S(this,"qual");S(this,"type");S(this,"seqArray");this.header=e.replace(/^@+|\n$|^>+/g,""),this.seq=a,this.seqArray=a.split(""),this.qual=l,l?this.type="fastq":this.type="fasta"}stringify(){if(this.type==="fasta")return`>${this.header}
${this.seq}
`;if(this.type==="fastq")return`@${this.header}
${this.seq}
+${this.header}
${this.qual}`}length(){return this.seq.length}complement(e){return{A:"T",T:"A",G:"C",C:"G",R:"Y",Y:"R",a:"t",t:"a",c:"g",g:"c",r:"y",y:"r"}[e]}revcomp(){return this.seq.split("").reverse().map(this.complement).join("")}rqual(){return this.qual?this.qual.split("").reverse().join(""):"N"}}const Ne=pe({__name:"FilePicker",props:{hint:{type:String,default:"Field hint",required:!0},label:{type:String,default:"Label",required:!0},max_files:{type:Number,default:1},onChangeCallback:{type:Function,default:null},accept:{type:String,default:"*"}},setup(t,{expose:e}){const a=t,l=G(null),r=p=>{a.onChangeCallback&&a.onChangeCallback(p)};return e({readReads:()=>{const p=oe();if(p.count>20&&$.create({message:"Caution! More than 20 samples detected. Please consider split your samples.",color:"accent",position:"top"}),l.value){const o=_t();o.initWorker(),o.worker.postMessage({filea:l.value[0],fileb:l.value[1],barcodeLength:p.barcodeLength})}else $.create({message:"Reads file not selected.",color:"negative"})},readTargetSeq:async()=>{if(l.value){const p=new ra(l.value),o=oe();for await(const m of p)o.targetSeq(m)}else $.create({message:"Target sequence file not selected.",color:"negative"})}}),(p,o)=>(U(),me(jt,{multiple:t.max_files>1,append:t.max_files>1,ref:"filePicker",filled:"","bottom-slots":"",modelValue:l.value,"onUpdate:modelValue":[o[1]||(o[1]=m=>l.value=m),r],label:t.label,counter:"","max-files":t.max_files},{before:C(()=>[f(Y,{name:"folder_open"})]),hint:C(()=>[ce(re(t.hint),1)]),append:C(()=>[f(Y,{round:"",dense:"",flat:"",name:"close",onClick:o[0]||(o[0]=Ie(()=>l.value=null,["stop","prevent"])),class:"cursor-pointer"})]),_:1},8,["multiple","append","modelValue","label","max-files"]))}});var rt=Oe({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(t,{slots:e,emit:a}){const l=qe(),r=G(null);let s=0;const u=[];function p(c){const v=typeof c=="boolean"?c:t.noErrorFocus!==!0,g=++s,z=(_,R)=>{a("validation"+(_===!0?"Success":"Error"),R)},j=_=>{const R=_.validate();return typeof R.then=="function"?R.then(k=>({valid:k,comp:_}),k=>({valid:!1,comp:_,err:k})):Promise.resolve({valid:R,comp:_})};return(t.greedy===!0?Promise.all(u.map(j)).then(_=>_.filter(R=>R.valid!==!0)):u.reduce((_,R)=>_.then(()=>j(R).then(k=>{if(k.valid===!1)return Promise.reject(k)})),Promise.resolve()).catch(_=>[_])).then(_=>{if(_===void 0||_.length===0)return g===s&&z(!0),!0;if(g===s){const{comp:R,err:k}=_[0];if(k!==void 0&&console.error(k),z(!1,R),v===!0){const y=_.find(({comp:V})=>typeof V.focus=="function"&&Ct(V.$)===!1);y!==void 0&&y.comp.focus()}}return!1})}function o(){s++,u.forEach(c=>{typeof c.resetValidation=="function"&&c.resetValidation()})}function m(c){c!==void 0&&Ae(c);const v=s+1;p().then(g=>{v===s&&g===!0&&(t.onSubmit!==void 0?a("submit",c):c!==void 0&&c.target!==void 0&&typeof c.target.submit=="function"&&c.target.submit())})}function n(c){c!==void 0&&Ae(c),a("reset"),ze(()=>{o(),t.autofocus===!0&&t.noResetFocus!==!0&&i()})}function i(){wt(()=>{if(r.value===null)return;const c=r.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||r.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||r.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(r.value.querySelectorAll("[tabindex]"),v=>v.tabIndex>-1);c!=null&&c.focus({preventScroll:!0})})}Tt(Pt,{bindComponent(c){u.push(c)},unbindComponent(c){const v=u.indexOf(c);v>-1&&u.splice(v,1)}});let h=!1;return yt(()=>{h=!0}),At(()=>{h===!0&&t.autofocus===!0&&i()}),xt(()=>{t.autofocus===!0&&i()}),Object.assign(l.proxy,{validate:p,resetValidation:o,submit:m,reset:n,focus:i,getValidationComponents:()=>u}),()=>Q("form",{class:"q-form",ref:r,onSubmit:m,onReset:n},St(e.default))}});const W=t=>t!==""||"required",ne=t=>/^[ATCGatcg]*$/.test(t)||"Please input a valid sequence";const oa=t=>(We("data-v-161fa384"),t=t(),Ye(),t),sa={class:"row justify-center q-gutter-xl"},ia={class:"col-5 col-md-4 col-lg-3"},ua={class:"col-5 col-md-4 col-lg-3"},ca={class:"row justify-center"},da={class:"col"},fa={class:"row justify-center"},ma={class:"row",style:{display:"table",margin:"0 1em"}},pa={class:"row"},va=oa(()=>P("br",null,null,-1)),ha={style:{"margin-top":"5px"}},ga=pe({__name:"WellPlate",setup(t){const e=Array.from(Array(12).keys()),a=Array.from(Array(8).keys()),l=G("0-0"),r=_e({value:Array(12).fill("")}),s=_e({value:Array(8).fill("")}),u=_e({name:"",gene:"",group:"",gRNA_PAM:""}),p=G(),o=()=>{const h=oe();u.barcode_L=r.value[parseInt(l.value.split("-")[0])],u.barcode_R=s.value[parseInt(l.value.split("-")[1])];const c=JSON.parse(JSON.stringify(u));c.group===""&&(c.group="None"),h.addSample(c),n()},m=()=>{$.create({message:"Please validate the form.",icon:"announcement"})},n=()=>{u.name="",u.gene="",u.group="",u.gRNA_PAM="",ze(()=>{p.value.resetValidation()})},i=()=>{l.value="0-0",r.value[0]="TTAGGC",s.value[0]="TGACCA",u.name="TX-2",u.gene="OsPDS-site01",u.group="pYPQ203-AsCpf1-OsPDS-crRNA01",u.gRNA_PAM="tttgGAGTGAAATCTCTTGTCTTAAGG",u.barcode_L="TTAGGC",u.barcode_R="TGACCA"};return(h,c)=>(U(),K(de,null,[P("div",sa,[P("div",ia,[f(L,{filled:"",modelValue:r.value[parseInt(l.value.split("-")[0])],"onUpdate:modelValue":c[0]||(c[0]=v=>r.value[parseInt(l.value.split("-")[0])]=v),label:"barcode_L",rules:[N(W),N(ne)]},{prepend:C(()=>[f(Y,{name:"arrow_downward"})]),_:1},8,["modelValue","rules"])]),P("div",ua,[f(L,{filled:"",modelValue:s.value[parseInt(l.value.split("-")[1])],"onUpdate:modelValue":c[1]||(c[1]=v=>s.value[parseInt(l.value.split("-")[1])]=v),label:"barcode_R",rules:[N(W),N(ne)]},{prepend:C(()=>[f(Y,{name:"arrow_forward"})]),_:1},8,["modelValue","rules"])])]),P("div",ca,[P("div",da,[f(Qe,null,{default:C(()=>[f(ae,null,{default:C(()=>[P("div",fa,[(U(!0),K(de,null,De(N(e),v=>(U(),K("div",{class:"col-1",key:v,span:2,style:{"text-align":"center"}},[P("span",ma,re(v+1),1),P("div",pa,[(U(!0),K(de,null,De(N(a),g=>(U(),me(Rt,{class:"col-12","unchecked-icon":r.value[g]&&s.value[v]?"check_circle":"panorama_fish_eye",modelValue:l.value,"onUpdate:modelValue":c[2]||(c[2]=z=>l.value=z),key:g,val:g+"-"+v,label:v==11?String.fromCharCode(g+65):"",style:{height:"30px","line-height":"30px"}},null,8,["unchecked-icon","modelValue","val","label"]))),128))])]))),128))])]),_:1})]),_:1})])]),va,f(rt,{ref_key:"form",ref:p,onSubmit:Ie(o,["prevent"]),onValidationError:m},{default:C(()=>[f(L,{ref:"name",modelValue:u.name,"onUpdate:modelValue":c[3]||(c[3]=v=>u.name=v),label:"Sample name",placeholder:"4239_rep1",rules:[N(W)]},null,8,["modelValue","rules"]),f(L,{ref:"gene",modelValue:u.gene,"onUpdate:modelValue":c[4]||(c[4]=v=>u.gene=v),label:"Gene name",placeholder:"Blc",rules:[N(W)]},null,8,["modelValue","rules"]),f(L,{ref:"group",modelValue:u.group,"onUpdate:modelValue":c[5]||(c[5]=v=>u.group=v),label:"Group",placeholder:"(Optional)"},null,8,["modelValue"]),f(L,{ref:"gRNA_PAM",modelValue:u.gRNA_PAM,"onUpdate:modelValue":c[6]||(c[6]=v=>u.gRNA_PAM=v),label:"gRNA_PAM",placeholder:"tttgGAGTGAAATCTCTTGTCTTAAGG",rules:[N(W),N(ne)]},null,8,["modelValue","rules"]),P("div",ha,[f(H,{label:"Add",type:"submit",color:"primary"}),f(H,{label:"Example",onClick:i,color:"primary",flat:"",class:"q-ml-sm"})])]),_:1},8,["onSubmit"])],64))}});var ba=He(ga,[["__scopeId","data-v-161fa384"]]);const _a=P("br",null,null,-1),ya=pe({__name:"SampleForm",setup(t){const e=_e({name:"",gene:"",group:"",gRNA_PAM:"",barcode_L:"",barcode_R:""}),a=G(),l=()=>{const p=oe(),o={name:e.name,gene:e.gene,group:e.group?e.group:"None",gRNA_PAM:e.gRNA_PAM.toUpperCase(),barcode_L:e.barcode_L?e.barcode_L.toUpperCase():"None",barcode_R:e.barcode_R?e.barcode_R.toUpperCase():"None"};p.addSample(o),s()},r=()=>{$.create({message:"Please validate the form.",icon:"announcement"})},s=()=>{e.name="",e.gene="",e.group="",e.gRNA_PAM="",e.barcode_L="",e.barcode_R="",ze(()=>{a.value.resetValidation()})},u=()=>{e.name="TX-2",e.gene="OsPDS-site01",e.group="pYPQ203-AsCpf1-OsPDS-crRNA01",e.gRNA_PAM="tttgGAGTGAAATCTCTTGTCTTAAGG",e.barcode_L="TTAGGC",e.barcode_R="TGACCA"};return(p,o)=>(U(),me(rt,{ref_key:"form",ref:a,onSubmit:Ie(l,["prevent"]),onValidationError:r},{default:C(()=>[f(L,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=m=>e.name=m),rules:[N(W)],label:"Sample Name",ref:"name",placeholder:"4239_rep1"},null,8,["modelValue","rules"]),f(L,{modelValue:e.gene,"onUpdate:modelValue":o[1]||(o[1]=m=>e.gene=m),rules:[N(W)],label:"Gene Name",ref:"gene",placeholder:"Blc"},null,8,["modelValue","rules"]),f(L,{modelValue:e.gRNA_PAM,"onUpdate:modelValue":o[2]||(o[2]=m=>e.gRNA_PAM=m),rules:[N(W),N(ne)],label:"gRNA PAM",ref:"gRNA_PAM",placeholder:"tttgGAGTGAAATCTCTTGTCTTAAGG"},null,8,["modelValue","rules"]),f(L,{modelValue:e.barcode_L,"onUpdate:modelValue":o[3]||(o[3]=m=>e.barcode_L=m),rules:[N(ne)],label:"Barcode L",ref:"barcode_L",placeholder:"TTAGGC"},null,8,["modelValue","rules"]),f(L,{modelValue:e.barcode_R,"onUpdate:modelValue":o[4]||(o[4]=m=>e.barcode_R=m),rules:[N(ne)],label:"Barcode R",ref:"barcode_R",placeholder:"TGACCA"},null,8,["modelValue","rules"]),f(L,{modelValue:e.group,"onUpdate:modelValue":o[5]||(o[5]=m=>e.group=m),label:"Group Name",ref:"group",placeholder:"(Optional)"},null,8,["modelValue"]),_a,f(H,{type:"submit",color:"primary",label:"Add"}),f(H,{color:"primary",label:"Example",onClick:u,flat:"",class:"q-ml-sm"})]),_:1},8,["onSubmit"]))}}),Aa={class:"q-gutter-sm"},xa={class:"full-width row flex-center q-gutter-sm"},Sa={class:"row justify-center q-mt-md"},Ca=pe({__name:"SampleTable",props:{sampleInfo:{type:Array,required:!0}},setup(t){const e=t,a=G([]),l=G({sortBy:"desc",descending:!1,page:1,rowsPerPage:5}),r=I(()=>Math.ceil(e.sampleInfo.length/l.value.rowsPerPage)),s=[{name:"name",label:"Sample name",field:o=>o.name,format:o=>`${o}`,align:"left",sortable:!0},{name:"gene",label:"Gene name",field:"gene",align:"left",sortable:!0},{name:"gRNA_PAM",label:"gRNA_PAM",field:"gRNA_PAM",align:"left",sortable:!0},{name:"barcode_L",label:"barcode_L",field:"barcode_L",align:"left",sortable:!0},{name:"barcode_R",label:"barcode_R",field:"barcode_R",align:"left",sortable:!0},{name:"group",label:"Group",field:"group",align:"left",sortable:!0}],u=()=>{function o(i,h,c){let v=h!==void 0?h(i,c):i;return v=v==null?"":String(v),v=v.split('"').join('""'),`"${v}"`}const m=[s.map(i=>o(i.label))].concat(e.sampleInfo.map(i=>s.map(h=>o(typeof h.field=="function"?h.field(i):i[h.field===void 0?h.name:h.field],h.format,i)).join(","))).join(`\r
`);zt("table-export.csv",m,"text/csv")!==!0&&$.create({message:"Browser denied file download...",color:"negative",icon:"warning"})},p=()=>{a.value.filter(function(o){return oe().removeSample(o),o}),a.value=[]};return(o,m)=>(U(),K(de,null,[f(qt,{title:"Samples",rows:e.sampleInfo,"row-key":"name",columns:s,selected:a.value,"onUpdate:selected":m[0]||(m[0]=n=>a.value=n),selection:"multiple","no-data-label":"No data",pagination:l.value,"onUpdate:pagination":m[1]||(m[1]=n=>l.value=n),"hide-pagination":""},kt({"no-data":C(({message:n})=>[P("div",xa,[P("span",null,re(n),1)])]),_:2},[t.sampleInfo.length>0?{name:"top-right",fn:C(()=>[P("div",Aa,[f(H,{color:"secondary","icon-right":"archive",label:"Export to csv","no-caps":"",onClick:u}),f(H,{color:"secondary","icon-right":"delete_forever",label:"Delete selected","no-caps":"",onClick:p})])]),key:"0"}:void 0]),1032,["rows","selected","pagination"]),P("div",Sa,[f(It,{modelValue:l.value.page,"onUpdate:modelValue":m[2]||(m[2]=n=>l.value.page=n),color:"grey-8",max:N(r),size:"sm"},null,8,["modelValue","max"])])],64))}}),wa=(...t)=>[...t[0]].map((e,a)=>t.map(l=>l[a]));class Ta{constructor(e,a=!0,l=["Index","Sample","Barcode_L","Barcode_R"]){S(this,"file");S(this,"format");S(this,"filereader");S(this,"withHeader");S(this,"delimiter");S(this,"header");S(this,"table");S(this,"sampletable");S(this,"gene_sample_table");S(this,"validation");this.validation=!0,e.name.match(/\.tsv$/)||e.name.match(/\.txt$/)?(this.format="tsv",this.delimiter="	"):e.name.match(/\.csv$/)?(this.format="csv",this.delimiter=","):e.name.match(/\.xlsx$/)?this.format="xlsx":($.create({message:"Unsupported file format.",icon:"announcement"}),this.validation=!1),this.file=e,this.header=l,this.filereader=new lt(e,!1),this.withHeader=a}async read(e){this.validation&&(this.withHeader&&await new Promise(a=>{this.filereader.readline(l=>{this.header=l.split(this.delimiter),a()})}),this.delimiter?(this.table=await new Promise((a,l)=>{const r=[];try{const s=async()=>{await new Promise(u=>{this.filereader.readline(p=>{const o=p.split(this.delimiter);if(o.length>1){const m={};for(const[n,i]of wa(this.header,o))m[n]=i;Object.keys(m).length==this.header.length&&r.push(m)}u()})}),this.filereader.eof?a(r):await s()};s()}catch{$.create({message:"Error reading file.",icon:"announcement"}),l()}}),e(this.table?this.table:[])):(this.table=await this.readWorkbook(this.file),e(this.table?this.table:[])))}readWorkbook(e){const a=new FileReader;return a.readAsBinaryString(e),new Promise((l,r)=>{a.onload=s=>{if(s.target){const u=s.target.result;try{const p=Bt(u,{type:"binary"}),o=p.SheetNames,m=p.Sheets[o[0]],n=Fe.sheet_to_json(m);l(n)}catch{$.create({message:"Error reading file.",icon:"announcement"}),r()}}}})}splitByBarcode(e,a=0,l=0){const r={};for(const s of this.table){const u=s.Barcode_R.length;r[s.Sample]={};let p=0;for(const o in e)o.slice(0,u)==s.Barcode_R&&o.slice(-u)==this.revcomp(s.Barcode_L)?(r[s.Sample][this.revcomp(o)]=e[o],p+=e[o]):o.slice(0,u)==s.Barcode_L&&o.slice(-u)==this.revcomp(s.Barcode_R)&&(r[s.Sample][o]=e[o],p+=e[o]);console.log("sumup:",s.Sample,p);for(const o in r[s.Sample])(r[s.Sample][o]<p*a||r[s.Sample][o]<l)&&delete r[s.Sample][o]}return this.sampletable=r,r}async splitByGene(e){const a={};for(const l of this.table){l.gene_name in a||(a[l.gene_name]={});for(const r in e)l.Sample==r&&(r in a[l.gene_name]||(a[l.gene_name][r]={}),a[l.gene_name][r].seq=e[r],a[l.gene_name][r].gRNA_PAM=l.gRNA_PAM.toUpperCase())}return this.gene_sample_table=a,a}revcomp(e){function a(l){return{A:"T",T:"A",G:"C",C:"G",R:"Y",Y:"R",a:"t",t:"a",c:"g",g:"c",r:"y",y:"r"}[l]}return e.split("").reverse().map(a).join("")}}const $e=t=>(We("data-v-7a534a18"),t=t(),Ye(),t),Pa={class:"row justify-center"},Ra={class:"col-8 col-md-6"},ka={class:"row justify-center"},Va=$e(()=>P("div",{class:"text-h6"},"Sample Information",-1)),Na={key:1,class:"row justify-center"},Fa=$e(()=>P("div",{class:"text-h6"},"Reads and target region sequences",-1)),Ga={class:"text-subtitle2"},qa=$e(()=>P("div",{class:"text-subtitle2"}," Select both ends of fastq files in the first file input to merge them. Merging will be skipped if only one file is selected. ",-1)),Ia={class:"row q-gutter-md justify-center"},za=pe({__name:"InputPage",setup(t){const e=G("one"),a=G([]),l=G(),r=G(),s=G(),u=oe();u.$subscribe((n,i)=>a.value=i.sampleInfo);const p=n=>{new Ta(n).read(i=>{i.forEach(h=>{try{u.addSample({name:h.Sample,gene:h.Gene,group:h.Group?h.Group:"None",gRNA_PAM:h.gRNA_PAM.toUpperCase(),barcode_L:h.Barcode_L?h.Barcode_L.toUpperCase():"None",barcode_R:h.Barcode_R?h.Barcode_R.toUpperCase():"None"})}catch{$.create({message:"Must contain all required fields",color:"negative",icon:"announcement"})}})})},o=()=>{const n=Fe.book_new();n.Props={Title:"CrisprStitch Example",Subject:"Example",Author:"hanys"},n.SheetNames.push("example");const i=[["Sample","Barcode_L","Barcode_R","gRNA_PAM","Gene","Group"],["TX-2","TTAGGC","TGACCA","tttgGAGTGAAATCTCTTGTCTTAAGG","OsPDS-site01","pYPQ203-AsCpf1-OsPDS-crRNA01"]];n.Sheets.example=Fe.aoa_to_sheet(i),Mt(n,"crisprstitch_example.xlsx")},m=()=>{if(u.count===0){$.create({message:"Please input sample info",color:"negative",icon:"announcement"});return}if(u.sampleInfo.some(n=>n.barcode_L==="None"||n.barcode_R==="None"))if(u.sampleInfo.some(n=>n.barcode_L==="None"&&n.barcode_R==="None")){let n=0;for(const i of u.sampleInfo)i.barcode_L==="None"&&i.barcode_R==="None"&&(n+=1);if(n>1){$.create({message:"only one empty barcode sample is allowed, please check your info",color:"negative",icon:"announcement"});return}}else{$.create({message:"barcode_L and barcode_R must be both None or not None",color:"negative",icon:"announcement"});return}s.value.readTargetSeq(),r.value.readReads()};return(n,i)=>(U(),K(de,null,[P("div",Pa,[P("div",Ra,[f($t,{modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=h=>e.value=h),spread:"",class:"my-custom-toggle","no-caps":"",rounded:"","toggle-color":"primary",color:"white","text-color":"primary",options:[{slot:"one",value:"one"},{slot:"two",value:"two"},{slot:"three",value:"three"}]},{one:C(()=>[f(Y,{name:"list"}),f(Te),f(Pe,null,{default:C(()=>[ce(re(n.$q.screen.gt.xs?"Separately":void 0),1)]),_:1})]),two:C(()=>[f(Y,{name:"file_upload"}),f(Te),f(Pe,null,{default:C(()=>[ce(re(n.$q.screen.gt.xs?"By file":void 0),1)]),_:1})]),three:C(()=>[f(Y,{name:"grid_on"}),f(Te),f(Pe,null,{default:C(()=>[ce(re(n.$q.screen.gt.xs?"96 well plate":void 0),1)]),_:1})]),_:1},8,["modelValue"])])]),P("div",ka,[f(Qe,{class:"col-12 col-md-10 col-xl-6"},{default:C(()=>[f(ae,{class:"bg-blue-grey text-white"},{default:C(()=>[Va]),_:1}),f(ae,null,{default:C(()=>[e.value==="one"?(U(),me(ya,{key:0})):we("",!0),e.value==="two"?(U(),K("div",Na,[f(Ne,{ref_key:"sampleInput",ref:l,class:"col-10 col-md-5",hint:"xls / xlsx / csv / tsv",label:"Sample info","on-change-callback":p,accept:".xls, .xlsx, .csv, .tsv"},null,512),f(H,{color:"primary",label:"Example",onClick:o,flat:"",class:"q-ml-sm"})])):we("",!0),e.value==="three"?(U(),me(ba,{key:2})):we("",!0)]),_:1}),f(ae,null,{default:C(()=>[f(Ca,{"sample-info":a.value},null,8,["sample-info"])]),_:1}),f(ae,{class:"bg-blue-grey text-white"},{default:C(()=>[Fa,P("div",Ga,[ce(" reads can be pre-merged or paired-end files to merge. "),f(Y,{name:"help"},{default:C(()=>[f(Nt,null,{default:C(()=>[qa]),_:1})]),_:1})])]),_:1}),f(ae,null,{default:C(()=>[P("div",Ia,[f(Ne,{ref_key:"readsPicker",ref:r,class:"col-10 col-md-5",hint:"fastq",label:"Reads",max_files:2,accept:".fq, .fastq, .fq.gz, .fastq.gz"},null,512),f(Ne,{ref_key:"targetPicker",ref:s,class:"col-10 col-md-5",hint:"fasta",label:"Target region",accept:".fa, .fasta, .fa.gz, .fasta.gz"},null,512)])]),_:1}),f(Vt,{align:"center"},{default:C(()=>[f(H,{flat:"",color:"primary",onClick:i[1]||(i[1]=h=>m()),label:"Confirm",size:"large",icon:"done_outline",to:"/result"})]),_:1})]),_:1})])],64))}});var Oa=He(za,[["__scopeId","data-v-7a534a18"]]);export{Oa as default};
