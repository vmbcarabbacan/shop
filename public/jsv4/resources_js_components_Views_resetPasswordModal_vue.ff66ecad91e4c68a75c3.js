"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Views_resetPasswordModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/resetPasswordModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/resetPasswordModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'resetPassword',
  data: function data() {
    return {
      valid: false,
      email: null,
      password: null,
      confirmPassword: null,
      showPassword: false,
      rules: {
        email: function email(v) {
          return /.+@.+/.test(v) || "E-mail must be valid";
        },
        required: function required(v) {
          return !!v || 'Required';
        },
        password: function password(v) {
          return v && v.length >= 6 || 'Password atleast 6 characters';
        }
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["RESET_PASSWORD_CONFIRM"])), {}, {
    resetPass: function resetPass() {
      var email = {
        id: parseInt(this.$route.params.id),
        token: this.$route.params.token,
        password: this.resetPassword.form.password
      };
      this.RESET_PASSWORD_CONFIRM(email);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["resetPassword"])),
  metaInfo: function metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Forgot Password",
      htmlAttrs: {
        lang: "en"
      },
      meta: [{
        "http-equiv": "Content-Type",
        content: "text/html; charset=utf-8"
      }, {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, {
        name: "description",
        content: "StepUp Academy shop forgot password initiate landing page"
      }, {
        name: "keywords",
        content: "StepUp, StepUp Academy, step up " + "Forgot Password"
      }, // OpenGraph data (Most widely used)
      {
        property: "og:title",
        content: "Forgot Password"
      }, {
        property: "og:site_name",
        content: "StepUp Academy"
      }, // The list of types is available here: http://ogp.me/#types
      {
        property: "og:type",
        content: "article"
      }, // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "http://localhost:3000/image/stepUpAcademy.svg"
      }, {
        property: "og:image",
        content: "http://localhost:3000/image/stepUpAcademy.svg"
      }, // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content: "StepUp Academy shop forgot password initiate landing page"
      }, // Twitter card
      {
        name: "twitter:card",
        content: "summary"
      }, {
        name: "twitter:site",
        content: "http://localhost:3000/image/stepUpAcademy.svg"
      }, {
        name: "twitter:title",
        content: "Forgot Password"
      }, {
        name: "twitter:description",
        content: "StepUp Academy shop forgot password initiate landing page"
      }, // Your twitter handle, if you have one.
      {
        name: "twitter:creator",
        content: "@vmbcarabbacan"
      }, {
        name: "twitter:image:src",
        content: "http://localhost:3000/image/stepUpAcademy.svg"
      }, // Google / Schema.org markup:
      {
        itemprop: "name",
        content: "Forgot Password"
      }, {
        itemprop: "description",
        content: "StepUp Academy shop forgot password initiate landing page"
      }, {
        itemprop: "image",
        content: "http://localhost:3000/image/stepUpAcademy.svg"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/resetPasswordModal.vue?vue&type=style&index=0&id=2e7cc66f&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/resetPasswordModal.vue?vue&type=style&index=0&id=2e7cc66f&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "a[data-v-2e7cc66f] {\n  text-decoration: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/resetPasswordModal.vue?vue&type=style&index=0&id=2e7cc66f&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/resetPasswordModal.vue?vue&type=style&index=0&id=2e7cc66f&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPasswordModal_vue_vue_type_style_index_0_id_2e7cc66f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./resetPasswordModal.vue?vue&type=style&index=0&id=2e7cc66f&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/resetPasswordModal.vue?vue&type=style&index=0&id=2e7cc66f&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPasswordModal_vue_vue_type_style_index_0_id_2e7cc66f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPasswordModal_vue_vue_type_style_index_0_id_2e7cc66f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Views/resetPasswordModal.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Views/resetPasswordModal.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resetPasswordModal_vue_vue_type_template_id_2e7cc66f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetPasswordModal.vue?vue&type=template&id=2e7cc66f&scoped=true& */ "./resources/js/components/Views/resetPasswordModal.vue?vue&type=template&id=2e7cc66f&scoped=true&");
/* harmony import */ var _resetPasswordModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetPasswordModal.vue?vue&type=script&lang=js& */ "./resources/js/components/Views/resetPasswordModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _resetPasswordModal_vue_vue_type_style_index_0_id_2e7cc66f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetPasswordModal.vue?vue&type=style&index=0&id=2e7cc66f&lang=scss&scoped=true& */ "./resources/js/components/Views/resetPasswordModal.vue?vue&type=style&index=0&id=2e7cc66f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _resetPasswordModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _resetPasswordModal_vue_vue_type_template_id_2e7cc66f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _resetPasswordModal_vue_vue_type_template_id_2e7cc66f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2e7cc66f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Views/resetPasswordModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Views/resetPasswordModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Views/resetPasswordModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPasswordModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./resetPasswordModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/resetPasswordModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPasswordModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Views/resetPasswordModal.vue?vue&type=style&index=0&id=2e7cc66f&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Views/resetPasswordModal.vue?vue&type=style&index=0&id=2e7cc66f&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPasswordModal_vue_vue_type_style_index_0_id_2e7cc66f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./resetPasswordModal.vue?vue&type=style&index=0&id=2e7cc66f&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/resetPasswordModal.vue?vue&type=style&index=0&id=2e7cc66f&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Views/resetPasswordModal.vue?vue&type=template&id=2e7cc66f&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Views/resetPasswordModal.vue?vue&type=template&id=2e7cc66f&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPasswordModal_vue_vue_type_template_id_2e7cc66f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPasswordModal_vue_vue_type_template_id_2e7cc66f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPasswordModal_vue_vue_type_template_id_2e7cc66f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./resetPasswordModal.vue?vue&type=template&id=2e7cc66f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/resetPasswordModal.vue?vue&type=template&id=2e7cc66f&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/resetPasswordModal.vue?vue&type=template&id=2e7cc66f&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/resetPasswordModal.vue?vue&type=template&id=2e7cc66f&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.resetPass.apply(null, arguments)
                    }
                  },
                  model: {
                    value: _vm.valid,
                    callback: function($$v) {
                      _vm.valid = $$v
                    },
                    expression: "valid"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", [
                        _c(
                          "p",
                          {
                            staticClass: "text-center text-h5 font-weight-bold"
                          },
                          [_vm._v("Password Reset")]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-alert",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.resetPassword.errorCommit,
                                  expression: "resetPassword.errorCommit"
                                }
                              ],
                              staticClass: "mb-5",
                              attrs: { value: true, color: "error", dark: "" }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.resetPassword.errorCommit) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v(" Enter your new password ")]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "Password",
                              type: _vm.showPassword ? "text" : "password",
                              "append-icon": _vm.showPassword
                                ? "mdi-eye"
                                : "mdi-eye-off",
                              rules: [
                                function(v) {
                                  return !!v || "Password is required"
                                },
                                function(v) {
                                  return (
                                    (v && v.length > 7) ||
                                    "Password must not less than 8 characters"
                                  )
                                }
                              ]
                            },
                            on: {
                              "click:append": function($event) {
                                _vm.showPassword = !_vm.showPassword
                              }
                            },
                            model: {
                              value: _vm.resetPassword.form.password,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.resetPassword.form,
                                  "password",
                                  $$v
                                )
                              },
                              expression: "resetPassword.form.password"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "Confirm password",
                              type: _vm.showPassword ? "text" : "password",
                              "append-icon": _vm.showPassword
                                ? "mdi-eye"
                                : "mdi-eye-off",
                              rules: [
                                function(v) {
                                  return (
                                    (v &&
                                      v === _vm.resetPassword.form.password) ||
                                    "Password not matched!"
                                  )
                                }
                              ]
                            },
                            on: {
                              "click:append": function($event) {
                                _vm.showPassword = !_vm.showPassword
                              }
                            },
                            model: {
                              value: _vm.resetPassword.form.confirmPassword,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.resetPassword.form,
                                  "confirmPassword",
                                  $$v
                                )
                              },
                              expression: "resetPassword.form.confirmPassword"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-alert",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.resetPassword.successMessageCommit,
                              expression: "resetPassword.successMessageCommit"
                            }
                          ],
                          attrs: { value: true, color: "success", dark: "" }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.resetPassword.successMessageCommit) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "text-none primary",
                              attrs: {
                                type: "submit",
                                disabled: !_vm.valid,
                                loading: _vm.resetPassword.loading
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Submit\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);