"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3063],{3063:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});var n=r(629);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const i={name:"SALES",created:function(){this.REPORT_SALES([])},data:function(){return{filter:{dates:[],receptionIds:[]},items:[{title:"All Report",id:"export"}],types:["Uniforms","Lessons","Camps","Others"],type:[],loading:!1,open:!1,prod:{}}},methods:c(c(c({},(0,n.nv)(["REPORT_FILTER_SALES","REPORT_SALES_RECEIPTS"])),(0,n.OI)(["REPORT_SALES","REPORT_SALE_RECEIPTS"])),{},{filterRecord:function(){var t=this;this.loading=!0;var e=this.filter.dates.sort((function(t,e){return new Date(t)-new Date(e)}));this.REPORT_FILTER_SALES({dates:e,types:this.type}).then((function(e){t.loading=!1}))},viewReceipt:function(t){this.open=!0,this.prod=t,this.REPORT_SALES_RECEIPTS({dates:this.filter.dates,productId:t.productId})},closeDialog:function(){this.open=!1,this.REPORT_SALE_RECEIPTS([])},exportExcel:function(){this.$excel("export","Class Information")},printReport:function(t){this.$print(t)}}),computed:c(c({},(0,n.rn)(["reports"])),{},{dateRangeText:function(){return this.filter.dates.join(" ~ ")},transactions:function(){var t=this.reports.sales,e=[];return t.forEach((function(t){e.push({customer:JSON.parse(t.customer),datePurchase:t.datePurchase,item:JSON.parse(t.item),payment:JSON.parse(t.payment),tentered:JSON.parse(t.tentered),total:JSON.parse(t.total),transactionNumber:t.transactionNumber})})),e},receipts:function(){var t=this.reports.receipts,e=[];return t.forEach((function(t){e.push({customer:JSON.parse(t.customer),datePurchase:t.datePurchase,item:JSON.parse(t.item),payment:JSON.parse(t.payment),tentered:JSON.parse(t.tentered),total:JSON.parse(t.total),transactionNumber:t.transactionNumber})})),e},products:function(){var t=[];return this.transactions.forEach((function(e){t.push({uniform:e.item.productName,option:e.item.pdoName,type:e.item.type,uniqueId:e.item.productId,quantity:e.item.quantity,total_discount:e.item.discount,total_price:e.item.total_price,total_price_excl:e.item.total_price_excl,total_tax:e.item.total_tax})})),t},allProducts:function(){var t=[];return this.products.reduce((function(e,r){return e[r.uniqueId]||(e[r.uniqueId]={productId:r.uniqueId,uniform:r.uniform,option:r.option,type:r.type,quantity:0,total_discount:0,total_price:0,total_price_excl:0,total_tax:0},t.push(e[r.uniqueId])),e[r.uniqueId].quantity+=r.quantity,e[r.uniqueId].total_discount+=r.total_discount,e[r.uniqueId].total_price+=r.total_price,e[r.uniqueId].total_price_excl+=r.total_price_excl,e[r.uniqueId].total_tax+=r.total_tax,e}),{}),t},product_total:function(){return this.allProducts.reduce((function(t,e){return t+e.total_price}),0)},product_discount:function(){return this.allProducts.reduce((function(t,e){return t+e.total_discount}),0)},product_subtotal:function(){return this.allProducts.reduce((function(t,e){return t+e.total_price_excl}),0)},product_tax:function(){return this.allProducts.reduce((function(t,e){return t+e.total_tax}),0)}})};const o=(0,r(1900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-date-picker",{attrs:{"full-width":"",range:""},model:{value:t.filter.dates,callback:function(e){t.$set(t.filter,"dates",e)},expression:"filter.dates"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-autocomplete",{attrs:{items:t.types,label:"Select Types",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item,s=e.index;return[s<5?r("v-chip",[r("span",[t._v(t._s(n))])]):t._e(),t._v(" "),5===s?r("span",{staticClass:"grey--text text-caption"},[t._v("\n                                        (+"+t._s(t.type.length-5)+" others)\n                                    ")]):t._e()]}}]),model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),t._v(" "),r("div",{staticClass:"text-right mb-6 mr-4"},[r("v-btn",{staticClass:"text-none success",attrs:{loading:t.loading},on:{click:t.filterRecord}},[t._v("\n                                    Filter Record\n                                ")])],1)],1)],1)],1)],1),t._v(" "),r("v-divider",{staticClass:"mt-2"}),t._v(" "),r("v-card",{staticClass:"mt-2"},[r("v-card-title",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",text:"",fab:""},on:{click:t.exportExcel}},[r("v-icon",[t._v("mdi-cloud-download")])],1),t._v(" "),r("v-menu",{attrs:{"open-on-hover":"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:"",text:"",fab:""}},"v-btn",s,!1),n),[r("v-icon",[t._v("mdi-cloud-print")])],1)]}}])},[t._v(" "),r("v-list",t._l(t.items,(function(e,n){return r("v-list-item",{key:n,on:{click:function(r){return t.printReport(e.id)}}},[r("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1),t._v(" "),r("v-card-text",{attrs:{id:"export"}},[r("br"),t._v(" "),r("v-simple-table",{attrs:{id:"product"},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-center",attrs:{colspan:"7"}},[r("h1",[t._v("Sales Report")])])]),t._v(" "),r("tr",[r("th",{staticClass:"text-center",attrs:{colspan:"7"}},[r("h4",[t._v(" "+t._s(t.dateRangeText)+" ")])])]),t._v(" "),r("tr",[r("th",{staticClass:"text-center"},[t._v("\n                                    Product/Lesson\n                                ")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("\n                                    Type\n                                ")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("\n                                    Quantity\n                                ")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("\n                                    Taxable\n                                ")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("\n                                    Discount\n                                ")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("\n                                    VAT 5%\n                                ")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("\n                                    Total\n                                ")]),t._v(" "),r("th",{staticClass:"text-center"})])]),t._v(" "),r("tbody",t._l(t.allProducts,(function(e,n){return r("tr",{key:n},[r("td",{staticClass:"text-center"},[t._v(t._s(e.uniform))]),t._v(" "),r("td",{staticClass:"text-center"},[t._v(" "+t._s(e.type)+" ")]),t._v(" "),r("td",{staticClass:"text-center"},[t._v(" "+t._s(e.quantity)+" ")]),t._v(" "),r("td",{staticClass:"text-center"},[t._v(" "+t._s(t._f("currency")(e.total_price_excl))+" ")]),t._v(" "),r("td",{staticClass:"text-center"},[t._v(t._s(t._f("currency")(e.total_discount)))]),t._v(" "),r("td",{staticClass:"text-center"},[t._v(t._s(t._f("currency")(e.total_tax)))]),t._v(" "),r("td",{staticClass:"text-center"},[t._v(t._s(t._f("currency")(e.total_price)))]),t._v(" "),r("td",{staticClass:"text-center"},[r("v-icon",{on:{click:function(r){return t.viewReceipt(e)}}},[t._v("mdi-magnify")])],1)])})),0),t._v(" "),r("tfoot",[r("tr",[r("td",{staticClass:"text-center font-weight-black"},[t._v("Total")]),t._v(" "),r("td",{staticClass:"text-center"}),t._v(" "),r("td",{staticClass:"text-center"}),t._v(" "),r("td",{staticClass:"text-center font-weight-black"},[t._v(t._s(t._f("currency")(t.product_subtotal)))]),t._v(" "),r("td",{staticClass:"text-center font-weight-black"},[t._v(t._s(t._f("currency")(t.product_discount)))]),t._v(" "),r("td",{staticClass:"text-center font-weight-black"},[t._v(t._s(t._f("currency")(t.product_tax)))]),t._v(" "),r("td",{staticClass:"text-center font-weight-black"},[t._v(t._s(t._f("currency")(t.product_total)))]),t._v(" "),r("td")])])]},proxy:!0}])})],1)],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{persistent:"",width:"800"},on:{"click:outside":t.closeDialog},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[r("v-card",[r("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[r("v-toolbar-title"),t._v(" "),r("v-spacer"),t._v(" "),r("v-icon",{on:{click:t.closeDialog}},[t._v("mdi-close")])],1),t._v(" "),r("v-card-text",[r("v-simple-table",{attrs:{id:"product"},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-center",attrs:{colspan:"6"}},[r("h1",[t._v(t._s(t._f("toUpper")(t.prod.uniform)))])])]),t._v(" "),r("tr",[r("th",{staticClass:"text-center"},[t._v("\n                                    Transaction\n                                ")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("\n                                    Mom Name\n                                ")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("\n                                    Student Name\n                                ")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("\n                                    Total\n                                ")])])]),t._v(" "),r("tbody",t._l(t.receipts,(function(e,n){return r("tr",{key:n},[r("td",{staticClass:"text-center"},[t._v(t._s(e.transactionNumber))]),t._v(" "),r("td",{staticClass:"text-center"},[t._v(" "+t._s(t._f("toUpper")(e.customer.fullName))+" ")]),t._v(" "),r("td",{staticClass:"text-center"},[t._v(" "+t._s(t._f("toUpper")(e.item.student.firstName))+" "+t._s(t._f("toUpper")(e.item.student.familyName))+" ")]),t._v(" "),r("td",{staticClass:"text-center"},[t._v(t._s(t._f("currency")(e.item.total_price)))])])})),0)]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);