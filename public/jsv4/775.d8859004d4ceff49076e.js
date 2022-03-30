"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[775],{775:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(629);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l={name:"posRequestAmend",data:function(){return{requests:["complete transaction","cancelled transaction","refund transaction","change payment option"],payment:[],payments:["Cash","Card","Bank","Cheque","Telr"],request:{type:null,comment:null,pays:[]},loading:!1,valid:!1,requestOpen:!1}},methods:a(a(a({},(0,r.nv)(["REQUEST_SAVE"])),(0,r.OI)(["POS_REQUEST_AMEND_SALE"])),{},{getPayment:function(e){var t=[];e.forEach((function(e){t.push({payment:e,value:0})})),this.request.pays=t},sendRequest:function(){var e=this,t={type:this.request.type,comment:this.request.comment,pays:this.request.pays,transactionNumber:this.pos.amendedId};this.loading=!0,this.REQUEST_SAVE({filter:t}).then((function(t){e.requestOpen=!0,e.loading=!1,e.close()}))},close:function(){this.request={type:null,comment:null,pays:[]},this.POS_REQUEST_AMEND_SALE()}}),computed:a({},(0,r.rn)(["pos"]))};const u=(0,n(1900).Z)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"500",persistent:""},model:{value:e.pos.isRequestAmend,callback:function(t){e.$set(e.pos,"isRequestAmend",t)},expression:"pos.isRequestAmend"}},[n("v-card",[n("v-toolbar",{staticClass:"primary text-none",attrs:{flat:"",dark:""}},[n("v-toolbar-title",[e._v("\n                Amend Transaction # "+e._s(e.pos.amendedId)+"\n            ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-icon",{on:{click:e.close}},[e._v("mdi-close")])],1),e._v(" "),n("v-card-text",[n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-combobox",{attrs:{label:"Select request type",items:e.requests,rules:[function(e){return!!e||"required"}]},model:{value:e.request.type,callback:function(t){e.$set(e.request,"type",t)},expression:"request.type"}}),e._v(" "),"change payment option"==e.request.type?n("v-combobox",{attrs:{label:"Select Payment",items:e.payments,rules:[function(e){return e.length>0||"required"}],multiple:""},on:{change:e.getPayment},model:{value:e.payment,callback:function(t){e.payment=t},expression:"payment"}}):e._e(),e._v(" "),e._l(e.request.pays,(function(t,r){return[n("div",{key:r},["change payment option"==e.request.type?n("v-text-field",{attrs:{label:t.payment,rules:[function(e){return e>0||"required"}],type:"number"},model:{value:t.value,callback:function(n){e.$set(t,"value",e._n(n))},expression:"pay.value"}}):e._e()],1)]})),e._v(" "),n("v-textarea",{attrs:{label:"Please specify reasons",rules:[function(e){return!!e||"required"}]},model:{value:e.request.comment,callback:function(t){e.$set(e.request,"comment",t)},expression:"request.comment"}})],2)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"text-none success",attrs:{loading:e.loading,disabled:!e.valid},on:{click:e.sendRequest}},[e._v("\n                Send Request\n            ")])],1)],1),e._v(" "),n("v-snackbar",{attrs:{absolute:"",top:"",right:"",color:"deep-purple accent-4"},model:{value:e.requestOpen,callback:function(t){e.requestOpen=t},expression:"requestOpen"}},[e._v("\n        Sending your request\n    ")])],1)}),[],!1,null,null,null).exports}}]);