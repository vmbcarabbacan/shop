"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7333],{281:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});var n=r(629);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const a={name:"registrationFormLocation",data:function(){return{locations:[{value:"motor city",text:"Motor City"},{value:"lakes",text:"Lakes"}],valid:!1}},methods:i(i({},(0,n.OI)(["STEPPER","REGISTRATION_FORM"])),{},{nextStepper:function(t){this.REGISTRATION_FORM(this.registration.form),this.STEPPER(t)}}),computed:i({},(0,n.rn)(["registration"]))};const l=(0,r(1900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{attrs:{height:"200px",flat:""}},[r("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-autocomplete",{attrs:{label:"Select Location",items:t.locations,rules:[function(t){return!!t||"Location is required"}],suffix:"*"},model:{value:t.registration.form.location,callback:function(e){t.$set(t.registration.form,"location",e)},expression:"registration.form.location"}})],1)],1),t._v(" "),r("v-btn",{attrs:{color:"primary",disabled:!t.valid},on:{click:function(e){return t.nextStepper(3)}}},[t._v("\n        Continue\n    ")]),t._v(" "),r("v-btn",{attrs:{text:""},on:{click:function(e){return t.nextStepper(1)}}},[t._v("\n            Back\n        ")])],1)}),[],!1,null,null,null).exports}}]);