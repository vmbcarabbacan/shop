"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6747],{6747:(e,s,r)=>{r.r(s),r.d(s,{default:()=>m});var a=r(629);function t(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?t(Object(r),!0).forEach((function(s){l(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function l(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}const n={name:"samsTeacherAdd",created:function(){this.SAMS_FORM(this.myDatas)},data:function(){return{show_password:!1,valid:!1,message:null,error:null,specialRules:[function(e){return!!e||"Name is required"},function(e){return/^[A-Za-z]+$/.test(e)||"Please enter character a-z only"}]}},methods:o(o(o({},(0,a.OI)(["SAMS_FORM","SAMS_LOADING"])),(0,a.nv)(["REGISTRATION_FORM"])),{},{save:function(){var e=this,s={form:this.sams.form,email:this.sams.form.mom.emailAddress,password:this.sams.form.password};this.SAMS_LOADING(!0),this.REGISTRATION_FORM(s).then((function(s){e.message="Teacher successfully save!",e.error=null,setTimeout((function(){e.SAMS_LOADING(!1),e.$router.push({name:"Teachers",params:{role:"Teacher"}}),e.SAMS_FORM(e.myDatas),e.message=null}),3e3)})).catch((function(s){e.SAMS_LOADING(!1),e.message=null,e.error="Email address was alrady used",setTimeout((function(){e.error=null}),3e3)}))}}),computed:o(o({},(0,a.rn)(["sams"])),{},{myDatas:function(){return{id:0,location:"motor city",children:[{id:0,firstName:null,familyName:null,gender:"Female",dateOfBirth:null,dob_open:!1,isSelected:!0}],mom:{firstName:null,familyName:null,nationality:null,mobileNumber:null,homeNumber:null,workNumber:null,company:null,emailAddress:null},dad:{firstName:null,familyName:null,nationality:null,mobileNumber:null,homeNumber:null,workNumber:null,company:null,emailAddress:null},address:{id:0,address_1:null,area:null,building:null,city:"Dubai",country:"AE",street:null,zip:"00000"},role:"Teacher",password:null,confirm_password:null}}})};const m=(0,r(1900).Z)(n,(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("v-app",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-card",[r("v-card-title",[e._v("\n                    Add New Teacher\n                ")]),e._v(" "),r("v-form",{model:{value:e.valid,callback:function(s){e.valid=s},expression:"valid"}},[r("v-card-text",[r("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.message,expression:"message"}],attrs:{type:"success"}},[e._v(e._s(e.message))]),e._v(" "),r("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],attrs:{type:"error"}},[e._v(e._s(e.error))]),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"First Name",rules:e.specialRules},model:{value:e.sams.form.mom.firstName,callback:function(s){e.$set(e.sams.form.mom,"firstName",s)},expression:"sams.form.mom.firstName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Family Name",rules:e.specialRules},model:{value:e.sams.form.mom.familyName,callback:function(s){e.$set(e.sams.form.mom,"familyName",s)},expression:"sams.form.mom.familyName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Email Address",rules:[function(e){return!!e||"Email address is required"}]},model:{value:e.sams.form.mom.emailAddress,callback:function(s){e.$set(e.sams.form.mom,"emailAddress",s)},expression:"sams.form.mom.emailAddress"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Contact Number",type:"number",rules:[function(e){return!!e||"Contact number is required"},function(e){return e.length>8&&e.length<10||"enter valid number"}],hint:"example: 565123456","persistent-hint":""},model:{value:e.sams.form.mom.mobileNumber,callback:function(s){e.$set(e.sams.form.mom,"mobileNumber",s)},expression:"sams.form.mom.mobileNumber"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"password",type:e.show_password?"text":"password","append-icon":e.show_password?"mdi-eye":"mdi-eye-off",rules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>7||"Password must not less than 8 characters"}]},on:{"click:append":function(s){e.show_password=!e.show_password}},model:{value:e.sams.form.password,callback:function(s){e.$set(e.sams.form,"password",s)},expression:"sams.form.password"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"password",type:e.show_password?"text":"password","append-icon":e.show_password?"mdi-eye":"mdi-eye-off",rules:[function(s){return s&&s===e.sams.form.password||"Password not matched!"}]},on:{"click:append":function(s){e.show_password=!e.show_password}},model:{value:e.sams.form.confirm_password,callback:function(s){e.$set(e.sams.form,"confirm_password",s)},expression:"sams.form.confirm_password"}})],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"text-none primary",attrs:{loading:e.sams.loading,disabled:!e.valid},on:{click:e.save}},[e._v("\n                            Save\n                        ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);