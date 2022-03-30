"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "login",
  data: function data() {
    return {
      show_password: false,
      valid: false,
      status: "Next"
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["LOGIN_OPEN", "LOGIN_ERROR", "LOGIN_FORM", "LOGIN_LOADING", "REGISTRATION_FORM"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["REGISTRATION_VERIFY_EMAIL", "LOGIN", "CART_UPDATE_USER"])), {}, {
    changeEmail: function changeEmail() {
      this.status = "Next";
    },
    signIn: function signIn() {
      this.LOGIN_LOADING(true);
      this.LOGIN_ERROR(null);

      switch (this.status) {
        case "Next":
          this.verify();
          break;

        case "Login":
          this.tryLogin();
          break;

        default:
          break;
      }
    },
    createNewAccount: function createNewAccount() {
      var email = {
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
          emailAddress: this.login.form.emailAddress
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
        password: null,
        confirm_password: null
      };
      this.REGISTRATION_FORM(email);
      this.$router.push({
        name: "Registration"
      });
      this.close();
    },
    verify: function verify() {
      var _this = this;

      var email = {
        email: this.login.form.emailAddress
      };
      this.REGISTRATION_VERIFY_EMAIL(email).then(function (result) {
        _this.status = "Login";

        _this.LOGIN_LOADING(false);
      })["catch"](function (err) {
        _this.LOGIN_LOADING(false);

        _this.LOGIN_ERROR("Email not found");
      });
    },
    tryLogin: function tryLogin() {
      var _this2 = this;

      var login = {
        email: this.login.form.emailAddress,
        password: this.login.form.password
      };
      this.LOGIN(login).then(function (result) {
        var cart = {
          user_id: result.data.user.id,
          carts: _this2.cart.carts,
          wishlist: _this2.cart.wishlist
        };

        _this2.CART_UPDATE_USER(cart);

        if (_this2.cart.isProceed) {
          _this2.$router.push({
            name: 'Checkout'
          });
        }

        _this2.LOGIN_LOADING(false);

        _this2.close();
      })["catch"](function (err) {
        // this.close();
        _this2.LOGIN_LOADING(false);
      });
    },
    close: function close() {
      var form = {
        email: null,
        password: null
      };
      this.LOGIN_FORM(form);
      this.LOGIN_ERROR(null);
      this.LOGIN_OPEN(false);
      this.status = "Next";
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["login", "registration", "cart"]))
});

/***/ }),

/***/ "./resources/js/components/login.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_172b28a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=172b28a4& */ "./resources/js/components/login.vue?vue&type=template&id=172b28a4&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_172b28a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_172b28a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/login.vue?vue&type=template&id=172b28a4&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/login.vue?vue&type=template&id=172b28a4& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_172b28a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_172b28a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_172b28a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=172b28a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login.vue?vue&type=template&id=172b28a4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login.vue?vue&type=template&id=172b28a4&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login.vue?vue&type=template&id=172b28a4& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { width: "400" },
      on: { "click:outside": _vm.close },
      model: {
        value: _vm.login.open,
        callback: function($$v) {
          _vm.$set(_vm.login, "open", $$v)
        },
        expression: "login.open"
      }
    },
    [
      _c(
        "v-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.signIn.apply(null, arguments)
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
            { attrs: { loading: _vm.login.loading } },
            [
              _c(
                "v-toolbar",
                { attrs: { dense: "", color: "blue darken-2", dark: "" } },
                [
                  _c("v-toolbar-title", [
                    _vm._v("\n                    Sign in\n                ")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm.status == "Next"
                ? _c(
                    "v-card-text",
                    [
                      _c(
                        "v-alert",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.login.error,
                              expression: "login.error"
                            }
                          ],
                          staticClass: "mb-5",
                          attrs: { value: true, color: "error" }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.login.error) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          label: "Email Address",
                          rules: [
                            function(v) {
                              return (
                                /.+@.+/.test(v) || "Incorrect email address"
                              )
                            }
                          ]
                        },
                        model: {
                          value: _vm.login.form.emailAddress,
                          callback: function($$v) {
                            _vm.$set(_vm.login.form, "emailAddress", $$v)
                          },
                          expression: "login.form.emailAddress"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.login.error,
                              expression: "login.error"
                            }
                          ],
                          staticClass: "text-none",
                          attrs: { text: "" },
                          on: { click: _vm.createNewAccount }
                        },
                        [
                          _vm._v(
                            "\n                    Create new account?\n                "
                          )
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.status == "Login"
                ? _c(
                    "v-card-text",
                    [
                      _c(
                        "v-alert",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.login.error,
                              expression: "login.error"
                            }
                          ],
                          staticClass: "mb-5",
                          attrs: { value: true, color: "error" }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.login.error) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.login.form.emailAddress) +
                              "\n                    "
                          ),
                          _c(
                            "v-btn",
                            {
                              staticClass: "text-none",
                              attrs: { text: "" },
                              on: { click: _vm.changeEmail }
                            },
                            [
                              _vm._v(
                                "\n                    Change email address?\n                    "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          label: "password",
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
                          ],
                          "append-icon": _vm.show_password
                            ? "mdi-eye"
                            : "mdi-eye-off",
                          type: _vm.show_password ? "text" : "password"
                        },
                        on: {
                          "click:append": function($event) {
                            _vm.show_password = !_vm.show_password
                          }
                        },
                        model: {
                          value: _vm.login.form.password,
                          callback: function($$v) {
                            _vm.$set(_vm.login.form, "password", $$v)
                          },
                          expression: "login.form.password"
                        }
                      }),
                      _vm._v(" "),
                      _c("a", { attrs: { href: "/reset-password" } }, [
                        _vm._v(" Reset Password ")
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "primary text-none",
                      attrs: {
                        type: "submit",
                        loading: _vm.login.loading,
                        disabled: !_vm.valid
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.status) +
                          "\n            "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);