"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4352],{4352:(t,e,i)=>{i.r(e),i.d(e,{default:()=>s});var n=i(629);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const c={name:"authUsers",beforeRouteEnter:function(t,e,i){i((function(t){t.redirect()}))},data:function(){return{drawer:!!this.$vuetify.breakpoint.mdAndUp,mini:!1,items:[{title:"All Staffs",icon:"mdi-account-box-multiple",path:{name:"Staffs"},access:["Admin","Manager","Accounts"]}]}},methods:o(o({},(0,n.nv)(["LOGOUT"])),{},{redirect:function(){var t=this;setTimeout((function(){!t.in_array(t.registration.form.role,["Admin","Manager","Accounts"])&&t.$router.push({name:"Home"})}),1e3)},logout:function(){this.LOGOUT()},in_array:function(t,e){for(var i=!1,n=0;n<e.length;n++){if(e[n]==t){i=!0;break}}return i}}),computed:o({},(0,n.rn)(["registration"]))};const s=(0,i(1900).Z)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.$vuetify.breakpoint.mdAndDown?i("v-app-bar",{attrs:{dark:"",color:"blue darken-3"}},[i("v-spacer"),t._v(" "),i("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}})],1):t._e(),t._v(" "),i("v-navigation-drawer",{attrs:{"mini-variant":t.mini,absolute:"",app:""},scopedSlots:t._u([{key:"append",fn:function(){return[i("v-list",{attrs:{dense:""}},[i("v-list-item",{attrs:{to:"/"}},[i("v-list-item-action",[i("v-icon",[t._v("mdi-home")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v(" Home ")])],1)],1),t._v(" "),i("v-list-item",{on:{click:t.logout}},[i("v-list-item-action",[i("v-icon",[t._v("mdi-logout")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v(" Logout ")])],1)],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",{staticClass:"px-2"},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v("\n                    "+t._s(t.mini?"":"User Management")+"\n                    "),t.mini?[i("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[i("v-icon",[t._v("mdi-chevron-right")])],1)]:t._e()],2)],1),t._v(" "),i("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[i("v-icon",[t._v("mdi-chevron-left")])],1)],1),t._v(" "),i("v-divider"),t._v(" "),i("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return[t.in_array(t.registration.form.role,e.access)?[i("v-list-item",{key:e.title,attrs:{to:e.path}},[i("v-list-item-action",[i("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.title))])],1)],1)]:t._e()]}))],2)],1),t._v(" "),i("v-main",[i("router-view")],1)],1)}),[],!1,null,null,null).exports}}]);