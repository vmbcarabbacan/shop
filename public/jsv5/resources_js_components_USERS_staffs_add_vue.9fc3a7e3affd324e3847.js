"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_USERS_staffs_add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/USERS/staffs/add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/USERS/staffs/add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'authUserAdd',
  created: function created() {
    this.SAMS_FORM(this.myDatas);
  },
  data: function data() {
    return {
      show_password: false,
      valid: false,
      message: null,
      error: null,
      roles: ['Reception', 'Manager', 'Teacher', 'Accounts', 'Others']
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["SAMS_FORM", "SAMS_LOADING"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["REGISTRATION_FORM"])), {}, {
    save: function save() {
      var _this = this;

      var data = {
        form: this.sams.form,
        email: this.sams.form.mom.emailAddress,
        password: this.sams.form.password
      };
      this.SAMS_LOADING(true);
      this.REGISTRATION_FORM(data).then(function (result) {
        _this.message = 'Staff successfully save!';
        _this.error = null;
        setTimeout(function () {
          _this.SAMS_LOADING(false);

          _this.$router.push({
            name: 'Staffs'
          });

          _this.SAMS_FORM(_this.myDatas);

          _this.message = null;
        }, 3000);
      })["catch"](function (err) {
        _this.SAMS_LOADING(false);

        _this.message = null;
        _this.error = 'Email address was alrady used';
        setTimeout(function () {
          _this.error = null;
        }, 3000);
      });
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["sams"])), {}, {
    myDatas: function myDatas() {
      return {
        id: 0,
        location: "motor city",
        children: [{
          id: 0,
          firstName: null,
          familyName: null,
          gender: "Female",
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
          emailAddress: null
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
        role: "Teacher",
        password: null,
        confirm_password: null
      };
    }
  })
});

/***/ }),

/***/ "./resources/js/components/USERS/staffs/add.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/USERS/staffs/add.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_vue_vue_type_template_id_762cde12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=762cde12& */ "./resources/js/components/USERS/staffs/add.vue?vue&type=template&id=762cde12&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/USERS/staffs/add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_762cde12___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_vue_vue_type_template_id_762cde12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/USERS/staffs/add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/USERS/staffs/add.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/USERS/staffs/add.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/USERS/staffs/add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/USERS/staffs/add.vue?vue&type=template&id=762cde12&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/USERS/staffs/add.vue?vue&type=template&id=762cde12& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_762cde12___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_762cde12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_762cde12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add.vue?vue&type=template&id=762cde12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/USERS/staffs/add.vue?vue&type=template&id=762cde12&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/USERS/staffs/add.vue?vue&type=template&id=762cde12&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/USERS/staffs/add.vue?vue&type=template&id=762cde12& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
            { attrs: { cols: "12", md: "8" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    [
                      _vm._v(
                        "\n                    Add New Staff\n                    "
                      ),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: { items: _vm.roles, label: "Role" },
                        model: {
                          value: _vm.sams.form.role,
                          callback: function($$v) {
                            _vm.$set(_vm.sams.form, "role", $$v)
                          },
                          expression: "sams.form.role"
                        }
                      })
                    ],
                    1
                  ),
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
                          _c(
                            "v-alert",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.message,
                                  expression: "message"
                                }
                              ],
                              attrs: { type: "success" }
                            },
                            [_vm._v(_vm._s(_vm.message))]
                          ),
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
                            [_vm._v(_vm._s(_vm.error))]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
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
                                      ]
                                    },
                                    model: {
                                      value: _vm.sams.form.mom.firstName,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.sams.form.mom,
                                          "firstName",
                                          $$v
                                        )
                                      },
                                      expression: "sams.form.mom.firstName"
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
                                          return (
                                            !!v || "Family name is required"
                                          )
                                        }
                                      ]
                                    },
                                    model: {
                                      value: _vm.sams.form.mom.familyName,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.sams.form.mom,
                                          "familyName",
                                          $$v
                                        )
                                      },
                                      expression: "sams.form.mom.familyName"
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
                                            !!v || "Email address is required"
                                          )
                                        }
                                      ]
                                    },
                                    model: {
                                      value: _vm.sams.form.mom.emailAddress,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.sams.form.mom,
                                          "emailAddress",
                                          $$v
                                        )
                                      },
                                      expression: "sams.form.mom.emailAddress"
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
                                      label: "Contact Number",
                                      type: "number",
                                      rules: [
                                        function(v) {
                                          return (
                                            !!v || "Contact number is required"
                                          )
                                        },
                                        function(v) {
                                          return (
                                            (v.length > 8 && v.length < 10) ||
                                            "enter valid number"
                                          )
                                        }
                                      ],
                                      hint: "example: 565123456",
                                      "persistent-hint": ""
                                    },
                                    model: {
                                      value: _vm.sams.form.mom.mobileNumber,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.sams.form.mom,
                                          "mobileNumber",
                                          $$v
                                        )
                                      },
                                      expression: "sams.form.mom.mobileNumber"
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
                                      type: _vm.show_password
                                        ? "text"
                                        : "password",
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
                                      type: _vm.show_password
                                        ? "text"
                                        : "password",
                                      "append-icon": _vm.show_password
                                        ? "mdi-eye"
                                        : "mdi-eye-off",
                                      rules: [
                                        function(v) {
                                          return (
                                            (v &&
                                              v === _vm.sams.form.password) ||
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
                                        _vm.$set(
                                          _vm.sams.form,
                                          "confirm_password",
                                          $$v
                                        )
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
                        ],
                        1
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
                                loading: _vm.sams.loading,
                                disabled: !_vm.valid
                              },
                              on: { click: _vm.save }
                            },
                            [
                              _vm._v(
                                "\n                            Save\n                        "
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