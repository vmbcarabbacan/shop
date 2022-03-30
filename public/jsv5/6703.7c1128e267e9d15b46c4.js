"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6703],{6703:(e,r,s)=>{s.r(r),s.d(r,{default:()=>l});var t=s(629);function a(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function o(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?a(Object(s),!0).forEach((function(r){m(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function m(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}const n={name:"authUserEdit",created:function(){this.SAMS_VERIFY_EMAIL({email:this.$route.params.email})},data:function(){return{show_password:!1,valid:!1,message:null,error:null,roles:["Reception","Manager","Teacher","Accounts","Others"]}},methods:o(o(o({},(0,t.OI)(["SAMS_FORM","SAMS_LOADING"])),(0,t.nv)(["REGISTRATION_FORM","SAMS_VERIFY_EMAIL"])),{},{save:function(){var e=this,r={form:this.sams.form,email:this.sams.form.mom.emailAddress,password:this.sams.form.password};this.SAMS_LOADING(!0),this.REGISTRATION_FORM(r).then((function(r){e.message="Staff successfully save!",e.error=null,setTimeout((function(){e.SAMS_LOADING(!1),e.$router.push({name:"Staffs"}),e.SAMS_FORM({}),e.message=null}),3e3)})).catch((function(r){e.SAMS_LOADING(!1),e.message=null,e.error="Email address was alrady used",setTimeout((function(){e.error=null}),3e3)}))}}),computed:o({},(0,t.rn)(["sams"]))};const l=(0,s(1900).Z)(n,(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("v-app",[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"8"}},[Object.keys(e.sams.form).length>0?s("v-card",[s("v-card-title",[e._v("\n                    Edit Staff\n                    "),s("v-spacer"),e._v(" "),s("v-select",{attrs:{items:e.roles,label:"Role"},model:{value:e.sams.form.role,callback:function(r){e.$set(e.sams.form,"role",r)},expression:"sams.form.role"}})],1),e._v(" "),s("v-form",{model:{value:e.valid,callback:function(r){e.valid=r},expression:"valid"}},[s("v-card-text",[s("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.message,expression:"message"}],attrs:{type:"success"}},[e._v(e._s(e.message))]),e._v(" "),s("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],attrs:{type:"error"}},[e._v(e._s(e.error))]),e._v(" "),s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"First Name",rules:[function(e){return!!e||"First name is required"}]},model:{value:e.sams.form.mom.firstName,callback:function(r){e.$set(e.sams.form.mom,"firstName",r)},expression:"sams.form.mom.firstName"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Family Name",rules:[function(e){return!!e||"Family name is required"}]},model:{value:e.sams.form.mom.familyName,callback:function(r){e.$set(e.sams.form.mom,"familyName",r)},expression:"sams.form.mom.familyName"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Email Address",rules:[function(e){return!!e||"Email address is required"}],readonly:""},model:{value:e.sams.form.mom.emailAddress,callback:function(r){e.$set(e.sams.form.mom,"emailAddress",r)},expression:"sams.form.mom.emailAddress"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Contact Number",type:"number",rules:[function(e){return!!e||"Contact number is required"},function(e){return e.length>8&&e.length<10||"enter valid number"}],hint:"example: 565123456","persistent-hint":""},model:{value:e.sams.form.mom.mobileNumber,callback:function(r){e.$set(e.sams.form.mom,"mobileNumber",r)},expression:"sams.form.mom.mobileNumber"}})],1)],1)],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{staticClass:"text-none primary",attrs:{loading:e.sams.loading,disabled:!e.valid||"Admin"==e.sams.form.role},on:{click:e.save}},[e._v("\n                            Save\n                        ")])],1)],1)],1):s("v-card",[s("v-card-text",[s("p",{staticClass:"text-center"},[e._v("Please wait while getting your data "),s("span",[s("v-progress-circular",{attrs:{width:3,color:"green",indeterminate:""}})],1)])])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);