"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9894],{9894:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(629);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i={name:"parentAdd",components:{verifyEmail:function(){return r.e(344).then(r.bind(r,344))},children:function(){return r.e(2537).then(r.bind(r,2537))},parent:function(){return r.e(3243).then(r.bind(r,3243))},detail:function(){return r.e(8494).then(r.bind(r,8494))}},created:function(){this.sams.isEdit||this.SAMS_FORM(this.myDatas)},methods:s({},(0,n.OI)(["SAMS_FORM"])),computed:s(s({},(0,n.rn)(["stepper","sams"])),{},{myDatas:function(){return{id:0,location:"motor city",children:[{id:0,firstName:null,familyName:null,gender:"Female",nationality:null,dateOfBirth:null,dob_open:!1,isSelected:!0}],mom:{firstName:null,familyName:null,nationality:null,mobileNumber:null,homeNumber:null,workNumber:null,company:null,emailAddress:null},dad:{firstName:null,familyName:null,nationality:null,mobileNumber:null,homeNumber:null,workNumber:null,company:null,emailAddress:null},address:{id:0,address_1:null,area:null,building:null,city:"Dubai",country:"AE",street:null,zip:"00000"},role:"User",password:null,confirm_password:null}}})};const o=(0,r(1900).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"8"}},[Object.keys(e.sams.form).length>0?r("v-card",[r("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[r("v-toolbar-title",[e._v("\n                        Form\n                    ")])],1),e._v(" "),r("v-stepper",{model:{value:e.stepper,callback:function(t){e.stepper=t},expression:"stepper"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{complete:e.stepper>1,step:"1"}},[e._v("\n                            Check Email\n                        ")]),e._v(" "),r("v-divider"),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{complete:e.stepper>2,step:"2"}},[e._v("\n                            Child Information\n                        ")]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{complete:e.stepper>3,step:"3"}},[e._v("\n                            \n                            Parent's Information\n                        ")]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{step:"4"}},[e._v("\n                            Details\n                        ")])],1),e._v(" "),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("verifyEmail")],1),e._v(" "),r("v-stepper-content",{attrs:{step:"2"}},[r("children")],1),e._v(" "),r("v-stepper-content",{attrs:{step:"3"}},[r("parent")],1),e._v(" "),r("v-stepper-content",{attrs:{step:"4"}},[r("detail")],1)],1)],1)],1):r("v-card",[r("v-card-text",[r("p",{staticClass:"text-center"},[e._v("Please wait while getting your data "),r("span",[r("v-progress-circular",{attrs:{width:3,color:"green",indeterminate:""}})],1)])])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);