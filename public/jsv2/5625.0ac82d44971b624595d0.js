"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5625],{2462:(t,e,r)=>{r.d(e,{Z:()=>o});var s=r(3645),a=r.n(s)()((function(t){return t[1]}));a.push([t.id,".v-text-field.v-text-field--enclosed[data-v-0df96286]{margin:0;padding:0}.v-input--selection-controls[data-v-0df96286]{margin:-15px 0 0;padding:0}.slide-fade-enter-active[data-v-0df96286]{transition:all .3s ease}.slide-fade-leave-active[data-v-0df96286]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-0df96286],.slide-fade-leave-to[data-v-0df96286]{opacity:0;transform:translateX(10px)}",""]);const o=a},5625:(t,e,r)=>{r.r(e),r.d(e,{default:()=>v});var s=r(629);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const i={name:"authProductAdd",components:{productImage:function(){return r.e(2392).then(r.bind(r,2392))},productRelatedUniforms:function(){return r.e(9720).then(r.bind(r,9720))},productRelatedLessons:function(){return r.e(2797).then(r.bind(r,2797))},categoryModal:function(){return r.e(1806).then(r.bind(r,1806))}},created:function(){var t={slug:this.$route.params.slug};this.PRODUCT_FILTER_BY_SLUG(t),this.PRODUCT_SUCCESS(null),this.PRODUCT_ERROR(null)},data:function(){return{success:null,valid:!1,status:[{text:"Draft",value:0},{text:"Publish",value:1}],soos:[{text:"No",value:0},{text:"Yes",value:1}]}},methods:o(o(o({},(0,s.nv)(["IMAGES","CATEGORY_FILTER_BY_TYPE","PRODUCT_UPDATE","PRODUCT_FILTER_BY_SLUG","PRODUCTS"])),(0,s.OI)(["IMAGE_OPEN","CATEGORY_FORM","CATEGORY_OPEN","PRODUCT","IMAGE_FILTER","PRODUCT_SUCCESS","PRODUCT_ERROR","PRODUCT_FILTER","PRODUCT_UNIFORM_OPEN","PRODUCT_LESSON_OPEN"])),{},{openMedia:function(){this.IMAGE_OPEN(!0);this.IMAGE_FILTER({page:1,perPage:20}),this.IMAGES(this.image.filter)},selectedType:function(t){var e={type:t};this.CATEGORY_FILTER_BY_TYPE(e)},createCategory:function(){this.CATEGORY_FORM({id:0,name:null,type:"Uniforms"}),this.CATEGORY_OPEN(!0)},addVariant:function(){this.product.product.variants.push({id:0,name:null,quantity:0,price:0,isVisible:1})},saveProduct:function(){var t={form:this.product.product};this.PRODUCT_UPDATE(t)},openUniforms:function(){this.PRODUCT_FILTER({search:null,type:"Uniforms",page:1,perPage:20}),this.PRODUCTS(this.product.filter),this.PRODUCT_UNIFORM_OPEN(!0)},openLessons:function(){this.PRODUCT_FILTER({search:null,type:"Lessons",page:1,perPage:20}),this.PRODUCTS(this.product.filter),this.PRODUCT_LESSON_OPEN(!0)}}),computed:o({},(0,s.rn)(["image","categories","product","types"]))};var n=r(3379),d=r.n(n),l=r(2462),u={insert:"head",singleton:!1};d()(l.Z,u);l.Z.locals;const v=(0,r(1900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"py-8 px-6",attrs:{fluid:""}},[r("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("div",[r("transition",{attrs:{name:"slide-fade"}},[r("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.product.success,expression:"product.success"}],attrs:{border:"left",type:"success"}},[t._v("\n                    "+t._s(t.product.success)+"\n                ")])],1),t._v(" "),r("transition",{attrs:{name:"slide-fade"}},[r("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.product.error,expression:"product.error"}],attrs:{border:"left",type:"error"}},[t._v("\n                    "+t._s(t.product.error)+"\n                ")])],1)],1),t._v(" "),Object.keys(t.product.product).length>0?r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-row",[t.$vuetify.breakpoint.smAndDown?r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("router-link",{staticClass:"text-caption blackk--text",attrs:{to:{name:"ProductView"}}},[r("v-icon",{attrs:{"x-small":""}},[t._v("mdi-arrow-left")]),t._v(" Go back to view\n                            ")],1),t._v(" "),r("v-card-title",[r("v-subheader",{staticClass:"text-h6"},[t._v("Status")])],1),t._v(" "),r("v-card-text",[r("v-select",{attrs:{solo:"",items:t.status},model:{value:t.product.product.isVisible,callback:function(e){t.$set(t.product.product,"isVisible",e)},expression:"product.product.isVisible"}})],1),t._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"text-none success",attrs:{block:"",disabled:!t.valid,loading:t.product.loading},on:{click:t.saveProduct}},[t._v("\n                                    Save Product\n                                ")])],1)],1)],1):t._e(),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-card",[t.$vuetify.breakpoint.mdAndUp?r("router-link",{staticClass:"text-caption blackk--text",attrs:{to:{name:"ProductView"}}},[r("v-icon",{attrs:{"x-small":""}},[t._v("mdi-arrow-left")]),t._v(" Go back to view\n                            ")],1):t._e(),t._v(" "),r("v-card-title",[r("v-subheader",{staticClass:"text-h6"},[t._v("Title")]),t._v(" "),Object.keys(t.product.product).length>0&&"Uniforms"==t.product.product.type&&t.product.product.pdo?r("a",{staticClass:"text-caption black--text",attrs:{href:"/"+t.product.product.type+"/"+t.product.product.slug+"/pdo/"+t.product.product.pdo.id,target:"_blank"}},[r("v-icon",[t._v(" mdi-eye ")])],1):t._e()],1),t._v(" "),r("v-card-text",[r("v-text-field",{attrs:{label:"Product Name",rules:[function(t){return!!t||"Product name is required"}],solo:""},model:{value:t.product.product.name,callback:function(e){t.$set(t.product.product,"name",e)},expression:"product.product.name"}}),t._v(" "),r("quill-editor",{ref:"myQuillEditor",model:{value:t.product.product.body,callback:function(e){t.$set(t.product.product,"body",e)},expression:"product.product.body"}})],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",[r("v-subheader",{staticClass:"text-h6"},[t._v("Media")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"primary",on:{click:t.openMedia}},[t._v("Add media")]),t._v(" "),r("productImage")],1),t._v(" "),r("v-card-text",[r("v-row",t._l(t.product.product.images,(function(t,e){return r("v-col",{key:e,attrs:{cols:"12",md:"3"}},[r("v-img",{attrs:{width:"100%",src:"/"+t.link,"lazy-src":"/"+t.link_res,name:t.name,alt:t.alt}})],1)})),1)],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",[r("v-subheader",{staticClass:"text-h6"},[t._v("Variant")])],1),t._v(" "),r("v-card-text",t._l(t.product.product.variants,(function(e,s){return r("v-row",{key:s},[r("v-col",{attrs:{cols:"12",md:"5"}},[r("v-text-field",{attrs:{label:"Name "+(s+1)},model:{value:e.name,callback:function(r){t.$set(e,"name",r)},expression:"variant.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"2"}},[r("v-text-field",{attrs:{label:"Quantity "+(s+1),type:"number"},model:{value:e.quantity,callback:function(r){t.$set(e,"quantity",t._n(r))},expression:"variant.quantity"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"2"}},[r("v-text-field",{attrs:{label:"Price "+(s+1),type:"number"},model:{value:e.price,callback:function(r){t.$set(e,"price",t._n(r))},expression:"variant.price"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"2"}},[r("v-checkbox",{staticClass:"mt-6",attrs:{label:"Visible "+(s+1)},model:{value:e.isVisible,callback:function(r){t.$set(e,"isVisible",t._n(r))},expression:"variant.isVisible"}})],1)],1)})),1),t._v(" "),r("v-card-text",[r("div",{staticClass:"text-center"},[r("v-btn",{staticClass:"text-none primary",on:{click:t.addVariant}},[t._v("\n                                        Add Variant\n                                    ")])],1)])],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",[r("v-subheader",{staticClass:"text-h6"},[t._v("Related Uniforms")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"primary",on:{click:t.openUniforms}},[t._v("Add")]),t._v(" "),r("productRelatedUniforms")],1),t._v(" "),r("v-card-text",[r("v-row",t._l(t.product.product.relatedUniformsValue,(function(t,e){return r("v-col",{key:e,attrs:{cols:"12",md:"3"}},[r("v-img",{attrs:{width:"100%",src:"/"+t.image.link,"lazy-src":"/"+t.image.link_res,name:t.image.name,alt:t.image.alt}})],1)})),1)],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",[r("v-subheader",{staticClass:"text-h6"},[t._v("Related Lessons")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"primary",on:{click:t.openLessons}},[t._v("Add")]),t._v(" "),r("productRelatedLessons")],1),t._v(" "),r("v-card-text",[r("v-row",t._l(t.product.product.relatedLessonsValue,(function(t,e){return r("v-col",{key:e,attrs:{cols:"12",md:"3"}},[r("v-img",{attrs:{width:"100%",src:"/"+t.image.link,"lazy-src":"/"+t.image.link_res,name:t.image.name,alt:t.image.alt}})],1)})),1)],1)],1)],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",[r("v-subheader",{staticClass:"text-h6"},[t._v("SEO")])],1),t._v(" "),r("v-card-text",[r("v-text-field",{attrs:{label:"Keywords",hint:"Keywords add | per keywords","persistent-hint":""},model:{value:t.product.product.seo.keywords,callback:function(e){t.$set(t.product.product.seo,"keywords",e)},expression:"product.product.seo.keywords"}}),t._v(" "),r("v-textarea",{attrs:{label:"Description",hint:"Description must be atleast 70 words and maximum of 300 words","persistent-hint":""},model:{value:t.product.product.seo.description,callback:function(e){t.$set(t.product.product.seo,"description",e)},expression:"product.product.seo.description"}})],1)],1)],1):t._e()],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-row",[t.$vuetify.breakpoint.mdAndUp?r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",[r("v-subheader",{staticClass:"text-h6"},[t._v("Status")])],1),t._v(" "),r("v-card-text",[r("v-select",{attrs:{solo:"",items:t.status},model:{value:t.product.product.isVisible,callback:function(e){t.$set(t.product.product,"isVisible",e)},expression:"product.product.isVisible"}})],1),t._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"text-none success",attrs:{block:"",disabled:!t.valid,loading:t.product.loading},on:{click:t.saveProduct}},[t._v("\n                                    Save Product\n                                ")])],1)],1)],1):t._e(),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",[r("v-subheader",{staticClass:"text-h6"},[t._v("Type")])],1),t._v(" "),r("v-card-text",[r("v-select",{attrs:{solo:"",items:t.types,readonly:""},on:{change:t.selectedType},model:{value:t.product.product.type,callback:function(e){t.$set(t.product.product,"type",e)},expression:"product.product.type"}})],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",[r("v-subheader",{staticClass:"text-h6"},[t._v("Category")])],1),t._v(" "),t.categories.categoryFiltered.length>0?r("v-card-text",[t._l(t.categories.categoryFiltered,(function(e){return r("v-checkbox",{key:e.id,attrs:{value:e.id},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("\n                                        "+t._s(t._f("toUpper")(e.name))+"\n                                    ")]},proxy:!0}],null,!0),model:{value:t.product.product.categoryIds,callback:function(e){t.$set(t.product.product,"categoryIds",e)},expression:"product.product.categoryIds"}})})),t._v(" "),r("div",{staticClass:"text-center"},[r("v-btn",{staticClass:"success text-none",attrs:{small:""},on:{click:t.createCategory}},[t._v(" Add Category ")])],1)],2):r("v-card-text",[t._v("\n                                Category not available "),r("v-btn",{staticClass:"success text-none",attrs:{small:""},on:{click:t.createCategory}},[t._v(" Create ")])],1),t._v(" "),r("categoryModal")],1)],1),t._v(" "),t.$vuetify.breakpoint.smAndDown?r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",[r("v-subheader",{staticClass:"text-h6"},[t._v("SEO")])],1),t._v(" "),r("v-card-text",[r("v-text-field",{attrs:{label:"Keywords",hint:"Keywords add | per keywords","persistent-hint":""},model:{value:t.product.product.seo.keywords,callback:function(e){t.$set(t.product.product.seo,"keywords",e)},expression:"product.product.seo.keywords"}}),t._v(" "),r("v-textarea",{attrs:{label:"Description",hint:"Description must be atleast 70 words and maximum of 300 words","persistent-hint":""},model:{value:t.product.product.seo.description,callback:function(e){t.$set(t.product.product.seo,"description",e)},expression:"product.product.seo.description"}})],1)],1)],1):t._e()],1)],1)],1):r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-text",[r("p",{staticClass:"text-center"},[t._v("Please wait while getting your data "),r("span",[r("v-progress-circular",{attrs:{width:3,color:"green",indeterminate:""}})],1)])])],1)],1)],1)],1)],1)}),[],!1,null,"0df96286",null).exports}}]);