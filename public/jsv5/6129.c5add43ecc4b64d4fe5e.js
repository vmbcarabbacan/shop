"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6129],{6129:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(629);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o={name:"requestPending",components:{transactions:function(){return n.e(6707).then(n.bind(n,6707))}},created:function(){var e=parseInt(this.$route.query.page);this.page=e;var t={search:this.search,status:"Pending",type:this.type,page:e,perPage:20};this.REQUEST_FILTER_M(t),this.paginate(e)},data:function(){return{search:null,page:1,type:"",types:["Full Name","Type"],headers:[{text:"Requested By",value:"name",align:"left",sortable:!1,width:"20%"},{text:"Type",value:"type",align:"left",sortable:!1,width:"20%"},{text:"Notes",value:"comment",align:"left",sortable:!1,width:"30%"},{text:"Date",value:"date",align:"left",sortable:!1,width:"20%"},{text:"",value:"action",align:"center",sortable:!1,width:"10%"}]}},methods:i(i(i({},(0,r.nv)(["REQUEST_FETCH"])),(0,r.OI)(["REQUEST_VIEW_TRANSACTION","REQUEST_OPEN_TRANSACTION","REQUEST_FILTER_M"])),{},{paginate:function(e){var t=Object.keys(this.$route.query).length>0?e:1;this.$router.replace({query:{page:t}}).catch((function(e){"NavigationDuplicated"===e.name||e.message.includes("Avoided redundant navigation to current location")||console.log(e)}));var n={search:this.search,status:"Pending",type:this.type,page:t,perPage:20};this.REQUEST_FILTER_M(n),this.REQUEST_FETCH(n)},view:function(e){this.REQUEST_OPEN_TRANSACTION(),this.REQUEST_VIEW_TRANSACTION(e)},searchRequest:function(){this.paginate(1)}}),computed:i({},(0,r.rn)(["request"]))};const c=(0,n(1900).Z)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("v-data-table",{attrs:{headers:e.headers,items:e.request.fetch.data,"items-per-page":20,loading:e.request.loading,"server-items-length":e.request.fetch.total,"footer-props":{"items-per-page-options":[5,10,20],"items-per-page-text":"Categories per page","show-current-page":!0,"show-first-last-page":!0},"mobile-breakpoint":200,"hide-default-footer":"","no-results-text":"request not found"},scopedSlots:e._u([{key:"item.name",fn:function(t){var n=t.item;return[e._v("\n                            "+e._s(e._f("toUpper")(n.requestedBy.fullName))+"\n                        ")]}},{key:"item.type",fn:function(t){var n=t.item;return[e._v("\n                            "+e._s(e._f("toUpper")(n.type))+"\n                        ")]}},{key:"item.date",fn:function(t){var n=t.item;return[e._v("\n                            "+e._s(e._f("dateAndTime")(n.created_at))+"\n                        ")]}},{key:"no-data",fn:function(){return[e._v("\n                            No Available Request \n                        ")]},proxy:!0},{key:"item.action",fn:function(t){var r=t.item;return[n("v-btn",{staticClass:"primary",attrs:{icon:"",dark:""},on:{click:function(t){return t.stopPropagation(),e.view(r)}}},[n("v-icon",[e._v(" mdi-eye ")])],1)]}}])})],1),e._v(" "),n("v-pagination",{attrs:{length:e.request.fetch.last_page},on:{input:e.paginate},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1),e._v(" "),e.request.openTransaction?n("transactions"):e._e()],1)}),[],!1,null,null,null).exports}}]);