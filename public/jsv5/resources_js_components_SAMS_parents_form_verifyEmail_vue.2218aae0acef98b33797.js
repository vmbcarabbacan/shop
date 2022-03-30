"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SAMS_parents_form_verifyEmail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/verifyEmail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/verifyEmail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'parentsFormLocation',
  data: function data() {
    return {
      valid: false,
      show_password: false,
      loading: false
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["STEPPER", "SAMS_FORM", "SAMS_ERROR"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["SAMS_VERIFY_EMAIL"])), {}, {
    validate_email: function validate_email() {
      var _this = this;

      this.loading = true;
      var email = {
        email: this.sams.form.mom.emailAddress
      };
      this.SAMS_VERIFY_EMAIL(email).then(function (result) {
        _this.loading = false;

        if (_this.sams.isNew && _this.valid) {
          _this.SAMS_ERROR(null);

          _this.STEPPER(2);
        }

        if (!_this.sams.isNew) {
          _this.STEPPER(2);
        }
      })["catch"](function (err) {
        _this.loading = false;
        var form = {
          id: 0,
          location: "motor city",
          children: [{
            id: 0,
            firstName: null,
            familyName: null,
            gender: "Female",
            nationality: null,
            dateOfBirth: null,
            dob_open: false,
            isSelected: true
          }],
          mom: {
            firstName: null,
            familyName: null,
            nationality: null,
            mobileNumber: null,
            homeNumber: null,
            workNumber: null,
            company: null,
            emailAddress: _this.sams.form.mom.emailAddress
          },
          dad: {
            firstName: null,
            familyName: null,
            nationality: null,
            mobileNumber: null,
            homeNumber: null,
            workNumber: null,
            company: null,
            emailAddress: null
          },
          address: {
            id: 0,
            address_1: null,
            area: null,
            building: null,
            city: 'Dubai',
            country: 'AE',
            street: null,
            zip: '00000'
          },
          role: "User",
          password: _this.sams.form.password,
          confirm_password: _this.sams.form.confirm_password
        };
        !_this.valid ? _this.SAMS_FORM(form) : _this.STEPPER(2);
      });
    },
    nextStepper: function nextStepper() {
      this.SAMS_FORM(this.sams.form);
      this.validate_email();
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["sams"]))
});

/***/ }),

/***/ "./resources/js/components/SAMS/parents/form/verifyEmail.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/SAMS/parents/form/verifyEmail.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _verifyEmail_vue_vue_type_template_id_2d6b849e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verifyEmail.vue?vue&type=template&id=2d6b849e& */ "./resources/js/components/SAMS/parents/form/verifyEmail.vue?vue&type=template&id=2d6b849e&");
/* harmony import */ var _verifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifyEmail.vue?vue&type=script&lang=js& */ "./resources/js/components/SAMS/parents/form/verifyEmail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _verifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _verifyEmail_vue_vue_type_template_id_2d6b849e___WEBPACK_IMPORTED_MODULE_0__.render,
  _verifyEmail_vue_vue_type_template_id_2d6b849e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SAMS/parents/form/verifyEmail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SAMS/parents/form/verifyEmail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/SAMS/parents/form/verifyEmail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./verifyEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/verifyEmail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SAMS/parents/form/verifyEmail.vue?vue&type=template&id=2d6b849e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/SAMS/parents/form/verifyEmail.vue?vue&type=template&id=2d6b849e& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verifyEmail_vue_vue_type_template_id_2d6b849e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verifyEmail_vue_vue_type_template_id_2d6b849e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verifyEmail_vue_vue_type_template_id_2d6b849e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./verifyEmail.vue?vue&type=template&id=2d6b849e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/verifyEmail.vue?vue&type=template&id=2d6b849e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/verifyEmail.vue?vue&type=template&id=2d6b849e&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SAMS/parents/form/verifyEmail.vue?vue&type=template&id=2d6b849e& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        "v-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.nextStepper.apply(null, arguments)
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
            { attrs: { flat: "" } },
            [
              _c(
                "v-alert",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.sams.error,
                      expression: "sams.error"
                    }
                  ],
                  attrs: { border: "top", color: "red lighten-2", dark: "" }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.sams.error) +
                      "\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  label: "Email Address",
                  rules: [
                    function(v) {
                      return /.+@.+/.test(v) || "Incorrect email address"
                    }
                  ]
                },
                model: {
                  value: _vm.sams.form.mom.emailAddress,
                  callback: function($$v) {
                    _vm.$set(_vm.sams.form.mom, "emailAddress", $$v)
                  },
                  expression: "sams.form.mom.emailAddress"
                }
              }),
              _vm._v(" "),
              _vm.sams.isNew
                ? _c(
                    "v-row",
                    [
                      _c(
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
                              value: _vm.sams.form.password,
                              callback: function($$v) {
                                _vm.$set(_vm.sams.form, "password", $$v)
                              },
                              expression: "sams.form.password"
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
                              label: "password",
                              type: _vm.show_password ? "text" : "password",
                              "append-icon": _vm.show_password
                                ? "mdi-eye"
                                : "mdi-eye-off",
                              rules: [
                                function(v) {
                                  return (
                                    (v && v === _vm.sams.form.password) ||
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
                              value: _vm.sams.form.confirm_password,
                              callback: function($$v) {
                                _vm.$set(_vm.sams.form, "confirm_password", $$v)
                              },
                              expression: "sams.form.confirm_password"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "text-none",
              attrs: { color: "primary", type: "submit", loading: _vm.loading }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(
                    _vm.sams.isNew && _vm.valid ? "Continue" : "Verify Email"
                  ) +
                  "\n        "
              )
            ]
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