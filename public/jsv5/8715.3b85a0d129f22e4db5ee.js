"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8715],{8715:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var r=n(629);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const i={name:"xero",created:function(){var t=this;this.XERO_GET(),setTimeout((function(){t.SETUP_XERO_DETAILS_SAVE({code:t.$route.query.code,scope:t.$route.query.scope,session_state:t.$route.query.session_state,state:t.$route.query.state}).then((function(t){})).catch((function(e){t.XERO_REFRESH_TOKEN({token:t.xero.xero.token.refresh_token})}))}),2e3)},watch:{timerCount:{handler:function(t){var e=this;t>0&&setTimeout((function(){e.timerCount--}),6e4)},immediate:!0}},data:function(){return{timerCount:30,filter:{dates:[]},loading:!1,imporLoading:!1}},methods:o(o({},(0,r.nv)(["SETUP_XERO_DETAILS_SAVE","XERO_REFRESH_TOKEN","XERO_GET","XERO_FILTER_RECORD","XERO_IMPORT","XERO_LOAD_INVOICES"])),{},{refreshToken:function(){var t=this;this.XERO_REFRESH_TOKEN({token:this.xero.xero.token.refresh_token}).then((function(e){t.timerCount=30}))},filterRecord:function(){var t=this;this.loading=!0,this.XERO_FILTER_RECORD(this.filter).then((function(e){t.loading=!1}))},importToXero:function(){var t=this;this.imporLoading=!0,this.XERO_IMPORT({items:this.transactions,accessToken:this.xero.xero.token.access_token,tenantId:this.xero.xero.tenant[0].tenantId}).then((function(e){t.imporLoading=!1}))},loadInvoice:function(){this.XERO_LOAD_INVOICES({accessToken:this.xero.xero.token.access_token,tenantId:this.xero.xero.tenant[0].tenantId})}}),computed:o(o({},(0,r.rn)(["xero"])),{},{dateRangeText:function(){return this.filter.dates.join(" ~ ")},transactions:function(){var t=this.xero.items,e=[];return t.forEach((function(t){e.push({customer:JSON.parse(t.customer),datePurchase:t.datePurchase,payment:JSON.parse(t.payment),status:t.status,total:JSON.parse(t.total),transactionNumber:t.transactionNumber,carts:t.carts})})),e}})};const c=(0,n(1900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",to:{name:"Home"}}},"v-btn",s,!1),r),[n("v-icon",{attrs:{color:"primary",dark:""}},[t._v("\n                    mdi-home\n                    ")])],1)]}}])},[t._v(" "),n("span",[t._v("Go Home")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.refreshToken}},"v-btn",s,!1),r),[n("v-icon",{attrs:{color:"primary",dark:""}},[t._v("\n                    mdi-cloud-refresh\n                    ")])],1)]}}])},[t._v(" "),n("span",[t._v("Refresh token")])]),t._v(" "),n("v-spacer"),t._v("\n        Token before expires: "+t._s(t.timerCount>0?t.timerCount:0)+" "+t._s(t.timerCount>1?"mins":"min")+"\n\n    ")],1),t._v(" "),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"start",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-date-picker",{attrs:{"full-width":"",range:""},model:{value:t.filter.dates,callback:function(e){t.$set(t.filter,"dates",e)},expression:"filter.dates"}}),t._v(" "),n("div",{staticClass:"text-right mt-6"},[n("v-btn",{staticClass:"text-none success",attrs:{loading:t.loading},on:{click:t.filterRecord}},[t._v("\n                            Filter Record\n                        ")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-simple-table",{attrs:{id:"transaction"},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-center",attrs:{colspan:"9"}},[n("h1",[t._v("Import to Xero")])])]),t._v(" "),n("tr",[n("th",{staticClass:"text-center",attrs:{colspan:"9"}},[n("h4",[t._v(" "+t._s(t.dateRangeText)+" ")])])]),t._v(" "),n("tr",[n("th",{attrs:{colspan:"9"}},[n("div",{staticClass:"text-right"},[n("v-btn",{staticClass:"text-none success",attrs:{loading:t.imporLoading,disabled:!(t.xero.items.length>0)},on:{click:t.importToXero}},[n("v-icon",[t._v("mdi-file-import")]),t._v("\n                                                Import\n                                            ")],1)],1)])]),t._v(" "),n("tr",[n("th",{staticClass:"text-center"},[t._v("\n                                    Date\n                                ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                                    Transaction\n                                ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                                    Status\n                                ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                                    Total\n                                ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e,r){return n("tr",{key:r},[n("td",{staticClass:"text-center"},[t._v(t._s(t._f("dateAndTime")(e.datePurchase)))]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(t._s(e.transactionNumber))]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(" "+t._s(e.status)+" ")]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(t._s(t._f("currency")(e.total)))])])})),0)]},proxy:!0}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);