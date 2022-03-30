"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_registrationForm_parent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/registrationForm/parent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/registrationForm/parent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "registrationFormParent",
  data: function data() {
    return {
      valid: false,
      specialRules: [function (v) {
        return !!v || 'Name is required';
      }, function (v) {
        return /^[A-Za-z ]+$/.test(v) || 'Please enter character a-z only';
      }]
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["STEPPER", "REGISTRATION_FORM"])), {}, {
    nextStepper: function nextStepper(e) {
      this.STEPPER(e);
      this.REGISTRATION_FORM(this.registration.form);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["registration"]))
});

/***/ }),

/***/ "./resources/js/components/registrationForm/parent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/registrationForm/parent.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _parent_vue_vue_type_template_id_7d1fb361___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parent.vue?vue&type=template&id=7d1fb361& */ "./resources/js/components/registrationForm/parent.vue?vue&type=template&id=7d1fb361&");
/* harmony import */ var _parent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent.vue?vue&type=script&lang=js& */ "./resources/js/components/registrationForm/parent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _parent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _parent_vue_vue_type_template_id_7d1fb361___WEBPACK_IMPORTED_MODULE_0__.render,
  _parent_vue_vue_type_template_id_7d1fb361___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/registrationForm/parent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/registrationForm/parent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/registrationForm/parent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_parent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./parent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/registrationForm/parent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_parent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/registrationForm/parent.vue?vue&type=template&id=7d1fb361&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/registrationForm/parent.vue?vue&type=template&id=7d1fb361& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_parent_vue_vue_type_template_id_7d1fb361___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_parent_vue_vue_type_template_id_7d1fb361___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_parent_vue_vue_type_template_id_7d1fb361___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./parent.vue?vue&type=template&id=7d1fb361& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/registrationForm/parent.vue?vue&type=template&id=7d1fb361&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/registrationForm/parent.vue?vue&type=template&id=7d1fb361&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/registrationForm/parent.vue?vue&type=template&id=7d1fb361& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
          _c("v-card-text", [
            _c("p", { staticClass: "text-h4 text-center font-weight-bold" }, [
              _vm._v(
                "Please enter character A-Z only; no special character like (á, é, í, ò, ù, ', \", \\, /, etc...) "
              )
            ])
          ]),
          _vm._v(" "),
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
                              rules: _vm.specialRules,
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
                              rules: _vm.specialRules,
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
                            attrs: { label: "Nationality" },
                            model: {
                              value: _vm.registration.form.mom.nationality,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.mom,
                                  "nationality",
                                  $$v
                                )
                              },
                              expression: "registration.form.mom.nationality"
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
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Home Number",
                              type: "number",
                              hint: "example: 565123456",
                              "persistent-hint": ""
                            },
                            model: {
                              value: _vm.registration.form.mom.homeNumber,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.mom,
                                  "homeNumber",
                                  $$v
                                )
                              },
                              expression: "registration.form.mom.homeNumber"
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
                              label: "Work Number",
                              type: "number",
                              hint: "example: 565123456",
                              "persistent-hint": ""
                            },
                            model: {
                              value: _vm.registration.form.mom.workNumber,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.mom,
                                  "workNumber",
                                  _vm._n($$v)
                                )
                              },
                              expression: "registration.form.mom.workNumber"
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
                            attrs: { label: "Company" },
                            model: {
                              value: _vm.registration.form.mom.company,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.mom,
                                  "company",
                                  $$v
                                )
                              },
                              expression: "registration.form.mom.company"
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
                              rules: _vm.specialRules,
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
                              rules: _vm.specialRules,
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
                            attrs: { label: "Nationality" },
                            model: {
                              value: _vm.registration.form.dad.nationality,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.dad,
                                  "nationality",
                                  $$v
                                )
                              },
                              expression: "registration.form.dad.nationality"
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Home Number",
                              type: "number",
                              hint: "example: 565123456",
                              "persistent-hint": ""
                            },
                            model: {
                              value: _vm.registration.form.dad.homeNumber,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.dad,
                                  "homeNumber",
                                  _vm._n($$v)
                                )
                              },
                              expression: "registration.form.dad.homeNumber"
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
                              label: "Work Number",
                              type: "number",
                              hint: "example: 565123456",
                              "persistent-hint": ""
                            },
                            model: {
                              value: _vm.registration.form.dad.workNumber,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.dad,
                                  "workNumber",
                                  _vm._n($$v)
                                )
                              },
                              expression: "registration.form.dad.workNumber"
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
                            attrs: { label: "Company" },
                            model: {
                              value: _vm.registration.form.dad.company,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.registration.form.dad,
                                  "company",
                                  $$v
                                )
                              },
                              expression: "registration.form.dad.company"
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-6" },
        [
          _c(
            "v-btn",
            {
              staticClass: "text-none",
              attrs: { color: "primary", disabled: !_vm.valid },
              on: {
                click: function($event) {
                  return _vm.nextStepper(5)
                }
              }
            },
            [_vm._v("\n            View Details\n        ")]
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
            [_vm._v("\n            Back\n        ")]
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