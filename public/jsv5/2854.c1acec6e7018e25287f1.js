"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2854],{2854:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i={name:"cancelledPayment",data:function(){return{waitingText:"Please wait"}},created:function(){var e=this;this.SALE_UPDATE_TELR_TRANSACTION({cart_id:this.$route.query.cart_id,status:"Cancelled"}).then((function(t){e.waitingText="Cancelled"}))},methods:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,n(629).nv)(["SALE_UPDATE_TELR_TRANSACTION"]))};const a=(0,n(1900).Z)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n    "+e._s(e.waitingText)+"\n")])}),[],!1,null,null,null).exports}}]);