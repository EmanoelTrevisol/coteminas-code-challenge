(function(t){function e(e){for(var r,c,i=e[0],o=e[1],u=e[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},s=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1f51":function(t,e,n){},2882:function(t,e,n){"use strict";var r=n("afb2"),a=n.n(r);a.a},"2b03":function(t,e,n){"use strict";var r=n("782f"),a=n.n(r);a.a},"3aa6":function(t,e,n){},"3aef":function(t,e,n){"use strict";var r=n("b496"),a=n.n(r);a.a},"4e74":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),a=n("f2d6"),s=n.n(a),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-view",{key:"header",attrs:{name:"header"}})],1),n("main",[n("router-view")],1)])},i=[],o={components:{}},u=o,l=(n("7faf"),n("2877")),p=Object(l["a"])(u,c,i,!1,null,null,null),d=p.exports,f=n("2909"),g=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products-list"},[n("div",{staticClass:"search-title"},[n("product-list-title")],1),n("div",{staticClass:"search-result"},[n("div",{staticClass:"search-result-title"},[n("product-list-result-number")],1),n("div",{staticClass:"result-items"},[t.$wait.is("loading-products")?n("loader"):t.products.length?n("products",{attrs:{products:t.products}}):n("empty-state",{attrs:{text:t.emptyStateText}})],1),n("div",{staticClass:"pagination-footer"},[n("pagination",{attrs:{total:t.total,"current-page":t.currentPage,"per-page":t.perPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:perPage":function(e){t.perPage=e},"update:per-page":function(e){t.perPage=e}}})],1)])])},v=[],m=(n("4de4"),n("5530")),P=n("ade3"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"result-number"},[t._v(t._s(t.resultString))])},_=[],O={computed:{resultString:function(){var t=this.$store.state.product.total;return 0===t?"nenhum produto encontrado":1===t?"1 produto encontrado":"".concat(t," produtos encontrados")}}},y=O,C=(n("7788"),Object(l["a"])(y,b,_,!1,null,"f27cf8b8",null)),x=C.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},t._l(t.products,(function(t){return n("product-card",{key:t._id,attrs:{product:t}})})),1)},j=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-card"},[n("div",{staticClass:"images"},t._l(t.product.images,(function(e,r){return n("div",{key:"image-"+r+"-"+t.product._id,staticClass:"image"},[n("img",{attrs:{src:e,alt:"Imagem "+r+" do produto "+t.product.title}})])})),0),n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[n("div",{staticClass:"product-name"},[t._v(" "+t._s(t.product.title)+" ")]),n("small",{staticClass:"product-type-size"},[t._v(" "+t._s(t.product.type)+" | "+t._s(t.product.size)+" ")])]),n("p",{staticClass:"price"},[t.product.offerPrice?n("small",{staticClass:"original"},[n("span",{staticClass:"currency"},[t._v(" "+t._s(t.product.price)+" ")]),t._v(" por ")]):t._e(),t._v(" "+t._s(t.product.offerPrice||t.product.price)+" ")])])])},$=[],S={props:{product:{type:Object,default:function(){return{}}}}},k=S,E=(n("2882"),Object(l["a"])(k,w,$,!1,null,"2fb6373d",null)),T=E.exports,N={components:{ProductCard:T},props:{products:{type:Array,default:function(){return[]}}}},D=N,G=Object(l["a"])(D,L,j,!1,null,null,null),I=G.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-list-title"},[n("h1",[t._v(t._s(t.title))])])},B=[],F={computed:{title:function(){return this.$store.state.product.filter||"Lista de produtos"}}},z=F,M=(n("3aef"),Object(l["a"])(z,R,B,!1,null,"2c7844eb",null)),A=M.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"empty-state"},[n("h3",[t._v("Ops... não tem nada por aqui")]),n("p",{staticClass:"text"},[t._v(t._s(t.text))])])},q=[],U={props:{text:{type:String,default:"Nenhum resultado para sua pesquisa foi encontrado"}}},H=U,J=(n("91b7"),Object(l["a"])(H,K,q,!1,null,"2980f704",null)),Q=J.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[n("font-awesome-icon",{attrs:{icon:"spinner",spin:"",size:"4x"}})],1)},W=[],X={},Y=X,Z=(n("dea5"),Object(l["a"])(Y,V,W,!1,null,"64b1c5f7",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("div",{staticClass:"per-page-options"},[n("select",{attrs:{name:"per-page",id:"per-page"},on:{change:function(e){return t.$emit("update:perPage",parseInt(e.target.value))}}},t._l(t.perPageOptions,(function(e){return n("option",{key:e,domProps:{value:e,selected:e===t.perPage}},[t._v(" "+t._s(e)+" produtos por página ")])})),0)]),n("div",{staticClass:"page-options"},[n("span",{staticClass:"first-page",class:{disabled:!t.canGoToPreviousPage()},on:{click:t.firstPage}},[n("font-awesome-icon",{attrs:{icon:"angle-double-left"}})],1),n("span",{staticClass:"previous-page",class:{disabled:!t.canGoToPreviousPage()},on:{click:t.previousPage}},[n("font-awesome-icon",{attrs:{icon:"angle-left"}})],1),t._l(t.pageOptions.previous,(function(e){return n("span",{key:e,staticClass:"option",on:{click:function(n){return t.onPageClick(e)}}},[t._v(" "+t._s(e)+" ")])})),n("span",{staticClass:"option selected"},[t._v(" "+t._s(t.currentPage)+" ")]),t._l(t.pageOptions.next,(function(e){return n("span",{key:e,staticClass:"option",on:{click:function(n){return t.onPageClick(e)}}},[t._v(" "+t._s(e)+" ")])})),n("span",{staticClass:"next-page",class:{disabled:!t.canGoToNextPage()},on:{click:t.nextPage}},[n("font-awesome-icon",{attrs:{icon:"angle-right"}})],1),n("span",{staticClass:"last-page",class:{disabled:!t.canGoToNextPage()},on:{click:t.lastPage}},[n("font-awesome-icon",{attrs:{icon:"angle-double-right"}})],1)],2)])},nt=[],rt=(n("a9e3"),{props:{total:{type:Number,required:!0},currentPage:{type:Number,default:1},perPage:{type:Number,default:10}},data:function(){return{perPageOptions:[10,25,50,100]}},computed:{totalPages:function(){return this.total&&this.perPage&&Math.ceil(this.total/this.perPage)||0},pageOptions:function(){for(var t=[],e=[],n=this.getOptionsLength(),r=n.prevLength,a=n.nextLength,s=this.currentPage-1;s>=this.currentPage-r;s--)s<1||t.unshift(s);for(var c=this.currentPage+1;c<=this.currentPage+a;c++)c>this.totalPages||e.push(c);return{previous:t,next:e}}},methods:{getOptionsLength:function(){var t={},e=this.totalPages-this.currentPage;return this.currentPage<4?(t.prevLength=this.currentPage-1,t.nextLength=6-this.currentPage):e<4?(t.prevLength=6-e,t.nextLength=e):(t.prevLength=3,t.nextLength=3),t},onPageClick:function(t){this.$emit("update:currentPage",t)},canGoToNextPage:function(){return!!this.pageOptions.next.length},canGoToPreviousPage:function(){return!!this.pageOptions.previous.length},nextPage:function(t){this.canGoToNextPage()?this.$emit("update:currentPage",this.currentPage+1):(t.stopPropagation(),t.preventDefault())},lastPage:function(t){this.canGoToNextPage()?this.$emit("update:currentPage",this.totalPages):(t.stopPropagation(),t.preventDefault())},previousPage:function(t){this.canGoToPreviousPage()?this.$emit("update:currentPage",this.currentPage-1):(t.stopPropagation(),t.preventDefault())},firstPage:function(t){this.canGoToPreviousPage()?this.$emit("update:currentPage",1):(t.stopPropagation(),t.preventDefault())}}}),at=rt,st=(n("97ac"),Object(l["a"])(at,et,nt,!1,null,"44a4ed18",null)),ct=st.exports,it=n("2f62");function ot(t){return{get:function(){return this.$store.state.product[t]},set:function(e){return this.$store.dispatch("product/updateListData",Object(P["a"])({},t,e))}}}var ut={components:{ProductListResultNumber:x,ProductListTitle:A,Products:I,EmptyState:Q,Loader:tt,Pagination:ct},computed:Object(m["a"])(Object(m["a"])(Object(m["a"])({},Object(it["c"])("product",{total:function(t){return t.total}})),Object(it["b"])({products:"product/list"})),{},{filter:function(){return ot("filter")}(),currentPage:function(){return ot("currentPage")}(),perPage:function(){return ot("limit")}(),emptyStateText:function(){var t="Não encontramos nenhum produto";return this.filter?"".concat(t," com o termo '").concat(this.filter,"'"):t}}),watch:{currentPage:function(){this.getList()},perPage:function(){this.getList()}},created:function(){this.getList()},methods:{getList:function(){this.$store.dispatch("product/getList")}}},lt=ut,pt=(n("2b03"),Object(l["a"])(lt,h,v,!1,null,"4053ecde",null)),dt=pt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-page-header"},[n("logo"),n("product-search-component")],1)},gt=[],ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"logo"},[t._v(" mmartan ")])},vt=[],mt={},Pt=mt,bt=(n("c6dc"),Object(l["a"])(Pt,ht,vt,!1,null,"2d74f4f7",null)),_t=bt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-search-input"},[n("font-awesome-icon",{staticClass:"search-icon",attrs:{icon:"search"},on:{click:t.search}}),n("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"Buscar produtos"},domProps:{value:t.filter},on:{input:function(e){return t.setSearchFilter(e.target.value)}}}),n("font-awesome-icon",{staticClass:"clear-icon",attrs:{icon:"times-circle"},on:{click:t.clearFilter}})],1)},yt=[],Ct=(n("ac1f"),n("841c"),n("2ef0")),xt={components:{},data:function(){return{}},computed:Object(m["a"])({},Object(it["c"])("product",{filter:function(t){return t.filter}})),methods:{setSearchFilter:function(t){this.$store.dispatch("product/updateSearchFilter",t),this.getList()},getList:Object(Ct["debounce"])((function(){this.$store.dispatch("product/getList")}),600),clearFilter:function(){this.$store.dispatch("product/updateSearchFilter",""),this.search()},search:function(){this.$store.dispatch("product/getList")}}},Lt=xt,jt=(n("f184"),Object(l["a"])(Lt,Ot,yt,!1,null,"5dabcb70",null)),wt=jt.exports,$t={components:{Logo:_t,ProductSearchComponent:wt}},St=$t,kt=(n("ff54"),Object(l["a"])(St,ft,gt,!1,null,"aabe682a",null)),Et=kt.exports,Tt=[{path:"/",name:"product-list",components:{header:Et,default:dt}}],Nt=(n("96cf"),n("1da1")),Dt=(n("99af"),n("bc3a")),Gt=n.n(Dt),It=n("b383"),Rt=n.n(It),Bt={getList:function(t){var e=t.limit,n=t.page,r=t.filter;return Gt.a.get("".concat("http://18.234.123.113/api","/products?").concat(Rt.a.stringify({limit:e,page:n,filter:r})))}},Ft={updateListData:function(t,e){var n=t.commit;n("updateListData",e)},updateSearchFilter:function(t,e){var n=t.commit;n("updateListData",{filter:e})},getList:function(t){return Object(Nt["a"])(regeneratorRuntime.mark((function e(){var n,r,a,s,c,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.dispatch,a=t.state,e.prev=1,r("wait/start","loading-products",{root:!0}),s=a.limit,c=a.currentPage,i=a.filter,e.next=6,Bt.getList({limit:s,page:c,filter:i});case 6:o=e.sent,n("updateListData",o),e.next=13;break;case 10:throw e.prev=10,e.t0=e["catch"](1),e.t0;case 13:return e.prev=13,r("wait/end","loading-products",{root:!0}),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()}},zt=(n("4160"),n("b64b"),n("159b"),{updateListData:function(t,e){Object.keys(e).forEach((function(n){r["a"].set(t,n,e[n])}))}});n("d81d");function Mt(t){return{SHEET:"Lençol",PILLOW:"Travesseiro",CUSHION:"Almofada",BEDSPREAD:"Colcha",BLANKET:"Cobertor"}[t]}function At(t){return{SINGLE:"Solteiro",COUPLE:"Casal",QUEEN:"Queen",KING:"King",KID:"Infantil"}[t]}function Kt(t){return Object(m["a"])(Object(m["a"])({},t),{},{type:Mt(t.type),size:At(t.size),price:t.price.toLocaleString("pt-BR",{currency:"BRL",style:"currency"}),offerPrice:t.offerPrice?t.offerPrice.toLocaleString("pt-BR",{currency:"BRL",style:"currency"}):void 0})}var qt={list:function(t){return(t.items||[]).map(Kt)}},Ut={items:[],filter:"",total:0,currentPage:1,limit:10},Ht={namespaced:!0,actions:Ft,mutations:zt,getters:qt,state:Ut};r["a"].use(g["a"]);var Jt=Object(f["a"])(Tt),Qt=new g["a"]({mode:"history",base:"/",routes:Jt}),Vt=Qt;r["a"].use(it["a"]);var Wt=new it["a"].Store({modules:{product:Ht},state:{},mutations:{},actions:{}});var Xt=Wt,Yt=n("ecee"),Zt=n("c074"),te=n("ad3d");Yt["c"].add(Zt["h"]),Yt["c"].add(Zt["e"]),Yt["c"].add(Zt["g"]),Yt["c"].add(Zt["a"]),Yt["c"].add(Zt["b"]),Yt["c"].add(Zt["c"]),Yt["c"].add(Zt["d"]),Yt["c"].add(Zt["f"]),r["a"].component("font-awesome-icon",te["a"]),Gt.a.interceptors.response.use((function(t){return t.data}));n("4e74");r["a"].config.productionTip=!1,r["a"].use(s.a),new r["a"]({router:Vt,store:Xt,render:function(t){return t(d)},wait:new s.a({useVuex:!0})}).$mount("#app")},"5f95":function(t,e,n){},7788:function(t,e,n){"use strict";var r=n("3aa6"),a=n.n(r);a.a},"782f":function(t,e,n){},"7d2e":function(t,e,n){},"7faf":function(t,e,n){"use strict";var r=n("b8ff"),a=n.n(r);a.a},"91b7":function(t,e,n){"use strict";var r=n("c8b4"),a=n.n(r);a.a},"97ac":function(t,e,n){"use strict";var r=n("7d2e"),a=n.n(r);a.a},a25c:function(t,e,n){},afb2:function(t,e,n){},b496:function(t,e,n){},b8ff:function(t,e,n){},c6dc:function(t,e,n){"use strict";var r=n("5f95"),a=n.n(r);a.a},c8b4:function(t,e,n){},dd44:function(t,e,n){},dea5:function(t,e,n){"use strict";var r=n("a25c"),a=n.n(r);a.a},f184:function(t,e,n){"use strict";var r=n("dd44"),a=n.n(r);a.a},ff54:function(t,e,n){"use strict";var r=n("1f51"),a=n.n(r);a.a}});
//# sourceMappingURL=app.72a63ebd.js.map