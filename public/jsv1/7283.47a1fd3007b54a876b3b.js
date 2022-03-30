"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7283],{7283:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var r=s(629);function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const i={name:"DISCOUNTS",data:function(){return{filter:{dates:[],status:null,discounts:[]},status:["Completed","Pending","Cancelled","Refund"],loading:!1}},methods:c(c({},(0,r.nv)(["REPORT_DISCOUNTS"])),{},{exportExcel:function(){this.$excel("export","Discounts")},printReport:function(){this.$print("export")},filterRecord:function(){this.REPORT_DISCOUNTS(this.filter)}}),computed:c(c({},(0,r.rn)(["reports"])),{},{dateRangeText:function(){return this.filter.dates.join(" ~ ")}})};const l=(0,s(1900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("v-card",[s("v-container",[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-date-picker",{attrs:{"full-width":"",range:""},model:{value:t.filter.dates,callback:function(e){t.$set(t.filter,"dates",e)},expression:"filter.dates"}})],1),t._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-autocomplete",{attrs:{items:t.reports.filters.discounts,"item-text":"name","item-value":"name",label:"Select Discount Name",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){var r=e.item,n=e.index;return[n<5?s("v-chip",[s("span",[t._v(t._s(r.name))])]):t._e(),t._v(" "),5===n?s("span",{staticClass:"grey--text text-caption"},[t._v("\n                                        (+"+t._s(t.filter.discounts.length-5)+" others)\n                                    ")]):t._e()]}}]),model:{value:t.filter.discounts,callback:function(e){t.$set(t.filter,"discounts",e)},expression:"filter.discounts"}}),t._v(" "),s("v-autocomplete",{attrs:{items:t.status,label:"Select Status",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){var r=e.item,n=e.index;return[n<5?s("v-chip",[s("span",[t._v(t._s(r))])]):t._e(),t._v(" "),5===n?s("span",{staticClass:"grey--text text-caption"},[t._v("\n                                        (+"+t._s(t.filter.status.length-5)+" others)\n                                    ")]):t._e()]}}]),model:{value:t.filter.status,callback:function(e){t.$set(t.filter,"status",e)},expression:"filter.status"}}),t._v(" "),s("div",{staticClass:"text-right mb-6 mr-4"},[s("v-btn",{staticClass:"text-none success",attrs:{loading:t.loading,disabled:0===t.filter.discounts.length||null==t.filter.status},on:{click:t.filterRecord}},[t._v("\n                                    Filter Record\n                                ")])],1)],1)],1)],1)],1),t._v(" "),s("v-divider",{staticClass:"mt-2"}),t._v(" "),s("v-card",{staticClass:"mt-2"},[s("v-card-title",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{icon:"",text:"",fab:""},on:{click:t.exportExcel}},[s("v-icon",[t._v("mdi-cloud-download")])],1),t._v(" "),s("v-btn",{attrs:{icon:"",text:"",fab:""},on:{click:t.printReport}},[s("v-icon",[t._v("mdi-cloud-print")])],1)],1),t._v(" "),s("v-card-text",{attrs:{id:"export"}},[s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-center",attrs:{colspan:"6"}},[s("h3",[t._v("Discounts")])])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{colspan:"6"}},[s("h4",[t._v(" "+t._s(t.dateRangeText)+" ")])])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center"},[t._v("Student")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v("Product")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v("Discount")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v("Total")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v("Date")])])]),t._v(" "),s("tbody",t._l(t.reports.discounts,(function(e,r){return s("tr",{key:t.u=r},[s("th",{staticClass:"text-center"},[t._v(" "+t._s(t._f("toUpper")(e.item.student.firstName))+" "+t._s(t._f("toUpper")(e.item.student.familyName))+" ")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v(" "+t._s(t._f("toUpper")(e.item.productName))+" ")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v(" "+t._s(t._f("toUpper")(e.item.status))+" ")]),t._v(" "),s("th",{staticClass:"text-center"},t._l(e.item.discounts,(function(e,r){return s("p",{key:r},[t._v(t._s(e.name)+" - "+t._s(t._f("currency")(e.value)))])})),0),t._v(" "),s("th",{staticClass:"text-center"},[t._v(" "+t._s(t._f("currency")(e.item.total_price))+" ")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v(" "+t._s(t._f("date")(e.updated_at))+" ")])])})),0)]},proxy:!0}])}),t._v(" "),s("br")],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);