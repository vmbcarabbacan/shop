"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6784],{6784:(t,e,r)=>{r.r(e),r.d(e,{default:()=>c});var o=r(629);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const n={name:"studioAdd",created:function(){this.STUDIO({id:0,name:null,color:"#17DFF7"})},data:function(){return{valid:!1}},methods:i(i(i({},(0,o.OI)(["STUDIO"])),(0,o.nv)(["STUDIO_SAVE"])),{},{save:function(){var t={id:this.studio.studio.id,name:this.studio.studio.name,color:this.studio.studio.color};this.STUDIO_SAVE(t)}}),computed:i({},(0,o.rn)(["studio"]))};const c=(0,r(1900).Z)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{justify:"center",align:"start"}},[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-card",[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[r("router-link",{staticClass:"text-caption",attrs:{to:{name:"StudioView"}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-arrow-left")]),t._v(" Go back")],1),t._v(" "),r("br"),t._v(" Add Studio\n                    ")],1)],1),t._v(" "),r("v-card-text",[r("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.studio.message,expression:"studio.message"}],attrs:{type:"success"}},[t._v("\n                    "+t._s(t.studio.message)+"\n                    ")]),t._v(" "),r("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.studio.error,expression:"studio.error"}],attrs:{type:"error"}},[t._v("\n                    "+t._s(t.studio.error)+"\n                    ")]),t._v(" "),r("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{label:"Name",rules:[function(t){return!!t||"name is required"}]},model:{value:t.studio.studio.name,callback:function(e){t.$set(t.studio.studio,"name",e)},expression:"studio.studio.name"}}),t._v(" "),r("v-color-picker",{staticClass:"ma-2",attrs:{"canvas-height":"300"},model:{value:t.studio.studio.color,callback:function(e){t.$set(t.studio.studio,"color",e)},expression:"studio.studio.color"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"text-none primary",attrs:{loading:t.studio.loading,disabled:!t.valid},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);