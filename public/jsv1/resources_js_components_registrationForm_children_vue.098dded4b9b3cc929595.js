"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_registrationForm_children_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/registrationForm/children.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/registrationForm/children.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "registrationFormChildren",
  data: function data() {
    return {
      gender: ["Female", "Male"],
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
    },
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
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["registration"]))
});

/***/ }),

/***/ "./resources/js/components/registrationForm/children.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/registrationForm/children.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _children_vue_vue_type_template_id_8390eb14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./children.vue?vue&type=template&id=8390eb14& */ "./resources/js/components/registrationForm/children.vue?vue&type=template&id=8390eb14&");
/* harmony import */ var _children_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./children.vue?vue&type=script&lang=js& */ "./resources/js/components/registrationForm/children.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _children_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _children_vue_vue_type_template_id_8390eb14___WEBPACK_IMPORTED_MODULE_0__.render,
  _children_vue_vue_type_template_id_8390eb14___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/registrationForm/children.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/registrationForm/children.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/registrationForm/children.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_children_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./children.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/registrationForm/children.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_children_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/registrationForm/children.vue?vue&type=template&id=8390eb14&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/registrationForm/children.vue?vue&type=template&id=8390eb14& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_children_vue_vue_type_template_id_8390eb14___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_children_vue_vue_type_template_id_8390eb14___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_children_vue_vue_type_template_id_8390eb14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./children.vue?vue&type=template&id=8390eb14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/registrationForm/children.vue?vue&type=template&id=8390eb14&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/registrationForm/children.vue?vue&type=template&id=8390eb14&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/registrationForm/children.vue?vue&type=template&id=8390eb14& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
              _vm._l(_vm.registration.form.children, function(child, index) {
                return _c(
                  "v-card-text",
                  { key: index },
                  [
                    _c("p", { staticClass: "text-h5 font-weight-bold" }, [
                      _vm._v("Child " + _vm._s(index + 1))
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
                                rules: _vm.specialRules,
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
              )
            ],
            2
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
              attrs: { color: "primary", disabled: !_vm.valid },
              on: {
                click: function($event) {
                  return _vm.nextStepper(4)
                }
              }
            },
            [_vm._v("\n            Continue\n        ")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { text: "" },
              on: {
                click: function($event) {
                  return _vm.nextStepper(2)
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