"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9886],{9797:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(3645),s=r.n(i)()((function(e){return e[1]}));s.push([e.id,"",""]);const n=s},9886:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var i=r(629);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a={name:"trialFormData",components:{termsAndConditions:function(){return r.e(9138).then(r.bind(r,9138))},waiver:function(){return r.e(458).then(r.bind(r,458))}},data:function(){return{gender:["Female","Male"],show_password:!1,valid:!1}},methods:n(n(n({},(0,i.OI)(["STEPPER","REGISTRATION_FORM","REGISTRATION_FORM_TERMS_AND_CONDITIONS_OPEN","REGISTRATION_FORM_WAIVER_OPEN"])),(0,i.nv)(["REGISTRATION_TRIAL_FORM"])),{},{addMoreChild:function(){this.registration.form.children.push({id:0,firstName:null,familyName:null,gender:"Female",nationality:null,dateOfBirth:null,dob_open:!1,isSelected:!0})},nextStepper:function(e){this.REGISTRATION_FORM(this.registration.form),this.STEPPER(e)},submitForm:function(){var e={form:this.registration.form,email:this.registration.form.mom.emailAddress,password:this.registration.form.password};this.REGISTRATION_FORM(this.registration.form),this.REGISTRATION_TRIAL_FORM(e)},termsAndCondition:function(){this.REGISTRATION_FORM_TERMS_AND_CONDITIONS_OPEN(!0)},covid:function(){this.REGISTRATION_FORM_WAIVER_OPEN(!0)}}),computed:n({},(0,i.rn)(["registration"]))};var l=r(3379),d=r.n(l),c=r(9797),m={insert:"head",singleton:!1};d()(c.Z,m);c.Z.locals;const f=(0,r(1900).Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",[r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("p",{staticClass:"text-h4 text-center"},[e._v("\n                Please check the child you want to enroll for trial\n            ")]),e._v(" "),e._l(e.registration.form.children,(function(t,i){return r("v-card-text",{key:i},[r("v-checkbox",{scopedSlots:e._u([{key:"label",fn:function(){return[r("div",{staticClass:"text-h5 font-weight-bold"},[e._v("Child "+e._s(i+1))])]},proxy:!0}],null,!0),model:{value:t.isSelected,callback:function(r){e.$set(t,"isSelected",r)},expression:"child.isSelected"}}),e._v(" "),r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"First Name",rules:[function(e){return!!e||"First name is required"}],suffix:"*"},model:{value:t.firstName,callback:function(r){e.$set(t,"firstName",r)},expression:"child.firstName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Family Name",rules:[function(e){return!!e||"Family name is required"}],suffix:"*"},model:{value:t.familyName,callback:function(r){e.$set(t,"familyName",r)},expression:"child.familyName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-autocomplete",{attrs:{label:"Gender",items:e.gender},model:{value:t.gender,callback:function(r){e.$set(t,"gender",r)},expression:"child.gender"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-menu",{ref:"dob",refInFor:!0,attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(i){var s=i.on,n=i.attrs;return[r("v-text-field",e._g(e._b({attrs:{label:"Date","persistent-hint":"","prepend-icon":"mdi-calendar","append-icon":"*",rules:[function(e){return!!e||"Date of birth is required"}],suffix:"*",readonly:""},model:{value:t.dateOfBirth,callback:function(r){e.$set(t,"dateOfBirth",r)},expression:"child.dateOfBirth"}},"v-text-field",n,!1),s))]}}],null,!0),model:{value:t.dob_open,callback:function(r){e.$set(t,"dob_open",r)},expression:"child.dob_open"}},[e._v(" "),r("v-date-picker",{attrs:{"no-title":"",max:(new Date).toISOString().substr(0,10)},on:{input:function(e){t.dob_open=!1}},model:{value:t.dateOfBirth,callback:function(r){e.$set(t,"dateOfBirth",r)},expression:"child.dateOfBirth"}})],1)],1)],1)],1)})),e._v(" "),r("div",{staticClass:"text-center"},[r("v-btn",{attrs:{"x-large":"",color:"blue darken-2",dark:""},on:{click:e.addMoreChild}},[e._v("\n                    Add more child\n                ")])],1),e._v(" "),r("br"),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",[r("p",{staticClass:"text-h5 font-weight-bold"},[e._v("Mom Information")]),e._v(" "),r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"First Name",rules:[function(e){return!!e||"First name is required"}],suffix:"*"},model:{value:e.registration.form.mom.firstName,callback:function(t){e.$set(e.registration.form.mom,"firstName",t)},expression:"registration.form.mom.firstName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Family Name",rules:[function(e){return!!e||"Family name is required"}],suffix:"*"},model:{value:e.registration.form.mom.familyName,callback:function(t){e.$set(e.registration.form.mom,"familyName",t)},expression:"registration.form.mom.familyName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Email Address",suffix:"*",readonly:""},model:{value:e.registration.form.mom.emailAddress,callback:function(t){e.$set(e.registration.form.mom,"emailAddress",t)},expression:"registration.form.mom.emailAddress"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Mobile Number",rules:[function(e){return!!e||"Mobile number is required"},function(e){return e.length>8&&e.length<10||"enter valid number"}],suffix:"*",type:"number",hint:"example: 565123456","persistent-hint":""},model:{value:e.registration.form.mom.mobileNumber,callback:function(t){e.$set(e.registration.form.mom,"mobileNumber",t)},expression:"registration.form.mom.mobileNumber"}})],1),e._v(" "),e.registration.isNew?r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"password",type:e.show_password?"text":"password","append-icon":e.show_password?"mdi-eye":"mdi-eye-off",rules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>7||"Password must not less than 8 characters"}]},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.registration.form.password,callback:function(t){e.$set(e.registration.form,"password",t)},expression:"registration.form.password"}})],1):e._e(),e._v(" "),e.registration.isNew?r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"password",type:e.show_password?"text":"password","append-icon":e.show_password?"mdi-eye":"mdi-eye-off",rules:[function(t){return t&&t===e.registration.form.password||"Password not matched!"}]},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.registration.form.confirm_password,callback:function(t){e.$set(e.registration.form,"confirm_password",t)},expression:"registration.form.confirm_password"}})],1):e._e()],1)],1),e._v(" "),r("v-card-text",[r("p",{staticClass:"text-h5 font-weight-bold"},[e._v("Dad Information")]),e._v(" "),r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"First Name",rules:[function(e){return!!e||"First name is required"}],suffix:"*"},model:{value:e.registration.form.dad.firstName,callback:function(t){e.$set(e.registration.form.dad,"firstName",t)},expression:"registration.form.dad.firstName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Family Name",rules:[function(e){return!!e||"Family name is required"}],suffix:"*"},model:{value:e.registration.form.dad.familyName,callback:function(t){e.$set(e.registration.form.dad,"familyName",t)},expression:"registration.form.dad.familyName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Email Address",rules:[function(e){return/.+@.+/.test(e)||"Incorrect email address"}],suffix:"*"},model:{value:e.registration.form.dad.emailAddress,callback:function(t){e.$set(e.registration.form.dad,"emailAddress",t)},expression:"registration.form.dad.emailAddress"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Mobile Number",type:"number",rules:[function(e){return!!e||"Mobile number is required"},function(e){return e.length>8&&e.length<10||"enter valid number"}],suffix:"*",hint:"example: 565123456","persistent-hint":""},model:{value:e.registration.form.dad.mobileNumber,callback:function(t){e.$set(e.registration.form.dad,"mobileNumber",t)},expression:"registration.form.dad.mobileNumber"}})],1)],1)],1)],2),e._v(" "),r("v-card-text",[r("h3",[e._v("\n                I agree to fulfil the obligations set forth to StepUp Academy and will ensure all school terms in which I/my child attends are accounted for\n            ")]),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-checkbox",{staticClass:"my-0",scopedSlots:e._u([{key:"label",fn:function(){return[r("v-btn",{staticClass:"text-none",attrs:{text:""},on:{click:e.termsAndCondition}},[e._v("\n                        Terms & Conditions\n                    ")])]},proxy:!0}]),model:{value:e.registration.classTermsAndConditions,callback:function(t){e.$set(e.registration,"classTermsAndConditions",t)},expression:"registration.classTermsAndConditions"}}),e._v(" "),r("v-checkbox",{staticClass:"my-0",scopedSlots:e._u([{key:"label",fn:function(){return[r("v-btn",{staticClass:"text-none",attrs:{text:""},on:{click:e.covid}},[e._v("\n                        Covid-19\n                    ")])]},proxy:!0}]),model:{value:e.registration.waiver,callback:function(t){e.$set(e.registration,"waiver",t)},expression:"registration.waiver"}})],1)],1)],1),e._v(" "),r("termsAndConditions"),e._v(" "),r("waiver"),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"text-none primary",attrs:{disabled:!e.valid||!e.registration.classTermsAndConditions||!e.registration.waiver},on:{click:e.submitForm}},[e._v("\n                Submit\n            ")]),e._v(" "),r("v-btn",{attrs:{text:""},on:{click:function(t){return e.nextStepper(1)}}},[e._v("\n                Back\n            ")])],1)],1)],1)}),[],!1,null,"145a1bde",null).exports}}]);