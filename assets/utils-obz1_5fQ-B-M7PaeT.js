var pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dr(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var F=Uint8Array,j=Uint16Array,xr=Int32Array,ir=new F([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tr=new F([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),sr=new F([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ar=function(r,a){for(var e=new j(31),n=0;n<31;++n)e[n]=a+=1<<r[n-1];for(var f=new xr(e[30]),n=1;n<30;++n)for(var v=e[n];v<e[n+1];++v)f[v]=v-e[n]<<5|n;return{b:e,r:f}},Er=Ar(ir,2),mr=Er.b,br=Er.r;mr[28]=258,br[258]=28;var Ur=Ar(tr,0),Pr=Ur.b,Tr=Ur.r,yr=new j(32768);for(var s=0;s<32768;++s){var $=(s&43690)>>1|(s&21845)<<1;$=($&52428)>>2|($&13107)<<2,$=($&61680)>>4|($&3855)<<4,yr[s]=(($&65280)>>8|($&255)<<8)>>1}var V=function(r,a,e){for(var n=r.length,f=0,v=new j(a);f<n;++f)r[f]&&++v[r[f]-1];var i=new j(a);for(f=1;f<a;++f)i[f]=i[f-1]+v[f-1]<<1;var t;if(e){t=new j(1<<a);var g=15-a;for(f=0;f<n;++f)if(r[f])for(var h=f<<4|r[f],l=a-r[f],o=i[r[f]-1]++<<l,c=o|(1<<l)-1;o<=c;++o)t[yr[o]>>g]=h}else for(t=new j(n),f=0;f<n;++f)r[f]&&(t[f]=yr[i[r[f]-1]++]>>15-r[f]);return t},_=new F(288);for(var s=0;s<144;++s)_[s]=8;for(var s=144;s<256;++s)_[s]=9;for(var s=256;s<280;++s)_[s]=7;for(var s=280;s<288;++s)_[s]=8;var vr=new F(32);for(var s=0;s<32;++s)vr[s]=5;var Rr=V(_,9,0),Wr=V(_,9,1),jr=V(vr,5,0),Hr=V(vr,5,1),cr=function(r){for(var a=r[0],e=1;e<r.length;++e)r[e]>a&&(a=r[e]);return a},N=function(r,a,e){var n=a/8|0;return(r[n]|r[n+1]<<8)>>(a&7)&e},wr=function(r,a){var e=a/8|0;return(r[e]|r[e+1]<<8|r[e+2]<<16)>>(a&7)},Fr=function(r){return(r+7)/8|0},ur=function(r,a,e){return(a==null||a<0)&&(a=0),(e==null||e>r.length)&&(e=r.length),new F(r.subarray(a,e))},Jr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],J=function(r,a,e){var n=new Error(a||Jr[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,J),!e)throw n;return n},Kr=function(r,a,e,n){var f=r.length,v=0;if(!f||a.f&&!a.l)return e||new F(0);var i=!e,t=i||a.i!=2,g=a.i;i&&(e=new F(f*3));var h=function(ar){var er=e.length;if(ar>er){var d=new F(Math.max(er*2,ar));d.set(e),e=d}},l=a.f||0,o=a.p||0,c=a.b||0,b=a.l,E=a.d,y=a.m,q=a.n,K=f*8;do{if(!b){l=N(r,o,1);var G=N(r,o+1,3);if(o+=3,G)if(G==1)b=Wr,E=Hr,y=9,q=5;else if(G==2){var I=N(r,o,31)+257,k=N(r,o+10,15)+4,w=I+N(r,o+5,31)+1;o+=14;for(var u=new F(w),z=new F(19),x=0;x<k;++x)z[sr[x]]=N(r,o+x*3,7);o+=k*3;for(var U=cr(z),Z=(1<<U)-1,P=V(z,U,1),x=0;x<w;){var B=P[N(r,o,Z)];o+=B&15;var T=B>>4;if(T<16)u[x++]=T;else{var S=0,C=0;for(T==16?(C=3+N(r,o,3),o+=2,S=u[x-1]):T==17?(C=3+N(r,o,7),o+=3):T==18&&(C=11+N(r,o,127),o+=7);C--;)u[x++]=S}}var D=u.subarray(0,I),A=u.subarray(I);y=cr(D),q=cr(A),b=V(D,y,1),E=V(A,q,1)}else J(1);else{var T=Fr(o)+4,O=r[T-4]|r[T-3]<<8,m=T+O;if(m>f){g&&J(0);break}t&&h(c+O),e.set(r.subarray(T,m),c),a.b=c+=O,a.p=o=m*8,a.f=l;continue}if(o>K){g&&J(0);break}}t&&h(c+131072);for(var rr=(1<<y)-1,H=(1<<q)-1,X=o;;X=o){var S=b[wr(r,o)&rr],R=S>>4;if(o+=S&15,o>K){g&&J(0);break}if(S||J(2),R<256)e[c++]=R;else if(R==256){X=o,b=null;break}else{var W=R-254;if(R>264){var x=R-257,M=ir[x];W=N(r,o,(1<<M)-1)+mr[x],o+=M}var Q=E[wr(r,o)&H],L=Q>>4;Q||J(3),o+=Q&15;var A=Pr[L];if(L>3){var M=tr[L];A+=wr(r,o)&(1<<M)-1,o+=M}if(o>K){g&&J(0);break}t&&h(c+131072);var p=c+W;if(c<A){var lr=v-A,or=Math.min(A,p);for(lr+c<0&&J(3);c<or;++c)e[c]=n[lr+c]}for(;c<p;++c)e[c]=e[c-A]}}a.l=b,a.p=X,a.b=c,a.f=l,b&&(l=1,a.m=y,a.d=E,a.n=q)}while(!l);return c!=e.length&&i?ur(e,0,c):e.subarray(0,c)},Y=function(r,a,e){e<<=a&7;var n=a/8|0;r[n]|=e,r[n+1]|=e>>8},nr=function(r,a,e){e<<=a&7;var n=a/8|0;r[n]|=e,r[n+1]|=e>>8,r[n+2]|=e>>16},gr=function(r,a){for(var e=[],n=0;n<r.length;++n)r[n]&&e.push({s:n,f:r[n]});var f=e.length,v=e.slice();if(!f)return{t:Ir,l:0};if(f==1){var i=new F(e[0].s+1);return i[e[0].s]=1,{t:i,l:1}}e.sort(function(m,I){return m.f-I.f}),e.push({s:-1,f:25001});var t=e[0],g=e[1],h=0,l=1,o=2;for(e[0]={s:-1,f:t.f+g.f,l:t,r:g};l!=f-1;)t=e[e[h].f<e[o].f?h++:o++],g=e[h!=l&&e[h].f<e[o].f?h++:o++],e[l++]={s:-1,f:t.f+g.f,l:t,r:g};for(var c=v[0].s,n=1;n<f;++n)v[n].s>c&&(c=v[n].s);var b=new j(c+1),E=Cr(e[l-1],b,0);if(E>a){var n=0,y=0,q=E-a,K=1<<q;for(v.sort(function(I,k){return b[k.s]-b[I.s]||I.f-k.f});n<f;++n){var G=v[n].s;if(b[G]>a)y+=K-(1<<E-b[G]),b[G]=a;else break}for(y>>=q;y>0;){var T=v[n].s;b[T]<a?y-=1<<a-b[T]++-1:++n}for(;n>=0&&y;--n){var O=v[n].s;b[O]==a&&(--b[O],++y)}E=a}return{t:new F(b),l:E}},Cr=function(r,a,e){return r.s==-1?Math.max(Cr(r.l,a,e+1),Cr(r.r,a,e+1)):a[r.s]=e},kr=function(r){for(var a=r.length;a&&!r[--a];);for(var e=new j(++a),n=0,f=r[0],v=1,i=function(g){e[n++]=g},t=1;t<=a;++t)if(r[t]==f&&t!=a)++v;else{if(!f&&v>2){for(;v>138;v-=138)i(32754);v>2&&(i(v>10?v-11<<5|28690:v-3<<5|12305),v=0)}else if(v>3){for(i(f),--v;v>6;v-=6)i(8304);v>2&&(i(v-3<<5|8208),v=0)}for(;v--;)i(f);v=1,f=r[t]}return{c:e.subarray(0,n),n:a}},fr=function(r,a){for(var e=0,n=0;n<a.length;++n)e+=r[n]*a[n];return e},Or=function(r,a,e){var n=e.length,f=Fr(a+2);r[f]=n&255,r[f+1]=n>>8,r[f+2]=r[f]^255,r[f+3]=r[f+1]^255;for(var v=0;v<n;++v)r[f+v+4]=e[v];return(f+4+n)*8},zr=function(r,a,e,n,f,v,i,t,g,h,l){Y(a,l++,e),++f[256];for(var o=gr(f,15),c=o.t,b=o.l,E=gr(v,15),y=E.t,q=E.l,K=kr(c),G=K.c,T=K.n,O=kr(y),m=O.c,I=O.n,k=new j(19),w=0;w<G.length;++w)++k[G[w]&31];for(var w=0;w<m.length;++w)++k[m[w]&31];for(var u=gr(k,7),z=u.t,x=u.l,U=19;U>4&&!z[sr[U-1]];--U);var Z=h+5<<3,P=fr(f,_)+fr(v,vr)+i,B=fr(f,c)+fr(v,y)+i+14+3*U+fr(k,z)+2*k[16]+3*k[17]+7*k[18];if(g>=0&&Z<=P&&Z<=B)return Or(a,l,r.subarray(g,g+h));var S,C,D,A;if(Y(a,l,1+(B<P)),l+=2,B<P){S=V(c,b,0),C=c,D=V(y,q,0),A=y;var rr=V(z,x,0);Y(a,l,T-257),Y(a,l+5,I-1),Y(a,l+10,U-4),l+=14;for(var w=0;w<U;++w)Y(a,l+3*w,z[sr[w]]);l+=3*U;for(var H=[G,m],X=0;X<2;++X)for(var R=H[X],w=0;w<R.length;++w){var W=R[w]&31;Y(a,l,rr[W]),l+=z[W],W>15&&(Y(a,l,R[w]>>5&127),l+=R[w]>>12)}}else S=Rr,C=_,D=jr,A=vr;for(var w=0;w<t;++w){var M=n[w];if(M>255){var W=M>>18&31;nr(a,l,S[W+257]),l+=C[W+257],W>7&&(Y(a,l,M>>23&31),l+=ir[W]);var Q=M&31;nr(a,l,D[Q]),l+=A[Q],Q>3&&(nr(a,l,M>>5&8191),l+=tr[Q])}else nr(a,l,S[M]),l+=C[M]}return nr(a,l,S[256]),l+C[256]},Nr=new xr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ir=new F(0),Qr=function(r,a,e,n,f,v){var i=v.z||r.length,t=new F(n+i+5*(1+Math.ceil(i/7e3))+f),g=t.subarray(n,t.length-f),h=v.l,l=(v.r||0)&7;if(a){l&&(g[0]=v.r>>3);for(var o=Nr[a-1],c=o>>13,b=o&8191,E=(1<<e)-1,y=v.p||new j(32768),q=v.h||new j(E+1),K=Math.ceil(e/3),G=2*K,T=function(hr){return(r[hr]^r[hr+1]<<K^r[hr+2]<<G)&E},O=new xr(25e3),m=new j(288),I=new j(32),k=0,w=0,u=v.i||0,z=0,x=v.w||0,U=0;u+2<i;++u){var Z=T(u),P=u&32767,B=q[Z];if(y[P]=B,q[Z]=P,x<=u){var S=i-u;if((k>7e3||z>24576)&&(S>423||!h)){l=zr(r,g,0,O,m,I,w,z,U,u-U,l),z=k=w=0,U=u;for(var C=0;C<286;++C)m[C]=0;for(var C=0;C<30;++C)I[C]=0}var D=2,A=0,rr=b,H=P-B&32767;if(S>2&&Z==T(u-H))for(var X=Math.min(c,S)-1,R=Math.min(32767,u),W=Math.min(258,S);H<=R&&--rr&&P!=B;){if(r[u+D]==r[u+D-H]){for(var M=0;M<W&&r[u+M]==r[u+M-H];++M);if(M>D){if(D=M,A=H,M>X)break;for(var Q=Math.min(H,M-2),L=0,C=0;C<Q;++C){var p=u-H+C&32767,lr=y[p],or=p-lr&32767;or>L&&(L=or,B=p)}}}P=B,B=y[P],H+=P-B&32767}if(A){O[z++]=268435456|br[D]<<18|Tr[A];var ar=br[D]&31,er=Tr[A]&31;w+=ir[ar]+tr[er],++m[257+ar],++I[er],x=u+D,++k}else O[z++]=r[u],++m[r[u]]}}for(u=Math.max(u,x);u<i;++u)O[z++]=r[u],++m[r[u]];l=zr(r,g,h,O,m,I,w,z,U,u-U,l),h||(v.r=l&7|g[l/8|0]<<3,l-=7,v.h=q,v.p=y,v.i=u,v.w=x)}else{for(var u=v.w||0;u<i+h;u+=65535){var d=u+65535;d>=i&&(g[l/8|0]=h,d=i),l=Or(g,l+1,r.subarray(u,d))}v.i=i}return ur(t,0,n+Fr(l)+f)},qr=function(){var r=1,a=0;return{p:function(e){for(var n=r,f=a,v=e.length|0,i=0;i!=v;){for(var t=Math.min(i+2655,v);i<t;++i)f+=n+=e[i];n=(n&65535)+15*(n>>16),f=(f&65535)+15*(f>>16)}r=n,a=f},d:function(){return r%=65521,a%=65521,(r&255)<<24|(r&65280)<<8|(a&255)<<8|a>>8}}},Vr=function(r,a,e,n,f){if(!f&&(f={l:1},a.dictionary)){var v=a.dictionary.subarray(-32768),i=new F(v.length+r.length);i.set(v),i.set(r,v.length),r=i,f.w=v.length}return Qr(r,a.level==null?6:a.level,a.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(r.length)))*1.5):12+a.mem,e,n,f)},Br=function(r,a,e){for(;e;++a)r[a]=e,e>>>=8},Xr=function(r,a){var e=a.level,n=e==0?0:e<6?1:e==9?3:2;if(r[0]=120,r[1]=n<<6|(a.dictionary&&32),r[1]|=31-(r[0]<<8|r[1])%31,a.dictionary){var f=qr();f.p(a.dictionary),Br(r,2,f.d())}},Yr=function(r,a){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&J(6,"invalid zlib data"),(r[1]>>5&1)==1&&J(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function Zr(r,a){a||(a={});var e=qr();e.p(r);var n=Vr(r,a,a.dictionary?6:2,4);return Xr(n,a),Br(n,n.length-4,e.d()),n}function $r(r,a){return Kr(r.subarray(Yr(r),-4),{i:2},a,a)}var Sr=typeof TextEncoder<"u"&&new TextEncoder,Mr=typeof TextDecoder<"u"&&new TextDecoder,_r=0;try{Mr.decode(Ir,{stream:!0}),_r=1}catch{}var Lr=function(r){for(var a="",e=0;;){var n=r[e++],f=(n>127)+(n>223)+(n>239);if(e+f>r.length)return{s:a,r:ur(r,e-1)};f?f==3?(n=((n&15)<<18|(r[e++]&63)<<12|(r[e++]&63)<<6|r[e++]&63)-65536,a+=String.fromCharCode(55296|n>>10,56320|n&1023)):f&1?a+=String.fromCharCode((n&31)<<6|r[e++]&63):a+=String.fromCharCode((n&15)<<12|(r[e++]&63)<<6|r[e++]&63):a+=String.fromCharCode(n)}};function Dr(r,a){if(a){for(var e=new F(r.length),n=0;n<r.length;++n)e[n]=r.charCodeAt(n);return e}if(Sr)return Sr.encode(r);for(var f=r.length,v=new F(r.length+(r.length>>1)),i=0,t=function(l){v[i++]=l},n=0;n<f;++n){if(i+5>v.length){var g=new F(i+8+(f-n<<1));g.set(v),v=g}var h=r.charCodeAt(n);h<128||a?t(h):h<2048?(t(192|h>>6),t(128|h&63)):h>55295&&h<57344?(h=65536+(h&1047552)|r.charCodeAt(++n)&1023,t(240|h>>18),t(128|h>>12&63),t(128|h>>6&63),t(128|h&63)):(t(224|h>>12),t(128|h>>6&63),t(128|h&63))}return ur(v,0,i)}function Gr(r,a){if(a){for(var e="",n=0;n<r.length;n+=16384)e+=String.fromCharCode.apply(null,r.subarray(n,n+16384));return e}else{if(Mr)return Mr.decode(r);var f=Lr(r),v=f.s,e=f.r;return e.length&&J(8),v}}function ra(r,a=100){let e;return(...n)=>{e&&clearTimeout(e),e=setTimeout(()=>{r(...n)},a)}}function aa(r){const a=Dr(r),e=Zr(a,{level:9}),n=Gr(e,!0);return btoa(n)}function ea(r){const a=atob(r);if(a.startsWith("xÚ")){const e=Dr(a,!0),n=$r(e);return Gr(n)}return decodeURIComponent(escape(a))}export{ea as a,pr as c,ra as d,dr as g,aa as u};
