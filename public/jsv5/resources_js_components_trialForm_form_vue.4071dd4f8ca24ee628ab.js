"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_trialForm_form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/trialForm/form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/trialForm/form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  name: "trialFormData",
  components: {
    termsAndConditions: function termsAndConditions() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_terms_classTermsAndConditions_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../terms/classTermsAndConditions.vue */ "./resources/js/components/terms/classTermsAndConditions.vue"));
    },
    waiver: function waiver() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_terms_waiver_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../terms/waiver.vue */ "./resources/js/components/terms/waiver.vue"));
    }
  },
  data: function data() {
    return {
      gender: ["Female", "Male"],
      show_password: false,
      valid: false
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["STEPPER", "REGISTRATION_FORM", "REGISTRATION_FORM_TERMS_AND_CONDITIONS_OPEN", "REGISTRATION_FORM_WAIVER_OPEN"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["REGISTRATION_TRIAL_FORM"])), {}, {
    addMoreChild: function addMoreChild() {
      this.registration.form.children.push({
        id: 0,
        firstName: null,
        familyName: null,
        gender: "Female",
        nationality: null,
        dateOfBirth: null,
        dob_open: false,
        isSelected: true
      });
    },
    nextStepper: function nextStepper(e) {
      this.REGISTRATION_FORM(this.registration.form);
      this.STEPPER(e);
    },
    submitForm: function submitForm() {
      var form = {
        form: this.registration.form,
        email: this.registration.form.mom.emailAddress,
        password: this.registration.form.password
      };
      this.REGISTRATION_FORM(this.registration.form);
      this.REGISTRATION_TRIAL_FORM(form);
    },
    termsAndCondition: function termsAndCondition() {
      this.REGISTRATION_FORM_TERMS_AND_CONDITIONS_OPEN(true);
    },
    covid: function covid() {
      this.REGISTRATION_FORM_WAIVER_OPEN(true);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["registration"]))
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/trialForm/form.vue?vue&type=style&index=0&id=76300178&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/trialForm/form.vue?vue&type=style&index=0&id=76300178&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/trialForm/form.vue?vue&type=style&index=0&id=76300178&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/trialForm/form.vue?vue&type=style&index=0&id=76300178&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_76300178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=76300178&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/trialForm/form.vue?vue&type=style&index=0&id=76300178&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_76300178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_76300178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/trialForm/form.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/trialForm/form.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_76300178_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=76300178&scoped=true& */ "./resources/js/components/trialForm/form.vue?vue&type=template&id=76300178&scoped=true&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/trialForm/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _form_vue_vue_type_style_index_0_id_76300178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&id=76300178&lang=scss&scoped=true& */ "./resources/js/components/trialForm/form.vue?vue&type=style&index=0&id=76300178&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_76300178_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_76300178_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76300178",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/trialForm/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/trialForm/form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/trialForm/form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/trialForm/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/trialForm/form.vue?vue&type=style&index=0&id=76300178&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/trialForm/form.vue?vue&type=style&index=0&id=76300178&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_76300178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=style&index=0&id=76300178&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/trialForm/form.vue?vue&type=style&index=0&id=76300178&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/trialForm/form.vue?vue&type=template&id=76300178&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/trialForm/form.vue?vue&type=template&id=76300178&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_76300178_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_76300178_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_76300178_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=76300178&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/trialForm/form.vue?vue&type=template&id=76300178&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/trialForm/form.vue?vue&type=template&id=76300178&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/trialForm/form.vue?vue&type=template&id=76300178&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-card",
        [
          _c(
            "v-form",
            {
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c("p", { staticClass: "text-h4 text-center" }, [
                _vm._v(
                  "\n                Please check the child you want to enroll for trial\n            "
                )
              ]),
              _vm._v(" "),
              _vm._l(_vm.registration.form.children, function(child, index) {
                return _c(
                  "v-card-text",
                  { key: index },
                  [
                    _c("v-checkbox", {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "label",
                            fn: function() {
                              return [
                                _c(
                                  "div",
                                  { staticClass: "text-h5 font-weight-bold" },
                                  [_vm._v("Child " + _vm._s(index + 1))]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        true
                      ),
                      model: {
                        value: child.isSelected,
                        callback: function($$v) {
                          _vm.$set(child, "isSelected", $$v)
                        },
                        expression: "child.isSelected"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      { attrs: { align: "center" } },
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("v-text-field", {
                              attrs: {
                                label: "First Name",
                                rules: [
                                  function(v) {
                                    return !!v || "First name is required"
                                  }
                                ],
                                suffix: "*"
                              },
                              model: {
                                value: child.firstName,
                                callback: function($$v) {
                                  _vm.$set(child, "firstName", $$v)
                                },
                                expression: "child.firstName"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("v-text-field", {
                              attrs: {
                                label: "Family Name",
                                rules: [
                                  function(v) {
                                    return !!v || "Family name is required"
                                  }
                                ],
                                suffix: "*"
                              },
                              model: {
                                value: child.familyName,
                                callback: function($$v) {
                                  _vm.$set(child, "familyName", $$v)
                                },
                                expression: "child.familyName"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("v-autocomplete", {
                              attrs: { label: "Gender", items: _vm.gender },
                              model: {
                                value: child.gender,
                                callback: function($$v) {
                                  _vm.$set(child, "gender", $$v)
                                },
                                expression: "child.gender"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c(
                              "v-menu",
                              {
                                ref: "dob",
                                refInFor: true,
                                attrs: {
                                  "close-on-content-click": false,
                                  transition: "scale-transition",
                                  "offset-y": "",
                                  "max-width": "290px",
                                  "min-width": "290px"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  attrs: {
                                                    label: "Date",
                                                    "persistent-hint": "",
                                                    "prepend-icon":
                                                      "mdi-calendar",
                                                    "append-icon": "*",
                                                    rules: [
                                                      function(v) {
                                                        return (
                                                          !!v ||
                                                          "Date of birth is required"
                                                        )
                                                      }
                                                    ],
                                                    suffix: "*",
                                                    readonly: ""
                                                  },
                                                  model: {
                                                    value: child.dateOfBirth,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        child,
                                                        "dateOfBirth",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "child.dateOfBirth"
                                                  }
                                                },
                                                "v-text-field",
                                                attrs,
                                                false
                                              ),
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                ),
                                model: {
                                  value: child.dob_open,
                                  callback: function($$v) {
                                    _vm.$set(child, "dob_open", $$v)
                                  },
                                  expression: "child.dob_open"
                                }
                              },
                              [
                                _vm._v(" "),
                                _c("v-date-picker", {
                                  attrs: {
                                    "no-title": "",
                                    max: new Date().toISOString().substr(0, 10)
                                  },
                                  on: {
                                    input: function($event) {
                                      child.dob_open = false
                                    }
                                  },
                                  model: {
                                    value: child.dateOfBirth,
                                    callback: function($$v) {
                                      _vm.$set(child, "dateOfBirth", $$v)
                                    },
                                    expression: "child.dateOfBirth"
                                  }
                                })
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
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        "x-large": "",
                        color: "blue darken-2",
                        dark: ""
                      },
                      on: { click: _vm.addMoreChild }
                    },
                    [
                      _vm._v(
                        "\n                    Add more child\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("p", { staticClass: "text-h5 font-weight-bold" }, [
                    _vm._v("Mom Information")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { align: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "First Name",
                              rules: [
                                function(v) {
                                  return !!v || "First name is required"
                                }
                              ],
                              suffix: "*"
                            },
                            model: {
                              value: _vm.registration.form.mom.firstName,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.mom,
                                  "firstName",
                                  $$v
                                )
                              },
                              expression: "registration.form.mom.firstName"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Family Name",
                              rules: [
                                function(v) {
                                  return !!v || "Family name is required"
                                }
                              ],
                              suffix: "*"
                            },
                            model: {
                              value: _vm.registration.form.mom.familyName,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.mom,
                                  "familyName",
                                  $$v
                                )
                              },
                              expression: "registration.form.mom.familyName"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Email Address",
                              suffix: "*",
                              readonly: ""
                            },
                            model: {
                              value: _vm.registration.form.mom.emailAddress,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.mom,
                                  "emailAddress",
                                  $$v
                                )
                              },
                              expression: "registration.form.mom.emailAddress"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Mobile Number",
                              rules: [
                                function(v) {
                                  return !!v || "Mobile number is required"
                                },
                                function(v) {
                                  return (
                                    (v.length > 8 && v.length < 10) ||
                                    "enter valid number"
                                  )
                                }
                              ],
                              suffix: "*",
                              type: "number",
                              hint: "example: 565123456",
                              "persistent-hint": ""
                            },
                            model: {
                              value: _vm.registration.form.mom.mobileNumber,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.mom,
                                  "mobileNumber",
                                  $$v
                                )
                              },
                              expression: "registration.form.mom.mobileNumber"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.registration.isNew
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "password",
                                  type: _vm.show_password ? "text" : "password",
                                  "append-icon": _vm.show_password
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
                                    _vm.show_password = !_vm.show_password
                                  }
                                },
                                model: {
                                  value: _vm.registration.form.password,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.registration.form,
                                      "password",
                                      $$v
                                    )
                                  },
                                  expression: "registration.form.password"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.registration.isNew
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "password",
                                  type: _vm.show_password ? "text" : "password",
                                  "append-icon": _vm.show_password
                                    ? "mdi-eye"
                                    : "mdi-eye-off",
                                  rules: [
                                    function(v) {
                                      return (
                                        (v &&
                                          v ===
                                            _vm.registration.form.password) ||
                                        "Password not matched!"
                                      )
                                    }
                                  ]
                                },
                                on: {
                                  "click:append": function($event) {
                                    _vm.show_password = !_vm.show_password
                                  }
                                },
                                model: {
                                  value: _vm.registration.form.confirm_password,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.registration.form,
                                      "confirm_password",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "registration.form.confirm_password"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("p", { staticClass: "text-h5 font-weight-bold" }, [
                    _vm._v("Dad Information")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { align: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "First Name",
                              rules: [
                                function(v) {
                                  return !!v || "First name is required"
                                }
                              ],
                              suffix: "*"
                            },
                            model: {
                              value: _vm.registration.form.dad.firstName,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.dad,
                                  "firstName",
                                  $$v
                                )
                              },
                              expression: "registration.form.dad.firstName"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Family Name",
                              rules: [
                                function(v) {
                                  return !!v || "Family name is required"
                                }
                              ],
                              suffix: "*"
                            },
                            model: {
                              value: _vm.registration.form.dad.familyName,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.dad,
                                  "familyName",
                                  $$v
                                )
                              },
                              expression: "registration.form.dad.familyName"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Email Address",
                              rules: [
                                function(v) {
                                  return (
                                    /.+@.+/.test(v) || "Incorrect email address"
                                  )
                                }
                              ],
                              suffix: "*"
                            },
                            model: {
                              value: _vm.registration.form.dad.emailAddress,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.dad,
                                  "emailAddress",
                                  $$v
                                )
                              },
                              expression: "registration.form.dad.emailAddress"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Mobile Number",
                              type: "number",
                              rules: [
                                function(v) {
                                  return !!v || "Mobile number is required"
                                },
                                function(v) {
                                  return (
                                    (v.length > 8 && v.length < 10) ||
                                    "enter valid number"
                                  )
                                }
                              ],
                              suffix: "*",
                              hint: "example: 565123456",
                              "persistent-hint": ""
                            },
                            model: {
                              value: _vm.registration.form.dad.mobileNumber,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.dad,
                                  "mobileNumber",
                                  $$v
                                )
                              },
                              expression: "registration.form.dad.mobileNumber"
                            }
                          })
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
            2
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("h3", [
                _vm._v(
                  "\n                I agree to fulfil the obligations set forth to StepUp Academy and will ensure all school terms in which I/my child attends are accounted for\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-checkbox", {
                        staticClass: "my-0",
                        scopedSlots: _vm._u([
                          {
                            key: "label",
                            fn: function() {
                              return [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "text-none",
                                    attrs: { text: "" },
                                    on: { click: _vm.termsAndCondition }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        Terms & Conditions\n                    "
                                    )
                                  ]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ]),
                        model: {
                          value: _vm.registration.classTermsAndConditions,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.registration,
                              "classTermsAndConditions",
                              $$v
                            )
                          },
                          expression: "registration.classTermsAndConditions"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-checkbox", {
                        staticClass: "my-0",
                        scopedSlots: _vm._u([
                          {
                            key: "label",
                            fn: function() {
                              return [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "text-none",
                                    attrs: { text: "" },
                                    on: { click: _vm.covid }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        Covid-19\n                    "
                                    )
                                  ]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ]),
                        model: {
                          value: _vm.registration.waiver,
                          callback: function($$v) {
                            _vm.$set(_vm.registration, "waiver", $$v)
                          },
                          expression: "registration.waiver"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("termsAndConditions"),
          _vm._v(" "),
          _c("waiver"),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c(
                "v-btn",
                {
                  staticClass: "text-none primary",
                  attrs: {
                    disabled:
                      !_vm.valid ||
                      !_vm.registration.classTermsAndConditions ||
                      !_vm.registration.waiver
                  },
                  on: { click: _vm.submitForm }
                },
                [_vm._v("\n                Submit\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "" },
                  on: {
                    click: function($event) {
                      return _vm.nextStepper(1)
                    }
                  }
                },
                [_vm._v("\n                Back\n            ")]
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