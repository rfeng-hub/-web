(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=t("2877"),p=t("6544"),a=t.n(p),i=t("7496"),u=Object(r.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("router-view")],1)}),[],!1,null,null,null),c=u.exports;a()(u,{VApp:i.a});var m=t("8c4f"),s=function(){return Promise.all([t.e("npm.vuetify"),t.e("npm.core-js"),t.e("npm.babel"),t.e("chunk-094eb9f8")]).then(t.bind(null,"cd56"))},d=function(){return Promise.all([t.e("npm.vuetify"),t.e("npm.core-js"),t.e("npm.babel"),t.e("npm.regenerator-runtime"),t.e("chunk-6b964b01")]).then(t.bind(null,"49d7"))},l=function(){return Promise.all([t.e("npm.vuetify"),t.e("npm.core-js"),t.e("npm.babel"),t.e("npm.regenerator-runtime"),t.e("chunk-1b05195c")]).then(t.bind(null,"3ad6"))},h=function(){return Promise.all([t.e("npm.vuetify"),t.e("npm.core-js"),t.e("npm.babel"),t.e("npm.regenerator-runtime"),t.e("chunk-15191719")]).then(t.bind(null,"7f05"))};o.a.use(m.a);var f=[{path:"/",component:s,redirect:"/view"},{path:"/view",component:s,redirect:"/view/new",children:[{path:"new",component:h},{path:"new/:id",component:l},{path:"html",component:h},{path:"html/:id",component:l},{path:"javascript",component:h},{path:"javascript/:id",component:l},{path:"frame",component:h},{path:"frame/:id",component:l},{path:"tool",component:h},{path:"tool/:id",component:l}]},{path:"/add",component:function(){return d}},{path:"/edit/:id",component:function(){return d}},{path:"*",component:function(){return t.e("chunk-2d21af29").then(t.bind(null,"be4d"))}}],b=new m.a({mode:"history",routes:f}),v=t("f309");o.a.use(v.a);var w=new v.a({}),j=t("bc3a"),y=t.n(j),k=t("323e"),P=t.n(k),g=t("b2d8"),x=t.n(g);t("64e1"),t("a5d8"),t("e4cb");o.a.config.productionTip=!1,y.a.defaults.baseURL="http://123.57.5.190:85/api/",o.a.prototype.$axios=y.a,y.a.interceptors.request.use((function(e){return P.a.start(),e.headers["Content-Type"]="application/json;charset=utf-8",e}),(function(e){return Promise.reject(e)})),y.a.interceptors.response.use((function(e){return P.a.done(),e})),o.a.use(x.a),new o.a({router:b,vuetify:w,render:function(e){return e(c)}}).$mount("#app")}},[[0,"runtime","npm.vuetify","npm.core-js","npm.babel","npm.axios","npm.mavon-editor","npm.vue-router","npm.vue","vendors~app"]]]);