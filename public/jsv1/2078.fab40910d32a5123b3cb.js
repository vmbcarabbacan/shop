"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2078],{2078:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var a=n(629);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const o={name:"samsParents",components:{myChild:function(){return n.e(932).then(n.bind(n,932))}},data:function(){return{search:null,headers:[{text:"Name",value:"fullName",align:"left",sortable:!1,width:"50%"},{text:"Contact Number",value:"contact",align:"left",sortable:!1,width:"40%"},{text:"",value:"action",align:"left",sortable:!1,width:"10%"}],type:"Name",types:["Name","Email","Number"],page:1,openTransaction:!1,openTransactionItem:!1,user_id:null,isCredit:!1,parent_id:null,open:!1}},created:function(){var t=parseInt(this.$route.query.page),e={page:t,perPage:20,search:null,role:this.$route.params.role};this.SAMS_PARENT_FILTER(e),this.paginate(t)},methods:i(i(i({},(0,a.nv)(["SAMS_PARENTS","SAMS_VERIFY_EMAIL","SAMS_PARENT_DELETE","SALES","SALE","SAMS_GET_PARENT_CREDITS","SAMS_UPDATE_PARENT_CREDITS","SAMS_PARENT_CHILDREN"])),(0,a.OI)(["SAMS_PARENT_FILTER","SAMS_PARENT_EDIT","SALES_M","SALE_M","SAMS_PARENT_CREDITS","SAMS_PARENT_CHILDREN_M"])),{},{getNumber:function(t){return t.length>9?t.slice(t.length-9):t},paginate:function(t){var e=Object.keys(this.$route.query).length>0?t:1;this.$router.replace({query:{page:e}}).catch((function(t){"NavigationDuplicated"===t.name||t.message.includes("Avoided redundant navigation to current location")||console.log(t)}));var n={page:e,perPage:20,search:this.search,role:this.$route.params.role,filter:this.type};this.SAMS_PARENT_FILTER(n),this.SAMS_PARENTS(n)},viewChild:function(t){this.SAMS_PARENT_CHILDREN_M([]),this.SAMS_PARENT_CHILDREN({id:t.id}),this.closeViewChild()},closeViewChild:function(){this.open=!this.open},searchParent:function(){this.paginate(1)},goEdit:function(t){var e=this,n={email:t.email};this.SAMS_VERIFY_EMAIL(n).then((function(t){e.SAMS_PARENT_EDIT(!0),e.$router.push({name:"ParentModal",params:{role:"User"}})}))},deleteItem:function(t){this.SAMS_PARENT_DELETE({id:t.id})},viewHistory:function(t){this.user_id=t.id,this.historyPaginate(1)},addCredit:function(t){var e=this;this.parent_id=t.id,this.SAMS_GET_PARENT_CREDITS({id:t.id}).then((function(t){e.isCredit=!0}))},submitCredit:function(){var t=this;this.SAMS_UPDATE_PARENT_CREDITS({id:this.parent_id,value:this.sams.credits}).then((function(e){t.closeCredit()}))},historyPaginate:function(t){var e=this;this.SALES({page:t,search:this.user_id,type:"User ID",perPage:20}).then((function(t){e.openTransaction=!0}))},checkSaleById:function(t){var e=this;this.SALE({id:t}).then((function(t){e.openTransactionItem=!0}))},closeCredit:function(){this.SAMS_PARENT_CREDITS(null),this.isCredit=!1,this.parent_id=null},closeTransaction:function(){this.SALES_M([]),this.openTransaction=!1},closeTransactionItem:function(){this.SALE_M({mom:{},payment:[],item:[],total:{},address:null,notes:null,telr:null,pay:[]}),this.openTransactionItem=!1},createItem:function(){this.SAMS_PARENT_EDIT(!1),this.$router.push({name:"ParentModal",params:{role:"User"}})}}),computed:i({},(0,a.rn)(["sams","sales"]))};const c=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("v-data-table",{attrs:{headers:t.headers,items:t.sams.parents.data,"items-per-page":20,loading:t.sams.loading,"server-items-length":t.sams.parents.total,"mobile-breakpoint":200,"hide-default-footer":"","no-results-text":"Currently no customer"},on:{"click:row":t.goEdit},scopedSlots:t._u([{key:"item.fullName",fn:function(e){var n=e.item;return[t._v("\n                        "+t._s(t._f("toUpper")(n.fullName))+"\n                    ")]}},{key:"item.contact",fn:function(e){var n=e.item;return[t._v("\n                        +971"+t._s(t.getNumber(n.contact))+"\n                    ")]}},{key:"item.action",fn:function(e){var a=e.item;return[n("v-icon",{on:{click:function(e){return e.stopPropagation(),t.viewHistory(a)}}},[t._v("mdi-receipt")]),t._v(" "),n("v-icon",{on:{click:function(e){return e.stopPropagation(),t.addCredit(a)}}},[t._v("mdi-credit-card-plus")]),t._v(" "),n("v-icon",{on:{click:function(e){return e.stopPropagation(),t.viewChild(a)}}},[t._v("mdi-eye")]),t._v(" "),n("v-icon",{on:{click:function(e){return e.stopPropagation(),t.deleteItem(a)}}},[t._v("mdi-close")])]}},{key:"top",fn:function(){return[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{label:"search",solo:"",clearable:""},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchParent.apply(null,arguments)},"click:clear":t.searchParent},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-btn",{attrs:{icon:""},on:{click:t.searchParent}},[n("v-icon",{attrs:{left:""}},[t._v("\n                                                mdi-magnify\n                                                ")])],1)]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-select",{attrs:{items:t.types,solo:""},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-btn",{staticClass:"primary text-none",attrs:{block:"",large:""},on:{click:t.createItem}},[t._v("Create New")])],1)],1)]},proxy:!0}])})],1),t._v(" "),n("v-pagination",{attrs:{length:t.sams.parents.last_page},on:{input:t.paginate},model:{value:t.sams.parentFilter.page,callback:function(e){t.$set(t.sams.parentFilter,"page",e)},expression:"sams.parentFilter.page"}}),t._v(" "),n("v-navigation-drawer",{attrs:{app:"",fixed:"",absolute:"",temporary:"",right:"",width:"500"},model:{value:t.openTransaction,callback:function(e){t.openTransaction=e},expression:"openTransaction"}},[n("v-card",[n("v-card-text",[n("v-simple-table",{attrs:{"fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("\n                                    Transaction#\n                                ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n                                    Status\n                                ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n                                    Total\n                                ")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("\n                                    Date\n                                ")]),t._v(" "),n("th",{staticClass:"text-left"})])]),t._v(" "),n("tbody",t._l(t.sales.sales.data,(function(e,a){return n("tr",{key:a,style:"background-color: #"+("Completed"==e.status?"00cc00":"ff0000")+"; color: #fff"},[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.status))]),t._v(" "),n("td",[t._v(t._s(e.total))]),t._v(" "),n("td",[t._v(t._s(t._f("dateAndTime")(e.purchase_date)))]),t._v(" "),n("td",[n("v-icon",{attrs:{dark:""},on:{click:function(n){return t.checkSaleById(e.id)}}},[t._v("\n                                        mdi-magnify\n                                    ")])],1)])})),0)]},proxy:!0}])})],1)],1),t._v(" "),n("div",{staticClass:"text-center"},[n("v-pagination",{attrs:{length:t.sales.sales.last_page,circle:""},on:{input:t.historyPaginate},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1),t._v(" "),n("v-bottom-sheet",{attrs:{"hide-overlay":"",scrollable:""},on:{"click:outside":t.closeTransactionItem},model:{value:t.openTransactionItem,callback:function(e){t.openTransactionItem=e},expression:"openTransactionItem"}},[n("v-simple-table",{attrs:{width:"100%","fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left",attrs:{width:"60%"}},[n("p",{staticClass:"font-weight-bold red--text"},[t._v("Transacction# "+t._s(t.sales.sale.id)+" - "+t._s(t.sales.sale.status))])]),t._v(" "),n("th",{staticClass:"text-right",attrs:{width:"40%"}},[t._v("\n                                    Total\n                                ")])])]),t._v(" "),n("tbody",t._l(t.sales.sale.item,(function(e,a){return n("tr",{key:a},[n("td",[n("span",{staticClass:"text-subtitle-1 font-weight-bold black--text"},[t._v(t._s(t._f("toUpper")(e.item.productName))+" - "),n("span",{staticClass:"text-caption font-weight-thin"},[t._v(t._s(t._f("toUpper")(e.item.pdoName)))])]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"text-caption"},[t._v(t._s(t._f("toUpper")(e.type)))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"text-caption",attrs:{for:"quantity"}},[t._v("Qty: "+t._s(e.item.quantity))]),t._v(" "),n("br"),t._v(" "),n("a",{staticClass:"text-caption font-weight-black",attrs:{href:"/auth/sams/students/modal/"+e.item.student.id}},[t._v(" Student: "+t._s(t._f("toUpper")(e.item.student.firstName))+" "+t._s(t._f("toUpper")(e.item.student.familyName))+" ")])]),t._v(" "),n("td",[n("p",{staticClass:"red--text text-right font-weight-bold"},[t._v(t._s(t._f("currency")(e.item.total_price)))])])])})),0)]},proxy:!0}])})],1),t._v(" "),n("v-dialog",{attrs:{width:"300",persistent:""},on:{"click:outside":t.closeCredit},model:{value:t.isCredit,callback:function(e){t.isCredit=e},expression:"isCredit"}},[n("v-card",[n("v-toolbar",{attrs:{flat:"",dark:"",color:"success"}},[n("v-toolbar-title",[t._v("\n                            Add Credit\n                        ")])],1),t._v(" "),n("v-card-text",[n("v-text-field",{attrs:{label:"Current Credit",type:"number"},model:{value:t.sams.credits,callback:function(e){t.$set(t.sams,"credits",t._n(e))},expression:"sams.credits"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"text-none success",on:{click:t.submitCredit}},[t._v("Add")])],1)],1)],1),t._v(" "),t.open?n("myChild",{attrs:{open:t.open},on:{closeModal:t.closeViewChild}}):t._e()],1)],1)],1)}),[],!1,null,null,null).exports}}]);