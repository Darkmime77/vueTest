(function(){"use strict";var t={5603:function(t,e,i){var n=i(9242),s=i(3396);function o(t,e,i,n,o,a){const l=(0,s.up)("Test");return(0,s.wg)(),(0,s.j4)(l)}var a=i(7139),l="img/logo.d8bb03d1.png";const c=(0,s.uE)('<div class="navigation"><div class="container nav__cont"><a><img src="'+l+'" alt=""></a><div class="nav__main"><div class="nav__button" style="width:25%;text-align:center;"><a class="nav__main-page">Главная</a><div class="line__main line" style="width:100%;"></div></div><div class="nav__button"><a class="nav__shop">Магазин</a><div class="line__shop line"></div></div><div class="nav__button"><a class="nav__supp">Поддержка</a><div class="line__supp line"></div></div><div class="nav__button"><a class="nav__about">О нас</a><div class="line__about line"></div></div></div><div class="log__btn"><a class="nav__login">Вход</a><div class="line__login line"></div></div><div class="nav__phone-btn"></div></div></div>',1),r={class:"selector"},d=(0,s.uE)('<option value="0">all</option><option value="1">men&#39;s clothing</option><option value="2">jewelery</option><option value="3">electronics</option><option value="4">women&#39;s clothing</option>',5),u=[d],p={class:"products"},h={key:0,class:"Numbers"},v=["value","onClick"];function m(t,e,i,o,l,d){const m=(0,s.up)("Product"),_=(0,s.up)("modal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[c,(0,s._)("div",r,[(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.selector=t),onChange:e[1]||(e[1]=()=>{l.url=`https://fakestoreapi.com/products${l.razdel[l.selector]}`,d.getWeather(),l.indexPop=0})},u,544),[[n.bM,l.selector]])]),(0,s._)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.indicate,(t=>((0,s.wg)(),(0,s.j4)(m,{onOpenens:d.openeers,key:t,name:l.name[t-1+l.indexPop],price:l.price[t-1+l.indexPop],desc:l.desc[t-1+l.indexPop],cat:l.cat[t-1+l.indexPop],image:l.image[t-1+l.indexPop],rate:l.rate[t-1+l.indexPop],count:l.count[t-1+l.indexPop]},null,8,["onOpenens","name","price","desc","cat","image","rate","count"])))),128))]),l.list.length>=10?((0,s.wg)(),(0,s.iD)("div",h,[(0,s.Uk)((0,a.zw)(d.chil())+" ",1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.indexs,(t=>((0,s.wg)(),(0,s.iD)("input",{type:"button",value:t,key:t,onClick:()=>{l.indexPop=10*(t-1),l.indicate=l.indicate-10}},null,8,v)))),128))])):(0,s.kq)("",!0),(0,s.wy)((0,s.Wm)(_,{onClose:d.closeModal,name:l.lname,count:l.lcount,desc:l.ldesc,price:l.lprice,cat:l.lcat,image:l.limage,rate:l.lrate},null,8,["onClose","name","count","desc","price","cat","image","rate"]),[[n.F8,l.isModalVisible]])],64)}i(560);const _={class:"products__product"},g={class:"products__imgs"},f=["src"],b={class:"products__price"},w={class:"products__cat"},y={class:"products__name"},k={class:"products__rate"},x={class:"buttons"};function z(t,e,i,n,o,l){return(0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",g,[(0,s._)("img",{src:i.image,alt:"Товар",class:"products__img"},null,8,f)]),(0,s._)("div",b,[(0,s._)("h2",null,(0,a.zw)(i.price)+" $",1)]),(0,s._)("div",w,[(0,s._)("h3",null,(0,a.zw)(i.cat),1)]),(0,s._)("div",y,[(0,s._)("h1",null,(0,a.zw)(i.name),1)]),(0,s._)("div",k,[(0,s._)("p",null,"Рейтинг: "+(0,a.zw)(i.rate),1),(0,s._)("p",null,"Голоса: "+(0,a.zw)(i.count),1)]),(0,s._)("div",x,[(0,s._)("input",{type:"button",value:"Подобнее",onClick:e[0]||(e[0]=(...t)=>l.open&&l.open(...t))})])])}var C={name:"productCart",props:["name","price","desc","cat","image","rate","count"],methods:{open(){this.$emit("openens",this.name,this.price,this.desc,this.cat,this.image,this.rate,this.count)}}},O=i(89);const P=(0,O.Z)(C,[["render",z]]);var j=P;const M={class:"modal-backdrop"},D={class:"modal",role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"},T={class:"modal-header",id:"modalTitle"},$=(0,s._)("br",null,null,-1),W=["src"],U={class:"modal-body",id:"modalDescription"},V={class:"modal-footer"},Z={class:"footer__block"};function E(t,e,i,o,l,c){return(0,s.wg)(),(0,s.j4)(n.uT,{name:"modal-fade"},{default:(0,s.w5)((()=>[(0,s._)("div",M,[(0,s._)("div",D,[(0,s._)("header",T,[(0,s.WI)(t.$slots,"header",{},(()=>[(0,s.Uk)((0,a.zw)(i.cat),1),$,(0,s.Uk)((0,a.zw)(i.name)+" ",1),(0,s._)("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=(...t)=>c.close&&c.close(...t)),"aria-label":"Close modal"}," x ")]))]),(0,s._)("section",null,[(0,s._)("img",{src:i.image,alt:"картинка",class:"header__img"},null,8,W)]),(0,s._)("section",U,[(0,s.WI)(t.$slots,"body",{},(()=>[(0,s.Uk)((0,a.zw)(i.desc),1)]))]),(0,s._)("footer",V,[(0,s.WI)(t.$slots,"footer",{},(()=>[(0,s.Uk)((0,a.zw)(i.price)+" $ ",1),(0,s._)("div",Z,[(0,s._)("p",null,"Рейтинг "+(0,a.zw)(i.rate),1),(0,s._)("p",null,"Голосовали "+(0,a.zw)(i.count),1)]),(0,s._)("button",{type:"button",class:"btn-green",onClick:e[1]||(e[1]=(...t)=>c.close&&c.close(...t)),"aria-label":"Close modal"}," Close ")]))])])])])),_:3})}var H={name:"modalLis",props:["name","price","desc","cat","image","rate","count"],methods:{close(){this.$emit("close")}}};const I=(0,O.Z)(H,[["render",E]]);var Y=I,F={name:"TestOps",components:{Product:j,modal:Y},data(){return{isModalVisible:!1,list:0,lname:"",lprice:"",ldesc:"",lcat:"",indicate:0,linenins:0,limage:"",lrate:"",lcount:"",indexs:0,name:[],price:[],desc:[],cat:[],image:[],rate:[],count:[],razdel:["","/category/men's clothing","/category/jewelery","/category/electronics","/category/women's clothing"],indexPop:0,selector:0,url:"https://fakestoreapi.com/products"}},methods:{chil(){this.indexs,this.indexs=Math.ceil(this.list.length/10)},openeers(t,e,i,n,s,o,a){this.lname=t,this.lprice=e,this.ldesc=i,this.lcat=n,this.limage=s,this.lrate=o,this.lcount=a,this.showModal()},showModal(){this.isModalVisible=!0},closeModal(){this.isModalVisible=!1},getWeather(){this.name=[],this.price=[],this.desc=[],this.cat=[],this.image=[],this.count=[],this.rate=[],fetch(this.url).then((t=>t.json())).then((t=>{this.list=t;for(let e in this.list)this.name.push(this.list[e]["title"]),this.price.push(this.list[e]["price"]),this.desc.push(this.list[e]["description"]),this.cat.push(this.list[e]["category"]),this.image.push(this.list[e]["image"]),this.count.push(this.list[e]["rating"]["count"]),this.rate.push(this.list[e]["rating"]["rate"]);this.list<10?this.indicate=10:this.indicate=this.list.length}))}},mounted(){this.getWeather()}};const K=(0,O.Z)(F,[["render",m]]);var q=K,A={name:"App",components:{Test:q}};const L=(0,O.Z)(A,[["render",o]]);var N=L;(0,n.ri)(N).mount("#app")}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,n,s,o){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],o=t[d][2];for(var l=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((function(t){return i.O[t](n[c])}))?n.splice(c--,1):(l=!1,o<a&&(a=o));if(l){t.splice(d--,1);var r=s();void 0!==r&&(e=r)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,s,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,a=n[0],l=n[1],c=n[2],r=0;if(a.some((function(e){return 0!==t[e]}))){for(s in l)i.o(l,s)&&(i.m[s]=l[s]);if(c)var d=c(i)}for(e&&e(n);r<a.length;r++)o=a[r],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(d)},n=self["webpackChunkshop"]=self["webpackChunkshop"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(5603)}));n=i.O(n)})();
//# sourceMappingURL=app.1b0fed94.js.map