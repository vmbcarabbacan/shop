"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[932],{932:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(629);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i={name:"child",props:{open:Boolean},methods:{get_age:function(e){var t=new Date-new Date(e);return Math.floor(t/315576e5)},closeViewChild:function(){this.$emit("closeModal")},goToItem:function(e){var t=this.$router.resolve({name:"StudentModal",params:{id:e.id}});window.open(t.href)}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,r.rn)(["sams"]))};const s=(0,n(1900).Z)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"800"},on:{"click:outside":e.closeViewChild},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[n("v-card",[n("v-card-text",[n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v("\n                        Photo\n                    ")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("\n                        Name\n                    ")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("\n                        Gender\n                    ")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("\n                        Date of Birth\n                    ")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("\n                        Age\n                    ")])])]),e._v(" "),n("tbody",e._l(e.sams.children,(function(t,r){return n("tr",{key:r,on:{click:function(n){return e.goToItem(t)}}},[n("td",[t.image?n("v-avatar",{attrs:{size:"150",tile:""}},[n("v-img",{attrs:{src:"/"+t.image.link,"lazy-src":"/"+t.image.link_res,name:t.image.name,alt:t.image.alt,contain:""}})],1):e._e()],1),e._v(" "),n("td",[e._v(e._s(t.fullName))]),e._v(" "),n("td",[e._v(e._s(t.gender))]),e._v(" "),n("td",[e._v(e._s(t.date_of_birth))]),e._v(" "),n("td",[e._v(e._s(e.get_age(t.date_of_birth)))])])})),0)]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null).exports}}]);