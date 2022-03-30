"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SAMS_parents_form_details_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/details.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/details.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "parentsFormParent",
  data: function data() {
    return {
      error: null
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["STEPPER", "SAMS_LOADING"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["REGISTRATION_FORM"])), {}, {
    submit: function submit() {
      var _this = this;

      this.SAMS_LOADING(true);
      var form = {
        form: this.sams.form,
        email: this.sams.form.mom.emailAddress,
        password: this.sams.form.password
      };
      this.REGISTRATION_FORM(form).then(function (result) {
        _this.$router.push({
          name: 'Parents'
        });

        _this.STEPPER(1);

        _this.SAMS_LOADING(false);
      })["catch"](function (err) {
        _this.SAMS_LOADING(false);

        _this.error = err.response.data.errors.email;
        setTimeout(function () {
          _this.error = null;
        }, 5000);
      });
    },
    nextStepper: function nextStepper(e) {
      this.STEPPER(e);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["sams"]))
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/details.vue?vue&type=style&index=0&id=5645423d&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/details.vue?vue&type=style&index=0&id=5645423d&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/details.vue?vue&type=style&index=0&id=5645423d&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/details.vue?vue&type=style&index=0&id=5645423d&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_5645423d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./details.vue?vue&type=style&index=0&id=5645423d&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/details.vue?vue&type=style&index=0&id=5645423d&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_5645423d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_5645423d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/SAMS/parents/form/details.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/SAMS/parents/form/details.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _details_vue_vue_type_template_id_5645423d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.vue?vue&type=template&id=5645423d&scoped=true& */ "./resources/js/components/SAMS/parents/form/details.vue?vue&type=template&id=5645423d&scoped=true&");
/* harmony import */ var _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.vue?vue&type=script&lang=js& */ "./resources/js/components/SAMS/parents/form/details.vue?vue&type=script&lang=js&");
/* harmony import */ var _details_vue_vue_type_style_index_0_id_5645423d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.vue?vue&type=style&index=0&id=5645423d&lang=scss&scoped=true& */ "./resources/js/components/SAMS/parents/form/details.vue?vue&type=style&index=0&id=5645423d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _details_vue_vue_type_template_id_5645423d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _details_vue_vue_type_template_id_5645423d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5645423d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SAMS/parents/form/details.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SAMS/parents/form/details.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/SAMS/parents/form/details.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/details.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SAMS/parents/form/details.vue?vue&type=style&index=0&id=5645423d&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/SAMS/parents/form/details.vue?vue&type=style&index=0&id=5645423d&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_5645423d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./details.vue?vue&type=style&index=0&id=5645423d&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/details.vue?vue&type=style&index=0&id=5645423d&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/SAMS/parents/form/details.vue?vue&type=template&id=5645423d&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/SAMS/parents/form/details.vue?vue&type=template&id=5645423d&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_5645423d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_5645423d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_5645423d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./details.vue?vue&type=template&id=5645423d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/details.vue?vue&type=template&id=5645423d&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/details.vue?vue&type=template&id=5645423d&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/details.vue?vue&type=template&id=5645423d&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { flat: "" } },
        [
          _c("p", { staticClass: "text-h4 text-center" }, [
            _vm._v(
              "\n            Please check the child you want to enroll\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "v-alert",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.error,
                  expression: "error"
                }
              ],
              attrs: { type: "error" }
            },
            [
              _vm._l(_vm.error, function(err) {
                return [
                  _c("div", { key: err }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(err) +
                        "\n                "
                    )
                  ])
                ]
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm._l(_vm.sams.form.children, function(child, index) {
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
                  [
                    _c("v-col", { attrs: { cols: "12" } }, [
                      _vm._v("\n                    Name: "),
                      _c(
                        "span",
                        { staticClass: "text-subtitle-1 font-weight-bold" },
                        [
                          _vm._v(
                            _vm._s(child.firstName) +
                              " " +
                              _vm._s(child.familyName)
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                      _vm._v("\n                    Gender: "),
                      _c(
                        "span",
                        { staticClass: "text-subtitle-1 font-weight-bold" },
                        [_vm._v(_vm._s(child.gender))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                      _vm._v("\n                    Date of Birth: "),
                      _c(
                        "span",
                        { staticClass: "text-subtitle-1 font-weight-bold" },
                        [_vm._v(_vm._s(_vm._f("date")(child.dateOfBirth)))]
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("p", { staticClass: "text-h5 font-weight-bold" }, [
                _vm._v("Mom's Information")
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _vm._v("\n                    Name: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [
                        _vm._v(
                          _vm._s(_vm.sams.form.mom.firstName) +
                            " " +
                            _vm._s(_vm.sams.form.mom.familyName)
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                    _vm._v("\n                    Email Address: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.sams.form.mom.emailAddress))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                    _vm._v("\n                    Nationality: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.sams.form.mom.nationality))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                    _vm._v("\n                    Mobile Number: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.sams.form.mom.mobileNumber))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                    _vm._v("\n                    Home Number: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.sams.form.mom.homeNumber))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                    _vm._v("\n                    Work Number: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.sams.form.mom.workNumber))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _vm._v("\n                    Company: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.sams.form.mom.company))]
                    )
                  ])
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
                _vm._v("Dad's Information")
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _vm._v("\n                    Name: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [
                        _vm._v(
                          _vm._s(_vm.sams.form.dad.firstName) +
                            " " +
                            _vm._s(_vm.sams.form.dad.familyName)
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                    _vm._v("\n                    Email Address: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.sams.form.dad.emailAddress))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                    _vm._v("\n                    Nationality: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.sams.form.dad.nationality))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                    _vm._v("\n                    Mobile Number: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.sams.form.dad.mobileNumber))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                    _vm._v("\n                    Home Number: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.sams.form.dad.homeNumber))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                    _vm._v("\n                    Work Number: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.sams.form.dad.workNumber))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _vm._v("\n                    Company: "),
                    _c(
                      "span",
                      { staticClass: "text-subtitle-1 font-weight-bold" },
                      [_vm._v(_vm._s(_vm.sams.form.dad.company))]
                    )
                  ])
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
        "v-btn",
        {
          attrs: { color: "primary", loading: _vm.sams.loading },
          on: { click: _vm.submit }
        },
        [_vm._v("\n        Submit\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: { text: "" },
          on: {
            click: function($event) {
              return _vm.nextStepper(3)
            }
          }
        },
        [_vm._v("\n        Back\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);