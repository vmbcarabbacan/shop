"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4698],{4698:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var o=r(629);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l={name:"accountProfile",data:function(){return{valid:!1,loading:!1,openMessage:!1}},methods:i(i({},(0,o.nv)(["REGISTRATION_FORM"])),{},{save:function(){var e=this;this.loading=!0,this.REGISTRATION_FORM({form:this.registration.form,email:this.registration.form.mom.emailAddress,password:null}).then((function(t){e.loading=!1,e.openMessage=!0}))}}),computed:i({},(0,o.rn)(["registration"]))};const n=(0,r(1900).Z)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",{attrs:{justify:"center"}},[r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-col",{attrs:{cols:"10"}},[r("v-card",[r("v-toolbar",{attrs:{flat:"",dark:"",color:"success"}},[r("v-toolbar-title",[e._v("\n                        Mom\n                    ")])],1),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"First Name",rules:[function(e){return!!e||"required"}]},model:{value:e.registration.form.mom.firstName,callback:function(t){e.$set(e.registration.form.mom,"firstName",t)},expression:"registration.form.mom.firstName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Family Name",rules:[function(e){return!!e||"required"}]},model:{value:e.registration.form.mom.familyName,callback:function(t){e.$set(e.registration.form.mom,"familyName",t)},expression:"registration.form.mom.familyName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Email Address",disabled:"",readonly:"",rules:[function(e){return!!e||"required"}]},model:{value:e.registration.form.mom.emailAddress,callback:function(t){e.$set(e.registration.form.mom,"emailAddress",t)},expression:"registration.form.mom.emailAddress"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Contact Number",type:"number",rules:[function(e){return!!e||"required"}]},model:{value:e.registration.form.mom.mobileNumber,callback:function(t){e.$set(e.registration.form.mom,"mobileNumber",t)},expression:"registration.form.mom.mobileNumber"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Nationality",rules:[function(e){return!!e||"required"}]},model:{value:e.registration.form.mom.nationality,callback:function(t){e.$set(e.registration.form.mom,"nationality",t)},expression:"registration.form.mom.nationality"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Company"},model:{value:e.registration.form.mom.company,callback:function(t){e.$set(e.registration.form.mom,"company",t)},expression:"registration.form.mom.company"}})],1)],1)],1)],1)],1),e._v(" "),r("v-col",{attrs:{cols:"10"}},[r("v-card",[r("v-toolbar",{attrs:{flat:"",dark:"",color:"success"}},[r("v-toolbar-title",[e._v("\n                        Dad\n                    ")])],1),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"First Name",rules:[function(e){return!!e||"required"}]},model:{value:e.registration.form.dad.firstName,callback:function(t){e.$set(e.registration.form.dad,"firstName",t)},expression:"registration.form.dad.firstName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Family Name",rules:[function(e){return!!e||"required"}]},model:{value:e.registration.form.dad.familyName,callback:function(t){e.$set(e.registration.form.dad,"familyName",t)},expression:"registration.form.dad.familyName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Email Address",rules:[function(e){return!!e||"required"}]},model:{value:e.registration.form.dad.emailAddress,callback:function(t){e.$set(e.registration.form.dad,"emailAddress",t)},expression:"registration.form.dad.emailAddress"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Contact Number",type:"number",rules:[function(e){return!!e||"required"}]},model:{value:e.registration.form.dad.mobileNumber,callback:function(t){e.$set(e.registration.form.dad,"mobileNumber",t)},expression:"registration.form.dad.mobileNumber"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Nationality",rules:[function(e){return!!e||"required"}]},model:{value:e.registration.form.dad.nationality,callback:function(t){e.$set(e.registration.form.dad,"nationality",t)},expression:"registration.form.dad.nationality"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Company"},model:{value:e.registration.form.dad.company,callback:function(t){e.$set(e.registration.form.dad,"company",t)},expression:"registration.form.dad.company"}})],1)],1)],1)],1)],1),e._v(" "),r("v-col",{attrs:{cols:"10"}},[r("v-card",{attrs:{flat:"",tile:""}},[r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"text-none success",attrs:{disabled:!e.valid,loading:e.loading},on:{click:e.save}},[e._v("\n                        Save Details\n                    ")])],1)],1)],1)],1)],1),e._v(" "),r("v-snackbar",{attrs:{timeout:-1,absolute:"",top:"",right:"",color:"deep-purple accent-4",elevation:"24"},model:{value:e.openMessage,callback:function(t){e.openMessage=t},expression:"openMessage"}},[e._v("\n        You have successfully updated your profile\n    ")])],1)}),[],!1,null,null,null).exports}}]);