"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2797],{2139:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(3645),s=r.n(n)()((function(t){return t[1]}));s.push([t.id,".v-input[data-v-08db4e55] .v-input--selection-controls__input{display:none}.v-input.modified.v-input--is-label-active[data-v-08db4e55]{background-color:aqua;margin:10px}.v-avatar[data-v-08db4e55]{align-items:center;border-radius:50%;justify-content:center;line-height:normal;margin:5px;overflow:hidden;padding:5px;position:relative;text-align:center;vertical-align:middle}",""]);const o=s},2797:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(629);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const a={name:"productRelatedLessons",methods:o(o(o({},(0,n.OI)(["PRODUCT_LESSON_OPEN","PRODUCT_FILTER"])),(0,n.nv)(["PRODUCTS","PRODUCT_RELATED_LESSONS_FILTER_BY_IDS"])),{},{paginate:function(t){var e={search:null,type:"Uniforms",page:t,perPage:20};this.PRODUCT_FILTER(e),this.PRODUCTS(this.product.filter)},close:function(){this.PRODUCT_LESSON_OPEN(!1)},selectedUniforms:function(){var t={ids:this.product.product.relatedLessons};this.PRODUCT_RELATED_LESSONS_FILTER_BY_IDS(t),this.close()}}),computed:o(o({},(0,n.rn)(["product"])),{},{selected:{get:function(){return this.product.product.relatedLessons},set:function(t){this.product.product.relatedLessons=t}}})};var i=r(3379),l=r.n(i),d=r(2139),u={insert:"head",singleton:!1};l()(d.Z,u);d.Z.locals;const p=(0,r(1900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{width:"800"},on:{"click:outside":t.close},model:{value:t.product.openLessons,callback:function(e){t.$set(t.product,"openLessons",e)},expression:"product.openLessons"}},[r("v-card",[r("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[r("v-toolbar-title",[t._v("\n                Select Related Lessons\n            ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-icon",{on:{click:t.close}},[t._v("\n                mdi-close\n            ")])],1),t._v(" "),r("v-card-text",[r("v-row",{attrs:{justify:"start"}},t._l(t.product.products.data,(function(e){return r("v-checkbox",{key:e.id,staticClass:"modified",attrs:{value:e.id},scopedSlots:t._u([{key:"label",fn:function(){return[r("v-avatar",{staticClass:"modified",attrs:{size:"200",tile:""}},[r("v-img",{attrs:{src:"/"+e.image.link,"lazy-src":"/"+e.image.link_res,alt:e.image.alt,contain:""}},[r("v-sheet",{attrs:{height:"100%",width:"100%",color:"transparent"}},[r("v-container",[r("v-row",{attrs:{align:"end",justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("p",{staticClass:"red--text"},[t._v(t._s(e.name))])])],1)],1)],1)],1)],1)]},proxy:!0}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})})),1)],1),t._v(" "),r("v-card-actions",[r("v-pagination",{attrs:{length:t.product.products.last_page},on:{input:t.paginate},model:{value:t.product.products.current_page,callback:function(e){t.$set(t.product.products,"current_page",e)},expression:"product.products.current_page"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"text-none primary",on:{click:t.selectedUniforms}},[t._v("\n                Selected Uniforms("+t._s(t.product.product.relatedLessons.length)+")\n            ")])],1)],1)],1)}),[],!1,null,"08db4e55",null).exports}}]);