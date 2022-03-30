"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6472],{6472:(t,e,o)=>{o.r(e),o.d(e,{default:()=>s});var n=o(629);function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){c(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const i={name:"productView",created:function(){var t=parseInt(this.$route.query.page),e={search:null,type:null,page:t,perPage:20};this.PRODUCT_FILTER(e),this.XERO_GET_CHART_OF_ACCOUNT({type:"Sales"}),this.paginate(t)},data:function(){return{search:null,type:null,headers:[{text:"Image",value:"image",align:"center",sortable:!1,width:"15%"},{text:"Name",value:"name",align:"left",sortable:!1,width:"45%"},{text:"Type",value:"type",align:"left",sortable:!1,width:"10%"},{text:"Visible",value:"visible",align:"left",sortable:!1,width:"5%"},{text:"",value:"action",align:"center",sortable:!1,width:"15%"}],openXero:!1,accessProduct:null,code:null}},methods:a(a(a({},(0,n.nv)(["PRODUCTS","PRODUCT_CHANGE_VISIBLE","XERO_GET_CHART_OF_ACCOUNT","XERO_GET_CODE","XERO_SAVE"])),(0,n.OI)(["PRODUCT_LOADING","PRODUCT_FILTER"])),{},{paginate:function(t){var e=Object.keys(this.$route.query).length>0?t:1;this.$router.replace({query:{page:e}}).catch((function(t){"NavigationDuplicated"===t.name||t.message.includes("Avoided redundant navigation to current location")||console.log(t)})),this.PRODUCT_LOADING(!0);var o={search:this.search,type:this.type,page:e,perPage:20};this.PRODUCT_FILTER(o),this.PRODUCTS(this.product.filter)},changeVisible:function(t){this.PRODUCT_CHANGE_VISIBLE({item:t})},newItem:function(){this.$router.push({name:"ProductAdd"})},searchProduct:function(){this.paginate(1)},selectedType:function(t){this.type=t,this.paginate(1)},view:function(t){var e=this.$router.resolve("/".concat(t.type,"/").concat(t.slug,"/pdo/").concat(t.pdo.id));window.open(e.href,"_blank")},goEdit:function(t){var e=this.$router.resolve("/auth/products/edit/".concat(t.slug));window.open(e.href)},copyItem:function(t){var e=this.$router.resolve("/auth/products/copy/".concat(t.slug));window.open(e.href)},xeroCode:function(t){var e=this;this.accessProduct=t,this.XERO_GET_CODE({id:t.id}).then((function(t){e.openXero=!0,e.code=t.data||{chart_of_account_id:0}}))},saveXero:function(){var t=this;this.XERO_SAVE({product_id:this.accessProduct.id,chart_of_account_id:this.code.chart_of_account_id}).then((function(e){t.closeXero()}))},closeXero:function(){this.accessProduct=null,this.code=null,this.openXero=!1}}),computed:a({},(0,n.rn)(["product","productTypes","xero"])),metaInfo:function(){return{title:"StepUp Academy",titleTemplate:"%s - Products",htmlAttrs:{lang:"en"}}}};const s=(0,o(1900).Z)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"py-8 px-6",attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-card",{attrs:{flat:""}},[o("v-card-title",[o("v-subheader",{staticClass:"text-h6 font-weight-bold"},[t._v("Products")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"primary",on:{click:t.newItem}},[t._v("\n                        Create Product\n                    ")])],1),t._v(" "),o("v-card",[o("v-data-table",{attrs:{headers:t.headers,items:t.product.products.data,"items-per-page":20,loading:t.product.loading,"server-items-length":t.product.products.total,"footer-props":{"items-per-page-options":[5,10,20],"items-per-page-text":"Categories per page","show-current-page":!0,"show-first-last-page":!0},"mobile-breakpoint":200,"hide-default-footer":"","no-results-text":"product not found"},on:{"click:row":t.goEdit},scopedSlots:t._u([{key:"item.image",fn:function(e){var n=e.item;return[n.image?o("v-avatar",{attrs:{size:"150",tile:""}},[o("v-img",{attrs:{src:"/"+n.image.link,"lazy-src":"/"+n.image.link_res,name:n.image.name,alt:n.image.alt,contain:""}})],1):t._e()]}},{key:"item.name",fn:function(e){var o=e.item;return[t._v("\n                            "+t._s(t._f("toUpper")(o.name))+"\n                        ")]}},{key:"item.type",fn:function(e){var o=e.item;return[t._v("\n                            "+t._s(o.type)+"\n                        ")]}},{key:"item.visible",fn:function(e){var n=e.item;return[o("v-checkbox",{on:{click:function(e){return e.stopPropagation(),t.changeVisible(n)}},model:{value:n.isVisible,callback:function(e){t.$set(n,"isVisible",e)},expression:"item.isVisible"}})]}},{key:"item.soos",fn:function(e){var n=e.item;return[o("v-checkbox",{attrs:{readonly:""},model:{value:n.soos,callback:function(e){t.$set(n,"soos",e)},expression:"item.soos"}})]}},{key:"no-data",fn:function(){return[t._v("\n                            No Available Product "),o("v-btn",{staticClass:"primary",attrs:{small:""},on:{click:t.newItem}},[t._v("Create")])]},proxy:!0},{key:"item.action",fn:function(e){var n=e.item;return[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return["Uniforms"==n.type&&n.pdo?o("v-btn",t._g(t._b({staticClass:"primary",attrs:{icon:"",dark:""},on:{click:function(e){return e.stopPropagation(),t.view(n)}}},"v-btn",a,!1),r),[o("v-icon",{attrs:{color:"white",dark:""}},[t._v("\n                                        mdi-eye-outline\n                                        ")])],1):t._e()]}}],null,!0)},[t._v(" "),o("span",[t._v("View "+t._s(t._f("toUpper")(n.name)))])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",dark:""},on:{click:function(e){return e.stopPropagation(),t.copyItem(n)}}},"v-btn",a,!1),r),[o("v-icon",{attrs:{color:"primary",dark:""}},[t._v("\n                                        mdi-content-copy\n                                        ")])],1)]}}],null,!0)},[t._v(" "),o("span",[t._v("Copy "+t._s(t._f("toUpper")(n.name)))])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",dark:""},on:{click:function(e){return e.stopPropagation(),t.xeroCode(n)}}},"v-btn",a,!1),r),[o("v-icon",{attrs:{color:"primary",dark:""}},[t._v("\n                                        mdi-cloud-sync\n                                        ")])],1)]}}],null,!0)},[t._v(" "),o("span",[t._v("Set xero code for "+t._s(t._f("toUpper")(n.name)))])])]}},{key:"top",fn:function(){return[o("v-row",[o("v-col",{attrs:{cols:"12",md:"8"}},[o("v-text-field",{attrs:{label:"search",solo:"",clearable:""},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchProduct.apply(null,arguments)}},scopedSlots:t._u([{key:"append",fn:function(){return[o("v-btn",{attrs:{icon:""},on:{click:t.searchProduct}},[o("v-icon",{attrs:{left:""}},[t._v("\n                                                mdi-magnify\n                                                ")])],1)]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-select",{attrs:{solo:"",items:t.productTypes},on:{change:t.selectedType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)],1)]},proxy:!0}])})],1),t._v(" "),o("v-pagination",{attrs:{length:t.product.products.last_page},on:{input:t.paginate},model:{value:t.product.filter.page,callback:function(e){t.$set(t.product.filter,"page",e)},expression:"product.filter.page"}})],1)],1)],1),t._v(" "),t.openXero?o("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.openXero,callback:function(e){t.openXero=e},expression:"openXero"}},[o("v-card",[o("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[o("v-toolbar-title",[t._v("\n                    "+t._s(t.accessProduct.name)+"\n                ")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{text:"",icon:""},on:{click:t.closeXero}},[o("v-icon",[t._v("\n                        mdi-close\n                    ")])],1)],1),t._v(" "),o("v-card-text",[o("v-autocomplete",{attrs:{items:t.xero.charts,"item-text":"name","item-value":"id"},model:{value:t.code.chart_of_account_id,callback:function(e){t.$set(t.code,"chart_of_account_id",e)},expression:"code.chart_of_account_id"}})],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"text-none success",on:{click:t.saveXero}},[t._v("\n                    Save\n                ")])],1)],1)],1):t._e()],1)}),[],!1,null,null,null).exports}}]);