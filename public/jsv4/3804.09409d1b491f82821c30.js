"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3804],{3804:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(629);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i={name:"termsAndConditions",data:function(){return{search:null,headers:[{text:"Name",value:"name",align:"left"},{text:"",value:"isShow",align:"left"}]}},created:function(){this.search=null;var e=parseInt(this.$route.query.page),t={search:this.search,page:e,perPage:20};this.FORM_FILTER_M(t),this.paginate(e)},methods:o(o(o({},(0,n.nv)(["FORMS","FORM_SAVE"])),(0,n.OI)(["FORM_FILTER_M"])),{},{paginate:function(e){var t=Object.keys(this.$route.query).length>0?e:1;this.$router.replace({query:{page:t}}).catch((function(e){"NavigationDuplicated"===e.name||e.message.includes("Avoided redundant navigation to current location")||console.log(e)}));var r={search:this.search,page:t,perPage:20};this.FORM_FILTER_M(r),this.FORMS(r)},searchForm:function(){this.paginate(1)},changeVisible:function(e){this.FORM_SAVE(e)},newItem:function(){this.$router.push({name:"TermsAndConditionsModal",params:{slug:0,type:"New"}})},goEdit:function(e){this.$router.push({name:"TermsAndConditionsModal",params:{slug:e.slug,type:"Edit"}})}}),computed:o({},(0,n.rn)(["form"]))};const c=(0,r(1900).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"py-8 px-6",attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{flat:""}},[r("v-card-title",[r("v-subheader",{staticClass:"text-h6 font-weight-bold"},[e._v("Forms")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"primary",on:{click:e.newItem}},[e._v("\n                        Create Form\n                    ")])],1),e._v(" "),r("v-card",[r("v-data-table",{attrs:{headers:e.headers,items:e.form.forms.data,"items-per-page":20,loading:e.form.loading,"server-items-length":e.form.forms.total,"footer-props":{"items-per-page-options":[5,10,20],"items-per-page-text":"Categories per page","show-current-page":!0,"show-first-last-page":!0},"mobile-breakpoint":200,"hide-default-footer":"","no-results-text":"form not found"},on:{"click:row":e.goEdit},scopedSlots:e._u([{key:"item.name",fn:function(t){var r=t.item;return[e._v("\n                            "+e._s(e._f("toUpper")(r.name))+"\n                        ")]}},{key:"item.isShow",fn:function(t){var n=t.item;return[r("v-checkbox",{on:{click:function(t){return t.stopPropagation(),e.changeVisible(n)}},model:{value:n.isShow,callback:function(t){e.$set(n,"isShow",t)},expression:"item.isShow"}})]}},{key:"no-data",fn:function(){return[e._v("\n                            No Available Form "),r("v-btn",{staticClass:"primary",attrs:{small:""},on:{click:e.newItem}},[e._v("Create")])]},proxy:!0},{key:"item.action",fn:function(e){e.item}},{key:"top",fn:function(){return[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"search",solo:"",clearable:""},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchForm.apply(null,arguments)},"click:clear":e.searchForm},scopedSlots:e._u([{key:"append",fn:function(){return[r("v-btn",{attrs:{icon:""},on:{click:e.searchForm}},[r("v-icon",{attrs:{left:""}},[e._v("\n                                                mdi-magnify\n                                                ")])],1)]},proxy:!0}]),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)]},proxy:!0}])})],1),e._v(" "),r("v-pagination",{attrs:{length:e.form.forms.last_page},on:{input:e.paginate},model:{value:e.form.filter.page,callback:function(t){e.$set(e.form.filter,"page",t)},expression:"form.filter.page"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);