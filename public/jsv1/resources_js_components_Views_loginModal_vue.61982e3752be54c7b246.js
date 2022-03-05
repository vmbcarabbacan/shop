"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Views_loginModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/loginModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/loginModal.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "login",
  data: function data() {
    return {
      show_password: false,
      valid: false,
      status: "Verify"
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["LOGIN_OPEN", "LOGIN_ERROR", "LOGIN_FORM", "LOGIN_LOADING", "REGISTRATION_FORM"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["REGISTRATION_VERIFY_EMAIL", "LOGIN", "CART_UPDATE_USER"])), {}, {
    changeEmail: function changeEmail() {
      this.status = "Verify";
    },
    signIn: function signIn() {
      this.LOGIN_LOADING(true);
      this.LOGIN_ERROR(null);

      switch (this.status) {
        case "Verify":
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
        _this.LOGIN_ERROR("Email not found");

        _this.LOGIN_LOADING(false);
      });
    },
    tryLogin: function tryLogin() {
      var _this2 = this;

      var login = {
        email: this.login.form.emailAddress,
        password: this.login.form.password
      };
      this.LOGIN(login).then(function (result) {
        _this2.$router.push('/');

        var cart = {
          user_id: result.data.user.id,
          carts: _this2.cart.carts,
          wishlist: _this2.cart.wishlist
        };

        _this2.CART_UPDATE_USER(cart);

        _this2.LOGIN_LOADING(false);
      })["catch"](function (err) {
        _this2.LOGIN_LOADING(false);
      });
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["login", "registration"])),
  metaInfo: function metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Login",
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
        content: "StepUp Academy shop login landing page"
      }, {
        name: "keywords",
        content: "StepUp, StepUp Academy, step up " + "Login"
      }, // OpenGraph data (Most widely used)
      {
        property: "og:title",
        content: "Login"
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
        content: "StepUp Academy shop login landing page"
      }, // Twitter card
      {
        name: "twitter:card",
        content: "summary"
      }, {
        name: "twitter:site",
        content: "http://localhost:3000/image/stepUpAcademy.svg"
      }, {
        name: "twitter:title",
        content: "Login"
      }, {
        name: "twitter:description",
        content: "StepUp Academy shop login landing page"
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
        content: "Login"
      }, {
        itemprop: "description",
        content: "StepUp Academy shop login landing page"
      }, {
        itemprop: "image",
        content: "http://localhost:3000/image/stepUpAcademy.svg"
      }],
      link: [{
        rel: 'canonical',
        href: "http://localhost:3000/login"
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/components/Views/loginModal.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Views/loginModal.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loginModal_vue_vue_type_template_id_0fe062f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginModal.vue?vue&type=template&id=0fe062f0& */ "./resources/js/components/Views/loginModal.vue?vue&type=template&id=0fe062f0&");
/* harmony import */ var _loginModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginModal.vue?vue&type=script&lang=js& */ "./resources/js/components/Views/loginModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _loginModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loginModal_vue_vue_type_template_id_0fe062f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _loginModal_vue_vue_type_template_id_0fe062f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Views/loginModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Views/loginModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Views/loginModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loginModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/loginModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Views/loginModal.vue?vue&type=template&id=0fe062f0&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Views/loginModal.vue?vue&type=template&id=0fe062f0& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loginModal_vue_vue_type_template_id_0fe062f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loginModal_vue_vue_type_template_id_0fe062f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loginModal_vue_vue_type_template_id_0fe062f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loginModal.vue?vue&type=template&id=0fe062f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/loginModal.vue?vue&type=template&id=0fe062f0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/loginModal.vue?vue&type=template&id=0fe062f0&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Views/loginModal.vue?vue&type=template&id=0fe062f0& ***!
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
            { attrs: { cols: "12", md: "6" } },
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
                        {
                          attrs: { dense: "", color: "blue darken-2", dark: "" }
                        },
                        [
                          _c("v-toolbar-title", [
                            _vm._v(
                              "\n                            Sign in\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.status == "Verify"
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
                                    "\n                            " +
                                      _vm._s(_vm.login.error) +
                                      "\n                        "
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
                                        /.+@.+/.test(v) ||
                                        "Incorrect email address"
                                      )
                                    }
                                  ]
                                },
                                model: {
                                  value: _vm.login.form.emailAddress,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.login.form,
                                      "emailAddress",
                                      $$v
                                    )
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
                                    "\n                            Create new account?\n                        "
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
                                    "\n                            " +
                                      _vm._s(_vm.login.error) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.login.form.emailAddress) +
                                      "\n                            "
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
                                        "\n                            Change email address?\n                            "
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
                                "\n                        " +
                                  _vm._s(_vm.status) +
                                  "\n                    "
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