"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[436],{436:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(629),a=r(9669),i=r.n(a);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c={name:"ProductImport",data:function(){return{fileUpload:null,filename:null,file:null,loading:!1,error:!1}},methods:s(s({},(0,n.nv)(["SETUP_UPLOAD_USERS"])),{},{onFileChange:function(e){this.filename="Selected File: "+e.target.files[0].name,this.file=e.target.files[0]},submitForm:function(e){var t=this;e.preventDefault(),this.loading=!0,this.error=!1;var r=this,n={headers:{"content-type":"multipart/form-data","X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.csrf_token}},a=new FormData;a.append("file",this.file),i().post("/api/PRODUCT-UNIFORM-IMPORT",a,n).then((function(e){r.success=e.data.success,r.filename="",t.loading=!1})).catch((function(e){r.output=e,t.error=!0,t.loading=!1}))}})};const u=(0,r(1900).Z)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-card",[r("v-card-title",[e._v("\n                        Upload product here\n                    ")]),e._v(" "),r("v-card-text",[r("form",{attrs:{enctype:"multipart/form-data"},on:{submit:e.submitForm}},[r("div",{staticClass:"input-group"},[r("div",{staticClass:"custom-file"},[r("input",{staticClass:"custom-file-input",attrs:{type:"file",name:"filename",id:"inputFileUpload"},on:{change:e.onFileChange}}),e._v(" "),r("label",{staticClass:"custom-file-label",attrs:{for:"inputFileUpload"}},[e._v("Choose file")])]),e._v(" "),r("div",{staticClass:"input-group-append"},[r("v-btn",{staticClass:"text-none success mt-2",attrs:{type:"submit",loading:e.loading}},[e._v("Upload")])],1)]),e._v(" "),r("br"),e._v(" "),r("p",{staticClass:"text-danger font-weight-bold"},[e._v(e._s(e.filename))]),e._v(" "),r("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],attrs:{border:"right","colored-border":"",type:"error",elevation:"2"}},[e._v("\n                            Something went wrong! Please reload the browser and import the data again\n                        ")])],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);